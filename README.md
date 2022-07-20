# env-dyn-config

env-dyn-config is simple approach for **dynamic configuration** files.
It breaks down the configuration depending on the **environment** distinguiting the **base** from the env's **specifics**.

## Install

Recommended to install locally

``` bash
npm install env-dyn-config --save
```

Or installing with yarn? `yarn add env-dyn-config`

## Usage

### 1. Environment

Since this uses the [dotenv](https://www.npmjs.com/package/dotenv) package, create a `.env` file in the root of your project:

``` .env
NODE_ENV="development"
```

### 2. env-dyn-config intialization

Add the following file to initialize the module.

``` ts
/// env-dyn-config.config.ts
import init from "env-dyn-config";

export default init();
```

### 3. Your first config

Add your config file.

``` ts
/// config.ts
import edc from "./env-dyn-config.config";
const { combine, environments } = edc;

const specific = {
    [environments.production]: {
        property: "for your dear clients"
    }
}

export default combine({
    property: "for devs only"
}, specific);
```

NB: as early as possible in your application, import / configure env-dyn-config. Once imported, the returned value of each exported combine remains the same (since its cached).

For more **examples** see repo [env-dyn-config-examples](https://github.com/NickFielton/env-dyn-config-examples.git)

## Documentation

This package exposes a function, once runned, returning:

- `environments` the list of environment names
- `ENV` the current environment recognized by dotenv
- `fusion` a method to merge configurations
