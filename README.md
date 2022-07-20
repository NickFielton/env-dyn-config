# env-dyn-config

env-dyn-config is simple approach for dynamic configuration files.
It breaks down a configuration to the base and the specifics for each environment specific.

## Install

Recommended to install locally

``` bash
npm install env-dyn-config --save
```

Or installing with yarn? `yarn add env-dyn-config`

## Usage

Since this uses the [dotenv](https://www.npmjs.com/package/dotenv) package, create a `.env` file in the root of your project:

``` .env
NODE_ENV="development"
```

And your config file:

``` ts
/// config.ts
import { environments, fusion } from "env-dyn-config";

const specific = {
    [environments.production]: {
        property: "for your dear clients"
    }
}

export default fusion({
    property: "for devs only"
}, specific);
```

NB: as early as possible in your application, import / configure env-dyn-config. Once imported, the returned value of each exported fusion remains the same (since its cached).

## Customize

Customisation happends at the initialization of the module by giving an array of the environment names.

``` ts
/// config.ts
import init from "env-dyn-config";
const { environments, fusion } = init(["development", "test", "production"]);
```

The first value of the array is the default / base configuration.
After any other import, you can carry with the previously shown import method.

## Example

- [Typescript and custom envs](#Example)

## Documentation

This package exposes:

- `environments` the list of environment names
- `ENV` the current environment recognized by dotenv
- `fusion` a method to merge configurations

## Options

### `environments`

env-dyn-config can accept a string[] with the name of your environments.

## Todo

- [x] Intellisence on environments
- [ ] Intellisence on dynamic environments
- [x] Prepare as module
