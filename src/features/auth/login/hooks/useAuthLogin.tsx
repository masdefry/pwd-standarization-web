import {useAuthLoginMutation} from '~/features/auth/login/api/useAuthLoginMutation';
import { toast } from 'react-toastify';

export const useAuthLogin = () => {
    const { status: statusAuthLogin, mutate: mutationAuthLogin } = useAuthLoginMutation({
        onSuccess: (response) => {
            toast.success(response.data.message, {
                position: 'top-left'
            });
        },
        
        onError: (error) => {
            alert('Error')
        }
    })

    return {
        statusAuthLogin, 
        mutationAuthLogin
    }
}