
import './card.css'
function Card({monster}){
    console.log(monster);
    return(
        <div className="cardContainer" style ={{backgroundColor: monster.color}}>
            <img class="img" src={monster.img} />
         
            <span class="monsterName">{monster.name}</span>
        </div>
    )
}
export default Card