import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `
  	<h2>{{titulo | uppercase}}</h2>
  	<ul>
  		<li *ngFor="#livro of livros; #i = index"> <!-- o # fala que a variavel tarefa vai ser visivel somente neste escopo | index variavel do proprio angular-->
  			{{livro}} <a href="#" (click)="remover(i)"> [X] </a>
  		</li>
  	</ul>
  	<input type="text" name="nome" placeholder="Digite o nome do livro..." [(ngModel)]="nomeDoLivro"/> 
  	<!-- [())] = Faz um bind bidirecional de sincronizacao -->
  	<button (click)="adicionar()">Adicionar</button>
  `
})
export class AppComponent {

	private livros		:string[] = ['Livro de teste 1'];
	private nomeDoLivro :string;

	constructor() {
		this.titulo = "Cadastro de livros"
	}

	adicionar() :void {
		if(this.nomeDoLivro.trim() != '') {
			this.livros.push(this.nomeDoLivro);
			this.nomeDoLivro = null;
		}
	}

	remover(index :number) :void {
		this.livros.splice(index, 1); //Remove pelo index do array;
	}
}