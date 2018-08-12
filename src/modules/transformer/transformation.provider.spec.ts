import { Transformer } from './transformation.provider'
import { PitchDto, PitchResultDto, PitchTypeDto } from '../pitch/pitch.dto'
import { Pitch, PitchType, PitchResult } from '../pitch/pitch.entity'

describe(`The Transformer`, () => {

    it(`should transform a PitchDto to a Pitch`, async () => {
        // given
        const transformer = new Transformer()
        const pitchDto = new PitchDto()
        pitchDto.x = 9
        pitchDto.y = 10
        pitchDto.pitchResult = PitchResultDto.STRIKE
        pitchDto.pitchType = PitchTypeDto.CURVEBALL

        // when
        const transformedPitch: Pitch = await transformer.transform<PitchDto, Pitch>(pitchDto, Pitch)

        // Then
        expect(transformedPitch).toEqual(pitchDto)
    })

    it(`should transform a Pitch to a PitchDto`, async () => {
        // given
        const transformer = new Transformer()
        const pitch = new Pitch()
        pitch.x = 9
        pitch.y = 10
        pitch.pitchResult = PitchResult.STRIKE
        pitch.pitchType = PitchType.CURVEBALL

        // when
        const transformedPitchDto: PitchDto = await transformer.transform<Pitch, PitchDto>(pitch, PitchDto)

        // Then
        expect(transformedPitchDto).toEqual(pitch)
    })

    it(`should transform a list of pitches to a list of pitchDtos`, async () => {
        // given
        const transformer = new Transformer()

        const pitchArr: Pitch[] = new Array<Pitch>()

        const pitch1 = new Pitch()
        pitch1.x = 9
        pitch1.y = 10
        pitch1.pitchResult = PitchResult.STRIKE
        pitch1.pitchType = PitchType.CURVEBALL

        const pitch2 = new Pitch()
        pitch2.x = 9
        pitch2.y = 10
        pitch2.pitchResult = PitchResult.STRIKE
        pitch2.pitchType = PitchType.CURVEBALL

        pitchArr.push(pitch1)
        pitchArr.push(pitch2)

        // when
        const transformedPitchDtoList: PitchDto[] = await transformer.transformList<Pitch, PitchDto>(pitchArr, PitchDto)

        // Then
        expect(transformedPitchDtoList).toEqual(pitchArr)
    })

})
