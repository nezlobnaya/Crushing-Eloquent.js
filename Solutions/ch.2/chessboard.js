let size = 8;
let board = '';
for (let ln = 0; ln < size; ln++) {
    for (let chn = 0; chn < size; chn++) {
      if ((chn+ln) % 2 ==0) {
        board += ' ';
      }
      else { board += '#'; 
      }
    }
  board += '\n';
}
console.log (board);