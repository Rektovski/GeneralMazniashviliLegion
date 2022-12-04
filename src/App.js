import './App.css';
import Header from "./main/components/header/Header";
import Body from "./main/components/body/Body";
import Footer from "./main/components/footer/Footer";
import {useState} from "react";
import LightContext from "./main/context/LightContext";
import FirstLoading from "./main/components/header/FirstLoading";
import Navbar from "./main/components/header/Navbar";
import {Container} from "react-bootstrap";

export default function App() {
    const [light, setLight] = useState(true);

    return (
        <LightContext.Provider value={{light, setLight}}>
            <div className={`App ${light ? "bg-light text-dark" : "bg-dark text-light"}`}>
                <Navbar/>
                <Header/>
                <Container>
                    <FirstLoading/>
                    <Body/>
                    <Footer/>
                </Container>
            </div>
        </LightContext.Provider>
    );
}