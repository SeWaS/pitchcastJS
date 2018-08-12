import * as Joi from 'joi'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

export interface EnvConfig {
    [prop: string]: string
}

export class ConfigService {

    private readonly envConfig: EnvConfig

    constructor(envName: string) {
        const environment = envName === 'undefined' ? 'development' : envName
        const config = dotenv.parse(this.findFile(environment))
        this.envConfig = this.validateInput(config)
    }

    findFile(environment: string): Buffer {
        return fs.readFileSync(`${environment}.env`)
    }

    private validateInput(config: EnvConfig): EnvConfig {
        const envVarSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid(['production', 'test', 'development'])
                .default('development'),

            APP_PORT: Joi.number().default(4000)
        })

        const { error, value: validatedEnvConfig } = Joi.validate(
            config,
            envVarSchema
          )

        if (error) {
            throw new Error(`Config validation Error: ${error}`)
        }

        return validatedEnvConfig
    }

    get nodeEnv(): string {
        return String(this.envConfig.NODE_ENV)
    }

    get port(): number {
        return Number(this.envConfig.APP_PORT)
    }

}
