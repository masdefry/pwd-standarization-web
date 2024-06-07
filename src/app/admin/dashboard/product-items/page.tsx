import AdminHeader from "~/components/admin/components/AdminHeader"

export default function ProductItemsPage(){
    return(
        <>
            <AdminHeader 
                linkItems={['Admin', 'Dashboard', 'Product Items']}
            />
            <h1 className='px-10 py-1 text-3xl font-bold'>
                Product Items Page
            </h1>
        </>
    )
}