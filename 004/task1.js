console.clear();

class Kibiras1{
    constructor(){
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni(){
        this.akmenuKiekis++;
    }
    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis;
    }
    kiekPririnktiAkmenu(){
        console.log('Akmenu kiekis:', this.akmenuKiekis);
    }
}

const kibiras1 = new Kibiras1();
const kibiras2 = new Kibiras1();
const kibiras3 = new Kibiras1();

kibiras1.prideti1Akmeni();
kibiras1.prideti1Akmeni();
kibiras1.pridetiDaugAkmenu(10);

kibiras2.pridetiDaugAkmenu(10);


kibiras1.kiekPririnktiAkmenu();
kibiras2.kiekPririnktiAkmenu();
