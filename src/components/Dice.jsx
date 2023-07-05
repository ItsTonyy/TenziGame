export default function Dice(props) {
	const styles = {
		backgroundColor: props.isHeld ? '#59E391' : 'rgb(235, 235, 235)',
	}

	return (
		<div className='dice' style={styles}>
			<p className='dice-value'>{props.value}</p>
		</div>
	)
}
