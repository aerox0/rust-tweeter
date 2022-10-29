interface TagInfoProps {
	name: string
	count: string
}

const TagInfo: React.FC<TagInfoProps> = ({ name, count }) => {
	return (
		<a href="#" className="flex flex-col px-3 py-2 hover:bg-gray-200">
			<h4 className="text-[15px] font-semibold">{name}</h4>
			<span className="mt-1 text-xs text-[13px] text-gray-500">{count} Tweets</span>
		</a>
	)
}

export default TagInfo
