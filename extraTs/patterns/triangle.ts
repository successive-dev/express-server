function print_triangle(n: number) {
    // getting the number of rows to be printed 
    const num_rows = n;

    // forward pattern
    for (let row = 1; row <= num_rows; row++) {
        let line = "";

        // appending spaces
        for (let space = num_rows; space > row; space--) {
            line = line + " ";
        }
        // appending stars
        for (let stars = 1; stars <= 2 * row - 1; stars++) {
            line = line + "*";
        }
        // print line
        console.log(line);
    }
}

export default print_triangle;
