import React from 'react';
import classes from './Heading.module.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    addOnClass?: string;
    children: React.ReactNode;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: React.FC<HeadingProps> = ({ level, children, addOnClass }) => {
    const headingClass = `${classes[level]} ${addOnClass ? addOnClass : ''}`;

    return React.createElement(level, { className: headingClass }, children);
};

export default Heading;
