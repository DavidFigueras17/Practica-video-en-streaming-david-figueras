"use strict";
import {
    BaseException,
    InvalidAccessConstructorException,
    EmptyValueException,
    ParameterValidationException,
    InvalidValueException,
    AbstractClassException
} from './BaseException.js';

// Objeto ImageManager
class VideoSystemException extends BaseException {
    constructor(message = "Error: VideoSystem Generic Exception.", fileName, lineNumber) {
        super(message, fileName, lineNumber);
        this.name = "VideoSystemException";
    }
}



class CategoryException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The method needs a Category parameter.", fileName, lineNumber);
        this.name = "CategoryException";
    }
}

class CategoryExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The category exists in the video system.", fileName, lineNumber);
        this.name = "CategoryExistsException";
    }
}

class CategoryNotExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The production doesn't exist in the  video system.", fileName, lineNumber);
        this.name = "CategoryNotExistsException";
    }
}

class ProductionException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The method needs a production parameter.", fileName, lineNumber);
        this.name = "ProductionExceptionException";
    }
}

class ProductionExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The prod exists in the video system.", fileName, lineNumber);
        this.name = "ProductionExistsException";
    }
}

class ProductionNotExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The prod doesn't exist in the video system.", fileName, lineNumber);
        this.name = "ProductionNotExistsException";
    }
}

class UserException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The method needs a user parameter.", fileName, lineNumber);
        this.name = "UserException";
    }
}

class UserExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The user exists in the video system.", fileName, lineNumber);
        this.name = "UserExistsException";
    }
}

class UserNotExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The user doesn't exist in the video system.", fileName, lineNumber);
        this.name = "UserNotExistsException";
    }
}

class PersonException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The method needs a person parameter.", fileName, lineNumber);
        this.name = "PersonException";
    }
}

class PersonExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The person exists in the video system.", fileName, lineNumber);
        this.name = "PersonExistsException";
    }
}

class PersonNotExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The person doesn't exist in the video system.", fileName, lineNumber);
        this.name = "PersonNotExistsException";
    }
}



class Person {
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor(name, lastname1, lastname2 = '', born, picture = '') {
        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = born;
        this.#picture = picture;

        if (name === 'undefined' || name === '') throw new EmptyValueException("name");
        if (lastname1 === 'undefined' || lastname1 === '') throw new EmptyValueException("lastname1");
        if (born === 'undefined' || born === '') throw new EmptyValueException("born");

    }

    get name() {
        return this.#name;
    }

    get lastname1() {
        return this.#lastname1;
    }

    get lastname2() {
        return this.#lastname2;
    }

    get born() {
        return this.#born;
    }
    get picture() {
        return this.#picture;
    }

    toString() {
        return "Nombre: " + this.name + " Apellido: " + this.lastname1 + " " + this.lastname2 + " Fecha nacimiento: " + this.born + " Ruta: " + this.picture;
    }
}

class Category {
    #name;
    #description;


    constructor(name, description = '') {
        this.#name = name;
        this.#description = description;


        if (name === 'undefined' || name === '') throw new EmptyValueException("name");


    }

    get name() {
        return this.#name;
    }
    get description() {
        return this.#description;
    }



    toString() {
        return "Nombre: " + this.name + " Descripcion: " + this.description;
    }
}

class Resource {
    #duration;
    #link;


    constructor(duration, link) {
        this.#duration = duration;
        this.#link = link;


        if (duration === 'undefined' || duration === '') throw new EmptyValueException("duration");
        if (link === 'undefined' || link === '') throw new EmptyValueException("link");


    }

    get duration() {
        return this.#duration;
    }
    get link() {
        return this.#link;
    }



    toString() {
        return "Duracion: " + this.duration + " Ruta: " + this.link;
    }
}

class Production {

    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;


    constructor(title, nationality = '', publication, synopsis = '', image = '') {

        this.#title = title;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;

        if (title === 'undefined' || title === '') throw new EmptyValueException("tittle");
        if (publication === 'undefined' || publication === '') throw new EmptyValueException("publication");


        if (new.target === Production) {
            throw new Error('this is an abstract class');
        }

    }

