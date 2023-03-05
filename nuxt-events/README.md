<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Nuxt-Events

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> My new Nuxt module

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- 🚠 &nbsp;Simple Event bus

## Setup

1. Add `nuxt-events` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-events

# Using yarn
yarn add nuxt-events

# Using npm
npm install nuxt-events
```

2. Add `my-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-events'
  ]
})
```

That's it! You can now use ```nuxt-events``` in your Nuxt app ✨

## How to use this module

1. Import the module in your page or component: ```const { $events } = useNuxtApp()```
2. Define your event handler:

```js
const eventHandler = () => {
  // Do something awesome
}

$events.on('${THE_NAME_OF_YOUR_EVENT}', eventHandler)
```

3. Emit your event:

```js
$events.emit('${THE_NAME_OF_YOUR_EVENT}')
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/my-module
