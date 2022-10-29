interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
	return (
		<div className="p-2">
			<div className="h-12 w-12 rounded-full bg-black"></div>
		</div>
	)
}

export default Logo
