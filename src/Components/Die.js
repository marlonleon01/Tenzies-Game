import  "./Die.css"

export default function Die(prop) {
    return (
        <div className="die-container">
            {prop.value}
        </div>
    )
}