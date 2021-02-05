## What is Base62 encoding?

Base62 encoding converts numbers to ASCII strings (0-9, a-z and A-Z) and vice versa, which typically results in comparatively short strings. Such identifiers also tend to more readily identifiable by humans.

## Usage

```
import * as base62 from 'https://deno.land/x/base62/mod.ts';
```

```
console.log(base62.encode(123456));
console.log(base62.decode("w7e"));
```

