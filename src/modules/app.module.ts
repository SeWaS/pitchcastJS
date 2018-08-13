import { Module } from '@nestjs/common'
import { PitchModule } from './pitch/pitch.module'
import { GlobalTransformerModule } from './transformer/transformer.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        GlobalTransformerModule,
        PitchModule
    ]
})
export class ApplicationModule { }
