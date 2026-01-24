import Navbar from "../components/Nabvar/Navbar"



const Layout = () => {

    return(


        <div className="w-full max-w-[1000px] mx-auto px-6 pb-10">
            <Navbar />
                <main>
                    <Outlet></Outlet>
                </main>
        </div>


    )


}

export default Layout