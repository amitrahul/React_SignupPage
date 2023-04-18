import "./Footer.css";
import logo from "../../public/logo1.png"

const Footer = () =>{
    return(
        <>
        <div className="footer-Content">
            <div className="fotter-subContent">
                <img src = {logo}></img>
                <span>© 2020 VAJRA, All Rights Reserved</span>
            </div>
            <div>
            Terms & conditions | FAQ’s
            </div>
        </div>
        </> 
    )
}

export default Footer;