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
| 1   | @klass/core                 | 1889287 |
| 2   | onno                        |  756258 |
| 3   | @pandacss/styled-system 🔸  |  464964 |
| 4   | classname-variants          |  447267 |
| 5   | @klass/core 🔹              |  421371 |
| 6   | @vanilla-extract/recipes 🔸 |  332082 |
| 7   | cva 🔹                      |  213702 |
| 8   | tailwind-variants 🔹        |  204947 |
| 9   | cva                         |  194992 |
| 10  | tailwind-variants           |  187931 |
| 11  | @stitches/core 🔸           |   74726 |

<!-- [@base] -->

### Variants + Base + Defaults

<!-- [@defaults] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 | 2005213 |
| 2   | onno                        |  776940 |
| 3   | classname-variants          |  672902 |
| 4   | @klass/core 🔹              |  604375 |
| 5   | @pandacss/styled-system 🔸  |  458968 |
| 6   | @vanilla-extract/recipes 🔸 |  258564 |
| 7   | cva 🔹                      |  200835 |
| 8   | cva                         |  191120 |
| 9   | tailwind-variants 🔹        |  185625 |
| 10  | tailwind-variants           |  181287 |
| 11  | @stitches/core 🔸           |   77978 |

<!-- [@defaults] -->

### Variants + Base + Defaults + Compounds

<!-- [@compounds] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 |  719217 |
| 2   | @klass/core 🔹              |  437598 |
| 3   | @pandacss/styled-system 🔸  |  397740 |
| 4   | classname-variants          |  348140 |
| 5   | onno                        |  334068 |
| 6   | @vanilla-extract/recipes 🔸 |  159828 |
| 7   | cva                         |  129007 |
| 8   | cva 🔹                      |  115484 |
| 9   | tailwind-variants           |   86393 |
| 10  | tailwind-variants 🔹        |   67410 |
| 11  | @stitches/core 🔸           |   57686 |

<!-- [@compounds] -->

### Responsive Variants

<!-- [@responsive] -->

| No  | Libs                          | Ops/Sec |
| :-- | :---------------------------- | ------: |
| 1   | @klass/core                   |  767872 |
| 2   | @pandacss/styled-system 🔸    |  467420 |
| 3   | tailwind-variants             |  142584 |
| 4   | @vanilla-extract/sprinkles 🔸 |  129493 |
| 5   | @stitches/core 🔸             |   59981 |

<!-- [@responsive] -->

### Slots

<!-- [@slots] -->

| No  | Libs              | Ops/Sec |
| :-- | :---------------- | ------: |
| 1   | @klass/core       |  323813 |
| 2   | tailwind-variants |   62519 |

<!-- [@slots] -->
