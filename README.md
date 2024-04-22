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
