"use strict";
import { Category, Coords, Movie, Person, Resource, Serie, User } from './ListaObjetos.js';
import VideoSystem from './ListaObjetos.js';
import { VideoSystemException, CategoryException, CategoryExistsException, CategoryNotExistsException, ProductionException } from './ListaObjetos.js';


function test() {


    let actor = new Person("David", "Figueras", "Pasamontes", "24-7-95", "www.google.es");
    let director = new Person("David", "nolan", "Pasamontes", "24-7-95", "www.google.es");
    let categoria = new Category("Accion", "Se pegan tiros");
    let resource = new Resource("125", "www.netflix.es");
    let usuario = new User("Javier", "javier@gmail.com", "1122");
    let coord = new Coords(-90, 180);
    let latitud = coord.getSexagesimalLatitude();
    let longitud = coord.getSexagesimalLongitude();
    let coordenada = "latitud: " + latitud + " longitud: " + longitud;
    let peli = new Movie("Interestellar", "USA", "24-7-95", "Viaje por el espacio", "www.google.es", resource, coordenada);
    let serie = new Serie("Breaking Bad", "USA", "23-05-2010", "Profesor hace metanfetamina", "www.google.es", resource, coordenada, 9);

    console.log("---------------Testeo de Objetos---------------");

    console.log(director.toString());
    console.log(categoria.toString());
    console.log(peli.toString());
    console.log(serie.toString());

    console.log("---------------Testeo de VideoSystem---------------");
    let sistema = VideoSystem.getInstance();
    sistema.name = "Sistema 1";

    sistema.addCategory(categoria);
    console.log(...sistema.categories);
    // sistema.removeCategory(categoria);
    console.log(...sistema.categories);

    sistema.addUser(usuario);
    console.log(...sistema.user);
    sistema.removeUser(usuario);
    console.log(...sistema.user);

    sistema.addActors(actor);
    console.log(...sistema.actors);
    // sistema.removeActors(actor);
    console.log(...sistema.actors);

    sistema.addDirectors(director);
    console.log(...sistema.director);
    // sistema.removeDirectors(director);
    console.log(...sistema.director);


    sistema.addProds(peli);
    sistema.addProds(serie);
    for (let prod of sistema.production) {
        console.log("Titulo: " + prod.title);
    }
    console.log(...sistema.production);
    sistema.removeProd(peli);
    console.log(...sistema.production);

    sistema.assingCategory(peli, categoria);
    sistema.assingCategory(serie, categoria);
    sistema.assignDirector(serie, director);
    sistema.assignActor(serie, actor);

    
    function showProds(produccion) {
        for (let prod of produccion) {
            console.log("Titulo: " + prod.title);
        }
    }
    console.log("##### Produciones por categoría: " + categoria.name);
    showProds(sistema.getProdsByCategory(categoria));
    

    function showProds(produccion) {
        for (let prod of produccion) {
            console.log("Titulo: " + prod.title);
        }
    }
    
    console.log("##### Produciones por director: " + director.name);
    showProds(sistema.getProdsByDirector(director));

    console.log("##### Produciones por cast: " + actor.name);
    showProds(sistema.getProdsByActor(actor));
    
    // sistema.removeProduction(peli);
    // console.log(sistema);
    // sistema.removeProduction(peli);
    // console.log(...sistema.peli);
}
window.onload = test;