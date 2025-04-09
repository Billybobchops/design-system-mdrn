import type { Spacing } from '@styles/spacing';
import clsx from 'clsx';
import React from 'react';
import classes from './Heading.module.scss';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
    children: React.ReactNode;
    classLevel?: HeadingLevel;
    spacing?: Spacing | Spacing[];
    semanticLevel: HeadingLevel;
}

const Heading: React.FC<HeadingProps> = ({ children, classLevel, spacing, semanticLevel }) => {
    const headingClass = clsx(classes[classLevel ?? semanticLevel], spacing);

    return React.createElement(semanticLevel, { className: headingClass }, children);
};

export default Heading;
