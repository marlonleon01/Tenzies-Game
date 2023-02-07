import Die from "./Die"
import {useState} from "react"
import {nanoid} from "nanoid"

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

    const diceElements = dice.map(die => {
        return <Die 
                    value={die.value} 
                    key={die.id}
                    isHeld={die.isHeld}
                />
})

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