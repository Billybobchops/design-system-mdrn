const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
const baseClasses = [
    'u-mb',
    'u-mt',
    'u-ml',
    'u-mr',
    'u-mx',
    'u-my',
    'u-pb',
    'u-pt',
    'u-pl',
    'u-pr',
    'u-px',
    'u-py',
] as const;
const noneClasses = ['u-mb-none', 'u-mt-none', 'u-ml-none', 'u-mr-none', 'u-mx-none', 'u-my-none'] as const;

// Generate all possible class combinations
type Size = (typeof sizes)[number];
type BaseClass = (typeof baseClasses)[number];
type NoneClass = (typeof noneClasses)[number];

export type Spacing = `${BaseClass}-${Size}` | NoneClass | '';
