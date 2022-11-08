import Navbar from "./Navbar";

const Layout = ({children})=>{
    return (
        <>
           <Navbar/>
            <main id="main">
                {children}
            </main>
        </>
    )
}
export default Layout