import "./Header.css"
import logo from "../../public/logo1.png"
const Header = () =>{
return(
    <>
        <div className="header">
            <div className="header-item">
                <div className="header-subitem">
                    <img src={logo} alt="logo"></img> 
                    <div style={{"color" : "#004F95"}}>Home</div>
                </div>
                <span >+918971580265</span>
            </div>

        </div>
    
    </>
)
}

export default Header;