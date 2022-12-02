import "../../styles/fastAnswerQuestionStyle.css";
import {Accordion} from "react-bootstrap";
import {questions} from "../helper/qaForFAQArray";
import {useContext} from "react";
import LightContext from "../../context/LightContext";

export default function FastAnswerQuestion() {
    const {light} = useContext(LightContext);

    return (
        <>
            <div id={'faq'} className={'QA'}>
                <h3 className={'text-center'}>ხშირად დასმული კითხვები</h3>
                <Accordion defaultActiveKey={'0'} >
                    {
                        questions.map((item, id) => (
                            <Accordion.Item key={id} eventKey={id.toString()}>
                                <Accordion.Header >{item.question}</Accordion.Header>
                                <Accordion.Body className={`${light ? "bg-light text-dark" : "bg-dark text-light"}`}>{item.answer}</Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>
            </div>
        </>
    )
}