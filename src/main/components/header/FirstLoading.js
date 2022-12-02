import {Container, ProgressBar} from "react-bootstrap";
import {useEffect, useState} from "react";
import "../../styles/firstLoadingStyle.css";
import "../../styles/headerStyle.css";
import "../../styles/helloTypeWriter.css";

let intervalId;
const timeWhileLoading = 2; // seconds
const timeWhileLoadingMiliSeconds = 1000 * timeWhileLoading; // ms

export default function FirstLoading() {
    const [countDown, setCountDown] = useState(0);
    const [display, setDisplay] = useState('');

    useEffect(() => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            countDown < timeWhileLoading
                ? setCountDown((prevState) => prevState + (timeWhileLoading / 100))
                : clearInterval(intervalId);
        }, timeWhileLoading / 100);
    }, [countDown]);

    useEffect(() => {
        setTimeout(() => {
            setDisplay('none')
        }, timeWhileLoadingMiliSeconds)
    }, [])

    return (
        <div style={{display: display}} className={'firstLoading'}>
            <div className={'helloText css-typing d-flex justify-content-center align-items-center'}>
                <p className={"typerText"}>ვგუშაგობ ერს... მარად!</p>
            </div>
            <Container>
                <ProgressBar
                    animated
                    now={(countDown / timeWhileLoading) * 100}
                    variant={'dark'}
                />
            </Container>
        </div>
    )
}