import { ConfigService } from './config.service'

describe(`The ConfigService`, () => {

    it(`must parse a valid file with given env-vars`, () => {
        // given
        jest.spyOn(ConfigService.prototype, 'findFile').mockImplementation(() => {
            return `
            NODE_ENV=development
            APP_PORT=9999
            `
        })

        // when
        const configService: ConfigService = new ConfigService('undefined')

        // then
        expect(configService.nodeEnv).toEqual('development')
        expect(configService.port).toEqual(9999)
        expect(ConfigService.prototype.findFile).toHaveBeenCalledWith('development')
    })

    it(`must parse a valid file only with required env-vars`, () => {
        // given
        jest.spyOn(ConfigService.prototype, 'findFile').mockImplementation(() => {
            return ``
        })

        // when
        const configService: ConfigService = new ConfigService('production')

        // then
        expect(configService.nodeEnv).not.toBeUndefined()
        expect(configService.port).not.toBeUndefined()
        expect(ConfigService.prototype.findFile).toHaveBeenCalledWith('production')
    })

    it(`must throw an error if env-var contains invalid values`, () => {
        // given
        jest.spyOn(ConfigService.prototype, 'findFile').mockImplementation(() => {
            return `
            NODE_ENV=invalid-env
            APP_PORT=invalid-port
            `
        })

        // then
        expect(() => {
            const configService: ConfigService = new ConfigService('production')
        }).toThrow()
    })

})
