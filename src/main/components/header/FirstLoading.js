import {useEffect, useState} from "react";
import "../../styles/firstLoadingStyle.css";
import "../../styles/headerStyle.css";
import {Container, Progress} from "@chakra-ui/react";

export default function FirstLoading() {
    const [display, setDisplay] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setDisplay('none')
        }, 2000)
    }, [])

    return (
        <div style={{display: display}} className={'firstLoading'}>
            <Container>
                <Progress size="lg" isIndeterminate/>
            </Container>
        </div>
    );
}