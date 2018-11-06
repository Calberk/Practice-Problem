// Input:"aabbcde"
// Output:"2a2b1c1d1e"

var input = "wwwbbw"

function runLength(str) {
    var letterCount=1;
    var outputArr=[];
    var letterArray = str.split('');
    console.log(letterArray);
    for(var i=0; i<letterArray.length; i++){
        var currentLetter = letterArray[i];
        if(currentLetter === letterArray[i+1]){
            letterCount++
        }else{
            outputArr.push(letterCount);
            outputArr.push(currentLetter);
            letterCount=1;
        }
    }
    var result = outputArr.join('');
    return result;
}
runLength(input);