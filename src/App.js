import Die from "./Die"
import {useState, useEffect} from "react"


export default function App() {
    const allNewDice = () => {
        let newDiceArray = []
        for (let i = 0; i < 10; i++) {
            newDiceArray.push(Math.ceil(Math.random() * 6))
        }
        return newDiceArray
    }

    const [dice, setDice] = useState(allNewDice())

    const diceElements = dice.map(die => <Die value={die} />)

    const rollDice = () => {
        setDice(allNewDice())
    }

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice-btn" onClick={rollDice}>Roll</button>
        </main>
    )
}