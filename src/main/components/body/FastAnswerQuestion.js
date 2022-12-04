import "../../styles/fastAnswerQuestionStyle.css";
import {Col, Row} from "react-bootstrap";
import {Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react"
import {questions} from "../helper/qaArray";
import {useContext} from "react";
import LightContext from "../../context/LightContext";

export default function FastAnswerQuestion() {
    const {light} = useContext(LightContext);

    return (
        <>
            <div id={'faq'} className={'QA'}>
                <div className={'FAQHead text-center m-2 p-4'}>ხშირად დასმული კითხვები</div>
                <Accordion allowToggle>
                    <Row>
                        {
                            questions.map((item, id) => (
                                <Col key={id} sm={12} md={6} lg={6} xl={6} xxl={4} className={'g-2'}>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    {item.question}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} className={`${light ? "bg-light text-dark" : "bg-dark text-light"}`}>
                                            {item.answer}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Col>
                            ))
                        }
                    </Row>
                </Accordion>
            </div>
        </>
    )
}