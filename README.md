<img src="https://klass.pages.dev/cover.png" width="100%" />

# Klass Benchmark

Benchmark of the [Klass](https://github.com/flamrdevs/klass) library

<!-- /information/ -->

OS `x64 | win32 | 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz | 15.71GB`

Node.js `v20.5.1`

Testing on `Wednesday, 6 September 2023`.

<!-- /information/ -->

## Class Concatenation

<!-- class-concatenation -->

| No  | Libs              | Ops/Sec |
| --- | ----------------- | ------: |
| 1   | cxs (@klass/core) | 2430369 |
| 2   | clsx              | 2339097 |
| 3   | cx (cva)          | 1939126 |
| 4   | classnames        | 1435595 |

<!-- class-concatenation -->

## Variants

<!-- variants -->

| No  | Libs                                 | Ops/Sec |
| --- | ------------------------------------ | ------: |
| 1   | @klass/core                          | 1779946 |
| 2   | classname-variants                   | 1242813 |
| 3   | @tw-classed/core                     |  976989 |
| 4   | @intrnl/cv                           |  572924 |
| 5   | @klass/core + tailwind-merge         |  548743 |
| 6   | tailwind-variants(-tailwind-merge)   |  425273 |
| 7   | @vanilla-extract/recipes (impostor!) |  350533 |
| 8   | tailwind-variants(+tailwind-merge)   |  347758 |
| 9   | cva                                  |  264577 |
| 10  | cva + tailwind-merge                 |  151010 |
| 11  | pandacss (impostor!)                 |   14917 |

<!-- variants -->

## Variants Compound

<!-- variants-compound -->

| No  | Libs                                 | Ops/Sec |
| --- | ------------------------------------ | ------: |
| 1   | @klass/core                          |  823110 |
| 2   | classname-variants                   |  749064 |
| 3   | @intrnl/cv                           |  482327 |
| 4   | @klass/core + tailwind-merge         |  396772 |
| 5   | @vanilla-extract/recipes (impostor!) |  306505 |
| 6   | @tw-classed/core                     |  237721 |
| 7   | cva                                  |  143645 |
| 8   | cva + tailwind-merge                 |  117341 |
| 9   | tailwind-variants(-tailwind-merge)   |   90283 |
| 10  | tailwind-variants(+tailwind-merge)   |   84947 |
| 11  | pandacss (impostor!)                 |   14085 |

<!-- variants-compound -->
