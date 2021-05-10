import Card from "../card/Card"
import './hand.css'

function Hand({monsters}){

    return(
        <div className="handContainer">

          {monsters.splice(0,3).map((monster) => (
            <Card key ={monster.name} monster = {monster} />
            ))} 
         </div>

    )
}
export default  Hand 

/* {monsters.forEach(monster => (
    <Card monster={{ name: monster.name, color: monster.color}} />)
))} */
