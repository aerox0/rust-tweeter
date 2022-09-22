import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { RoundedInput } from '../components/forms/RoundedInput'

interface SearchWidgetProps {}

const SearchWidget: React.FC<SearchWidgetProps> = ({}) => {
	return <RoundedInput className="mb-4" Icon={MagnifyingGlassIcon} placeholder="Search..." />
}

export { SearchWidget }
