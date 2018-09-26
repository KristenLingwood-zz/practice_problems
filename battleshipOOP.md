battleship design challenge:
What classes, properties, and methods would be needed?

Class Game
  playing: bool
  turn: playerA or playerB, determines which board to show and which player to prompt for coords
  --methods:
    getPlayerNames
    startGame -- creates boards 
    getBombLocation -- get user input for bomb coords
    endGame

potentially could build player class that would do some of the game/board work

Class Board
  player: a or b, whoever owns the board
  cells: list of cells on board, each cell is a node (obj with status)
  ships: arr of arr, list of ships and each ship is an arr of cells
  --methods:
    createShips -- randomly assign ships to board at beginning of game
    dropBomb -- change cell status based on user input


Class Cell
  status: hit, miss, undiscovered

Class Ship
  length: number of cells 
  location: array of cell coords
  sunk: bool (when all cells are changed to hit alert user that ship has been sunk)
    could be method isSunk();
