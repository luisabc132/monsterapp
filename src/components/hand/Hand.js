import Card from "../card/Card"
import './hand.css'

function Hand({monsters}){

    return(
        <div className="handContainer">

            {/* {monsters.forEach(monster => {
                <Card monster={{name: monster.name, color: monster.color, imagen: monster.imagen }} />
                {console.log('entro')}
                {console.log(monster.name)}
            })} */}



          {monsters.map((monster) => (
            <Card monster={{ name: monster.name, color: monster.color, img: monster.img }} />
            ))} 
         </div>

    )
}
export default  Hand 

/* {monsters.forEach(monster => (
    <Card monster={{ name: monster.name, color: monster.color}} />)
))} */
