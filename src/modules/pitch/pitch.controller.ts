import { Controller, Get, Header } from '@nestjs/common';
import { Pitch } from './pitch.dto';

@Controller('pitches')
export class PitchController {

    @Get('/')
    @Header('Content-type', 'application/json')
    async getPitches(): Promise<Pitch> {
        return new Pitch("Seas")
    }

}
