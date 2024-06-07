export default function AdminHeader({
    linkItems
}){
    return(
        <div className='text-sm breadcrumbs p-10'>
            <ul>
                {
                    linkItems?.map((item, index) => {
                        return(
                            <li key={index}><a>{item}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}