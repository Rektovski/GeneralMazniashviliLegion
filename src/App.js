import './App.css';
import Header from "./main/components/header/Header";
import Structure from "./main/components/body/Structure";
import Course from "./main/components/body/Course";
import Documentation from "./main/components/body/Documentation";
import LegionPartner from "./main/components/body/LegionPartner";
import Contact from "./main/components/footer/Contact";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Structure/>
            <Course/>
            <Documentation/>
            <LegionPartner/>
            <Contact/>
        </div>
    );
}