import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './modules/app.module'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import envConfig from './modules/config/config.env'

const instance: express.Express = express()
instance.use(bodyParser.json())

const { port }  = envConfig

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(ApplicationModule, instance)

    await app.listen(port)
}

bootstrap().then(() => console.log(`Listening on port ${ port }`))
