import { Component } from '@angular/core';

@Component({
    selector: 'Mi-Componente',
    template: `
        <h1>Hola , Bienvenido</h1>
        <p>Esta es mi primera aplicacion en Angular</p>
    `
})
export class MiComponente{
    constructor(){
        console.log("Componente Mi-Componente cargado");
    }
}