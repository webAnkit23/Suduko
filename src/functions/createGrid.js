import { createSuduko } from "./fillGrid";
import { removeElements } from "./removeElements";
export function createGrid(){
   let grid =[];
   for(let i=0;i<9;i++){
    let row =[];
    for(let j=0;j<9;j++){
        row.push({
            row : i,
            col:j,
            value : 0,
            isVisited : false,
            isRemoved : false,
        })
    }
    grid.push(row);
   }
   createSuduko(grid);
   removeElements(grid,55);
return grid;
}