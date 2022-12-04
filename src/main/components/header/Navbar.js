import "../../styles/navbarStyle.css";
import logo from "../../images/logo.png";
import {useContext, useState} from "react";
import {BsSun as SunIcon, BsFillMoonStarsFill as MoonIcon} from "react-icons/bs";
import LightContext from "../../context/LightContext";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const {light, setLight} = useContext(LightContext);
    const rect1 = {transform: "rotate(405deg)", position: "relative", top: 7, backgroundColor: "white"};
    const rect2 = {transform: "rotate(1485deg)", backgroundColor: "white"};
    const rect3 = {transform: "rotate(-405deg)", position: "relative", top: -7, backgroundColor: "white"};
    const dayStyle = {
        background: "darkcyan",
        padding: "7px",
        borderRadius: "100px"
    }
    const nightStyle = {
        background: "darkslategray",
        color: "#ffea2f",
        padding: "7px",
        borderRadius: "100px"
    }

    const changeLight = () => {
        setLight(!light);
    }

    return (
        <>
            <div className={'Navbar d-flex align-items-center'}>
                <div className={'navbarLogoSpace d-flex align-items-center flex-fill'}>
                    <img onClick={() => {
                        window.location.replace("/")
                    }} className={`navbarLogo me-2`} src={logo} alt={"logo"}/>
                    <div className={'NavbarName me-5'}>ლეგიონი</div>
                    <div onClick={changeLight} style={light ? dayStyle : nightStyle}>
                        {light ? <MoonIcon className={'moonIcon'} size={30}/> :
                            <SunIcon className={'sunIcon'} size={30}/>}
                    </div>
                </div>
                {
                    window.innerWidth > 1280 ?
                        <>
                            <div className={'navbarLinks'}>
                                <a href={"#header"}>ჩვენს შესახებ</a></div>
                            <div className={'navbarLinks'}>
                                <a href={"#news"}>სიახლე</a></div>
                            <div className={'navbarLinks'}>
                                <a href={"#course"}>კურსები</a></div>
                            <div className={'navbarLinks'}>
                                <a href={"#documentation"}>დოკუმენტაცია</a></div>
                            <div className={'navbarLinks'}>
                                <a href={"#legionPartner"}>ანგარიშები</a></div>
                            <div className={'navbarLinks'}>
                                <a href={"#faq"}>ხ.დ.კ</a></div>
                            <div className={'navbarLinks'}>
                                <a href={"#contact"}>კონტაქტი</a>
                            </div>
                        </>
                        :
                        <>
                            <div className={`NavbarMenuIcon`}>
                                <div className={`NavbarBurger`} onClick={() => setMenu(!menu)}>
                                    <div style={menu ? rect1 : {}} className={'rectangle1'}></div>
                                    <div style={menu ? rect2 : {}} className={'rectangle2'}></div>
                                    <div style={menu ? rect3 : {}} className={'rectangle3'}></div>
                                </div>
                                {
                                    menu ?
                                        <>
                                            <div className={'menuNavbarLinks'}>
                                                <div className={'navbarLinks'}>
                                                    <a href={"#header"}>ჩვენს შესახებ</a></div>
                                                <div className={'navbarLinks'}>
                                                    <a href={"#structure"}>სტრუქტურა</a></div>
                                                <div className={'navbarLinks'}>
                                                    <a href={"#course"}>კურსები</a></div>
                                                <div className={'navbarLinks'}>
                                                    <a href={"#documentation"}>დოკუმენტაცია</a></div>
                                                <div className={'navbarLinks'}>
                                                    <a href={"#legionPartner"}>ანგარიშები</a></div>
                                                <div className={'navbarLinks'}>
                                                    <a href={"#header"}>ხ.დ.კ</a></div>
                                                <div className={'navbarLinks'}>
                                                    <a href={"#contact"}>კონტაქტი</a>
                                                </div>
                                            </div>
                                        </>
                                        : ""
                                }
                            </div>
                        </>
                }
            </div>
        </>
    )
}