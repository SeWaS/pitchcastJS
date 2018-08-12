import { Injectable } from '@nestjs/common'
import { Pitch } from './pitch.entity'

@Injectable()
export class PitchProvider {

    pitches: Pitch[] = new Array<Pitch>()

    async getPitches(): Promise<Pitch[]> {
        return this.pitches
    }

    async addPitch(pitch: Pitch): Promise<Pitch> {
        this.pitches.push(pitch)
        return pitch
    }

}
