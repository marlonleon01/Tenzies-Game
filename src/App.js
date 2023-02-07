import Die from "./Components/Die"

export default function App() {
    const allNewDice = () => {
        let newDiceArray = []
        for (let i = 0; i < 10; i++) {
            newDiceArray.push(Math.ceil(Math.random() * 6))
        }
        return newDiceArray
    }

    allNewDice()
    
    return (
        <main>
            <div className="dice-container">
                <Die 
                    value="1"
                />
                <Die 
                    value="5"
                />
                <Die 
                    value="4"
                />
                <Die 
                    value="3"
                />
                <Die 
                    value="2"
                />
                <Die 
                    value="6"
                />
                <Die 
                    value="5"
                />
                <Die 
                    value="4"
                />
                <Die 
                    value="1"
                />
                <Die 
                    value="2"
                />
            </div>
        </main>
    )
}