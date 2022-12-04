import "../../styles/courseStyle.css";
import {Col, Row} from "react-bootstrap";
import {sylabus} from "../helper/courseArray";
import {Card, CardBody, Stack, Heading, Image, Text} from '@chakra-ui/react';
import {useContext} from "react";
import LightContext from "../../context/LightContext";

export default function Course() {
    const {light} = useContext(LightContext);

    return (
        <>
            <div id={"course"} className={'Course'}>
                <h2 className={'CourseHead text-center'}>რას გთავაზობთ კურსში?</h2>
                <Row>
                    {
                        sylabus.map((item, id) => (
                            <Col className={'SylabusCol'} key={id} sm={12} md={6} lg={4} xl={4} xxl={3}>
                                <Card maxW='sm' className={'CourseCard'}>
                                    <CardBody className={`
                                    ${light ? "text-dark" : "text-light"}
                                    ${light ? "" : "border rounded border-2 border-warning"}
                                    `}>
                                        <Image
                                            src={item.image}
                                            alt='sylabus foto'
                                            borderRadius='lg'
                                            className={'CourseImage'}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{id+1}</Heading>
                                            <Text>
                                                {item.description}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}