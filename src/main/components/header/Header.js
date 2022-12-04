import "../../styles/headerStyle.css";
import logo from "../../images/logo.png";

export default function Header() {
    return (
        <>
            <div id={"header"}  className={'backgroundImage'}>
                <div className={'Header'}>
                    <div className={'HeaderText'}>
                        გენერალ გიორგი მაზნიაშვილის სახელობის ახალგაზრდული ლეგიონი
                    </div>
                    <div className={'HeaderPhrase'}>
                        <div>
                            <img className={'HeaderLogo'} src={logo} alt={"HeaderLogo"}/>
                        </div>
                        <div>
                             გუშაგობ ერს, მარად!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}