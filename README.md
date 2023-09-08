<img src="https://klass.pages.dev/cover.png" width="100%" />

# Klass Benchmark

Benchmark of the [Klass](https://github.com/flamrdevs/klass) library

<!-- /information/ -->

OS `x64 | win32 | 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz | 15.71GB`

Node.js `v20.5.1`

Testing on `Friday, 8 September 2023`.

<!-- /information/ -->

## Class Concatenation

<!-- class-concatenation -->

| No  | Libs              | Ops/Sec |
| --- | ----------------- | ------: |
| 1   | cxs (@klass/core) | 2178290 |
| 2   | clsx              | 2023431 |
| 3   | cx (cva)          | 1766052 |
| 4   | classnames        | 1459468 |

<!-- class-concatenation -->

## Variants

<!-- variants -->

| No  | Libs                                 | Ops/Sec |
| --- | ------------------------------------ | ------: |
| 1   | @klass/core                          | 1680000 |
| 2   | classname-variants                   | 1240583 |
| 3   | @tw-classed/core                     |  932435 |
| 4   | @intrnl/cv                           |  602536 |
| 5   | @klass/core + tailwind-merge         |  541806 |
| 6   | tailwind-variants(-tailwind-merge)   |  403461 |
| 7   | @vanilla-extract/recipes (impostor!) |  355837 |
| 8   | tailwind-variants(+tailwind-merge)   |  337251 |
| 9   | cvu                                  |  306081 |
| 10  | classname-manager                    |  275905 |
| 11  | cva                                  |  270352 |
| 12  | cvu + tailwind-merge                 |  209486 |
| 13  | cva + tailwind-merge                 |  195374 |
| 14  | pandacss (impostor!)                 |   78227 |

<!-- variants -->

## Variants Compound

<!-- variants-compound -->

| No  | Libs                                 | Ops/Sec |
| --- | ------------------------------------ | ------: |
| 1   | @klass/core                          |  811271 |
| 2   | classname-variants                   |  709145 |
| 3   | @intrnl/cv                           |  531301 |
| 4   | @klass/core + tailwind-merge         |  395466 |
| 5   | @vanilla-extract/recipes (impostor!) |  287456 |
| 6   | @tw-classed/core                     |  224888 |
| 7   | cva                                  |  142738 |
| 8   | cva + tailwind-merge                 |  117951 |
| 9   | cvu                                  |   87821 |
| 10  | tailwind-variants(+tailwind-merge)   |   83412 |
| 11  | tailwind-variants(-tailwind-merge)   |   83085 |
| 12  | cvu + tailwind-merge                 |   74948 |
| 13  | pandacss (impostor!)                 |   53689 |

<!-- variants-compound -->

## Responsive Variants

<!-- responsive-variants -->

| No  | Libs                                   | Ops/Sec |
| --- | -------------------------------------- | ------: |
| 1   | @klass/core                            |  599293 |
| 2   | @klass/core + tailwind-merge           |  408280 |
| 3   | tailwind-variants(-tailwind-merge)     |  119424 |
| 4   | tailwind-variants(+tailwind-merge)     |  119085 |
| 5   | @vanilla-extract/sprinkles (impostor!) |   93160 |
| 6   | pandacss (impostor!)                   |   44198 |

<!-- responsive-variants -->
