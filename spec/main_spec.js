"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

let main = require("../lib/main.js");
let Lyrics = require("../lib/Lyrics.js");
let Lyrics_99 = Lyrics.Lyrics_99;
let Lyrics_2 = Lyrics.Lyrics_2;
let Lyrics_1 = Lyrics.Lyrics_1;
let Lyrics_0 = Lyrics.Lyrics_0;

describe("printLyrics", function(){
    //sinon.spy(console, 'log');

    it("when number is 99", function(){
        let number = 99;
        let result = main(number);
        let expect_string = Lyrics_99();
        expect(result).to.equal(expect_string);
    });
    it("when number is 2", function(){
        let number = 2;
        let result = main(number);
        let expect_string = Lyrics_2();
        expect(result).to.equal(expect_string);
    });
    it("when number is 1", function(){
        let number = 1;
        let result = main(number);
        let expect_string = Lyrics_1();
        expect(result).to.equal(expect_string);
    });
    it("when number is 0", function(){
        let number = 0;
        let result = main(number);
        let expect_string = Lyrics_0();
        expect(result).to.equal(expect_string);
    });
});