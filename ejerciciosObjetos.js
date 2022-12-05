var Asignatura = {
        ref: 'BBDD',
        nom: 'Bases de Dades',
        hores: 180,
        UF: ['UF1','UF2','UF3','UF4'],
        professor: 'Pep Parés',
        alumnes: ['alu1','alu2','alu13','alu4','alu5']
    };

// ejercicio 1
for (elementos in Asignatura) {
    console.log(elementos);
}

// ejercicio 2
delete Asignatura.alumnes
for (elementos in Asignatura) {
    console.log(elementos);
}

// ejercicio 3
console.log(Object.keys(Asignatura).length);


// ejercicio 4
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
   
    for (let x = 0; x < library.length; x++) {
        console.log(library[x].author)
        console.log(library[x].title)
    }


// ejercicio 5
function cilindro(r, h) {
    this.r = r;
    this.h = h;
}
function volumenCilindro(r, h) {
    let volumen;
    let pi = Math.PI; 
    this.r = r;
    this.h = h;
    volumen = pi * (r*r) * h;
    return volumen.toFixed(4); 
}


// ejercicio 6
function Circulo(r) {
    this.r = r;
    this.color_contorn;
    this.color_fons;
    this.gruix_contorn;
}
// para llamar al metodo en el constructor
Circulo.prototype.perimetroCirculo = function() {
    let perimetro;
    let pi = Math.PI; 
    perimetro = pi * (this.r*2);
    return perimetro.toFixed(4); 
}
Circulo.prototype.areaCirculo = function() {
    let area;
    let pi = Math.PI; 
    area = pi * (this.r*this.r);
    return area.toFixed(4); 
}


// ejercicio 7
function imprimir (element) {
   return Object.keys(element)
}


//ejercicio 8
var coche =  { 
    'marca': 'renault', 
    'modelo' : 'megane',
    'color' : 'verde'
}
//método entries de Object
Object.entries(coche);
console.log(Object.entries(coche));


//ejercicio 9
const objeto1 = { 
    x: 1, 
    y: 3 
};
const objeto2 = { 
    y: 7, 
    z: 5 
};
Object.assign(objeto1, objeto2);
console.log(objeto1);


//ejercicio 10
var animal = 
{
    especie: 'perro',
    patas: 4,
    color: 'negro'
}

animal.chequea = function(x) {
    var propiedad = (x) in animal
    return propiedad;
}