"use strict";
import {Category, Coords, Movie, Person, Resource, Serie} from './ListaObjetos.js';


function test(){
    console.log("hola");

    let persona = new Person("David", "Figueras", "Pasamontes", "24-7-95", "www.google.es");
    let categoria = new Category("Accion", "Se pegan tiros");
    let resource = new Resource("125''", "www.netflix.es");
    let coord= new Coords(-90, 180);
    let latitud=coord.getSexagesimalLatitude() ;
    let longitud= coord.getSexagesimalLongitude();
    let coordenada="latitud: "+latitud+" longitud: "+longitud;
    let peli = new Movie("David", "Figueras", "Pasamontes", "24-7-95", "www.google.es", resource, coordenada);
    let serie = new Serie("David", "Figueras", "Pasamontes", "24-7-95", "www.google.es", resource, coordenada, 9);

    console.log(persona.toString());
    console.log(categoria.toString());
    console.log(peli.toString());
    console.log(serie.toString());
}
window.onload = test;