import Dice from './components/Dice'

function App() {
	const randomValue = () => {
		return Math.floor(Math.random() * 6) + 1
	}

	return (
		<>
			<main>
        <div className="outer-container">
          <div className='container'>
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
            <Dice value={randomValue} />
          </div>
        </div>
			</main>
		</>
	)
}

export default App
