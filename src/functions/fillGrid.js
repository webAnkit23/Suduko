let numbers =[1,2,3,4,5,6,7,8,9];

function shufflenumbers(numbers){
    for(let i=0;i<numbers.length;i++){
        let one = Math.floor(Math.random()*(numbers.length-1)); 
        let temp = numbers[i];
        numbers[i] = numbers[one];
        numbers[one] =temp;
    }
}

export function createSuduko(grid){
    shufflenumbers(numbers);
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(!grid[i][j].isVisited){
                for(let k=0;k<numbers.length;k++){
                    if(isNumberValid(numbers[k],i,j,grid)){
                       grid[i][j].value = numbers[k];
                      grid[i][j].isVisited = true;
                     if(createSuduko(grid)){
                        return true;
                     }
                     else{
                        grid[i][j].value = 0;
                       grid[i][j].isVisited = false;
                     }
                }
              }
              return false;
            } 
      }
    }
    return true;
}
export function isNumberValid(number, row, col, grid) {
    // Check row and column
    for (let i = 0; i < 9; i++) {
        if (grid[row][i].value === number || grid[i][col].value === number) {
            return false;
        }
    }
    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[startRow + i][startCol + j].value === number) {
                return false;
            }
        }
    }
    return true;
}