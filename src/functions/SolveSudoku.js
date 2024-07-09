import { isNumberValid } from "./fillGrid";


//uniqueSolution
//solution exists
export function hasUniqueSolution(grid){
 let count =0;
    function solver(){
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(!grid[i][j].isVisited&&grid[i][j].value===0){  
                    for(let k=1;k<10;k++){
                        if(isNumberValid(k,i,j,grid)){
                            grid[i][j].value =k;
                            grid[i][j].isVisited = true;
                               if(solver()){
                                count++;
                               }
                               grid[i][j].value =0;
                               grid[i][j].isVisited = false;   
                        }
                    }
                    return false;
                }
            }
          }
     return true;
    }
   solver();
   return count;    
}

async function sleep(delay){

    return new Promise((resolve)=>{
        setTimeout(()=>{
                  resolve(10);
        },delay);
    })
}
export  function solveSuduko(grid){
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(!grid[i][j].isVisited&&grid[i][j].value===0){  
                    for(let k=1;k<10;k++){
                        if(isNumberValid(k,i,j,grid)){
                            grid[i][j].value =k;
                            grid[i][j].isVisited = true;
                               if(solveSuduko(grid)){
                                  return true;
                               }
                               grid[i][j].value =0;
                               grid[i][j].isVisited = false;   
                        }
                    }
                    return false;
                }
            }
          }
     return true;
   
}