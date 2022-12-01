import structureImage from "../../images/forStructure/structImage.png";
import structureMobileImage from "../../images/forStructure/structMobileImage.png";
import "../../styles/structureStyle.css";

export default function Structure() {
    return (
        <>
            <div className={'m-5'}>
                {
                    window.innerWidth > 1280 ?
                        <div id={"structure"}>
                            <h2 className={'text-center'}>
                                2022 წლის განმავლობაში ლეგიონის სტრუქტურა
                            </h2>
                            <div className={'text-center'}>
                                <img className={"structureImage"} src={structureImage} alt={"structure foto"}/>
                            </div>
                        </div>
                        :
                        <div id={"structure"} className={'mobileVersionStructure'}>
                            <h2 className={'text-center'}>
                                2022 წლის განმავლობაში ლეგიონის სტრუქტურა
                            </h2>
                            <div className={'text-center'}>
                                <img className={"structureMobileImage"} src={structureMobileImage} alt={"structure foto"}/>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}