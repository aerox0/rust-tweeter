interface IconTextProps {
	icon: JSX.Element
	children?: React.ReactNode
}

const IconText: React.FC<IconTextProps> = ({ icon, children }) => {
	return (
		<div className="flex flex-row items-center">
			{icon}
			<span className="ml-2">{children}</span>
		</div>
	)
}

export default IconText
