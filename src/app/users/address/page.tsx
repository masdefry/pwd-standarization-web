'use client';

import AddressList from "~/components/users/address/AddressList";   
import { useFetchAddressQuery } from "~/features/users/address/UseFetchAddressQuery";

const AddressPage = () => {
    const { data: addressesData, status } = useFetchAddressQuery()
    
    if(!addressesData) return <div>Loading</div>

    return(
        <div className='p-5'>
            <h1 className='text-2xl font-bold'>
                My Address
            </h1>
            {
                addressesData.map(item => {
                    return(
                        <AddressList 
                            id={item.id}
                            receiver={item.receiver}
                            phoneNumber={item.phoneNumber}
                            address={item.address}
                        />
                    )
                })
            }
        </div>
    )
}

export default AddressPage;