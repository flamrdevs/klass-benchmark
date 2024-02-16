<img src="https://klass.pages.dev/cover.svg" width="100%" />

<p>
  <img width="100%" src="https://hiiiits.deno.dev/hit/flamrdevs/klass-benchmark" alt="hiiiits" title="hiiiits" />
</p>

# Klass Benchmark

Benchmark of the [Klass](https://github.com/flamrdevs/klass) library

## Benchmarks

> [!NOTE]  
> [m] => with tailwind-merge

### Variants + Base

<!-- [@base] -->

| No  | Libs                  | Ops/Sec |
| :-- | :-------------------- | ------: |
| 1   | @klass/core           | 2304147 |
| 2   | @klass/core [m]       |  742225 |
| 3   | cva                   |  309827 |
| 4   | cva [m]               |  268752 |
| 5   | tailwind-variants     |  250212 |
| 6   | tailwind-variants [m] |  205208 |

<!-- [@base] -->

### Variants + Base + Defaults

<!-- [@defaults] -->

| No  | Libs                  | Ops/Sec |
| :-- | :-------------------- | ------: |
| 1   | @klass/core           | 2327746 |
| 2   | @klass/core [m]       |  474743 |
| 3   | cva                   |  290023 |
| 4   | cva [m]               |  276227 |
| 5   | tailwind-variants     |  263525 |
| 6   | tailwind-variants [m] |  239727 |

<!-- [@defaults] -->

### Variants + Base + Defaults + Compounds

<!-- [@compounds] -->

| No  | Libs                  | Ops/Sec |
| :-- | :-------------------- | ------: |
| 1   | @klass/core           |  916506 |
| 2   | @klass/core [m]       |  550357 |
| 3   | cva                   |  191339 |
| 4   | cva [m]               |  167914 |
| 5   | tailwind-variants     |  120169 |
| 6   | tailwind-variants [m] |  112742 |

<!-- [@compounds] -->

### Responsive Variants

<!-- [@responsive] -->

| No  | Libs              | Ops/Sec |
| :-- | :---------------- | ------: |
| 1   | @klass/core       |  651380 |
| 2   | tailwind-variants |  145949 |

<!-- [@responsive] -->
