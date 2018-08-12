import { IsNumber, IsEnum, IsNotEmpty } from 'class-validator'

export enum PitchResultDto {
    BALL = 'BALL',
    FOULBALL = 'FOULBALL',
    STRIKE = 'STRIKE',
    BALL_IN_PLAY = 'BALL_IN_PLAY',
    HIT_BY_PITCH = 'HIT_BY_PITCH'
}

export  enum PitchTypeDto {
    FOURSEEM = 'FOURSEEM',
    TWOSEAM = 'TWOSEAM',
    CURVEBALL = 'CURVEBALL',
    SLIDER = 'SLIDER'
}

export class PitchDto {
    @IsNumber()
    @IsNotEmpty()
    x: number

    @IsNumber()
    @IsNotEmpty()
    y: number

    @IsEnum(PitchResultDto)
    @IsNotEmpty()
    pitchResult: PitchResultDto

    @IsEnum(PitchTypeDto)
    @IsNotEmpty()
    pitchType: PitchTypeDto
}
