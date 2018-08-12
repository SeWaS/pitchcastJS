
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

export class Pitch {
    x: number
    y: number
    pitchResult: PitchResult
    pitchType: PitchType
}
