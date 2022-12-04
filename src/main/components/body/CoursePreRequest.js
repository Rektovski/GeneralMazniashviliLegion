import "../../styles/coursePreRequestStyle.css";

export default function CoursePreRequest() {
    return (
        <>
            <div className={'coursePreRequestSpace'}>
                <div className={'CoursePreHead text-center'}>კურსზე მოხვედრის წინაპირობები</div>
                <div className={'CoursePreRequestText'}>
                    კურსზე მოხვედრის მსურველებმა უნდა შეავსოთ ანკეტა (არასრულწლოვნებმა შეავსებინეთ მშობელს),
                    დაგიკავშირდებით მითითებულ ტელეფონის ნომერზე და შეგატყობინებთ ღია კარის, პირველი საველე გასვლის დროს
                    და ადგილს. საველე გასვლაზე იქნებიან მხოლოდ ის კანდიდატები, რომლებმაც უნდა გაიარონ აღნიშნული კურსი და
                    ვისთანაც დავრეკავთ მითითებულ ნომერზე!
                </div>

                <div className={'PreREQTags text-light'}>
                    <div className={'CoursePreRequestLeft'}>
                        <h3 className={'text-center'}>ასაკი</h3>
                        14-21 წელი.
                    </div>
                    <div className={'CoursePreRequestRight'}>
                        <h3 className={'text-center'}>ღირებულება</h3>
                        უფასო
                    </div>
                    <div className={'CoursePreRequestLeft'}>
                        <h3 className={'text-center'}>საკვები</h3>
                        თქვენი
                    </div>
                    <div className={'CoursePreRequestRight'}>
                        <h3 className={'text-center'}>დღე</h3>
                        შაბათი/კვირა
                    </div>
                    <div className={'CoursePreRequestLeft'}>
                        <h3 className={'text-center'}>დღიური გეგმა</h3>
                        6-8 საათიანი სწავლება
                    </div>
                </div>
            </div>
        </>
    )
}