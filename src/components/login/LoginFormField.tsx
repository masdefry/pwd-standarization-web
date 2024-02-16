import { Form, Field, ErrorMessage } from 'formik';
import InputRounded from '~/components/cores/InputRounded';

const LoginFormField = ({dirty, isValid}: any) => {
    return(
        <Form
            className='flex flex-col gap-5'
        >
            <Field
                name='email'
                type='text'
            >
                {({field}) => (
                    <>
                        <InputRounded 
                            field={{...field}}
                            placeholder='Type Your Email'
                        />
                        <ErrorMessage 
                            component='div'
                            name='email'
                            className='text-red-600'
                        />
                    </>
                )}
            </Field>
            
            <Field
                name='password'
                type='text'
            >
                {({field}) => (
                    <>
                        <InputRounded 
                            field={{...field}}
                            placeholder='Type Your Password'
                        />
                        <ErrorMessage 
                            component='div'
                            name='password'
                            className='text-red-600'
                        />
                    </>
                )}
            </Field>
            <button
                disabled={!dirty || !isValid}
                type='submit'
                className={`btn rounded-md ${!dirty || !isValid? 'bg-gray-200' : 'bg-blue-400'} text-white py-2`}
            >
                Login
            </button>
        </Form>
    )
}

export default LoginFormField;