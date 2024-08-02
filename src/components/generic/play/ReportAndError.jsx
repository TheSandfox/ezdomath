import React, { useMemo, useState } from "react";
import { ACTS } from "../../../datas/acts";
import { SUBJECTS } from "../../../datas/subjects";
import "./ReportAndError.css";

export function ReportAndError({ 
	type,
	title,
	onClose,
	onSubmit,
	user,
	teacherUser,
	subjectId,
	actId
}) {
    const [act, setAct] = useState(isNaN(parseInt(actId))?"":actId);
    const [subject, setSubject] = useState(isNaN(parseInt(subjectId))?"":subjectId);
    const [content, setContent] = useState("");

    const filteredQuestions = useMemo(()=>{
		return !isNaN(parseInt(act)) ? SUBJECTS.filter(subjectItem => subjectItem.actId === parseInt(act)) : [];
	},[act])

	const closeCallback = ()=>{
		if (onClose) {
			onClose({
				type:type,
			})
		}
	}

	const submitCallback = ()=>{
		if (onSubmit) {
			onSubmit({
				type:type,
				fromUserId:user.userId,
				toUserId:teacherUser.userId,
				subjectId:subject,
				content:content
			});
			closeCallback();
		}
	}

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <p className="font_title">{title}</p>
                    <button className="close-button" onClick={closeCallback}>X</button>
                </div>
                <div className="modal-body">
                    <div className="modal-row">
                        <label className="font_main">단원</label>
                        <select id="unit-select" value={act} onChange={(e) => setAct(e.target.value)}>
                            <option className="font_small" value="">단원을 선택하세요</option>
                            {ACTS.map(act => (
                                <option className="font_small" key={act.actId} value={act.actId}>{act.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-row">
                        <label className="font_main">문제</label>
                        <select id="question-select" value={subject} onChange={(e) => setSubject(e.target.value)} disabled={!act}>
                            <option value="">문제를 선택하세요</option>
                            {filteredQuestions.map(subject => (
                                <option className="font_small" key={subject.subjectId} value={subject.subjectId}>{subject.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-row">
                        <label className="font_main">내용 작성:</label>
                        <textarea
                            id="content-textarea"
                            className="font_small"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="내용을 입력하세요..."
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="cancel-button" onClick={closeCallback}>취소</button>
                    <button className="submit-button" onClick={submitCallback}>제보하기</button>
                </div>
            </div>
        </div>
    );
}
