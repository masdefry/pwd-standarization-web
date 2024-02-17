const AddressList = ({
    id, 
    receiver,
    phoneNumber, 
    address
}) => {
    return(
        <div key={id} className='card w-[500px] bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className='card-title'>Home</h2>
                <h5 className='text-md font-bold'>{receiver}</h5>
                <p>{address}</p>
                <div className='card-actions justify-end'>
                <div className='flex justify-end gap-5'>
                    <button className='btn'>Edit</button>
                    <button className='btn btn-error text-white'>Delete</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AddressList;