import Heading from '@components/typography/Heading';
import type React from 'react';
import classes from './GalleryDisplayArea.module.scss';

interface GalleryDisplayAreaProps {
    title: string;
    children?: React.ReactNode;
}

const GalleryDisplayArea: React.FC<GalleryDisplayAreaProps> = ({ children, title }) => {
    return (
        <section className={classes.galleryDisplayArea}>
            <Heading semanticLevel="h2">{title}</Heading>
            {children}
        </section>
    );
};

export default GalleryDisplayArea;
