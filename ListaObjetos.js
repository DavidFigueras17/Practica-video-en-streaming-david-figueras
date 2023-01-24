"use strict";
import {BaseException,
	InvalidAccessConstructorException,
	EmptyValueException,
	ParameterValidationException,
	InvalidValueException,
	AbstractClassException } from './BaseException.js';

    class Person {
        #name;
        #lastname1;
        #lastname2;
        #born;
        #picture;

        constructor(name , lastname1, lastname2, born, picture){
            this.#name=name;
            this.#lastname1=lastname1;
            this.#lastname2=lastname2;
            this.#born=born;
            this.#picture=picture;
        
            if(name==='undefined' || name==='') throw new EmptyValueException("name");
            if(lastname1==='undefined' || lastname1==='') throw new EmptyValueException("lastname1");
            if(born==='undefined' || born==='') throw new EmptyValueException("born");

        }

        get name(){
            return this.#name;
        }

        get lastname1(){
            return this.#lastname1;
        }

        get lastname2(){
            return this.#lastname2;
        }

        get born(){
            return this.#born;
        }
        get picture(){
            return this.#picture;
        }

        toString(){	
            return "Nombre: " + this.name + " Apellido: " + this.lastname1 + " "+this.lastname2+ " Fecha nacimiento: "+this.born+ " Ruta: "+this.picture; 
        }
    }

    class Category {
        #name;
        #description;
        

        constructor(name , description){
            this.#name=name;
            this.#description=description;
           
        
            if(name==='undefined' || name==='') throw new EmptyValueException("name");
            

        }

        get name(){
            return this.#name;
        }
        get description(){
            return this.#description;
        }

       

        toString(){	
            return "Nombre: " + this.name + " Descripcion: " + this.description ; 
        }
    }

    class Resource {
        #duration;
        #link;
        

        constructor(duration , link){
            this.#duration=duration;
            this.#link=link;
           
        
            if(duration==='undefined' || duration==='') throw new EmptyValueException("duration");
            if(link==='undefined' || link==='') throw new EmptyValueException("link");
            

        }

        get duration(){
            return this.#duration;
        }
        get link(){
            return this.#link;
        }

       

        toString(){	
            return "Duracion: " + this.duration + " Ruta: " + this.link ; 
        }
    }

    class Production {

        #tittle;
        #nationality;
        #publication;
        #synopsis;
        #image;
    
    
        constructor(tittle, nationality, publication, synopsis, image ) {
    
            this.#tittle = tittle;
            this.#nationality = nationality;
            this.#publication = publication;
            this.#synopsis = synopsis;
            this.#image = image;

            if(tittle==='undefined' || tittle==='') throw new EmptyValueException("tittle");
            if(publication==='undefined' || publication==='') throw new EmptyValueException("publication");
            

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

	constructor(latitude = 0, longitude = 0){

		latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
		if (Number.isNaN(latitude)  || latitude < -90 || latitude > 90) 
			throw new InvalidValueException("latitude", latitude);
		longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
		if (Number.isNaN(longitude)  || longitude < -180 || longitude > 180) 
			throw new InvalidValueException("longitude", longitude);
	
		this.#latitude = latitude;
		this.#longitude = longitude;		
	}

	get latitude(){
		return this.#latitude;
	}
	set latitude(value){
		value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
		if (Number.isNaN(value)  || value < -90 || value > 90) 
			throw new InvalidValueException("latitude", value);
		this.#latitude = value;
	}

	get longitude(){
		return this.#longitude;
	}
	set longitude(value){
		value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
		if (Number.isNaN(value)  || value < -180 || value > 180) 
			throw new InvalidValueException("longitude", value);
		this.#longitude = value;
	}

	getSexagesimalLatitude(){
		let direction = this.latitude >= 0 ? "N" : "S";
		let latitude = Math.abs(this.latitude);
		let grades =  Math.floor (latitude);
		let tmpMinutes = (latitude - grades) * 60;
		let minutes = Math.floor (tmpMinutes);
		let tmpSeconds = (tmpMinutes - minutes) * 60;
		let seconds = Math.round (tmpSeconds);
	
		return grades + "°" + minutes + "'" + seconds + "''" + direction; 	
	} 


	getSexagesimalLongitude(){	
		let direction = this.longitude >= 0 ? "E" : "W";
		let longitude = Math.abs(this.longitude);
		let grades =  Math.floor (longitude);
		let tmpMinutes = (longitude - grades) * 60;
		let minutes = Math.floor (tmpMinutes);
		let tmpSeconds = (tmpMinutes - minutes) * 60;
		let seconds = Math.round (tmpSeconds);
	
		return grades + "°" + minutes + "'" + seconds + "''" + direction; 
	}

    
    
    toString(){
        
        return ;
    }
	
}

class Movie extends Production {
    #resource;
    #locations;
    

    constructor(tittle, nationality, publication, synopsis, image, resource , locations){
        super(tittle, nationality, publication, synopsis, image);
        this.#resource=resource;
        this.#locations=locations;
       
    
    }

    get resource(){
        return this.#resource;
    }
    set resource(value){
        value = new Resource();
        this.#resource=value;
    }
    get locations(){
        return this.#locations;
    }
    set locations(value){
        value= new Coords();
        this.#locations=value;
    }

   

    toString(){	
        return this.tittle+ " " +this.nationality+" " +this.synopsis+" " +this.publication+" " +this.image+ " " +this.#resource+" " +this.#locations; 
    }
}

class Serie extends Production {
    #resource;
    #locations;
    #seasons;
    

    constructor(tittle, nationality, publication, synopsis, image, resource , locations, seasons){
        super(tittle, nationality, publication, synopsis, image);
        this.#resource=resource;
        this.#locations=locations;
        this.#seasons=seasons;
    
    }

    get resource(){
        return this.#resource;
    }
    set resource(value){
        value = new Resource();
        this.#resource=value;
    }
    get locations(){
        return this.#locations;
    }
    set locations(value){
        value= new Coords();
        this.#locations=value;
    }
    get seasons(){
        return this.#seasons;
    }
    

   

    toString(){	
        return this.tittle+ " " +this.nationality+" " +this.synopsis+" " +this.publication+" " +this.image+ " " +this.#resource+" " +this.#locations +" " +this.#seasons; 
    }
}

class User  {
    #username;
    #email;
    #password;
    

    constructor( username , email, password){
        
        this.#username=username;
        this.#email=email;
        this.#password=password;
    
    }

    get username(){
        return this.#username;
    }
    
    get email(){
        return this.#email;
    }
   
    get password(){
        return this.#password;
    }
    

   

    toString(){	
        return this.username+ " " +this.email+" " +this.password; 
    }
}




    export {Person, Category, Resource, Production, Coords, Movie, Serie, User};