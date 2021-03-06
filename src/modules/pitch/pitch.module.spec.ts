import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { PitchModule } from './pitch.module'
import { PitchDto, PitchTypeDto, PitchResultDto } from './pitch.dto'
import { Pitch, PitchType, PitchResult } from './pitch.entity'
import { PitchProvider } from './pitch.provider'
import { GlobalTransformerModule } from '../transformer/transformer.module'

describe(`The Pitch module`, () => {
    let app: INestApplication
    let pitchProvider: PitchProvider

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                GlobalTransformerModule,
                PitchModule
            ]
        }).compile()

        app = module.createNestApplication()
        pitchProvider = app.get<PitchProvider>(PitchProvider)
        await app.init()
    })

    it(`should return all available pitches`, () => {
        // given
        jest.spyOn(pitchProvider, 'getPitches')

        // when
        return request(app.getHttpServer())
            .get('/pitches')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(pitchProvider.getPitches).toHaveBeenCalled()
            })
    })

    it(`should add a pitch`, () => {
        // given
        jest.spyOn(pitchProvider, 'addPitch')

        const pitchDto: PitchDto = new PitchDto()
        pitchDto.x = 0.5
        pitchDto.y = 2.66
        pitchDto.pitchType = PitchTypeDto.SLIDER
        pitchDto.pitchResult = PitchResultDto.HIT_BY_PITCH

        const pitch: Pitch = new Pitch()
        pitch.x = 0.5
        pitch.y = 2.66
        pitch.pitchType = PitchType.SLIDER
        pitch.pitchResult = PitchResult.HIT_BY_PITCH

        return request(app.getHttpServer())
            .post('/pitches')
            .send(pitchDto)
            .expect(201)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(pitchProvider.addPitch).toHaveBeenCalledWith(pitch)
                expect(response.body).toEqual(pitch)
            })
    })

    it(`should return 400 if sent pitch is invalid`, () => {
        const pitch: PitchDto = new PitchDto()

        return request(app.getHttpServer())
            .post('/pitches')
            .send(pitch)
            .expect(400)
    })
})
