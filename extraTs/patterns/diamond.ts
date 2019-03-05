function print_diamond(n: number) {
    const num_rows = n;
    const half_rows = Math.ceil(num_rows / 2);

    //forward pattern
    for (let row = 1; row <= half_rows; row++) {
        let line = "";

        // appending spaces
        for (let space = half_rows; space > row; space--) {
            line = line + " ";
        }
        //appending stars
        for (let stars = 1; stars <= 2 * row - 1; stars++) {
            line = line + "*";
        }
        //print line
        console.log(line);
    }

    // rev pattern

    for (let row = half_rows - 1; row >= 1; row--) {
        let line = "";

        //appending spaces to line
        for (let space = half_rows; space > row; space--) {
            line = line + " ";
        }
        for (let stars = 2 * row - 1; stars >= 1; stars--) {
            line = line + "*";
        }
        console.log(line);
    }
}

// print_diamond(10);

export default print_diamond;