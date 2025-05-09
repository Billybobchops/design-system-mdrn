import { type DefaultValues, type SubmitHandler } from 'react-hook-form';
interface FormProps<T extends Record<string, unknown>> {
    defaultValues?: DefaultValues<T>;
    onSubmit: SubmitHandler<Record<string, unknown>>;
    children: React.ReactNode;
}
declare const Form: <T extends Record<string, unknown>>({ defaultValues, onSubmit, children }: FormProps<T>) => import("react").JSX.Element;
export default Form;
