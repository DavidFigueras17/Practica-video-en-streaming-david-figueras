"use strict";
import { Category, Coords, Movie, Person, Resource, Serie, User } from './ListaObjetos.js';
import VideoSystem from './ListaObjetos.js';
import { VideoSystemException, CategoryException, CategoryExistsException, CategoryNotExistsException, ProductionException } from './ListaObjetos.js';


function test() {


    let actor = new Person("Raul", "Figueras", "Pasamontes", "24-7-95", "www.google.es");
    let actor2 = new Person("Juan", "Roddriguez", "Bermejo", "24-7-95", "www.google.es");
    let director = new Person("David", "nolan", "Pasamontes", "24-7-95", "www.google.es");
    let director2 = new Person("Paco", "del", "Toro", "24-7-95", "www.google.es");
    let categoria = new Category("Accion", "Se pegan tiros");
    let categoria2 = new Category("Terror", "Se dan sustos");
    let resource = new Resource("125", "www.netflix.es");
    let usuario = new User("Javier", "javier@gmail.com", "1122");
    let coord = new Coords(-90, 180);
    let latitud = coord.getSexagesimalLatitude();
    let longitud = coord.getSexagesimalLongitude();
    let coordenada = "latitud: " + latitud + " longitud: " + longitud;
    let peli = new Movie("Interestellar", "USA", "24-7-95", "Viaje por el espacio", "www.google.es", resource, coordenada);
    let serie = new Serie("Breaking Bad", "USA", "23-05-2010", "Profesor hace metanfetamina", "www.google.es", resource, coordenada, 9);
    let serie2 = new Serie("Better Caul Saul", "USA", "23-05-2010", "Abogado corrupto", "www.google.es", resource, coordenada, 9);

    console.log("---------------Testeo de Objetos---------------");

    console.log(director.toString());
    console.log(categoria.toString());
    console.log(peli.toString());
    console.log(serie.toString());

    console.log("---------------Testeo de VideoSystem---------------");
    let sistema = VideoSystem.getInstance();
    sistema.name = "Sistema 1";

    sistema.addCategory(categoria);
    sistema.addCategory(categoria2);
    console.log(...sistema.categories);



    sistema.addUser(usuario);
    console.log(...sistema.user);



    sistema.addActors(actor);
    sistema.addActors(actor2);
    console.log(...sistema.actors);



    sistema.addDirectors(director);
    sistema.addDirectors(director2);
    console.log(...sistema.director);
   



    sistema.addProds(peli);
    sistema.addProds(serie);
    sistema.addProds(serie2);


    console.log(...sistema.production);

    
    console.log(...sistema.production);

    sistema.assingCategory(peli, categoria);
    sistema.assingCategory(peli, categoria2);
    sistema.assingCategory(serie, categoria);
    sistema.assingCategory(serie2, categoria);
    sistema.assignDirector(serie, director);
    sistema.assignDirector(serie2, director);
    sistema.assignDirector(peli, director2);
    sistema.assignActor(serie, actor);
    sistema.assignActor(serie, actor2);
    sistema.assignActor(peli, actor);


    function showProds(produccion) {
        for (let prod of produccion) {
            console.log("Titulo: " + prod.title);
        }
    }
    console.log("##### Produciones por categoría: " + categoria.name);
    showProds(sistema.getProdsByCategory(categoria));
    console.log("##### Produciones por categoría: " + categoria2.name);
    showProds(sistema.getProdsByCategory(categoria2));

    console.log("##### Produciones por director: " + director.name);
    showProds(sistema.getProdsByDirector(director));
    console.log("##### Produciones por director: " + director2.name);
    showProds(sistema.getProdsByDirector(director2));


    console.log("##### Produciones por cast: " + actor.name);
    showProds(sistema.getProdsByActor(actor));


    function showCast(actor) {
        for (let actors of actor) {
            console.log("Nombre: " + actors.name);
        }
    }

    console.log("##### Cast por produccion: " + serie.title);
    showCast(sistema.getCastByProd(serie));

    sistema.DeassingCategory(peli, categoria);
    console.log("##### Produciones por categoría: " + categoria.name);
    showProds(sistema.getProdsByCategory(categoria));

    sistema.DeassignDirector(serie, director);
    console.log("##### Produciones por director: " + director.name);
    showProds(sistema.getProdsByDirector(director));

    sistema.DeassignActor(serie, actor);
    console.log("##### Produciones por cast: " + actor.name);
    showProds(sistema.getProdsByActor(actor));


    sistema.removeProd(peli);
    console.log("##### Produciones por categoria: " + categoria.name);
    showProds(sistema.getProdsByCategory(categoria));
    sistema.removeCategory(categoria);
    sistema.removeUser(usuario);
    sistema.removeActors(actor);
    
    
    sistema.removeDirectors(director);

}
window.onload = test;