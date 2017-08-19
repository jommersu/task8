var loadCodes = require("../lib/loadCodes.js");
function main(inputs){
    let allCodes = loadCodes();
    let codeType = getType(inputs, allCodes);
    if(codeType === "code"){
        return code(inputs, allCodes);
    }else {
        return decode(inputs, allCodes);
    }
}
function decode(inputs, allCodes) {
    let arrCode = inputs.split("\t");
    let newArr = arrCode.slice(1 , arrCode.length - 2);
    let codeString = [];
    newArr.forEach(ele => {
        codeString.push(allCodes.find( item => item.code === ele).number);
    });
    if(codeString.length === 9) {
        codeString.splice(5, 0, '-');
    }
    let result = "";
    codeString.forEach(ele => {
        result += ele.toString();
    });
    return result;
}
function code(inputs, allCodes) {
  let arrString = inputs.split("");
  if(arrString.includes("-")){
      arrString.splice(arrString.indexOf("-"), 1);
  }
  let arrNumber = arrString.map(ele => parseInt(ele));
  let sum = arrNumber.reduce( (a,b) => a+b);
  let additionNumber = Math.ceil(sum / 10) * 10 - sum;
  arrNumber.push(additionNumber);
  let result = "|" + "\t";
  arrNumber.forEach(ele => {
    result += allCodes.find( item => item.number === ele).code + "\t";
  });
  result += "|";
  return result;
}
function getType(inputs) {
    return (inputs.includes("|")=== true) ? "decode" : "code";
}
module.exports = main;
