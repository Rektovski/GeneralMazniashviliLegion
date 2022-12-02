import './App.css';
import Header from "./main/components/header/Header";
import Body from "./main/components/body/Body";
import Footer from "./main/components/footer/Footer";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}