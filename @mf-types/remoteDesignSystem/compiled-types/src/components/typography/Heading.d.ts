import React from 'react';
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    addOnClass?: string;
    children: React.ReactNode;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const Heading: React.FC<HeadingProps>;
export default Heading;
