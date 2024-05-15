    'use client';

    import { Formik, FormikProps } from 'formik';
    import { IFormLogin } from '../../../features/auth/login/types';
    import { LoginFormSchema } from '~/schemas/LoginFormSchema';
    import LoginFormField from '~/components/auth/login/LoginFormField';
    import { useAuthLogin } from '~/features/auth/login/hooks/useAuthLogin';
    import { ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

    const LoginPage = () => {
        
        const {
            statusAuthLogin, 
            mutationAuthLogin
        } = useAuthLogin()

        return(
            <div
                className='px-10 py-10'
            >
                <ToastContainer />
                <div data-test='header-section'>
                    <h1
                        className='text-2xl font-bold'
                    >
                        Login Account 
                    </h1>
                    <p
                        className='text-gray-400'
                    >
                        Stay updated with our products
                    </p>
                </div>

                <div data-test='main-section' className='py-5 w-[300px]'>
                    <Formik<IFormLogin>
                        initialValues={{
                            email: '',
                            password: ''
                        }}    
                        validationSchema={LoginFormSchema}
                        onSubmit={({ email, password }) => {
                            mutationAuthLogin({ email, password })
                        }}
                    >
                        {({ dirty, isValid }: FormikProps<IFormLogin>) => {
                            return(
                                <LoginFormField 
                                    statusLoginMutation={statusAuthLogin}
                                    dirty={dirty}
                                    isValid={isValid}
                                />
                            )
                        }}
                    </Formik>
                </div>
            </div>
        )
    }   

    export default LoginPage;