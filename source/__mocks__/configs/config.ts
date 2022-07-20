// Import module
import dyn from './dyn-config.config'

// Destructure dyn
const { combine, environments } = dyn

// Define specific variation for an env.
const specific = {
    [environments.test]: {
        general: 'Only for tests',
    },
    [environments.production]: {
        general: 'Only for clients',
        baseUrl: 'https://example.com',
        shared: 'this property is shared with prod only',
    },
}

// Export the final config
export default combine(
    {
        general: 'Only for devs',
        baseUrl: 'https://dev.example.com',
        endpoint: '/api/main',
    },
    specific
)
