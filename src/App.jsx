import { useState } from 'react'
import Dice from './components/Dice'
import { nanoid } from 'nanoid'

function App() {
  const [dice, setDice] = useState(allNewDice())

  // Generating an array of 10 numbers and the maximum number generated being 6, plus no 0 in array.
	function allNewDice() {
    const newDice = []
    for (let i = 0 ; i < 10 ; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false, 
        id: nanoid()
      })
    }
    return newDice
  }

  const rollDice = () => {
    setDice(allNewDice())
  }

  const handleClick = () => {
    setDice(oldDice => !oldDice.isHeld)
  }

  const diceElements = dice.map(newDiceTwin => (
    <Dice key={newDiceTwin.id} value={newDiceTwin.value} isHeld={newDiceTwin.isHeld} onClick={handleClick} />
  ))

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
