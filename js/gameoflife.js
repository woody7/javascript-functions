function seed() {

  
 return Array.from(arguments);
  


}

function same([x, y], [j, k]) {

  let Issame = new Boolean(false);


  if (x === j & y === k) {

    Issame = true

  }
  else {
    Issame = false
  }

  return Issame

}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {


  return this.some((c) => same(c, cell));



}

const printCell = (cell, state) => {


  if(contains.call(state, cell)){


    return '\u25A3';


  }
  else{
    return '\u25A2';
  }


};

const corners = (state = []) => {


  if(state.length === 0){

    return {topRight:[0,0], bottomLeft: [0,0]};


  }

  const horizontals = state.map(([x, _]) => x);
  const verticals = state.map(([_, y]) => y);

  return {

    topRight: [Math.max(...horizontals), Math.max(...horizontals)],
    bottomLeft: [Math.min(...verticals), Math.min(...verticals)],
  }


};

const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;