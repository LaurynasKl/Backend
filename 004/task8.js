console.clear();

class Stikline{
    constructor(turis){
        this.turis = turis;
        this.kiekis = 0;
    }
    ipilti(kiekis){
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
        return this;
    }   
    ispilti(){
        const kiekis = this.kiekis;
        this.kiekis = 0;
        return kiekis;
    }
    stiklinejaYra(){
        console.log(this.kiekis);
    }
}

const stikline1 = new Stikline(100);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(200);

stikline1.ipilti(stikline3.ipilti(stikline2.ipilti(500).ispilti()).ispilti());

// stikline1.stiklinejaYra();
// stikline2.stiklinejaYra();
// stikline3.stiklinejaYra();

stikline1.ipilti(30).stiklinejaYra();
