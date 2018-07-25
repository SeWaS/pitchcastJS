import { Module } from '@nestjs/common';
import { PitchController } from './pitch.controller';

@Module({
    controllers: [PitchController]
})
export class PitchModule { }