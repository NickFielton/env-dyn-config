// Import merging module
import * as merge from 'deepmerge'
// Configure environment
import 'dotenv/config'
// Import types
import { Options, Returning } from './index.d'
// Import environments
import EnvironmentNames from './env-names.type'

// Handle EnvironmentNames
if (!Object.keys(EnvironmentNames).length) {
    throw Error(
        'env-names.type.ts should export an enum of names (see original file)'
    )
}

// Define default environments
const DEFAULT: Options = {
    environments: [...Object.keys(EnvironmentNames)],
}

// Define global conversion function
const functionGenerator = <T extends string, U = { [K in T]: string }>(
    keys: T[]
): U => {
    return keys.reduce(
        (p, c) => Object.assign(p, { [c]: c.toUpperCase() }),
        {} as U
    )
}

/**
 * Pre-function to configure module
 * @param options for the environment names (which also appears in .env)
 * @returns an object with the environments, the current env and the combine function
 */
function init(options: Options = DEFAULT): Returning {
    // Define default environments
    const environments = functionGenerator(options.environments)

    // Define current environment or first from envs
    const ENV: string =
        Object.keys(environments).find((k) => k === process.env.NODE_ENV) ||
        Object.keys(EnvironmentNames)[0]

    /**
     * Makes a combine between configurations
     * @param base or default configuration
     * @param specific configuration to override with
     * @returns custom configuration for that environment
     */
    function combine<T>(base: T, specific: { [key: string]: Partial<T> }): T {
        // Get the specific config
        const config = specific[environments[ENV]] || ({} as T)

        // Merge them
        return merge(base, config) as T
    }

    // Return the pack
    return { environments, ENV, combine }
}

export default init
