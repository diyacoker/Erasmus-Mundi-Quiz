//Test Scores Algorithm
let science = 60;
var query = prompt('Enter Test Score for science');
let scienceTest = (query/science * 100);

let art = 20;
var query = prompt('Enter Test Score for art');
let artTest = (query/art * 100);

let govt = 20;
var query = prompt('Enter Test Score for government');
let govtTest = (query/govt * 100);

let cummulative = (scienceTest + artTest + govtTest)/3 ;
document.write(cummulative)
document.getElementById("cummulative");

if(cummulative <= 59 ) {
    document.write('<h2 style="text-align: center;">Sorry, your test results is Fail!</h2>');
    document.getElementById("result");
}else if(cummulative == 60) {
    document.write('<h2 style="text-align: center;">You are an <b>average</b> student.</h2>');
    document.getElementById("result");
}else if(cummulative > 60 && cummulative <=100) {
    document.write('<h2 style="text-align: center;">You are a <b>genius</b> student.</h2>');
    document.getElementById("result");
}else {
    document.write('<br>Your supplied values are above allowed limits for individual tests');
}