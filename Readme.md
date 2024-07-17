# EAV

<!--toc:start-->
- [EAV](#eav)
  - [Error As Value](#error-as-value)
  - [Why?](#why)
  - [Usage](#usage)
<!--toc:end-->

## Error As Value

eav is a simple helper to follow an error as value approach instead the try/catch native Javascript approach.
The implementation is heavily inspired by how errors are treated in Go.
Array destructuring is expect to be used as a way to simulate multiple return values.

## Why?

The try/catch approach creates an extra layer of scope that is often weird to deal with, making you add extra
indentation or use let variables to continue with your logic after the try/catch logic.

## Usage

```Typescript
import { eav } from '@badnoodles/eav'

const [v, err] = await eav<string>(() => Promise.resolve("value"))

if (err) {
  console.error(err)
  /**
   * The if + return will enable typescript's type narrowing
   * Comment out the return to see typescript complaining about the type of `v`
   * being possibly null on the console log below
   */
  return
}

console.log(v.endsWith("ue"))
```
