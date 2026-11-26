import image from "../assets/images/loader.gif"
function Loader(){
    return(
        <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-[rbga(255,255,255,0.7)]">
            <img src={image} className=""/>
        </div>
    )
}
export default Loader