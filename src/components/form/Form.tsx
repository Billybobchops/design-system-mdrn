import { type DefaultValues, FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

interface FormProps<T extends Record<string, unknown>> {
    defaultValues?: DefaultValues<T>;
    onSubmit: SubmitHandler<Record<string, unknown>>;
    children: React.ReactNode;
}

const Form = <T extends Record<string, unknown>>({ defaultValues, onSubmit, children }: FormProps<T>) => {
    const methods = useForm({ defaultValues, mode: 'onBlur' });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default Form;
