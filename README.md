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
| 1   | @klass/core                 | 2274277 |
| 2   | @klass/core 🔹              |  613986 |
| 3   | @pandacss/styled-system 🔸  |  506303 |
| 4   | @vanilla-extract/recipes 🔸 |  366139 |
| 5   | cva                         |  278800 |
| 6   | cva 🔹                      |  259013 |
| 7   | tailwind-variants 🔹        |  222707 |
| 8   | tailwind-variants           |  167372 |
| 9   | @stitches/core 🔸           |   82863 |

<!-- [@base] -->

### Variants + Base + Defaults

<!-- [@defaults] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 | 2264492 |
| 2   | @klass/core 🔹              |  578804 |
| 3   | @pandacss/styled-system 🔸  |  516475 |
| 4   | cva 🔹                      |  224658 |
| 5   | @vanilla-extract/recipes 🔸 |  206863 |
| 6   | cva                         |  189890 |
| 7   | tailwind-variants           |  150525 |
| 8   | tailwind-variants 🔹        |  130635 |
| 9   | @stitches/core 🔸           |   65361 |

<!-- [@defaults] -->

### Variants + Base + Defaults + Compounds

<!-- [@compounds] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 |  692712 |
| 2   | @klass/core 🔹              |  549088 |
| 3   | @pandacss/styled-system 🔸  |  493559 |
| 4   | @vanilla-extract/recipes 🔸 |  175340 |
| 5   | cva                         |  151795 |
| 6   | cva 🔹                      |  122980 |
| 7   | tailwind-variants           |   98330 |
| 8   | tailwind-variants 🔹        |   88532 |
| 9   | @stitches/core 🔸           |   74663 |

<!-- [@compounds] -->

### Responsive Variants

<!-- [@responsive] -->

| No  | Libs                          | Ops/Sec |
| :-- | :---------------------------- | ------: |
| 1   | @klass/core                   |  668404 |
| 2   | @pandacss/styled-system 🔸    |  444919 |
| 3   | tailwind-variants             |  141318 |
| 4   | @vanilla-extract/sprinkles 🔸 |  137302 |
| 5   | @stitches/core 🔸             |   53157 |

<!-- [@responsive] -->

### Slots

<!-- [@slots] -->

| No  | Libs              | Ops/Sec |
| :-- | :---------------- | ------: |
| 1   | @klass/core       |  258906 |
| 2   | tailwind-variants |   64438 |

<!-- [@slots] -->
