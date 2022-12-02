import "../../styles/headerStyle.css";
import "../../styles/helloTypeWriter.css";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <>
            <div id={"header"}  className={'backgroundImage'}>
                <Navbar/>
                <div className={'helloText css-typing d-flex justify-content-center align-items-center'}>
                    <p className={"typerText"}>ვგუშაგობ ერს... მარად!</p>
                </div>

                <div  className={'HeaderText'}>
                    <p>
                        საქართველოს თავდაცვის სამინისტროს პატრონაჟის ქვეშ და მათთან მჭიდრო ურთიერთობით დამოუკიდებელი
                        ორგანიზაცია გენერალ მაზნიაშვილის სახელობის ახალგაზრდული ლეგიონი ამზადებს მსურველ, მოხალისე,
                        მოქალაქეებს სამხედრო-საბაზისო/სალაშქრო კურსში.
                    </p>
                    <p>
                        მსგავსი ორგანიზაციები არსებობენ დასავლეთის თითქმის ყველა ქვეყანაში და ეწევიან, ძირითადად
                        ახალგაზრდებში, პატრიოტული სულისკვეთების წინ წამოწევას.
                    </p>
                    <p>
                        ლეგიონი წარმოადგენს არაკომერციულ იურიდიულ პირს (ს/ნ: 405042403) და აქტიურად
                        ვთანამშრომლობთ თავდაცვის სამინისტროსთან
                    </p>
                </div>
            </div>
        </>
    )
}