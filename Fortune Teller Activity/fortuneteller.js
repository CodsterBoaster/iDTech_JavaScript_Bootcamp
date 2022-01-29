let fortune = 34;
/*
1. Create a variable called "fortune" and assign a number between 0 - 10.

2. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
3. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.

4. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.

5. If the fortune is out of range, then the fortune can't be read correctly.

*/
if(fortune >= 0 && fortune <= 3){
    console.log("you have a low fortune");
}
else if(fortune > 3 && fortune <= 7){
    console.log("you have an average fortune.");
}
else if(fortune > 7 && fortune <= 10){
    console.log("you have a high fortune.");
}
else{
    console.log("the fortune can't be read correctly.");
}