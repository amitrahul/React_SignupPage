import React from "react";
import ReactDOM from "react-dom/client"
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppDownload from "./components/AppDownload";
import Feature from "./components/Feature";
import "./App.css"

const AppLayout = () =>{
    return(
            <div className="app">
                <Header/>
                <div className="body-data">
                    <Feature/>
                    <SignIn/>
                </div>
                <AppDownload/>
                <Footer/>
            </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)