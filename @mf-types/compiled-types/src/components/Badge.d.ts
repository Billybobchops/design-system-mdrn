interface BadgeProps {
    content: string;
    hasMargin?: boolean;
    variant: 'error' | 'success' | 'warning' | 'neutral' | 'informational';
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
