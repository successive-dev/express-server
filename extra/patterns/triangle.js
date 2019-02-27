if(!process.argv[2]){
    process.exit(1);
}

// getting the number of rows to be printed 
const num_rows = process.argv[2];


//forward pattern
for(var row=1;row<=num_rows;row++){
    var line = "";

    // appending spaces
    for(var space=num_rows;space>row;space--){
        line = line+" ";
    }
    //appending stars
    for(var stars=1;stars<=2*row-1;stars++){
        line = line + "*";
    }
    //print line
    console.log(line);
}
