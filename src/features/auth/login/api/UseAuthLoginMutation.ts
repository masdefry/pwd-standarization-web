import { axiosInstance } from '~/utils/AxiosInstance';
import {useMutation} from '@tanstack/react-query';
import { IFormLogin } from '~/features/auth/login/types';
import { IMutationProps } from '~/features/types';

export const useAuthLoginMutation = ({onSuccess, onError}: IMutationProps) => {
    const {status, mutate, data} = useMutation({
        mutationFn: async({ email, password }: IFormLogin) => {
            try {
                const response = await axiosInstance.post('/auth/login', { email, password });
                return response;
            } catch (error: any) {
                throw new Error(error.response.data.message);
            }  
        },
        onSuccess: (response) => {
            onSuccess(response)
        },
        onError
    })

    return{
        status,
        mutate,
    }
}