import "../../styles/courseStyle.css";
import {Col, Row} from "react-bootstrap";
import {sylabus} from "../helper/courseSylabus";

export default function Course() {
    return (
        <>
            <div id={"course"} className={'Course'}>
                <h2 className={'text-center'}>რას გთავაზობთ კურსში?</h2>
                <Row>
                    {
                        sylabus.map((item, id) => (
                            <Col className={'CourseCard'} key={id} sm={12} md={6} lg={4} xl={4} xxl={3}>
                                <img className={"CourseImage"} src={item.image} alt={'courseSylabusFoto'}/>
                                <div>{item.description}</div>
                            </Col>
                        ))
                    }
                </Row>


                <div className={'coursePreRequestSpace'}>
                    <div className={'CoursePreRequestText'}>
                        კურსზე მოხვედრის მსურველებმა უნდა შეავსოთ ანკეტა (არასრულწლოვნებმა შეავსებინეთ მშობელს),
                        დაგიკავშირდებით მითითებულ ტელეფონის ნომერზე და შეგატყობინებთ ღია კარის, პირველი საველე გასვლის დროს
                        და ადგილს. საველე გასვლაზე იქნებიან მხოლოდ ის კანდიდატები, რომლებმაც უნდა გაიარონ აღნიშნული კურსი და
                        ვისთანაც დავრეკავთ მითითებულ ნომერზე!
                    </div>

                    <div className={''}>
                        <div className={'CoursePreRequestLeft'}>
                            <h3 className={'text-center'}>ასაკი</h3>
                            14-21 წელი.
                        </div>
                        <div className={'CoursePreRequestRight'}>
                            <h3 className={'text-center'}>ღირებულება</h3>
                            უფასო
                        </div>

                        <div className={'CoursePreRequestLeft'}>
                            <h3 className={'text-center'}>კვება</h3>
                            ახალწვეულმა თავად უნდა წამოიღოს საკვები
                        </div>
                        <div className={'CoursePreRequestRight'}>
                            <h3 className={'text-center'}>ფიზიკური მდგომარეობა</h3>
                            ახალწვეული უნდა იყოს ჯანმრთელი და შეეძლოს საშუალო დონის დატვირთვების
                            ატანა. ჯანმრთელობასთან დაკავშირებული სხვა მოთხოვნები მოცემულია ანკეტაში.
                        </div>

                        <div className={'CoursePreRequestLeft'}>
                            <h3 className={'text-center'}>შეკრების დრო და ადგილი</h3>
                            შეკრებები ტარდება დასახლებულ პუნქტთან ახლოს (თბილისში ძირითადად
                            ნუცუბიძის ფერდობის და ლისის ზეგანზე) და უმეტესობა სრულდება 17:00-სთ-სთვის. საველე სწავლების
                            საშუალო ხანგრძლიობა 6 საათია. ქალაქგარეთ გადაადგილებას უზრუნველყოფს თავდაცვის სამინისტრო.

                        </div>
                        <div className={'CoursePreRequestRight'}>
                            კურსის წარმატებით დასრულების შემთხვევაში ახალწვეულს გადაეცემა სერტიფიკატი და სურვილის
                            შემთხვევაში გახდება ლეგიონის წევრი. კურსის წარმატებით დასრულება არ წარმოშობს ვალდებულებას
                            სახელმწიფოს წინაშე.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}