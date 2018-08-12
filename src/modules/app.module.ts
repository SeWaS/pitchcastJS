import { Module } from '@nestjs/common'
import { PitchModule } from './pitch/pitch.module'
import { ConfigurationModule } from './config/config.module'
import { GlobalTransformerModule } from './transformer/transformer.module'

@Module({
    imports: [
        ConfigurationModule,
        GlobalTransformerModule,
        PitchModule
    ]
})
export class ApplicationModule { }
