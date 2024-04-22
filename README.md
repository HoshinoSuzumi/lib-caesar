# @uniiem/caesar

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/HoshinoSuzumi/lib-caesar/ci.yml)
![NPM Downloads](https://img.shields.io/npm/dm/%40uniiem%2Fcaesar)
![NPM Version (with dist tag)](https://img.shields.io/npm/v/%40uniiem%2Fcaesar/latest)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40uniiem%2Fcaesar)
![GitHub License](https://img.shields.io/github/license/HoshinoSuzumi/lib-caesar)

A simple caesar cipher library.

## Installation

```bash
npm install @uniiem/caesar
```

## Usage

```typescript
import { encode, decode rot13 } from '@uniiem/caesar';

const encoded = encode('Caesar cipher lib test!', 3);
console.log(encoded); // 'Fdhvdu flskhu ole whvw!'
const decoded = decode(encoded, 3);
console.log(decoded); // 'Caesar cipher lib test!'
const rot13ed = rot13('Caesar cipher lib test!');
console.log(rot13ed); // 'Pnrfne pvcure yvo grkg!'
```

## Sponsor

Buy me a coffee~

[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3D5ANK41%26type%3Dpledges&style=flat)](https://patreon.com/5ANK41)
[![爱发电](https://afdian.moeci.com/11/badge.svg)](https://afdian.net/a/hoshino_suzumi)
