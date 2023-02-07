export default function Die(prop) {
    return (
        <div className="die-face">
            <h2 className="die-num">{prop.value}</h2>
        </div>
    )
}