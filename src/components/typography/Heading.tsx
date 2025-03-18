import clsx from 'clsx';
import React from 'react';
import classes from './Heading.module.scss';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
    children: React.ReactNode;
    classLevel?: HeadingLevel;
    semanticLevel: HeadingLevel;
}

const Heading: React.FC<HeadingProps> = ({ semanticLevel, classLevel, children }) => {
    const headingClass = clsx(classes[classLevel ?? semanticLevel]);

    return React.createElement(semanticLevel, { className: headingClass }, children);
};

export default Heading;
