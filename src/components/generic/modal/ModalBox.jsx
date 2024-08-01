import { useEffect } from 'react';
import './modalBox.css';
import { ButtonIcon } from '../Buttons';
import { RiCloseLargeFill } from "react-icons/ri";

export function ModalBox({
	title,
	topContents,
	middleContents,
	bottomContents,
	onClose,
	className,
}) {
	useEffect(()=>{
		document.body.style.overflow = 'hidden';
		return ()=>{
			document.body.style.overflow = 'auto';
			if(onClose) {onClose();}
		}
	},[])
	return <div className='modalBoxBackdrop'>
		<div className={`modalBox${className?' '+className:''}`}>
			{/* 최상단 제목&닫기 */}
			<div className='header font_title'>
				{title}
				<ButtonIcon 
					className={'close'}
					icon={<RiCloseLargeFill/>}
					onClick={onClose}
				/>
			</div>
			{/* 상단 */}
			<div className='top'>
				{topContents}
			</div>
			{/* 중단 */}
			<div className='middle'>
				{middleContents}
			</div>
			{/* 하단 */}
			<div className='bottom'>
				{bottomContents}
			</div>
		</div>
	</div>
}