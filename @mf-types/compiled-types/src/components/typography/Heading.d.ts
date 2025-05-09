import type { Spacing } from '@styles/spacing';
import React from 'react';
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps {
    children: React.ReactNode;
    classLevel?: HeadingLevel;
    spacing?: Spacing | Spacing[];
    semanticLevel: HeadingLevel;
}
declare const Heading: React.FC<HeadingProps>;
export default Heading;
