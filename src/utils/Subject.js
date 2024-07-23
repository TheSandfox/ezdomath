import { SUBJECTS } from "../datas/subjects";

export function getSubjectsByActId(actId) {
	return SUBJECTS.filter((subject)=>{
		return parseInt(subject.actId) === parseInt(actId);
	});
};