import { useState } from "react";

import Club from './assets/club.png';
import Diamond from './assets/diamond.png';
import Heart from './assets/heart.png';

const Random = (n) => {
  return Math.floor(Math.random() * n)
}

function App() {
  var suits = ["club", "diamond", "heart"]
  var cards = ["Ace", "Two", "Three", "Jack", "Queen", "King"]
  var images = [Club, Diamond, Heart]

  const [suit, setSuit] = useState(Random(suits.length))
  const [card, setCard] = useState(Random(cards.length))

  return (
    <div onPointerDown={() => {
        setTimeout(()=>{}, 100)
        setSuit(Random(suits.length))
        setCard(Random(cards.length))
      }}  
      className="App select-none h-svh w-screen flex flex-col justify-center items-center active:opacity-50 active:blur-lg duration-100 ease-out transition-all">
      <img className="w-64 pointer-events-none" src={images[suit]} alt="" />
      <div className="flex flex-col justify-center items-center gap-0.5">
        <span className="text-2xl font-semibold capitalize">{suits[suit]}s</span>
        <span className="text-xl font-medium capitalize ">Devil: <span className="font-semibold">{cards[card]}</span></span>
        {/* <button  className="p-2 bg-red-500 text-white rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>

        </button> */}
      </div>
    </div>
  );
}

export default App;
