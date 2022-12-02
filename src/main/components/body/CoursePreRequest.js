import "../../styles/coursePreRequestStyle.css";

export default function CoursePreRequest() {
    return (
        <>
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
                </div>
            </div>
        </>
    )
}