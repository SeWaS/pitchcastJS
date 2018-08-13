import { Injectable, Inject } from '@nestjs/common'
import { Pitch } from './pitch.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PitchProvider {

    constructor(
        @Inject('PitchRepository') private readonly pitchRepository: Repository<Pitch>
    ) {}

    async getPitches(): Promise<Pitch[]> {
        return this.pitchRepository.find()
    }

    async addPitch(pitch: Pitch): Promise<Pitch> {
        const storedPitch: Pitch = await this.pitchRepository.save(pitch)
        return storedPitch
    }

}
