interface AvatarProps {
	size?: string
	className?: string
}

const Avatar: React.FC<AvatarProps> = ({ size = '3rem', className = '' }) => {
	return (
		<div
			style={{ height: size, width: size }}
			className={`rounded-full bg-black ${className}`}
		></div>
	)
}

export default Avatar
