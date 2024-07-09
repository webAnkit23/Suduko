import { useState } from 'react'
import Grid from './components/Grid'
import './App.css'
import { useSuduko } from './context/sudukoContext'
import { createGrid } from './functions/createGrid';
import { solveSuduko } from './functions/SolveSudoku';

function App() {
 const {suduko,setSuduko,isRunning,setisRunning} = useSuduko();

 function updateGrid(){
  if(isRunning)return;
       setSuduko(createGrid(suduko));
 }
 async function startSuduko(){
      if(isRunning)return;
      setisRunning(true);
       solveSuduko(suduko);
       const newSuduko = suduko.slice();
        for(let i=0;i<9;i++){
           setTimeout(()=>{
               for(let j=0;j<9;j++){
                    setTimeout(()=>{
                         if(!newSuduko[i][j].isRemoved)return;
                         let element = document.getElementById(`rows-${i}cols-${j}`);
                         element.style.background = 'lightGreen';
                         element.style.color = 'black';
                         element.innerText = newSuduko[i][j].value;
                    },j*100);
                }
          },i*1000);
         }
         
          setisRunning(false);
 }
 function resetGrid(){
  if(isRunning)return;
      const newSuduko = suduko.slice();
      for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
           newSuduko[i][j].value =0;
           newSuduko[i][j].isVisited =false;
           let element = document.getElementById(`rows-${i}cols-${j}`);
                         element.style.background = 'red';
                         element.innerText = '';
                         element.style.color = 'white';

        }
      }
      setSuduko(newSuduko);
 }
  return (
        <div>
             <div>
                 <h1 className='text-[35px] font-semibold'>Suduko : The game of champions</h1>
                  <div className='flex gap-3'>
                   <button className='p-1 text-lg bg-blue-500 rounded ' disabled={isRunning} onClick={updateGrid}>Create</button>
                   <button  className='p-1 pl-3 pr-3 text-lg bg-green-500 rounded ' disabled={isRunning} onClick={startSuduko}>Start</button>
                   <button  className='p-1 pl-2 pr-2 text-lg bg-red-500 rounded ' disabled={isRunning} onClick={resetGrid}>Reset</button> 
                  </div>
             </div>

             <div className='flex items-center justify-center'>
                   <Grid />
             </div>
        </div>
  )
}

export default App
