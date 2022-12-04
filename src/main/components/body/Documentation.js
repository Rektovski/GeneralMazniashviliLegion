import "../../styles/documentationStyle.css";
import {documents} from "../helper/docsArray";
import {useContext} from "react";
import LightContext from "../../context/LightContext";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

export default function Documentation() {
    const {light} = useContext(LightContext);

    const whichFormat = (format) => {
        if (format === "Blog" || format === "Youtube" || format === "PDF") return "Link";
        else if (format === "Powerpoint") return "Download";
    }

    return (
        <>
            <div id={"documentation"} className={'Documentation'}>
                <div className={'DocHead text-center my-5'}>დოკუმენტაცია</div>
                <TableContainer>
                    <Table variant='unstyled' colorScheme={'black'}>
                        <Thead>
                            <Tr className={`${light ? 'text-dark' : 'text-light'}`}>
                                <Th>სახელი</Th>
                                <Th className={'text-center'}>ტიპი</Th>
                                {
                                    window.innerWidth > 430 ?
                                        <Th className={'text-center'}>ფორმატი</Th>
                                        : ""
                                }
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                documents.map((item, id) => (
                                    <Tr key={id}>
                                        <Td >{item.name}</Td>
                                        <Td className={'text-center'}>
                                            <a href={item.url} className={"documentLinkHover"}>{
                                                whichFormat(item.format)
                                            }</a>
                                        </Td>
                                        {
                                            window.innerWidth > 430 ?
                                                <Td className={'text-center'}>{item.format}</Td>
                                                : ""
                                        }
                                    </Tr>

                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}