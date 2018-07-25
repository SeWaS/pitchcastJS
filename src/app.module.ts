import { Module } from '@nestjs/common';
import { PitchModule } from './modules/pitch/pitch.module';

@Module({
    imports: [
        PitchModule
    ]
})
export class ApplicationModule { }
