import './App.css';
import Hand from './components/hand/Hand';
import Logo from './components/logo/Logo';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image8 from './assets/image8.png';



function App() {


const handOfMonsters = [
  { name: "Pipo", color: "#F2DFDF" , img: image4},
  { name: "Chuky", color: "rgba(107, 186, 187, 0.23)",img: image5 },
  { name: "Lupo", color: "rgba(82, 95, 167, 0.33)",img: image8}
];






  return (
    <div className="App">
    
      <Logo />
      <Hand monsters={handOfMonsters} /> 
     
    </div>
  );
}

export default App;
