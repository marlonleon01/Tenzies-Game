export default function Die(prop) {
    const styles = {
        backgroundColor: prop.isHeld ? "#59E391" : "#FFF"
    }
    
    return (
        <div className="die-face" style={styles}>
            <h2 className="die-num">{prop.value}</h2>
        </div>
    )
}