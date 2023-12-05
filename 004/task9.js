console.clear();

class Grybas{
    constructor(){
        this.svoris = this.rand(5, 45);
        this.valgomas = !this.rand(0, 1);
        this.sukirmijas = !this.rand(0, 1);
    }
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}

class Krepsys{
    constructor(){
        this.dydis = 500;
        this.prikrauta = 0;
    }
    prideti(grybas){
        if (!grybas.sukirmijas && grybas.valgomas) {
            this.prikrauta += grybas.svoris;
        }
        return this.dydis >= this.prikrauta;
    }
}

const krepsys = new Krepsys();

while (krepsys.prideti(new Grybas())) {
}

console.log(krepsys);