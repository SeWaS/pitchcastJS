import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export enum PitchResult {
    BALL = 'BALL',
    FOULBALL = 'FOULBALL',
    STRIKE = 'STRIKE',
    BALL_IN_PLAY = 'BALL_IN_PLAY',
    HIT_BY_PITCH = 'HIT_BY_PITCH'
}

export  enum PitchType {
    FOURSEEM = 'FOURSEEM',
    TWOSEAM = 'TWOSEAM',
    CURVEBALL = 'CURVEBALL',
    SLIDER = 'SLIDER'
}

@Entity()
export class Pitch {
    @PrimaryGeneratedColumn() id: number
    @Column('decimal') x: number
    @Column('decimal') y: number
    @Column() pitchResult: PitchResult
    @Column() pitchType: PitchType
}
