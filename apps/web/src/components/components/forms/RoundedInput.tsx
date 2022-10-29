import { ComponentProps, ComponentType } from 'react'

interface RoundedInputProps {
	Icon?: ComponentType<ComponentProps<'svg'>>
	className?: string
	placeholder?: string
}

const RoundedInput: React.FC<RoundedInputProps> = ({
	Icon,
	className = '',
	placeholder = '',
}) => {
	return (
		<div className={`relative flex flex-row ${className}`}>
			{Icon && (
				<Icon
					className={`absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500 ${Icon.propTypes?.className}`}
				/>
			)}
			<input
				type="text"
				className="w-full rounded-full border border-transparent bg-gray-100 py-2 pl-12 pr-4 outline-none focus:border-blue-300"
				placeholder={placeholder}
			/>
		</div>
	)
}

export default RoundedInput
