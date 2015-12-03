# React Stack Overflow Profile
_A React component that displays a Stack Overflow profile card_

## Status

[![CI Status](https://img.shields.io/travis/sean-clayton/react-stackoverflow-profile.svg?style=flat-square)](https://travis-ci.org/sean-clayton/react-stackoverflow-profile)
[![NPM Version](https://img.shields.io/npm/v/react-stackoverflow-profile.svg?style=flat-square)](https://www.npmjs.com/package/react-stackoverflow-profile)
[![Downloads](https://img.shields.io/npm/dt/react-stackoverflow-profile.svg?style=flat-square)](https://www.npmjs.com/package/react-stackoverflow-profile)
[![Dependencies](https://img.shields.io/david/sean-clayton/react-stackoverflow-profile.svg?style=flat-square)](https://david-dm.org/sean-clayton/react-stackoverflow-profile)
[![GitHub Issues](https://img.shields.io/github/issues/sean-clayton/react-stackoverflow-profile.svg?style=flat-square)](https://github.com/sean-clayton/react-stackoverflow-profile/issues?q=is%3Aopen+is%3Aissue)

## Installation

### [npmcdn](https://npmcdn.com)

```html
<script src="https://npmcdn.com/react-stackoverflow-profile/dist/react-stackoverflow-profile.min.js"></script>
```

### npm

```bash
npm install --save react-stackoverflow-profile
```

## Usage

### JS

```js
// CommonJS
var StackoverflowProfile = require('react-stackoverflow-profile')

// Module Bundler + ES2015
import StackoverflowProfile from 'react-stackoverflow-profile';

// UMD + ES2015
const { StackoverflowProfile } = StackoverflowProfile;

// UMD + ES5
var StackoverflowProfile = StackoverflowProfile.StackoverflowProfile
```

### JSX

```html
<StackoverflowProfile id="1" /> <!-- Insert whatever id you want! -->
```

## API

| Option | Default Value | Required | Description |
|--------|---------------|----------| ----------- |
| `id` | `undefined` | **true** | Stack Overflow ID. Found in URL |

## Useful Links

- [Contribution Guidelines]
- [Authors]

[Contribution Guidelines]: /CONTRIBUTING.md
[Authors]: /AUTHORS
