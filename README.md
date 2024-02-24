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
| 1   | @klass/core                 | 2330459 |
| 2   | @klass/core 🔹              |  728013 |
| 3   | @pandacss/styled-system 🔸  |  547195 |
| 4   | @vanilla-extract/recipes 🔸 |  474135 |
| 5   | cva                         |  300652 |
| 6   | cva 🔹                      |  266730 |
| 7   | tailwind-variants 🔹        |  212080 |
| 8   | tailwind-variants           |  187888 |
| 9   | @stitches/core 🔸           |   97826 |

<!-- [@base] -->

### Variants + Base + Defaults

<!-- [@defaults] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 | 2228163 |
| 2   | @klass/core 🔹              |  670690 |
| 3   | @pandacss/styled-system 🔸  |  611770 |
| 4   | cva                         |  286000 |
| 5   | @vanilla-extract/recipes 🔸 |  279384 |
| 6   | cva 🔹                      |  278590 |
| 7   | tailwind-variants           |  242054 |
| 8   | tailwind-variants 🔹        |  225820 |
| 9   | @stitches/core 🔸           |   70339 |

<!-- [@defaults] -->

### Variants + Base + Defaults + Compounds

<!-- [@compounds] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 |  919963 |
| 2   | @klass/core 🔹              |  604083 |
| 3   | @pandacss/styled-system 🔸  |  554139 |
| 4   | @vanilla-extract/recipes 🔸 |  200404 |
| 5   | cva                         |  167464 |
| 6   | cva 🔹                      |  150813 |
| 7   | tailwind-variants           |  147937 |
| 8   | tailwind-variants 🔹        |  124143 |
| 9   | @stitches/core 🔸           |   79780 |

<!-- [@compounds] -->

### Responsive Variants

<!-- [@responsive] -->

| No  | Libs                          | Ops/Sec |
| :-- | :---------------------------- | ------: |
| 1   | @klass/core                   |  665247 |
| 2   | @pandacss/styled-system 🔸    |  550964 |
| 3   | tailwind-variants             |  154299 |
| 4   | @vanilla-extract/sprinkles 🔸 |  144129 |
| 5   | @stitches/core 🔸             |   59723 |

<!-- [@responsive] -->

### Slots

<!-- [@slots] -->

| No  | Libs              | Ops/Sec |
| :-- | :---------------- | ------: |
| 1   | @klass/core       |  282063 |
| 2   | tailwind-variants |   89318 |

<!-- [@slots] -->
