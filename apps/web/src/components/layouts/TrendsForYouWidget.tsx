import { RoundedBlock } from '../components/RoundedBlock'
import { TagInfo } from '../components/TagInfo'

interface TrendsForYouWidgetProps {}

const TrendsForYouWidget: React.FC<TrendsForYouWidgetProps> = ({}) => {
	return (
		<RoundedBlock title="Trends for you">
			<TagInfo name="Python" count="100k" />
			<TagInfo name="GraphQL" count="100k" />
			<TagInfo name="Typescript" count="500k" />
			<TagInfo name="Javascript" count="300k" />
		</RoundedBlock>
	)
}

export { TrendsForYouWidget }
