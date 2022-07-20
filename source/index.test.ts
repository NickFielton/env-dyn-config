describe('index', () => {
    beforeEach(() => {
        jest.resetModules()
    })

    test.each(['development', 'test', 'production'])('nominal-%s', (place) => {
        // Prepare the environment
        process.env.NODE_ENV = place

        // Import the config
        const config = require('./__mocks__/configs/config')

        // Check config
        expect(config).toMatchSnapshot()
    })

    test('no-env given', () => {
        // Prepare the environment
        process.env.NODE_ENV = 'place'

        // Import the config
        const config = require('./__mocks__/configs/config')

        // Check config
        expect(config).toMatchSnapshot()
    })

    test('err no-env-names defined', () => {
        // Mock env-names.type
        jest.mock('./env-names.type', () => ({ default: {} }))

        // Import the config
        expect(() => require('./__mocks__/configs/config')).toThrow()
    })
})
