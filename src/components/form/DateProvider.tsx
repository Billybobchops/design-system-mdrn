import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// const { AdapterDayjs } = await import('@mui/x-date-pickers/AdapterDayjs'); // dynamic import to sidestep bundler resolution problems

interface DateProviderProps {
    children?: React.ReactNode;
}

const DateProvider: React.FC<DateProviderProps> = ({ children }) => {
    return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>;
};

export default DateProvider;
