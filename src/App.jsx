import { useState } from 'react'
import Dice from './components/Dice'

function App() {
  // Generating an array of 10 numbers and the maximum number generated being 6, plus no 0 in array.
	const allNewDice = () => Array.from({length: 10}, () => Math.floor(Math.random() * 6) + 1)

  const [dice, setDice] = useState({
    value: allNewDice(),
    isHeld: false
  })

  const diceElements = dice.value.map(number => <Dice value={number} />)

  const rollDice = () => {
    setDice({...dice, value: allNewDice()})
  }

	return (
		<>
			<main>
        <div className="outer-container">
          <div className='container'>
            {diceElements}
          </div>
          <button className='roll-button' onClick={rollDice}>Roll</button>
        </div>
			</main>
		</>
	)
}

export default App
