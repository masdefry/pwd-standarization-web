import { axiosInstance } from '~/utils/AxiosInstance';
import {useQuery} from '@tanstack/react-query';

export const useFetchAddressQuery = () => {
    const {status, data, refetch} = useQuery({
        queryFn: async() => {
          const response = await axiosInstance.get('/user/address', {
            headers: {
                authRefreshKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhNjlmODgxLTk3ZGItNGEwYi1iZTE1LWU5Y2I3N2Q5N2Y5NyIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzA4MTg2NTQ3LCJleHAiOjE3MDgxODcwNDd9.7tSUmPsBRLEwSz7HvV9lT7oiDYi-QfUXfYJ7K-su7is',
                authAccessKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhNjlmODgxLTk3ZGItNGEwYi1iZTE1LWU5Y2I3N2Q5N2Y5NyIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzA4MTg2NTQ3LCJleHAiOjE3MDgxODY4NDd9.VIBkHwYIoVFtozlXNiaAEOJJGswQNIvcoFzKb2OzVTA'
            }
          })
    
          return response.data.data.addresses
        },
        queryKey: ["address"],
        
    })

    return{
        status,
        data,
        refetch
    }
}