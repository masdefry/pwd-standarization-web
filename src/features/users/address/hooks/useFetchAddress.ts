import { useFetchAddressQuery } from "~/features/users/address/api/useFetchAddressQuery";

export const useFetchAddress = () => {
    const { data: userAddress, status: statusFetchAddress } = useFetchAddressQuery()

    return {
        userAddress, 
        statusFetchAddress
    }
}