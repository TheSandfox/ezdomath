import React, { useState } from "react";
import { ACTS } from "../../../datas/acts"; // ACTS 데이터 가져오기
import "./ReportAndError.css";

export function ReportAndError({ onClose }) {
    const [unit, setUnit] = useState("");
    const [question, setQuestion] = useState("");
    const [content, setContent] = useState("");

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>모달창 제목(오류 제보하기/질문하기)</h2>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <div className="modal-row">
                        <label htmlFor="unit-select">단원</label>
                        <select id="unit-select" value={unit} onChange={(e) => setUnit(e.target.value)}>
                            <option value="">단원을 선택하세요</option>
                            {ACTS.map(act => (
                                <option key={act.actId} value={act.actId}>{act.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-row">
                        <label htmlFor="question-select">문제</label>
                        <select id="question-select" value={question} onChange={(e) => setQuestion(e.target.value)}>
                            <option value="">문제를 선택하세요</option>
                            {/* 문제 옵션 추가 */}
                        </select>
                    </div>
                    <div className="modal-row">
                        <label htmlFor="content-textarea">내용 작성:</label>
                        <textarea
                            id="content-textarea"
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
