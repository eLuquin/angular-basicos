import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  //heroeBorrado: string | undefined= '';
  heroeBorrado: string = '';


  borrarHerore() : void {
    const borrado = this.heroes.shift() || '';
    this.heroeBorrado = borrado;
    console.log('Borrando...');
    console.log(borrado);
    
  }

}
