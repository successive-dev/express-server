function print_triangle(n: number) {
    // getting the number of rows to be printed 
    const num_rows = n;


    //forward pattern
    for (var row = 1; row <= num_rows; row++) {
        var line = "";

        // appending spaces
        for (var space = num_rows; space > row; space--) {
            line = line + " ";
        }
        //appending stars
        for (var stars = 1; stars <= 2 * row - 1; stars++) {
            line = line + "*";
        }
        //print line
        console.log(line);
    }
}
// print_triangle(10);
export default print_triangle;

// module.exports = print_triangle;