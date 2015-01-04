/**
 * Created by Davy on 3/01/2015.
 */
function Carrier(name, img, description, music)
{
    this.name = name;
    this.img = img;
    this.description = description;
    this.music = music;
}

Carrier.prototype = {
    get Name(){return this.name},
    set Name(v){this.name=v},

    get Img(){return this.img},
    set Img(v){this.img = v},

    get Description(){return this.description},
    set Description(v){this.description = v},

    get Music(){return this.music},
    set Music(v){this.music=v}
};