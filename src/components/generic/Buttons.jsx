import { Link } from 'react-router-dom';
import './buttons.css';
import { Link } from 'react-router-dom';

export function Button({to,onClick,children,className}) {
	return <>
	{
		to
		?<Link to={to} className={className}>
			{children}
		</Link>
		:<div onClick={onClick} className={className}>
			{children}
		</div>
	}
	</>
}

export function ButtonLarge({to,onClick,children,className,active}) {
	const baseClassName = 'genericButton font_main large'+(active?' active':'')
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{children}</Button>
}

export function ButtonMedium({to,onClick,children,className,active}) {
	const baseClassName = 'genericButton font_small medium'+(active?' active':'')
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{children}</Button>
}

export function ButtonSmall({to,onClick,children,className,active}) {
	const baseClassName = 'genericButton font_small small'+(active?' active':'')
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{children}</Button>
}

export function ButtonTab({to,onClick,children,className,icon,active}) {
	const baseClassName = 'genericButton font_main tab'+(active?' active':'')
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{icon}{children}</Button>
}

export function ButtonIcon({to,onClick,children,className,icon,active}) {
	const baseClassName = 'genericButton font_main icon'+(active?' active':'')
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{icon}{children}</Button>
}