"use strict";
import {Category, Coords, Movie, Person, Resource, Serie, User} from './ListaObjetos.js';
import VideoSystem from './ListaObjetos.js';
import {VideoSystemException, CategoryException,CategoryExistsException, CategoryNotExistsException, ProductionException} from './ListaObjetos.js';


function test(){
    

    let persona = new Person("David", "Figueras", "Pasamontes", "24-7-95", "www.google.es");
    let categoria = new Category("Accion", "Se pegan tiros");
    let resource = new Resource("125''", "www.netflix.es");
    let usuario= new User("Javier", "javier@gmail.com", "1122");
    let coord= new Coords(-90, 180);
    let latitud=coord.getSexagesimalLatitude() ;
    let longitud= coord.getSexagesimalLongitude();
    let coordenada="latitud: "+latitud+" longitud: "+longitud;
    let peli = new Movie("David", "Figueras", "Pasamontes", "24-7-95", "www.google.es", resource, coordenada);
    let serie = new Serie("David", "Figueras", "Pasamontes", "24-7-95", "www.google.es", resource, coordenada, 9);
   
    console.log("---------------Testeo de Objetos---------------");

    console.log(persona.toString());
    console.log(categoria.toString());
    console.log(peli.toString());
    console.log(serie.toString());

    console.log("---------------Testeo de VideoSystem---------------");
    let sistema= VideoSystem.getInstance();
    sistema.name="Sistema 1";

    sistema.addCategory(categoria);
    console.log(...sistema.categories);
    sistema.removeCategory(categoria);
    console.log(...sistema.categories);

    sistema.addUser(usuario);
    console.log(...sistema.user);
    sistema.removeUser(usuario);
    console.log(...sistema.user);
}
window.onload = test;