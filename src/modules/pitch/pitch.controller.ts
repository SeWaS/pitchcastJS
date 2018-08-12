import { Controller, Get, Header, Post, Body, UsePipes, ValidationPipe, PipeTransform } from '@nestjs/common'
import { PitchDto } from './pitch.dto'
import { PitchProvider } from './pitch.provider'
import { Pitch } from './pitch.entity'
import { Transformer } from '../transformer/transformation.provider'

@Controller('pitches')
export class PitchController {

    constructor(
        private readonly transformer: Transformer,
        private readonly pitchProvider: PitchProvider
    ) {}

    @Get('/')
    @Header('Content-type', 'application/json')
    async getPitches(): Promise<PitchDto[]> {
        const pitches: Pitch[] = await this.pitchProvider.getPitches()
        return await this.transformer.transformList(pitches, PitchDto)
    }

    @Post('/')
    @Header('Content-type', 'application/json')
    @UsePipes(new ValidationPipe())
    async addPitch(@Body() pitchDto: PitchDto): Promise<Pitch> {
        const pitch: Pitch = await this.transformer.transform(pitchDto, Pitch)
        return await this.pitchProvider.addPitch(pitch)
    }
}
