import "./AppDownload.css"
import appStore from "../../public/appStore.png";
import rectangle from "../../public/rectangle.png";

const AppDownload = () => {
    return (
        <>
            <div className="download" >
                <h2 style={{"color" : "#004F95"}}>Download Our App</h2>
                <img src ={appStore} ></img>
                <img src = {rectangle}></img>
            </div>
        
        </>
    )
}

export default AppDownload;