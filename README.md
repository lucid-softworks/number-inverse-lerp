# `@lucid-softworks/number-inverse-lerp`

Find the interpolation amount represented by a value. The result is not
clamped, and equal endpoints throw because the input range has no size.

```ts
import { inverseLerp } from "@lucid-softworks/number-inverse-lerp";

inverseLerp(0, 10, 5); // 0.5
```
