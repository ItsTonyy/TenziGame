import Dice from './components/Dice'

function App() {
  // Generating an array of 10 numbers and the maximum number generated being 6, plus no 0 in array.
	const allNewDice = () => Array.from({length: 10}, () => Math.floor(Math.random() * 6) + 1)
  const arr = allNewDice()

	return (
		<>
			<main>
        <div className="outer-container">
          <div className='container'>
            <Dice value={arr[0]} />
            <Dice value={arr[1]} />
            <Dice value={arr[2]} />
            <Dice value={arr[3]} />
            <Dice value={arr[4]} />
            <Dice value={arr[5]} />
            <Dice value={arr[6]} />
            <Dice value={arr[7]} />
            <Dice value={arr[8]} />
            <Dice value={arr[9]} />
          </div>
        </div>
			</main>
		</>
	)
}

export default App
