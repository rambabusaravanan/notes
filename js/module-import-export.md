### CJS / ESM

#### CommonJS modules (.cjs)
```
const foo = require("...")
```


#### ES modules (.mjs)

namespace-style import
```
import * as foo from "..."
```

named import
```
import { helper } from "..."
```

----

### CommonJS Interoperability

Node.js allows ES modules to import CommonJS modules as if they were ES modules with a default export

```
import foo = require("foo")
```

In a CommonJS module, this just boils down to a require() call, and in an ES module, this imports createRequire to achieve the same thing

reference: [ts blog](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#commonjs-interoperability)

---

### Package Exports

Node.js 12+ supports "exports", allows defining the entry points of a package, as an alternative to "main" in package.json.

```jsonc
// package.json
{
    "name": "my-package",
    "type": "module",
    "exports": {
        ".": {
            // Entry-point for `import "my-package"` in ESM
            "import": "./esm/index.js",

            // Entry-point for `require("my-package") in CJS
            "require": "./commonjs/index.cjs",
        },
    },

    // CJS fall-back for older versions of Node.js
    "main": "./commonjs/index.cjs",
}
```

reference: [ts blog](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#package-json-exports-imports-and-self-referencing), [nodejs module packages](https://nodejs.org/api/packages.html#package-entry-points)
