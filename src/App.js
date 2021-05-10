import './App.css';
import Hand from './components/hand/Hand';
import Logo from './components/logo/Logo';
import Pipo from './assets/Pipo.png';
import Chuky from './assets/Chuky.png';
import Lupo from './assets/Lupo.png';
import Carco from './assets/Carco.png';
import Cosito from './assets/Cosito.png';
import Leico from './assets/Leico.png';
import Lora from './assets/Lora.png';
import Papo from './assets/Papo.png';
import Pepo from './assets/Pepo.png';
import Pis from './assets/Pis.png';
import Polo from './assets/Polo.png';
import ButtonHandle from './components/button/ButtonHandle';



function App() {


const handOfMonsters = [
  { name: "Pipo", color: "#F2DFDF" , img: Pipo},
  { name: "Chuky", color: "rgba(107, 186, 187, 0.23)",img: Chuky},
  { name: "Lupo", color: "rgba(82, 95, 167, 0.33)",img: Lupo},
  { name: "Carco", color: "#F2DFDF" , img: Carco},
  { name: "Cosito", color: "rgba(107, 186, 187, 0.23)",img: Cosito},
  { name: "Leico", color: "rgba(82, 95, 167, 0.33)",img: Leico},
  { name: "Lora", color: "#F2DFDF" , img: Lora},
  { name: "Papo", color: "rgba(107, 186, 187, 0.23)",img: Papo},
  { name: "Pepo", color: "rgba(82, 95, 167, 0.33)",img: Pepo},
  { name: "Pis", color: "#F2DFDF" , img: Pis},
  { name: "Polo", color: "rgba(107, 186, 187, 0.23)",img: Polo}
 
  
];






  return (
    <div className="App">
    
      <Logo />
      <Hand monsters={handOfMonsters} /> 
      <ButtonHandle />
     
    </div>
  );
}

export default App;
