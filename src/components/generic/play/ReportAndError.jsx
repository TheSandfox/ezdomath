import React, { useState } from "react";
import { ACTS } from "../../../datas/acts";
import { SUBJECTS } from "../../../datas/subjects";
import "./ReportAndError.css";

export function ReportAndError({ onClose }) {
    const [unit, setUnit] = useState("");
    const [question, setQuestion] = useState("");
    const [content, setContent] = useState("");

    const filteredQuestions = unit ? SUBJECTS.filter(subject => subject.actId === parseInt(unit)) : [];

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <p className="font_title">오류 제보하기/질문하기</p>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <div className="modal-row">
                        <label className="font_main">단원</label>
                        <select id="unit-select" value={unit} onChange={(e) => setUnit(e.target.value)}>
                            <option className="font_small" value="">단원을 선택하세요</option>
                            {ACTS.map(act => (
                                <option className="font_small" key={act.actId} value={act.actId}>{act.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-row">
                        <label className="font_main">문제</label>
                        <select id="question-select" value={question} onChange={(e) => setQuestion(e.target.value)} disabled={!unit}>
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
                    <button className="cancel-button" onClick={onClose}>취소</button>
                    <button className="submit-button">제보하기</button>
                </div>
            </div>
        </div>
    );
}
