import { useWindowSize } from '@uidotdev/usehooks'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Dice from './components/Dice'

function App() {
	const [dice, setDice] = useState(allNewDice())

	const [tenzies, setTenzies] = useState(false)

	// the default values of dice
	function DiceDefault() {
		return {
			value: Math.floor(Math.random() * 6) + 1,
			isHeld: false,
			id: nanoid(),
		}
	}

	// Generating an array of 10 numbers and the maximum number generated being 6, plus no 0 in array.
	function allNewDice() {
		const newDice = []
		for (let i = 0; i < 10; i++) {
			newDice.push(DiceDefault())
		}
		return newDice
	}

	function restartGame() {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return DiceDefault()
			})
		)

		setTenzies(false)
	}

	// generating random number if dice has "isHeld:false"
	const rollDice = () => {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? { ...die } : DiceDefault()
			})
		)
	}

	// changing the "isHeld" propertie back and forth as the user clicks on the dice
	const holdDice = (id) => {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die }
			})
		)
	}

	useEffect(() => {
		// checks if all dice are checked
		const allHeld = dice.every((die) => die.isHeld === true)

		// checks if all dice have the same number
		const firstValue = dice[0].value
		const allValue = dice.every((die) => die.value === firstValue)

		if (allHeld && allValue) {
			setTenzies(true)
			console.log('you won!')
		}
	}, [dice])

	const diceElements = dice.map((newDiceTwin) => (
		<Dice
			key={newDiceTwin.id}
			value={newDiceTwin.value}
			isHeld={newDiceTwin.isHeld}
			holdDice={() => holdDice(newDiceTwin.id)}
		/>
	))

	const { width, height } = useWindowSize()

	return (
		<>
			<div>{tenzies && <Confetti width={width} height={height} />}</div>
			<main>
				<div className='intro'>
					<h1 className='title'>Tenzies</h1>
					<p className='p1'>Roll until all dice are the same.</p>

					<p className='p2'>
						Click each die to freeze it at its current value between rolls.
					</p>
				</div>

				<div className='outer-container'>
					<div className='container'>{diceElements}</div>
					<button
						className='roll-button'
						onClick={tenzies ? restartGame : rollDice}
					>
						{tenzies ? 'Restart' : 'Roll'}
					</button>
				</div>
			</main>
		</>
	)
}

export default App
