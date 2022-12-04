import "../../styles/headerStyle.css";
import "../../styles/helloTypeWriter.css";

export default function Header() {
    return (
        <>
            <div id={"header"}  className={'backgroundImage'}>
                <div  className={'HeaderText'}>
                    <div className={'HeaderTextInside'}>
                        გენერალ გიორგი მაზნიაშვილის სახელობის ახალგაზრდული ლეგიონი
                    </div>
                </div>
            </div>
        </>
    )
}