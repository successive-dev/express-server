function print_diamond(n: number) {
  const numRows = n;
  const halfRows = Math.ceil(numRows / 2);

  // forward pattern
  for (let row = 1; row <= halfRows; row++) {
    let line = '';

    // appending spaces
    for (let space = halfRows; space > row; space--) {
      line = line + ' ';
    }
    // appending stars
    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      line = line + '*';
    }
    // print line
    console.log(line);
  }

  // rev pattern

  for (let row = halfRows - 1; row >= 1; row--) {
    let line = '';

    // appending spaces to line
    for (let space = halfRows; space > row; space--) {
      line = line + ' ';
    }
    for (let stars = 2 * row - 1; stars >= 1; stars--) {
      line = line + '*';
    }
    console.log(line);
  }
}

// print_diamond(10);

export default print_diamond;
