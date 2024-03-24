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
| 1   | @klass/core                 | 1794430 |
| 2   | @klass/core 🔹              | 1222792 |
| 3   | classname-variants          | 1035368 |
| 4   | onno                        |  740696 |
| 5   | @pandacss/styled-system 🔸  |  574567 |
| 6   | @vanilla-extract/recipes 🔸 |  415344 |
| 7   | tailwind-variants           |  347789 |
| 8   | tailwind-variants 🔹        |  333226 |
| 9   | cva 🔹                      |  280819 |
| 10  | cva                         |  273300 |
| 11  | @stitches/core 🔸           |  139358 |

<!-- [@base] -->

### Variants + Base + Defaults

<!-- [@defaults] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core 🔹              | 1662234 |
| 2   | @klass/core                 | 1496557 |
| 3   | classname-variants          | 1135202 |
| 4   | @pandacss/styled-system 🔸  |  798964 |
| 5   | onno                        |  701390 |
| 6   | tailwind-variants           |  365457 |
| 7   | tailwind-variants 🔹        |  315153 |
| 8   | @vanilla-extract/recipes 🔸 |  314992 |
| 9   | cva                         |  292086 |
| 10  | cva 🔹                      |  238739 |
| 11  | @stitches/core 🔸           |  148696 |

<!-- [@defaults] -->

### Variants + Base + Defaults + Compounds

<!-- [@compounds] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core 🔹              | 1057842 |
| 2   | @klass/core                 |  805710 |
| 3   | @pandacss/styled-system 🔸  |  779654 |
| 4   | onno                        |  644263 |
| 5   | classname-variants          |  606987 |
| 6   | @vanilla-extract/recipes 🔸 |  332692 |
| 7   | cva                         |  198476 |
| 8   | cva 🔹                      |  165769 |
| 9   | tailwind-variants 🔹        |  134677 |
| 10  | tailwind-variants           |  133813 |
| 11  | @stitches/core 🔸           |  112003 |

<!-- [@compounds] -->

### Responsive Variants

<!-- [@responsive] -->

| No  | Libs                          | Ops/Sec |
| :-- | :---------------------------- | ------: |
| 1   | @klass/core                   |  786188 |
| 2   | @pandacss/styled-system 🔸    |  617535 |
| 3   | @vanilla-extract/sprinkles 🔸 |  134731 |
| 4   | tailwind-variants             |  130598 |
| 5   | @stitches/core 🔸             |   88019 |

<!-- [@responsive] -->

### Slots

<!-- [@slots] -->

| No  | Libs              | Ops/Sec |
| :-- | :---------------- | ------: |
| 1   | @klass/core       |  456741 |
| 2   | tailwind-variants |  146074 |

<!-- [@slots] -->
