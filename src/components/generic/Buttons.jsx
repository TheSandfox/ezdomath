import './buttons.css';

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

export function ButtonLarge({to,onClick,children,className}) {
	const baseClassName = 'genericButton font_main large'
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{children}</Button>
}

export function ButtonMedium({to,onClick,children,className}) {
	const baseClassName = 'genericButton font_small medium'
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{children}</Button>
}

export function ButtonSmall({to,onClick,children,className}) {
	const baseClassName = 'genericButton font_small small'
	const newClassName = className?(baseClassName+' '+className):baseClassName
	return <Button to={to} onClick={onClick} className={newClassName}>{children}</Button>
}