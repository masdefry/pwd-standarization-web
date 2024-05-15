import { Form, Field, ErrorMessage } from 'formik';

const LoginFormField = ({statusLoginMutation, dirty, isValid}: any) => {
    return(
        <Form
            className='flex flex-col gap-5'
        >
            <Field
                name='email'
                type='text'
                placeholder='Type Your Email'
                className='
                    input border border-blue-400 rounded px-1 py-1 w-full focus:outline-blue-400
                '
            />
            <ErrorMessage 
                component='div'
                name='email'
                className='text-red-600'
            />
            <Field
                name='password'
                type='text'
                placeholder='Type Your Password'
                className='
                    input border border-blue-400 rounded px-1 py-1 w-full focus:outline-blue-400
                '
            />
            <ErrorMessage 
                component='div'
                name='password'
                className='text-red-600'
            />
            <button
                disabled={!dirty || !isValid || statusLoginMutation === 'pending'}
                type='submit'
                className={`btn rounded-md ${!dirty || !isValid? 'bg-gray-200' : 'bg-blue-400'} text-white py-2`}
            >
                {
                    statusLoginMutation === 'pending'?
                        'Loading...'
                    :
                        'Login'
                }
            </button>
        </Form>
    )
}

export default LoginFormField;