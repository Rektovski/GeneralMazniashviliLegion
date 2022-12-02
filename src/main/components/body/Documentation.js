import "../../styles/documentationStyle.css";
import {Table} from "react-bootstrap";
import {documents} from "../helper/docsArray";
import {useContext} from "react";
import LightContext from "../../context/LightContext";

export default function Documentation() {
    const {light} = useContext(LightContext);

    const whichFormat = (format) => {
        if(format === "Blog" || format === "Youtube" || format === "PDF")return "Link";
        else if(format === "Powerpoint")return "Download";
    }

    return (
        <>
            <div id={"documentation"} className={'Documentation'}>
                <h3 className={'text-center'}>დოკუმენტაცია</h3>
                <Table striped bordered hover variant={light ? "light" : "dark"}>
                    <thead>
                    <tr>
                        <th>სახელი:</th>
                        <th className={'text-center'}>ლინკი</th>
                        <th className={'text-center'}>ფორმატი</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        documents.map((item, id) => (
                            <tr key={id}>
                                <td>{item.name}</td>
                                <td className={'text-center'}>
                                    <a href={item.url} className={`${light ? "text-dark" : "text-light"}`}>{
                                        whichFormat(item.format)
                                    }</a>
                                </td>
                                <td className={'text-center'}>{item.format}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </>
    )
}