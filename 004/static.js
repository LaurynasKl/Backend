console.clear();



class Tv{

    static channels = ['LRT', 'TV3', 'LNK', 'TV6', 'Discovery'];

    static listChannels(){
        console.log('Available Channels');
        for(const channel of this.channels){
            console.log(channel);
        }
    }

    constructor(brand, owner){
        this.brand  = brand;
        this.owner = owner;
    }
    changeChannel(number){
        console.log('Changing channel...' + this.constructor.channels[number]);
    }
}

const petras = new Tv('samsung', 'Petras');
const maryte = new Tv('LG', 'Maryte');
const bebras = new Tv('Sony', 'Bebras');

petras.changeChannel(1);
maryte.changeChannel(2);
bebras.changeChannel(3);

const newChannels = ['MTV', 'VH1', 'CNN', 'FOX', 'BBC'];

Tv.channels = newChannels;

petras.changeChannel(1);