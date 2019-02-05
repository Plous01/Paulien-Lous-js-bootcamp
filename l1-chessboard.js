const GRID_SIZE = 8;

for (let r = 0; r < GRID_SIZE; r++) {

    let line = "";
    let ch = "";
    if (r % 2 == 0) {
        ch = " ";
    } else {
        ch = "#";
    }

    for (let c = 0; c < GRID_SIZE; c++) {
        line = line + ch;
        if (ch === " ") {
            ch = "#";
        } else {
            ch = " ";
        }
    }
    console.log(line);
}
