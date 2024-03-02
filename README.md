<img src="https://klass.pages.dev/cover.svg" width="100%" />

<p>
  <img width="100%" src="https://hiiiits.deno.dev/hit/flamrdevs/klass-benchmark" alt="hiiiits" title="hiiiits" />
</p>

# Klass Benchmark

Benchmark of the [Klass](https://github.com/flamrdevs/klass) library

## Benchmarks

> [!NOTE]
>
> 🔹 => with tailwind-merge
>
> 🔸 => irrelevant library

### Variants + Base

<!-- [@base] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 | 1960784 |
| 2   | @klass/core 🔹              |  566604 |
| 3   | @pandacss/styled-system 🔸  |  510438 |
| 4   | @vanilla-extract/recipes 🔸 |  378357 |
| 5   | tailwind-variants           |  229959 |
| 6   | tailwind-variants 🔹        |  213821 |
| 7   | cva 🔹                      |  172022 |
| 8   | cva                         |  144227 |
| 9   | @stitches/core 🔸           |   80042 |

<!-- [@base] -->

### Variants + Base + Defaults

<!-- [@defaults] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 | 1815541 |
| 2   | @pandacss/styled-system 🔸  |  400448 |
| 3   | @klass/core 🔹              |  378443 |
| 4   | cva                         |  227391 |
| 5   | @vanilla-extract/recipes 🔸 |  214532 |
| 6   | tailwind-variants           |  195259 |
| 7   | tailwind-variants 🔹        |  143406 |
| 8   | cva 🔹                      |  141508 |
| 9   | @stitches/core 🔸           |   62044 |

<!-- [@defaults] -->

### Variants + Base + Defaults + Compounds

<!-- [@compounds] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 |  692424 |
| 2   | @pandacss/styled-system 🔸  |  486594 |
| 3   | @klass/core 🔹              |  374854 |
| 4   | @vanilla-extract/recipes 🔸 |  194333 |
| 5   | cva                         |  126208 |
| 6   | cva 🔹                      |  120344 |
| 7   | tailwind-variants           |   85427 |
| 8   | tailwind-variants 🔹        |   66272 |
| 9   | @stitches/core 🔸           |   57528 |

<!-- [@compounds] -->

### Responsive Variants

<!-- [@responsive] -->

| No  | Libs                          | Ops/Sec |
| :-- | :---------------------------- | ------: |
| 1   | @klass/core                   |  631352 |
| 2   | @pandacss/styled-system 🔸    |  449781 |
| 3   | @vanilla-extract/sprinkles 🔸 |  128582 |
| 4   | tailwind-variants             |  112165 |
| 5   | @stitches/core 🔸             |   50725 |

<!-- [@responsive] -->

### Slots

<!-- [@slots] -->

| No  | Libs              | Ops/Sec |
| :-- | :---------------- | ------: |
| 1   | @klass/core       |  250457 |
| 2   | tailwind-variants |   71223 |

<!-- [@slots] -->
