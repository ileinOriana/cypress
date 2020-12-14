describe('Cuentas', function(){
    let a = 2+2;
    let b = 4;
    it('Vamos a ver una igualdad', function(){
        expect(a==b, "Ambos valores tienen que ser iguales").to.equal(true);
    })
    it('Vamos a ver que reste bien', function(){
        expect(2-1, "El resultado tiene que dar cero").to.equal(0);
    })

    it('Vamos a ver que una resta no este bien', function(){
        expect(1-1).to.not.equal(2);
    })

    it('tiene que ser verdadero',function(){
        expect(2==2).to.be.true; 
    })

    it('tiene que ser falso', function(){
        expect(2==1).to.be.false;
    })

    it('Si la variable existe', function(){
        expect(2).to.exist;
    })

    it('Es menor a diez', function(){
        expect(b).to.be.lessThan(10);
    })

    it('Es mayor a 10', function(){
        expect(100).to.be.greaterThan(10);
    })



})