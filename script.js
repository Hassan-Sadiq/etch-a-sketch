const container = document.getElementById("container")
function createGrid(rows,high,breadth)
{
    for(let i=0; i<rows; i++){
        for(let j=0; j<rows; j++)
        {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
            const squares = document.getElementsByClassName('square')
            for (let i=0; i<squares.length; i++)
            {
                squares[i].style.width = breadth;
                squares[i].style.height = high;
            }
            sqhover = document.querySelectorAll(".square")
            sqhover.forEach( sq => {
                sq.addEventListener('click',function(e){
                    e.target.style.background = "red";
                }
                )
            })
            sqerase = document.querySelectorAll(".square")
            sqerase.forEach( sq => {
                sq.addEventListener('dblclick',function(e){
                    e.target.style.background = "white";
                }
                )
            })
    
}
createGrid(16,"60px","60px");
function clearGrid(){
    container.querySelectorAll('*').forEach(n => n.remove());
}
function refreshGrid(){
    clearGrid();
    gridRows = prompt("Enter number of squares you want to display in grid(Less than 100): ")
    ht = 960/gridRows;
    wd = 960/gridRows;
    ht = String(ht)+"px";
    wd=String(wd)+"px";
    createGrid(gridRows,ht,wd)
}
const button = document.getElementById("btn")
button.addEventListener('click',refreshGrid);
