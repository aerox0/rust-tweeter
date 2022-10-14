import { InlineFollow } from '../components/InlineFollow'
import { RoundedBlock } from '../components/RoundedBlock'

interface FollowWidgetProps {}

const FollowWidget: React.FC<FollowWidgetProps> = ({}) => {
	return (
		<RoundedBlock title="Who to follow">
			<InlineFollow name="Github" username="@github" />
			<InlineFollow name="Redux" username="@redux" />
			<InlineFollow name="Binance" username="@binance" />
		</RoundedBlock>
	)
}

export { FollowWidget }
