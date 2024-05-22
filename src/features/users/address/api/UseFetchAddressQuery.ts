import { axiosInstance } from '~/utils/AxiosInstance';
import {useQuery, UseQueryResult} from '@tanstack/react-query';

export const useFetchAddressQuery = () => {
    const {status, data, refetch}: UseQueryResult<any, any> = useQuery({
        queryFn: async() => {
          const response = await axiosInstance.get('/user/address')
            
          return response.data.data.addresses
        },
        queryKey: ['fetchAddressQuery'],
        
    })

    return{
        status,
        data,
        refetch
    }
}