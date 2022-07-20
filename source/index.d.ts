// Import environments
import EnvironmentNames from './env-names.type'

// Define config type
export type Options = {
    environments: string[]
}
// Define return type
export type Returning = {
    environments: { [key in EnvironmentNames]?: any }
    ENV: string
    combine<T>(base: T, specific: { [key: string]: Partial<T> }): T
}