    get title() {
        return this.#title;
    }
    get nationality() {
        return this.#nationality;
    }
    get publication() {
        return this.#publication;
    }
    get synopsis() {
        return this.#synopsis;
    }
    get image() {
        return this.#image;
    }



}

// Objeto Coords para definir coordenadas.
class Coords {
    #latitude;
    #longitude;

    constructor(latitude = 0, longitude = 0) {

        latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
        if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
            throw new InvalidValueException("latitude", latitude);
        longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
        if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
            throw new InvalidValueException("longitude", longitude);

        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    get latitude() {
        return this.#latitude;
    }
    set latitude(value) {
        value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
        if (Number.isNaN(value) || value < -90 || value > 90)
            throw new InvalidValueException("latitude", value);
        this.#latitude = value;
    }

    get longitude() {
        return this.#longitude;
    }
    set longitude(value) {
        value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
        if (Number.isNaN(value) || value < -180 || value > 180)
            throw new InvalidValueException("longitude", value);
        this.#longitude = value;
    }

    getSexagesimalLatitude() {
        let direction = this.latitude >= 0 ? "N" : "S";
        let latitude = Math.abs(this.latitude);
        let grades = Math.floor(latitude);
        let tmpMinutes = (latitude - grades) * 60;
        let minutes = Math.floor(tmpMinutes);
        let tmpSeconds = (tmpMinutes - minutes) * 60;
        let seconds = Math.round(tmpSeconds);

        return grades + "°" + minutes + "'" + seconds + "''" + direction;
    }


    getSexagesimalLongitude() {
        let direction = this.longitude >= 0 ? "E" : "W";
        let longitude = Math.abs(this.longitude);
        let grades = Math.floor(longitude);
        let tmpMinutes = (longitude - grades) * 60;
        let minutes = Math.floor(tmpMinutes);
        let tmpSeconds = (tmpMinutes - minutes) * 60;
        let seconds = Math.round(tmpSeconds);

        return grades + "°" + minutes + "'" + seconds + "''" + direction;
    }



    toString() {

        return;
    }

}

class Movie extends Production {
    #resource;
    #locations;


    constructor(title, nationality = '', publication, synopsis = '', image = '', resource = '', locations = '') {
        super(title, nationality, publication, synopsis, image);
        this.#resource = resource;
        this.#locations = locations;


    }

    get resource() {
        return this.#resource;
    }
    set resource(value) {
        value = new Resource();
        this.#resource = value;
    }
    get locations() {
        return this.#locations;
    }
    set locations(value) {
        value = new Coords();
        this.#locations = value;
    }



    toString() {
        return this.title + " " + this.nationality + " " + this.synopsis + " " + this.publication + " " + this.image + " " + this.#resource + " " + this.#locations;
    }
}

class Serie extends Production {
    #resource;
    #locations;
    #seasons;


    constructor(title, nationality = '', publication, synopsis = '', image = '', resource = '', locations = '', seasons = '') {
        super(title, nationality, publication, synopsis, image);
        this.#resource = resource;
        this.#locations = locations;
        this.#seasons = seasons;

    }

    get resource() {
        return this.#resource;
    }
    set resource(value) {
        value = new Resource();
        this.#resource = value;
    }
    get locations() {
        return this.#locations;
    }
    set locations(value) {
        value = new Coords();
        this.#locations = value;
    }
    get seasons() {
        return this.#seasons;
    }




    toString() {
        return this.title + " " + this.nationality + " " + this.synopsis + " " + this.publication + " " + this.image + " " + this.#resource + " " + this.#locations + " " + this.#seasons;
    }
}

class User {
    #username;
    #email;
    #password;


    constructor(username, email, password) {

        this.#username = username;
        this.#email = email;
        this.#password = password;

    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }




