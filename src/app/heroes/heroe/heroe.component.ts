import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad  : number = 53;

    get nombreCapitalizado(){
       let hola = "";
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string {
        return `${this.nombre} - ${this.edad}`;
    }

    camiarNombre() : void{
        this.nombre = 'Ernesto Luquin';
    }

    cambiarEdad() : void {
        this.edad = 31;
    }
}