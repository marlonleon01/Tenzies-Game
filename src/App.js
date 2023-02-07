import Die from "./Die"
import {useState, useEffect} from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const generateNewDie = () => {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    const allNewDice = () => {
        const newDiceArray = []
        for (let i = 0; i < 10; i++) {
            newDiceArray.push(generateNewDie())
        }
        return newDiceArray
    }

    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }

    }, [dice])

    const holdDice = (id) => {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))
    }

    const diceElements = dice.map(die => (
        <Die 
            value={die.value} 
            key={die.id}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    const rollDice = () => {
        if (tenzies) {
            setDice(allNewDice())
            setTenzies(false)
        }
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : generateNewDie()
        }))
    }

    return (
        <main>
            {tenzies && <Confetti /> }
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click 
            each die to freeze it at its current value between rolls.
            </p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice-btn" onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}