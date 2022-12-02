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
            </div>
        </>
    )
}