    toString() {
        return this.username + " " + this.email + " " + this.password;
    }
}


let VideoSystem = (function () { //La función anónima devuelve un método getInstance que permite obtener el objeto único
    let instantiated; //Objeto con la instancia única 

    function init() { //Inicialización del Singleton

        class VideoSystem {
            #name;
            #user = [];
            #productions = [];
            #categories = [];
            #actors = [];
            #directors = [];

            #defaultUser = new User("David", "dfiguep@gmail.com", "1234"); //usuario por defecto
            #defaultCategory = new Category("Aventura", "indiana jones"); //Categoría por defecto	
            #defaultActor = new Person("Alfredo", "Nolan", "Nolan", "23/05/1980", "www.google.es");  //actor por defecto
            #defaultDirectors = new Person("Christopher", "Nolan", "Nolan", "23/05/1980", "www.google.es"); //director por defecto
            #defaultProd = new Movie("Avatar", "USA", "24-7-95", "Viaje por el espacio", "www.google.es"); //prod por defecto

            //Dado una categoría, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
            //Hemos elegido comparar por contenido no por referencia.
            #getCategoryPosition(category) {
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }

                function compareElements(element) {
                    return (element.category.name === category.name)
                }

                return this.#categories.findIndex(compareElements);
            }

            //Dado un usuario, devuelve su posición 
            #getUserPosition(user) {
                if (!(user instanceof User)) {
                    throw new UserException();
                }

                function compareElements(element) {
                    return (element.user.email === user.email)
                }

                return this.#user.findIndex(compareElements);
            }

            //Dado una produccion, devuelve su posición 
            //Hemos elegido comparar por contenido no por referencia.
            #getProductionPosition(production, productions = this.#productions) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }

                function compareElements(element) {
                    return (element.title === production.title)
                }

                return productions.findIndex(compareElements);
            }


            //Dado un actor, devuelve su posición 
            #getActorPosition(actors) {
                if (!(actors instanceof Person)) {
                    throw new PersonException();
                }

                function compareElements(element) {
                    return (element.actors.name === actors.name);
                }

