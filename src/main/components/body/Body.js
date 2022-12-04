import Structure from "./Structure";
import Course from "./Course";
import CoursePreRequest from "./CoursePreRequest";
import Documentation from "./Documentation";
import LegionPartner from "./LegionPartner";
import FastAnswerQuestion from "./FastAnswerQuestion";

export default function Body() {
    return (
        <>
            <Structure/>
            <Course/>
            <CoursePreRequest/>
            <Documentation/>
            <LegionPartner/>
            <FastAnswerQuestion/>
        </>
    )
}