<img src="https://klass.pages.dev/cover.png" width="100%" />

# Klass Benchmark

Benchmark of the [Klass](https://github.com/flamrdevs/klass) library

Device information `i7-1165G7 @ 2.80GHz 16.0 GB RAM`

OS `Windows 11`

Node.js `v20.2.0`

Testing on `August 2, 2023`.

## ClassName Concatenation

<!-- @.class-name-concatenation -->

| Rank | Library           | Operations/Second |
| ---- | ----------------- | ----------------- |
| 1    | cxs (@klass/core) | 5,909,639         |
| 2    | clsx              | 5,583,271         |
| 3    | classnames        | 2,340,275         |

<!-- @.class-name-concatenation -->

## Variants Only

<!-- @.variants-only -->

| Rank | Library                            | Operations/Second |
| ---- | ---------------------------------- | ----------------- |
| 1    | @intrnl/cv                         | 3,506,566         |
| 2    | @klass/core                        | 2,852,680         |
| 3    | class-variance-authority           | 2,009,590         |
| 4    | classname-variants                 | 1,968,384         |
| 5    | @tw-classed/core                   | 1,565,500         |
| 6    | @klass/core + tailwind-merge       | 782,306           |
| 7    | tailwind-variants(-tailwind-merge) | 449,164           |
| 8    | tailwind-variants(+tailwind-merge) | 396,161           |

<!-- @.variants-only -->

## Variants Compound

<!-- @.variants-compound -->

| Rank | Library                            | Operations/Second |
| ---- | ---------------------------------- | ----------------- |
| 1    | @intrnl/cv                         | 3,010,308         |
| 2    | @klass/core                        | 1,919,159         |
| 3    | classname-variants                 | 1,476,782         |
| 4    | class-variance-authority           | 1,054,036         |
| 5    | @tw-classed/core                   | 952,419           |
| 6    | @klass/core + tailwind-merge       | 662,810           |
| 7    | tailwind-variants(-tailwind-merge) | 311,657           |
| 8    | tailwind-variants(+tailwind-merge) | 263,433           |

<!-- @.variants-compound -->
