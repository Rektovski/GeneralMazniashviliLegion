import "../../styles/fastAnswerQuestionStyle.css";
import {Accordion, Col, Row} from "react-bootstrap";
import {questions} from "../helper/qaForFAQArray";
import {useContext} from "react";
import LightContext from "../../context/LightContext";

export default function FastAnswerQuestion() {
    const {light} = useContext(LightContext);

    return (
        <>
            <div id={'faq'} className={'QA'}>
                <h3 className={'text-center m-2 p-4'}>ხშირად დასმული კითხვები</h3>
                <Accordion defaultActiveKey={'0'} >
                    <Row>
                        {
                            questions.map((item, id) => (
                                <Col key={id} sm={12} md={6} lg={6} xl={6} xxl={4}>
                                    <Accordion.Item className={'m-4'} eventKey={id.toString()}>
                                        <Accordion.Header>{item.question}</Accordion.Header>
                                        <Accordion.Body className={`${light ? "bg-light text-dark" : "bg-dark text-light"}`}>{item.answer}</Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                            ))
                        }
                    </Row>
                </Accordion>
            </div>
        </>
    )
}