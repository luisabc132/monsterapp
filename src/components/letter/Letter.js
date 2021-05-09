import "./letter.css";
function Letter({color, text}){

    return(
        <div className = "letterContainer" style = {{backgroundColor: color}}>{text.toUpperCase()}</div>
    )
}
export default Letter
