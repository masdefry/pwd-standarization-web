import { useFetchAddressQuery } from "~/features/users/address/api/UseFetchAddressQuery";

export const useFetchAddress = () => {
    const { data: userAddress, status: statusFetchAddress } = useFetchAddressQuery()

    return {
        userAddress, 
        statusFetchAddress
    }
}