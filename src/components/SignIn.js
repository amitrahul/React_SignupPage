import "./SignIn.css"

const SignIn = () =>{
return(
    <>
        <div className="signin-Container">

            <h2 className="sign" style={{"color" : "#F78117","textAlign" : "center"}}>Sign in</h2>
            
            <div className="sigin-account">

                <h2 style={{"color" : "#004F95"}}>Signin to your account</h2>
                <div className="field">
                    <label >Email id</label>
                    <br></br>
                    <input type="email" name="email" placeholder="xxxxxxxxxxx" />
                </div>
                <div className="field">
                    <label >Password</label>
                    <br></br>
                    <input type="password" name="password" placeholder="xxxxxxxxxxx" />
                </div>
                <div style={{"color" : "#E12C33", "font-weight" : "bold"}}>Forgot password</div>
                <button>Sign in</button>
                <div className="signup" style={{"color" : "#7A7A7A"}}>New to vajra? <span style={{"color" : "#F78117"}}> Sign UP Now</span></div>
                
            </div>
            
        </div>
    
    </>
)
}

export default SignIn;