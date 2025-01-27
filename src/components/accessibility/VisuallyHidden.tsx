interface VisuallyHiddenProps {
    children: React.ReactNode;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
    return <span className="sr-only">{children}</span>;
};

export default VisuallyHidden;
