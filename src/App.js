import { useState } from "react";

import Club from './assets/club.png';
import Diamond from './assets/diamond.png';
import Heart from './assets/heart.png';

const secureRandomInRange = (n) => {
  if (n < 0) throw new Error("Range must be a non-negative number.");

  const array = new Uint32Array(1);
  const max = Math.abs(n);

  do {
    crypto.getRandomValues(array);
  } while (array[0] >= Math.floor((2 ** 32 / max) * max)); 

  return array[0] % max;
}

export default function App() {
  var images = [Club, Diamond, Heart]
  var suits = ["club", "diamond", "heart"]
  var cards = ["Ace", "Two", "Three", "Jack", "Queen", "King"]

  const [suit, setSuit] = useState(secureRandomInRange(suits.length))
  const [card, setCard] = useState(secureRandomInRange(cards.length))

  const handleSuitDraw = () =>{

    setTimeout(()=>{}, 150)
    setSuit(secureRandomInRange(suits.length))
    setCard(secureRandomInRange(cards.length))
  }

  return (
    <div onPointerDown={() => handleSuitDraw()}  
      className="App touch-manipulation select-none h-svh w-screen flex flex-col justify-center items-center active:opacity-50 active:blur-lg duration-100 ease-out transition-all">
      <img className="w-64 pointer-events-none" src={images[suit]} alt="" />
      <div className="flex flex-col justify-center items-center gap-0.5">
        <span className="text-2xl font-semibold capitalize">{suits[suit]}s</span>
        <span className="text-xl font-medium capitalize ">Devil: <span className="font-semibold">{cards[card]}</span></span>
      </div>
    </div>
  );
}
