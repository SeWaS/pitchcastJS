import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './modules/app.module'
import { ConfigService } from './modules/config/config.service'
import * as express from 'express'
import * as bodyParser from 'body-parser'

let port: number

const instance: express.Express = express()
instance.use(bodyParser.json())

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(ApplicationModule, instance)

    port = app.get<ConfigService>(ConfigService).port

    await app.listen(port)
}

bootstrap().then(() => console.log(`Listening on port ${port}`))
