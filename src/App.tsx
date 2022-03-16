import React, { useEffect, useState } from 'react';
import { DivGlobal } from './styles/app';


const inicial_seconds = 25 * 60;


function App() {


const [amountseconds, setAmountSeconds] = useState(inicial_seconds);

useEffect(() =>{

  if( amountseconds > 0){

  setTimeout(() => {
    setAmountSeconds(state => state - 1);
  }, 1000);
}else{
  alert(`chegou ao fim`)
}
},[amountseconds]);

const minutes = Math.floor(amountseconds / 60);
const seconds = amountseconds % 60;

  return (
   
    <DivGlobal className='timer'>
       <span>{String(minutes).padStart(2 , `0`)}</span>
       <span>:</span>
       <span>{String(seconds).padStart(2 , `0`)}</span>
    </DivGlobal>
  );
}

export default App;
