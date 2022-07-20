// Import module
import dyn from './env-dyn-config.config'

// Destructure dyn
const { combine, environments } = dyn

// Export config with specific prod element
export default combine(
    {
        engin: 'mssql',
        url: 'db.url',
        port: 1433,
    },
    {
        [environments.production]: {
            port: 1533,
        },
    }
)
