import React from 'react'

import { useSuduko } from '../context/sudukoContext';
export default function Grid() {
   const { suduko} = useSuduko();

  return (
    <div className='mt-10'>
            {suduko.map((row,i)=>{
                return<div key={i} className='flex gap-0'>
               { row.map((cell,j)=>{
                       return <span className={`${j%3==2?'border-r-4':''} ${i%3==2?'border-b-4':''} ${i==0?"border-t-4":""} ${j==0?"border-l-4":''} flex items-center justify-center h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] bg-red-600 border-[1px] sm:h-[40px] font-semibold sm:w-[40px]`} key={`rows-${i}cols-${j}`} id={`rows-${i}cols-${j}`}>
                          {cell.value==0?"" : cell.value}
                        </span>
                 })}
                 </div>
              }
            )}
    </div>
  )
}