                return this.#actors.findIndex(compareElements);
            }

            //Dado un director, devuelve su posición 
            #getDirectorPosition(directors) {
                if (!(directors instanceof Person)) {
                    throw new PersonException();
                }

                function compareElements(element) {
                    return (element.directors.name === directors.name);
                }

                return this.#directors.findIndex(compareElements);
            }

            constructor(name) {
                this.#name = name;
                this.addUser(this.#defaultUser);
                this.addCategory(this.#defaultCategory);
                this.addActors(this.#defaultActor);
                this.addDirectors(this.#defaultDirectors);
                this.addProds(this.#defaultProd);

            }

            get name() {
                return this.#name;
            }
            set name(value) {
                if (value === 'undefined' || value === '') throw new EmptyValueException("name");
                this.#name = value;
            }

            //iterador para las categorias
            get categories() {
                let nextIndex = 0;
                let array = this.#categories;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].category;
                        }
                    }
                }
            }

            //iterador para los usuarios
            get user() {
                let nextIndex = 0;
                let array = this.#user;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].user;
                        }
                    }
                }
            }

            //iterador para los actores
            get actors() {
                let nextIndex = 0;
                let array = this.#actors;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].actors;
                        }
                    }
                }
            }

            //iterador para los directores
            get director() {
                let nextIndex = 0;
                let array = this.#directors;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].directors;
                        }
                    }
                }
            }

            //iterador para las producciones
            get production() {
                let nextIndex = 0;
                let array = this.#productions;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i];
                        }
                    }
                }
            }


            //funcion en la que añado una categoria
            addCategory(categories) {
                if (!(categories instanceof Category)) {
                    throw new CategoryException();
                }
                let position = this.#getCategoryPosition(categories);
                if (position === -1) {
                    // Añade objeto literal con una propiedad para la categoría y un array para las prod dentro de la categoría
                    this.#categories.push(
                        {
                            category: categories,
                            productions: []
                        }
                    );
                } else {
                    throw new CategoryExistsException();
                }

                return this;
            }

            //Elimina una categoría del sistema
            removeCategory(category) {
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }
                let position = this.#getCategoryPosition(category);
                if (position !== -1) {

                    // Recogemos todas los índices de las categorías menos las de por defecto y la que estamos borrando
                    let restPositions = Array.from(Array(this.#categories.length), (el, i) => i);
                    restPositions.splice(position, 1);
                    restPositions.splice(0, 1);
                    // Recorremos todas las producciones de la categoría que estamos borrando 
                    for (let production of this.#categories[position].productions) {
                        let insertInDefault = true;
                        for (let index of restPositions) { // miramos si cada produccion pertenece a otra categoría que no sea la de por defecto
                            if (this.#getProductionPosition(production, this.#categories[index].productions) > -1) {
                                insertInDefault = false;
                                break;
                            }
                        }
                        if (insertInDefault) this.#categories[0].productions.push(production);
                    }
                    this.#categories.splice(position, 1);

                } else {
                    throw new CategoryNotExistsException();
                }
                return this;
            }


            //funcion para añadir usuarios al sistema
            addUser(user) {
                if (!(user instanceof User)) {
                    throw new UserException();
                }
                let position = this.#getUserPosition(user);
                if (position === -1) {
                    // Añade objeto literal con una propiedad para los usuarios y un array para las producciones dentro de la categoría
                    this.#user.push(
                        {
                            user: user,
                            productions: []
                        }
                    );
                } else {
                    throw new UserExistsException();
                }

                return this;
            }

            //funcion para borrar al usuario del sistema
            removeUser(user) {
                if (!(user instanceof User)) {
                    throw new UserException();
                }
                let position = this.#getUserPosition(user);
                if (position !== -1) {

                    // Recogemos todas los índices de los usuarios menos las de por defecto y la que estamos borrando
                    let restPositions = Array.from(Array(this.#user.length), (el, i) => i);
                    restPositions.splice(position, 1);
                    restPositions.splice(0, 1);
                    // Recorremos todas las producciones de la categoría que estamos borrando 
                    for (let production of this.#user[position].productions) {
                        let insertInDefault = true;
                        for (let index of restPositions) { // Chequeamos si cada produccion pertenece a otro usuario que no sea la de por defecto
                            if (this.#getProductionPosition(production, this.#user[index].productions) > -1) {
                                insertInDefault = false;
                                break;
                            }
                        }
                        if (insertInDefault) this.#user[0].productions.push(production);
                    }
                    this.#user.splice(position, 1);

                } else {
                    throw new UserNotExistsException();
                }
                return this;
            }


            //funcion para añadir producciones al sistema
            addProds(production) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }


                for (let prod of this.#productions) {
                    if (prod.title === production.title) {
                        throw new ProductionExistsException();
                    }
                }

                this.#productions.push(production);
                return this.#productions.length;
            }


            //funcion para borrar producciones
            removeProd(production) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }
                let position = this.#getProductionPosition(production);
                if (position !== -1) {

                    // Recogemos todas los índices de las categorías menos las de por defecto y la que estamos borrando
                    let restPositions = Array.from(Array(this.#productions.length), (el, i) => i);
                    restPositions.splice(position, 1);
                    restPositions.splice(0, 1);

                    this.#productions.splice(position, 1);

                } else {
                    throw new ProductionNotExistsException();
                }
                return this;
            }


            //funcion para asignar producciones a una categoria
            assingCategory(production, category = this.defaultCategory) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }


                //Obtenemos posición de la categoría. Si no existe se añade.
                let categoryPosition = this.#getCategoryPosition(category);
                if (categoryPosition === -1) {
                    categoryPosition = this.addCategory(category) - 1;
                }



                //Obtenemos posición de la imagen. Si no existe se añade.
                let ProductionPosition = this.#getProductionPosition(production);
                if (ProductionPosition === -1) {
                    this.#productions.push(production);
                    ProductionPosition = this.#productions.length - 1;
                }



                if (this.#getProductionPosition(production, this.#categories[categoryPosition].productions) === -1) {
                    this.#categories[categoryPosition].productions.push(this.#productions[ProductionPosition]);
                }



                return this;
            }

            //funcion para quitar producciones de una categoria
            DeassingCategory(production, category = this.defaultCategory) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }


                //Obtenemos posición de la categoría. Si no existe se añade.
                let categoryPosition = this.#getCategoryPosition(category);



                //Obtenemos posición de la prod. Si no existe se añade.
                let posicion = this.#categories[categoryPosition].productions.findIndex((p) => { return p.title == production.title });



                if (categoryPosition !== -1) {
                    this.#categories[categoryPosition].productions.splice(posicion, 1);
                }



                return this;
            }


            //funcion para asignar porducciones a un director
            assignDirector(production, director = this.defaultDirectors) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }
                if (!(director instanceof Person)) {
                    throw new PersonException();
                }


                //Obtenemos posición de la categoría. Si no existe se añade.
                let directorPosition = this.#getDirectorPosition(director);
                if (directorPosition === -1) {
                    directorPosition = this.addDirectors(director) - 1;
                }



                //Obtenemos posición de la imagen. Si no existe se añade.
                let ProductionPosition = this.#getProductionPosition(production);
                if (ProductionPosition === -1) {
                    this.#productions.push(production);
                    ProductionPosition = this.#productions.length - 1;
                }



                if (this.#getProductionPosition(production, this.#directors[directorPosition].productions) === -1) {
                    this.#directors[directorPosition].productions.push(this.#productions[ProductionPosition]);
                }



                return this;
            }


            //funcion para quitar produccion de un director
            DeassignDirector(production, director = this.defaultDirectors) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }
                if (!(director instanceof Person)) {
                    throw new PersonException();
                }


                //Obtenemos posición de la categoría. Si no existe se añade.
                let directorPosition = this.#getDirectorPosition(director);




                //Obtenemos posición de la prod. Si no existe se añade.
                let posicion = this.#directors[directorPosition].productions.findIndex((p) => { return p.title == production.title });



                if (directorPosition !== -1) {
                    this.#directors[directorPosition].productions.splice(posicion, 1);
                }



                return this;
            }


            //funcion para asignar una prod a un actor
            assignActor(production, actor = this.defaultActor) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }
                if (!(actor instanceof Person)) {
                    throw new PersonException();
                }


                //Obtenemos posición de la categoría. Si no existe se añade.
                let actorPosition = this.#getActorPosition(actor);
                if (actorPosition === -1) {
                    actorPosition = this.addActor(actor) - 1;
                }



                //Obtenemos posición de la imagen. Si no existe se añade.
                let ProductionPosition = this.#getProductionPosition(production);
                if (ProductionPosition === -1) {
                    this.#productions.push(production);
                    ProductionPosition = this.#productions.length - 1;
                }



                if (this.#getProductionPosition(production, this.#actors[actorPosition].productions) === -1) {
                    this.#actors[actorPosition].productions.push(this.#productions[ProductionPosition]);
                }



                return this;
            }


            //funcion para quitar una prod de un actor
            DeassignActor(production, actor = this.defaultActor) {
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }
                if (!(actor instanceof Person)) {
                    throw new PersonException();
                }


                //Obtenemos posición de la categoría. Si no existe se añade.
                let actorPosition = this.#getActorPosition(actor);




                //Obtenemos posición de la prod. Si no existe se añade.
                let posicion = this.#actors[actorPosition].productions.findIndex((p) => { return p.title == production.title });



                if (actorPosition !== -1) {
                    this.#actors[actorPosition].productions.splice(posicion, 1);
                }





                return this;
            }


            //Devuelve todas las producciones de una determinada categoría
            * getProdsByCategory(category) {
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }
                let categoryPosition = this.#getCategoryPosition(category);
                if (categoryPosition === -1) throw new CategoryNotExistsException();
                // Iteramos sobre el array de prods de la categoría encontrada
                for (let prod of this.#categories[categoryPosition].productions) {
                    yield prod;
                }

            }


            //devuelve las pordcuciones de un director
            * getProdsByDirector(director) {
                if (!(director instanceof Person)) {
                    throw new PersonException();
                }
                let directorPosition = this.#getDirectorPosition(director);
                if (directorPosition === -1) throw new PersonNotExistsException();
                // Iteramos sobre el array de prods de la categoría encontrada
                for (let prod of this.#directors[directorPosition].productions) {
                    yield prod;
                }
            }


            //deevuelve las prodcucciones de un actor
            * getProdsByActor(actor) {
                if (!(actor instanceof Person)) {
                    throw new PersonException();
                }
                let actorPosition = this.#getActorPosition(actor);
                if (actorPosition === -1) throw new PersonNotExistsException();
                // Iteramos sobre el array de prods de la categoría encontrada
                for (let prod of this.#actors[actorPosition].productions) {
                    yield prod;
                }
            }

            //devuelve el cast de una produccion

            * getCastByProd(prod) {
                if (!(prod instanceof Production)) {
                    throw new ProductionException();
                }
                let array = [];

                this.#actors.forEach(production => {
                    let posicion = production.productions.findIndex((p) => { return p.title == prod.title });

                    if (posicion != -1) {
                        array.push(production.actors);

                    }


                });
                let prodPosition = this.#getProductionPosition(prod);
                if (prodPosition === -1) throw new ProductionNotExistsException();
                // Iteramos sobre el array de prods de la categoría encontrada
                for (let actor of array) {
                    yield actor;
                }
            }




            //funcion para añadir actores al sistema
            addActors(actors) {
                if (!(actors instanceof Person)) {
                    throw new PersonException();
                }
                let position = this.#getActorPosition(actors);
                if (position === -1) {
                    // Añade objeto literal con una propiedad para los actores y un array para las producciones
                    this.#actors.push(
                        {
                            actors: actors,
                            productions: []
                        }
                    );
                } else {
                    throw new PersonExistsException();
                }

                return this;
            }

            //funcion que borra un acctor del sistema
            removeActors(actors) {
                if (!(actors instanceof Person)) {
                    throw new PersonException();
                }
                let position = this.#getActorPosition(actors);
                if (position !== -1) {

                    
                    let restPositions = Array.from(Array(this.#actors.length), (el, i) => i);
                    restPositions.splice(position, 1);
                    restPositions.splice(0, 1);
                   
                    for (let production of this.#actors[position].productions) {
                        let insertInDefault = true;
                        for (let index of restPositions) { 
                            if (this.#getProductionPosition(production, this.#actors[index].productions) > -1) {
                                insertInDefault = false;
                                break;
                            }
                        }
                        if (insertInDefault) this.#actors[0].productions.push(production);
                    }
                    this.#actors.splice(position, 1);

                } else {
                    throw new PersonNotExistsException();
                }
                return this;
            }

            //añade un director al sistema
            addDirectors(directors) {
                if (!(directors instanceof Person)) {
                    throw new PersonException();
                }
                let position = this.#getDirectorPosition(directors);
                if (position === -1) {
                    
                    this.#directors.push(
                        {
                            directors: directors,
                            productions: []
                        }
                    );
                } else {
                    throw new PersonExistsException();
                }

                return this;
            }

            //borra un director del sistema
            removeDirectors(directors) {
                if (!(directors instanceof Person)) {
                    throw new PersonException();
                }
                let position = this.#getDirectorPosition(directors);
                if (position !== -1) {

                   
                    let restPositions = Array.from(Array(this.#directors.length), (el, i) => i);
                    restPositions.splice(position, 1);
                    restPositions.splice(0, 1);
                    
                    for (let production of this.#directors[position].productions) {
                        let insertInDefault = true;
                        for (let index of restPositions) { 
                            if (this.#getProductionPosition(production, this.#directors[index].productions) > -1) {
                                insertInDefault = false;
                                break;
                            }
                        }
                        if (insertInDefault) this.#directors[0].productions.push(production);
                    }
                    this.#directors.splice(position, 1);

                } else {
                    throw new PersonNotExistsException();
                }
                return this;
            }
        }





        let instance = new VideoSystem();
        Object.freeze(instance);
        return instance;
    }
    return {
        // Devuelve un objeto con el método getInstance
        getInstance: function () {
            if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
                instantiated = init(); //instantiated contiene el objeto único
            }
            return instantiated; //Si ya está asignado devuelve la asignación.
        }
    };


})();




export { Person, Category, Resource, Production, Coords, Movie, Serie, User };
export { VideoSystemException, CategoryException, CategoryExistsException, CategoryNotExistsException, ProductionException };
export default VideoSystem;