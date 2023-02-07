import Die from "./Die"
import {useState, useEffect} from "react"
import {nanoid} from "nanoid"
import { node } from "prop-types"

export default function App() {
    const allNewDice = () => {
        let newDiceArray = []
        for (let i = 0; i < 10; i++) {
            newDiceArray.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid
            })
        }
        return newDiceArray
    }

    const [dice, setDice] = useState(allNewDice())

    const diceElements = dice.map(die => <Die value={die.value} key={die.id}/>)

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