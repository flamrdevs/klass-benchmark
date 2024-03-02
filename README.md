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
| 1   | @klass/core                 | 2060156 |
| 2   | @klass/core 🔹              |  571428 |
| 3   | classname-variants          |  523889 |
| 4   | onno                        |  435938 |
| 5   | @vanilla-extract/recipes 🔸 |  391129 |
| 6   | @pandacss/styled-system 🔸  |  367255 |
| 7   | cva                         |  245887 |
| 8   | cva 🔹                      |  203844 |
| 9   | tailwind-variants 🔹        |  178034 |
| 10  | tailwind-variants           |  142172 |
| 11  | @stitches/core 🔸           |   55049 |

<!-- [@base] -->

### Variants + Base + Defaults

<!-- [@defaults] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 | 2171081 |
| 2   | @klass/core 🔹              |  584180 |
| 3   | onno                        |  536480 |
| 4   | classname-variants          |  520237 |
| 5   | @pandacss/styled-system 🔸  |  250175 |
| 6   | @vanilla-extract/recipes 🔸 |  249818 |
| 7   | cva                         |  235238 |
| 8   | tailwind-variants           |  228524 |
| 9   | cva 🔹                      |  195125 |
| 10  | tailwind-variants 🔹        |  171788 |
| 11  | @stitches/core 🔸           |   81716 |

<!-- [@defaults] -->

### Variants + Base + Defaults + Compounds

<!-- [@compounds] -->

| No  | Libs                        | Ops/Sec |
| :-- | :-------------------------- | ------: |
| 1   | @klass/core                 |  689369 |
| 2   | @pandacss/styled-system 🔸  |  477805 |
| 3   | @klass/core 🔹              |  462363 |
| 4   | onno                        |  265674 |
| 5   | classname-variants          |  250859 |
| 6   | @vanilla-extract/recipes 🔸 |  144730 |
| 7   | cva                         |  113539 |
| 8   | cva 🔹                      |  102775 |
| 9   | tailwind-variants 🔹        |   85419 |
| 10  | tailwind-variants           |   73031 |
| 11  | @stitches/core 🔸           |   56749 |

<!-- [@compounds] -->

### Responsive Variants

<!-- [@responsive] -->

| No  | Libs                          | Ops/Sec |
| :-- | :---------------------------- | ------: |
| 1   | @klass/core                   |  697495 |
| 2   | @pandacss/styled-system 🔸    |  451997 |
| 3   | tailwind-variants             |  126328 |
| 4   | @vanilla-extract/sprinkles 🔸 |  118187 |
| 5   | @stitches/core 🔸             |   54420 |

<!-- [@responsive] -->

### Slots

<!-- [@slots] -->

| No  | Libs              | Ops/Sec |
| :-- | :---------------- | ------: |
| 1   | @klass/core       |  283945 |
| 2   | tailwind-variants |   76338 |

<!-- [@slots] -->
