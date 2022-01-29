var words = ['This ', 'is ', 'JavaScript ', 'Bootcamp! '];

let sentence = ""; 

function createSentence(x){
    for(var i = 0; i < 4; i++ ){
            x += words[i];
    }
    return x; 
}

console.log(createSentence(sentence));