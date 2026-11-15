import Nav from "../componets/Nav"
import Footer from "../componets/Footer"



function Layout({children,}){

    return(
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-1">
        {children}

        
            </main>
            <Footer/>
        </div>
    )
}
export default Layout