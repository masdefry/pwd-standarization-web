import AdminHeader from "~/components/admin/components/AdminHeader"

export default function DasboardPage(){
    return(
        <>
            <AdminHeader 
                linkItems={['Admin', 'Dashboard']}
            />
            <h1 className='px-10 py-1 text-3xl font-bold'>
                Dasboard Page
            </h1>
        </>
    )
}