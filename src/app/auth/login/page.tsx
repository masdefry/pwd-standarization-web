    'use client';

    import { Formik } from 'formik';
    import { IFormLogin } from './types';
    import { LoginFormSchema } from '~/schemas/LoginFormSchema';
    import LoginFormField from '~/components/auth/login/LoginFormField';
    import {useLoginMutation} from '~/features/auth/login/UseLoginMutation';
    import { toast, ToastContainer } from 'react-toastify';
    import "react-toastify/dist/ReactToastify.css";

    const LoginPage = () => {
        const { status: statusLoginMutation, mutate: loginMutation } = useLoginMutation({
            onSuccess: (response) => {
                toast.success(response.data.message, {
                    position: "top-left"
                });
            },
            
            onError: (error) => {
                console.log(error)
                alert('Error')
            }
        })
        console.log(statusLoginMutation)

        return(
            <div
                className='px-10 py-10'
            >
                <ToastContainer />
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

                <div className='py-5 w-[300px]'>
                    <Formik<IFormLogin>
                        initialValues={{
                            email: '',
                            password: ''
                        }}    
                        validationSchema={LoginFormSchema}
                        onSubmit={({ email, password }) => {
                            console.log(email)
                            loginMutation({ email, password })
                        }}
                    >
                        {IFormikProps => {
                            const { dirty, isValid } = IFormikProps
                            return(
                                <LoginFormField 
                                    statusLoginMutation={statusLoginMutation}
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