# Vue update-query mixin

[![npm version][npm-v-img]][npm-url]
[![npm download][npm-dl-img]][npm-url]

> Intellectual property of [Oneway.mobi](http://www.oneway.mobi/)  


### Requirements
* Vue 1.x | 2.x
* Vue Router 0.7.x | 2.x

### Installation

`npm i vue-update-query-mixin -S`

### Usage

```
// This is a Vue component
import updateQuery from 'vue-update-query-mixin'

export default {
  mixins: [updateQuery],
  ...
}
```

From now on, `this.updateQuery` is available within the component

### Example

Current url: `http://demo.com/#!/test?a=1&b=2`  
After Running: `this.updateQuery({ a: 2, b: 3 })`  
url changed to: `http://demo.com/#!/test?a=2&b=3`

> This mixin is based on [`update-query`](https://github.com/kenberkeley/update-query)

[npm-url]: https://www.npmjs.com/package/vue-update-query-mixin
[npm-v-img]: http://img.shields.io/npm/v/vue-update-query-mixin.svg
[npm-dl-img]: http://img.shields.io/npm/dm/vue-update-query-mixin.svg
