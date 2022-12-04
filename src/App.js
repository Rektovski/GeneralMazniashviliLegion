import './App.css';
import Header from "./main/components/header/Header";
import Body from "./main/components/body/Body";
import Footer from "./main/components/footer/Footer";
import {useState} from "react";
import LightContext from "./main/context/LightContext";
import FirstLoading from "./main/components/header/FirstLoading";
import Navbar from "./main/components/header/Navbar";
import {Container} from "react-bootstrap";
import Contact from "./main/components/body/Contact";
import {ChakraProvider} from "@chakra-ui/react";

export default function App() {
    const [light, setLight] = useState(true);

    return (
        <ChakraProvider>
            <LightContext.Provider value={{light, setLight}}>
                <div className={`App ${light ? "bg-light text-dark" : "bg-dark text-light"}`}>
                    <FirstLoading/>
                    <Navbar/>
                    <Header/>
                    <Container>
                        <Body/>
                    </Container>
                    <Contact/>
                    <Footer/>
                </div>
            </LightContext.Provider>
        </ChakraProvider>
    );
}