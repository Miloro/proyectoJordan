describe('dao', ()=>{
    const assert = require('assert');
    const mongoose = require('mongoose');
    const anteojoRepository= require('../../repositories/anteojo.repository');

    before(function(done) {
        if (mongoose.connection.db) return done();
        mongoose.connect('mongodb://localhost/puan_test1', done);
    });

    it('Debería devolver 1 cuando pido stock de anteojos de la marca x con codigo A10', async () => {

        await anteojoRepository.altaModeloAnteojo("x","comun","Plastico","A10", 10.00,20,2);
        const result= await anteojoRepository.stockDeAnteojo("x","comun","Plastico","A10");
        assert.strictEqual(result.stock, 2);
    });
});
