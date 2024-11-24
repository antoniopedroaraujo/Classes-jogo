class Heroi {
	constructor(nome, idade, tipo){
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
    	let ataque;
        
        if(this.tipo === "mago"){
        	ataque = "magia";
        } else if (this.tipo === "guerreiro") {
        	ataque = "espada";
        } else if (this.tipo === "monge") {
        	ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
        	ataque = "shuriken";
        } else {
        	ataque = "um ataque genérico";
        }
    	console.log(`O ${this.tipo} atacou usando ${ataque}!`);
    }
}

let heroi1 = new Heroi("nome1", 20, "mago");
let heroi2 = new Heroi("nome1", 20, "guerreiro");
let heroi3 = new Heroi("nome1", 20, "monge");
let heroi4 = new Heroi("nome1", 20, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
