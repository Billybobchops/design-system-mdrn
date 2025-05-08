import { ChevronDown } from '@components/Icon';
import { useId, useState } from 'react';
import classes from './Accordion.module.scss';

interface AccordionProps {
    children?: React.ReactNode;
    title: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const accordionID = useId();
    const accordionContentID = useId();

    const buttonClasses = `${classes.button} ${isOpen ? classes.activeButton : ''}`;
    const iconClasses = `${isOpen ? classes.activeIcon : ''}`;
    const sectionClasses = `${classes.section} ${isFocused ? classes.focusedSection : classes.section}`;

    return (
        <section className={sectionClasses}>
            <h2 className={classes.title}>
                <button
                    aria-controls={accordionContentID}
                    aria-expanded={isOpen}
                    className={buttonClasses}
                    id={accordionID}
                    onBlur={() => {
                        setIsHovered(false);
                        setIsFocused(false);
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                    onFocus={() => setIsFocused(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    type="button"
                >
                    <span className={iconClasses}>
                        <ChevronDown fill={isHovered ? 'var(--theme-a-3)' : 'var(--theme-a-4)'} />
                    </span>
                    <span className="sr-only">
                        {isOpen ? 'Collapse' : 'Expand'} {title}
                    </span>
                    {title}
                </button>
            </h2>
            {isOpen && (
                <div aria-labelledby={accordionID} className={classes.content} id={accordionContentID}>
                    {children}
                </div>
            )}
        </section>
    );
};

export default Accordion;
