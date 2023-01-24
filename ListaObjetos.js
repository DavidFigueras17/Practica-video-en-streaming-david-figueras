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

class UserException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The method needs a user parameter.", fileName, lineNumber);
        this.name = "UserException";
    }
}

class UserExistsException extends VideoSystemException {
    constructor(fileName, lineNumber) {
        super("Error: The category exists in the video system.", fileName, lineNumber);
        this.name = "UserExistsException";
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

    #tittle;
    #nationality;
    #publication;
    #synopsis;
    #image;


    constructor(tittle, nationality = '', publication, synopsis = '', image = '') {

        this.#tittle = tittle;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;

        if (tittle === 'undefined' || tittle === '') throw new EmptyValueException("tittle");
        if (publication === 'undefined' || publication === '') throw new EmptyValueException("publication");


        if (new.target === Production) {
            throw new Error('this is an abstract class');
        }

    }

    get tittle() {
        return this.#tittle;
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


    constructor(tittle, nationality = '', publication, synopsis = '', image = '', resource = '', locations = '') {
        super(tittle, nationality, publication, synopsis, image);
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
        return this.tittle + " " + this.nationality + " " + this.synopsis + " " + this.publication + " " + this.image + " " + this.#resource + " " + this.#locations;
    }
}

class Serie extends Production {
    #resource;
    #locations;
    #seasons;


    constructor(tittle, nationality = '', publication, synopsis = '', image = '', resource = '', locations = '', seasons = '') {
        super(tittle, nationality, publication, synopsis, image);
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
        return this.tittle + " " + this.nationality + " " + this.synopsis + " " + this.publication + " " + this.image + " " + this.#resource + " " + this.#locations + " " + this.#seasons;
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
    let instantiated; //Objeto con la instancia única ImageManager

    function init() { //Inicialización del Singleton

        class VideoSystem {
            #name;
            #user = [];
            #productions = [];
            #categories = [];
            #actors = [];
            #directors = [];


            //Dado una categoría, devuelve la posición de esa categoría en el array de categorías o -1 si no lo encontramos.
            //Hemos elegido comparar por contenido no por referencia.
            #getCategoryPosition(categories) {
                if (!(categories instanceof Category)) {
                    throw new CategoryException();
                }

                function compareElements(element) {
                    return (element.categories.name === categories.name)
                }

                return this.#categories.findIndex(compareElements);
            }

            #getUsersPosition(user) {
                if (!(user instanceof User)) {
                    throw new UserException();
                }

                function compareElements(element) {
                    return (element.categories.name === categories.name)
                }

                return this.#categories.findIndex(compareElements);
            }


            constructor(name, user, productions, categories, actors, directors) {
                this.#name = name;
                this.addUser(user);
                this.addProduction(productions);
                this.addCategories(categories);
                this.addActors(actors);
                this.addDirectors(directors);

            }

            get name() {
                return this.#name;
            }
            set name(value) {
                if (value === 'undefined' || value === '') throw new EmptyValueException("name");
                this.#name = value;
            }

            get categories() {
                let nextIndex = 0;
                // referencia para habilitar el closure en el objeto
                let array = this.#categories;
                return {
                    *[Symbol.iterator]() {
                        for (let i = 0; i < array.length; i++) {
                            yield array[i].categories;
                        }
                    }
                }
            }
            //Añade un nuevo autor al gestor
            addCategories(categories) {
                if (!(categories instanceof Category)) {
                    throw new CategoryException();
                }
                let position = this.#getCategoryPosition(categories);
                if (position === -1) {
                    // Añade objeto literal con una propiedad para la categoría y un array para las imágenes dentro de la categoría
                    this.#categories.push(
                        {
                            categories: categories,
                            images: []
                        }
                    );
                } else {
                    throw new CategoryExistsException();
                }

                return this;
            }

            //Elimina una categoría del gestor
            removeCategory(categories) {
                if (!(categories instanceof Category)) {
                    throw new CategoryException();
                }
                let position = this.#getCategoryPosition(categories);
                if (position !== -1) {


                    let restPositions = Array.from(Array(this.#categories.length), (el, i) => i);
                    restPositions.splice(position, 1);
                    restPositions.splice(0, 1);
                    this.#categories.splice(position, 1);
               
            } else {
            throw new CategoryNotExistsImageManagerException();
        }
        return this;
    }
}

        
let instance = new VideoSystem();
Object.freeze(instance);
return instance;
	} //Fin inicialización del Singleton
return {
    // Devuelve un objeto con el método getInstance
    getInstance: function () {
        if (!instantiated) { //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
            instantiated = init(); //instantiated contiene el objeto único
        }
        return instantiated; //Si ya está asignado devuelve la asignación.
    }
};

    
});




export { Person, Category, Resource, Production, Coords, Movie, Serie, User };