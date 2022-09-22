interface AvatarProps {
	size?: string
}

const Avatar: React.FC<AvatarProps> = ({ size = '3rem' }) => {
	return <div style={{ height: size, width: size }} className={`rounded-full bg-black`}></div>
}

export { Avatar }
