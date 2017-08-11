function main(number){
    let result = "";
    let num = number;
    if(number > 1){
       for(let i = 0; i < number - 1; i++){
            result += num +" bottles of beer on the wall, "+ num + " bottles of beer."+"\n";
            result += "Take one down and pass it around, "+(num-1)+ " "+ (((num-1) > 1) ? "bottles" : "bottle") + " of beer on the wall."+"\n";
            num --;
       }

    }
    if(num === 1){
        result += num +" bottle of beer on the wall, "+ num + " bottle of beer."+"\n";
        result += "Take one down and pass it around, no more bottles of beer on the wall." + "\n";
        num --;
    }
    if(num === 0){
        result += "No more bottles of beer on the wall, no more bottles of beer."+"\n";
        result += "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
    return result;
}
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("输入一个数字：");
rl.prompt();
rl.on('line',(line) => {
   if(line == "e"){
        rl.close();
   }else {
       console.log(main(line) + "\n按e退出");
   }

});
rl.on('close',function () {
    console.log("bye");
    process.exit(0);
});
module.exports = main;
