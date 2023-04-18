import "./Feature.css"
import digitize from "../../public/digitaze.png";
import track from "../../public/track.png";
import vector from "../../public/Vector.png"

const Feature = () => {
    return (
        <>
            <div className="features-list">
                <h1 style = {{"textAlign" : "center", "color" :"white"}}>Features</h1>
                <div className="feature-subList">
                    <div className="digitize-section">
                        <img className="featue-img" src = {digitize}></img>
                        <div className="digitize-subSection">
                            <h3 style = {{"color" : "white"}}>Digitize</h3>
                            <span style = {{"color" : "white"}}>A Bird eye view of the entire Biomedical Operations.</span>
                        </div>
                    </div>

                    <div className="digitize-section">
                        <img className="featue-img" src = {track}></img>
                        <div className="digitize-subSection">
                            <h3 style = {{"color" : "white"}}>Track</h3>
                            <span style = {{"color" : "white"}}>Track the product life cycle and service history.</span>
                        </div>
                    </div>


                    <div className="digitize-section">
                        <img className="featue-img" src = {vector} ></img>
                        <div className="digitize-subSection">
                            <h3 style = {{"color" : "white"}}>Biomedical Budget</h3>
                            <span style = {{"color" : "white"}}>Regulate and save budget through analysed data informed</span>
                        </div>
                    </div>

                </div>
            </div>
        
        </>
    )
}

export default Feature;