"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

let main = require("../lib/main.js");
let loadCodes = require("../lib/loadCodes.js");

describe("codeAndDecode", function(){
    //sinon.spy(console, 'log');

    it("code : when length is 5", function(){
        let number ="95713";
        let result = main(number);
        let expect_string =  "|\t|:|::\t:|:|:\t|:::|\t:::||\t::||:\t:|:|:\t|";
        expect(result).to.equal(expect_string);
    });
    it("decode : when length is 5", function(){
        let number ="|	|:|::	:|:|:	|:::|	:::||	::||:	:|:|:	|";
        let result = main(number);
        let expect_string =  "95713";
        expect(result).to.equal(expect_string);
    });
    it("code : when length is 9", function(){
        let number ="555551237";
        let result = main(number);
        let expect_string =  "|\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:::||\t::|:|\t::||:\t|:::|\t::|:|\t|";
        expect(result).to.equal(expect_string);
    });
    it("decode : when length is 9", function(){
        let number ="|\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:::||\t::|:|\t::||:\t|:::|\t::|:|\t|";
        let result = main(number);
        let expect_string =  "55555-1237";
        expect(result).to.equal(expect_string);
    });
    it("code : when length is 10", function(){
        let number ="55555-1237";
        let result = main(number);
        let expect_string =  "|\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:::||\t::|:|\t::||:\t|:::|\t::|:|\t|";
        expect(result).to.equal(expect_string);
    });
    it("decode : when length is 10", function(){
        let number ="|\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:|:|:\t:::||\t::|:|\t::||:\t|:::|\t::|:|\t|";
        let result = main(number);
        let expect_string =  "55555-1237";
        expect(result).to.equal(expect_string);
    });

});