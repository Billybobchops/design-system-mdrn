import type { Spacing } from '@styles/spacing';
interface DividerProps {
    isDark: boolean;
    spacing?: Spacing | Spacing[];
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
