import { FormikProps } from 'formik';

export interface IFormLogin {
    email: string;
    password: string;
}

export interface IFormikProps{
    formikProps: FormikProps<IFormLogin>
}