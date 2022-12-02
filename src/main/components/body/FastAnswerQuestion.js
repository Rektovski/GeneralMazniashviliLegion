import "../../styles/fastAnswerQuestionStyle.css";
import {Accordion} from "react-bootstrap";
import {questions} from "../helper/qaForFAQArray";

export default function FastAnswerQuestion() {
    return (
        <>
            <div id={'faq'} className={'QA'}>
                <h3 className={'text-center'}>ხშირად დასმული კითხვები</h3>
                <Accordion defaultActiveKey={'0'}>
                    {
                        questions.map((item, id) => (
                            <Accordion.Item key={id} eventKey={id.toString()}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>{item.answer}</Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>
            </div>
        </>
    )
}