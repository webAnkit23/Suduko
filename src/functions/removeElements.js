import { hasUniqueSolution } from "./SolveSudoku";

export function removeElements(grid ,count){

      while(count!=0){

             let randomRow = Math.floor(Math.random()*(grid.length));
             let randomCol =Math.floor(Math.random()*(grid[0].length));
             
              if(grid[randomRow][randomCol].isVisited){
                 let number =grid[randomRow][randomCol].value 
                     grid[randomRow][randomCol].value =0;
                      grid[randomRow][randomCol].isVisited = false;

                      if(hasUniqueSolution(grid)>1){
                        grid[randomRow][randomCol].value =number;
                        grid[randomRow][randomCol].isVisited = true;
                      }
                      else{
                        grid[randomRow][randomCol].isRemoved = true;
                        count--;
                      }
             }

              

     }
    
}