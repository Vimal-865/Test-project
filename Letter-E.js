let v = 5;
let string = "";

// Letter E

for ( i = 0; i < v; i++) {
    for ( j = 0; j < v; j++ ) {
        if ( i === 0 || i === v-1 || i === v-3) {
            string += "*";
        }
        else {
            if ( j === 0 || j === v-1 ){
                string += "*";
            }
            else {
                string += " ";
            }
        }
    }
    string += "\n";
}

console.log(string);