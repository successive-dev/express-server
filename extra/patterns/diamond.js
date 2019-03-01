function print_diamond(n) {
    const num_rows = n;
    const half_rows = Math.ceil(num_rows / 2);

    //forward pattern
    for (var row = 1; row <= half_rows; row++) {
        var line = "";

        // appending spaces
        for (var space = half_rows; space > row; space--) {
            line = line + " ";
        }
        //appending stars
        for (var stars = 1; stars <= 2 * row - 1; stars++) {
            line = line + "*";
        }
        //print line
        console.log(line);
    }

    // rev pattern

    for (row = half_rows - 1; row >= 1; row--) {
        var line = "";

        //appending spaces to line
        for (var space = half_rows; space > row; space--) {
            line = line + " ";
        }
        for (var stars = 2 * row - 1; stars >= 1; stars--) {
            line = line + "*";
        }
        console.log(line);
    }
}

// print_diamond(10);

export default print_diamond;