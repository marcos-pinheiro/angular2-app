import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LivroListaComponent } from './components/livro-lista.component';
import { LivroFormComponent } from './components/livro-form.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/main.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/livros', 		name: 'LivroLista', component: LivroListaComponent /*, useAsDefault: true*/}, 
	{path: '/livros/new', 	name: 'LivroForm', 	component: LivroFormComponent}
])
export class AppComponent {
	
}