import { nanoid } from 'nanoid'
import { useState } from 'react'
import Dice from './components/Dice'

function App() {
	const [dice, setDice] = useState(allNewDice())

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

	const rollDice = () => {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? { ...die } : DiceDefault()
			})
		)
	}

	const holdDice = (id) => {
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.id === id ? { ...die, isHeld: !die.isHeld } : { ...die }
			})
		)
	}

	const diceElements = dice.map((newDiceTwin) => (
		<Dice
			key={newDiceTwin.id}
			value={newDiceTwin.value}
			isHeld={newDiceTwin.isHeld}
			holdDice={() => holdDice(newDiceTwin.id)}
		/>
	))

	return (
		<>
			<main>

				<div className='intro'>
					<h1 className='title'>Tenzies</h1>
					<p className='p1'>
						Roll until all dice are the same.
					</p>

					<p className='p2'>
					Click each die to freeze it at its current value between rolls.
					</p>
				</div>

				<div className='outer-container'>
					<div className='container'>{diceElements}</div>
					<button className='roll-button' onClick={rollDice}>
						Roll
					</button>
				</div>

			</main>
		</>
	)
}

export default App
