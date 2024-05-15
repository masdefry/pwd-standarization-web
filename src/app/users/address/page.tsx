'use client';

import AddressList from '~/components/users/address/AddressList'; 
import { useFetchAddress } from '~/features/users/address/hooks/useFetchAddress'; 
import { IUserAddress } from '../../../features/users/address/types'; 

const AddressPage = () => {
    const {
        userAddress, 
        statusFetchAddress
    } = useFetchAddress()
    console.log(userAddress)
    if(!userAddress) return <div>Loading</div>

    return(
        <div className='p-5'>
            <h1 className='text-2xl font-bold'>
                My Address
            </h1>
            {
                userAddress.map((address: IUserAddress, index: number) => {
                    return(
                        <AddressList 
                            id={address.id}
                            receiver={address.receiver}
                            phoneNumber={address.phoneNumber}
                            address={address.address}
                        />
                    )
                })
            }
        </div>
    )
}

export default AddressPage;