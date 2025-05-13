declare const sizes: readonly ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
declare const baseClasses: readonly ["u-mb", "u-mt", "u-ml", "u-mr", "u-mx", "u-my", "u-pb", "u-pt", "u-pl", "u-pr", "u-px", "u-py"];
declare const noneClasses: readonly ["u-mb-none", "u-mt-none", "u-ml-none", "u-mr-none", "u-mx-none", "u-my-none", "u-m-none"];
type Size = (typeof sizes)[number];
type BaseClass = (typeof baseClasses)[number];
type NoneClass = (typeof noneClasses)[number];
export type Spacing = `${BaseClass}-${Size}` | NoneClass | '';
export {};
