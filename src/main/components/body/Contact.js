import "../../styles/contactStyle.css";
import {Container, Form} from "react-bootstrap";
import emailjs from "emailjs-com";
import ReactCanvasConfetti from "react-canvas-confetti";
import {useCallback, useEffect, useRef, useState} from "react";
import {canvasStyles, getAnimationSettings} from "../helper/contactService";
import {Alert, AlertIcon, Spinner} from "@chakra-ui/react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        await emailjs
            .sendForm(
                'service_tmxa0dr',
                'template_yaeyoff',
                form.current,
                'Y-w-i3WhQ1WOF33bv')
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text + "EmailJS, Invalid Form/Connection Lost/Connection Drop"));
        setLoading(false);
        startAnimation(); // happy animation
        setAlertSuccess(true);

        // now we need alert counter to hide it for example after 3 seconds...
        setTimeout(() => {
            setAlertSuccess(false);
        }, 10000);

        e.target.reset();
    };


    // ***********************
    // ******CONFETTI*********
    // **************EFFECT***
    // ***********************
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
            refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
        }
    }, []);

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 400));
            setTimeout(() => {
                clearInterval(intervalId);
                setIntervalId(null);
            }, 400);
        }
    }, [intervalId, nextTickAnimation]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);
    // ***********************
    // ***********************
    // ***********************
    // ***********************

    return (
        <>
            <Container fluid className={'contactBackgroundImage'}>
                <div id={"contact"} className={'Contact'}>
                    <Form ref={form} onSubmit={sendEmail} className={'contactForm'}>
                        <div className={'ContactFormHead text-center'}>
                            დაგვიკავშირდით:
                        </div>
                        <div className={'FormLabels'}>
                            <Form.Group className="mb-3">
                                <Form.Label>სახელი:</Form.Label>
                                <Form.Control type="text" name={"name"} placeholder="ჩაწერეთ თქვენი სახელი"
                                              required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>ელ-ფოსტა:</Form.Label>
                                <Form.Control type="email" name={"email"} placeholder="ჩაწერეთ თქვენი ელ-ფოსტა"
                                              required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>თემა:</Form.Label>
                                <Form.Control type="text" name={"subject"} placeholder="ჩაწერეთ სასურველი თემა"
                                              required/>
                            </Form.Group>
                        </div>

                        <div>
                            <Form.Group className="mb-3 formText">
                                <Form.Label>ტექსტი:</Form.Label>
                                <Form.Control className={'formTextarea'} type={"text"}
                                              name={"text"} placeholder="აკრიფეთ ტექსტი" required/>
                            </Form.Group>
                        </div>
                        {
                            alertSuccess ?
                                <Alert status='success' variant='solid'>
                                    <AlertIcon />
                                    წარმატებით გაიგზავნა!
                                </Alert>
                                : ""
                        }
                        <div className={'d-flex'}>
                            <div className={'flex-fill'}></div>
                            {
                                loading ?
                                    <div className={"d-flex align-items-center"}>
                                        <Spinner style={{color: "lightgray"}} className={'me-2'} animation="grow"
                                                 role="status"></Spinner>
                                        <span className="">იტვირთება...</span>
                                    </div>
                                    :
                                    <>
                                        <button className={'submitHoorayButton'}>გაგზავნა</button>
                                        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
                                    </>
                            }
                        </div>
                    </Form>
                </div>

            </Container>
        </>
    )
}