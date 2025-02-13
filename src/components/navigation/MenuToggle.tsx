import classes from './MenuToggle.module.scss';

interface MenuToggleProps {
    isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen }) => {
    return (
        <div className={`${classes.menuToggle} ${isOpen ? classes.open : ''}`}>
            <span />
            <span />
            <span />
            <span />
        </div>
    );
};

export default MenuToggle;
