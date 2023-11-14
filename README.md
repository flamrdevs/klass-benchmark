<img src="https://klass.pages.dev/cover.png" width="100%" />

<p>
  <img width="100%" src="https://hiiiits.deno.dev/hit/flamrdevs/klass-benchmark" alt="hiiiits" title="hiiiits" />
</p>

# Klass Benchmark

Benchmark of the [Klass](https://github.com/flamrdevs/klass) library

<!-- /information/ -->

OS `x64 | win32 | 11th Gen Intel(R) Core(TM) i7-1165G7 @ 2.80GHz | 15.71GB`

Node.js `v20.9.0`

Testing on `Saturday, November 25, 2023`

<!-- /information/ -->

## Variants

<!-- variants -->

| No  | Libs                                 | Ops/Sec |
| --- | ------------------------------------ | ------: |
| 1   | @klass/core                          | 2221000 |
| 2   | onno                                 | 1544316 |
| 3   | classname-variants                   | 1264433 |
| 4   | @tw-classed/core                     |  885164 |
| 5   | @klass/core + tailwind-merge         |  577071 |
| 6   | @intrnl/cv                           |  569634 |
| 7   | tailwind-variants(-tailwind-merge)   |  420444 |
| 8   | @vanilla-extract/recipes (impostor!) |  352326 |
| 9   | tailwind-variants(+tailwind-merge)   |  336519 |
| 10  | cvu                                  |  279748 |
| 11  | classname-manager                    |  269071 |
| 12  | cva                                  |  247404 |
| 13  | class-variant                        |  223143 |
| 14  | cvu + tailwind-merge                 |  188657 |
| 15  | cva + tailwind-merge                 |  184771 |
| 16  | stitches (impostor!)                 |   84563 |
| 17  | pandacss (impostor!)                 |   76671 |

<!-- variants -->

## Variants Compound

<!-- variants-compound -->

| No  | Libs                                 | Ops/Sec |
| --- | ------------------------------------ | ------: |
| 1   | @klass/core                          |  810197 |
| 2   | onno                                 |  560291 |
| 3   | classname-variants                   |  493199 |
| 4   | @intrnl/cv                           |  455976 |
| 5   | @klass/core + tailwind-merge         |  404311 |
| 6   | @vanilla-extract/recipes (impostor!) |  266919 |
| 7   | @tw-classed/core                     |  135472 |
| 8   | cva                                  |   97859 |
| 9   | cva + tailwind-merge                 |   74851 |
| 10  | stitches (impostor!)                 |   73085 |
| 11  | cvu                                  |   52695 |
| 12  | tailwind-variants(-tailwind-merge)   |   50794 |
| 13  | tailwind-variants(+tailwind-merge)   |   49489 |
| 14  | cvu + tailwind-merge                 |   46904 |
| 15  | pandacss (impostor!)                 |   40380 |

<!-- variants-compound -->

## Responsive Variants

<!-- responsive-variants -->

| No  | Libs                                   | Ops/Sec |
| --- | -------------------------------------- | ------: |
| 1   | @klass/core                            |  660564 |
| 2   | @klass/core + tailwind-merge           |  467881 |
| 3   | tailwind-variants(-tailwind-merge)     |  124527 |
| 4   | tailwind-variants(+tailwind-merge)     |  122456 |
| 5   | @vanilla-extract/sprinkles (impostor!) |   92363 |
| 6   | pandacss (impostor!)                   |   47460 |

<!-- responsive-variants -->

## Slots

<!-- slots -->

| No  | Libs                               | Ops/Sec |
| --- | ---------------------------------- | ------: |
| 1   | @klass/core/slots                  |  890814 |
| 2   | @klass/core/slots + tailwind-merge |  525090 |
| 3   | tailwind-variants(-tailwind-merge) |   28140 |
| 4   | tailwind-variants(+tailwind-merge) |   26524 |
| 5   | pandacss (impostor!)               |   24087 |

<!-- slots -->
