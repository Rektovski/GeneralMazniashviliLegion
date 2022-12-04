import "../../styles/newsStyle.css";
import {news} from "../helper/newsArray";

export default function News() {
    return (
        <>
            <div className={'NewsHead text-center'}>ახალი ამბები</div>
            <div id={'news'} className={'News border border-secondary rounded'}>
                {
                    news.map((item, id) => (
                        <div key={id} className={'p-2 font-monospace'}>
                            <div className={'text-center'}>ახალი ამბავი #{id + 1}</div>
                            <div className={'text-center'}>სათაური: {item.name}</div>
                            <div className={'text-center'}>{item.date}</div>
                            <div>აღწერა: </div>
                            <div>{item.description}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}