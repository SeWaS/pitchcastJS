import { Test, TestingModule } from '@nestjs/testing'
import { ApplicationModule } from '../app.module'
import { INestApplication } from '../../node_modules/@nestjs/common'
import * as request from 'supertest'

describe(`The application`, () => {
    let app: INestApplication

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ApplicationModule]
        }).compile()

        app = module.createNestApplication()
        await app.init()
    })

    it(`should return all available pitches`, () => {

        // when
        return request(app.getHttpServer())
            .get('/pitches')
            .expect(200)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body.name).toEqual('Seas')
            })
    })

})
