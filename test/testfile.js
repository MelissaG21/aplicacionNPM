const sumar = require("../index");
const assert = require("assert");
//Asserts = Afirmación
describe("Probar la suma de dos números",()=>{
    //Afirmamos que cinco mas siete es 12
    it("Cinco mas siete son 12", ()=>{
        assert.equal(12, sumar(5,7));
    });
    //Afirmamos que cinco mas 7 no son 57
    it("Cinco mas siete no son 57", ()=>{
        assert.notEqual(57, sumar(5,7));
    });
});
//><