/* for(var i = 1; i <= 20; i++) {
    console.log(i);
    if(i == 7) {
        break;
    }
} */

/* var roastGiven = 1;
while(roastGiven <= 10) {
    console.log(roastGiven, "Roast Den taratari !!");
    roastGiven++;
    if (roastGiven == 5) {
        break;
    }
} */

var roastGiven = 1;
for (;roastGiven <= 10; roastGiven++) {
    if (roastGiven == 5) {
        continue;
    }
    console.log(roastGiven, "Roast Den taratari !!");
    
}