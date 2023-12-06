console.clear();

console.log('STATIC');

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
    changeChannel(number){                  //kreipiasi i klase
        console.log('Changing channel...' + this.constructor.channels[number]);
    }
    whatsChannelsList(){
        this.constructor.listChannels();
    }
    changeChannelsList(newChannels){
        this.constructor.channels = newChannels;
    }
}

const petras = new Tv('Samsung', 'Petras');
const maryte = new Tv('LG', 'Maryte');
const bebras = new Tv('Sony', 'Bebras');

petras.changeChannel(1);
maryte.changeChannel(2);
bebras.changeChannel(3);
console.log('');


const newChannels = ['MTV', 'VH1', 'CNN', 'FOX', 'BBC'];

// Tv.channels = newChannels;
bebras.changeChannelsList(newChannels);

petras.changeChannel(1);
maryte.changeChannel(2);
bebras.changeChannel(3);


Tv.listChannels();

bebras.whatsChannelsList()
console.log(bebras);