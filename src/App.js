import './App.css';
import Header from "./main/components/header/Header";
import Body from "./main/components/body/Body";
import Footer from "./main/components/footer/Footer";
import {useState} from "react";
import LightContext from "./main/context/LightContext";
import FirstLoading from "./main/components/header/FirstLoading";

export default function App() {
    const [light, setLight] = useState(false);

    return (
        <LightContext.Provider value={{light, setLight}}>
            <div className={`App ${light ? "bg-light text-dark" : "bg-dark text-light"}`}>
                <FirstLoading/>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </LightContext.Provider>
    );
}