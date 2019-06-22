let friends = ['Schuyler', 'Ethan', 'Rebecca', 'Jeremiah', 'Thomas'];

let lineNum = 99

loop1:
for (let friend of friends) {

    loop2:
    while (lineNum > 0) {
        if (lineNum > 1) {
            console.log(lineNum + ' lines of code in the file, ' + lineNum + ' lines of code; ' + friend + ' strikes one out, clears is all out, ' + lineNum + ' lines of code in the file');
            --lineNum;
        };
        if (lineNum == 1) {
            console.log(lineNum + ' line of code in the file, ' + lineNum + ' line of code; ' + friend + ' strikes one out, clears is all out, ' + lineNum + ' line of code in the file');
            --lineNum;
        };
        if (lineNum == 0) {
            lineNum = 99
            break loop2;
        };
    };

};