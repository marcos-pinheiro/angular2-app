import { Component } from '@angular/core';

@Component({
    selector: 'livro-form',
    templateUrl: 'app/templates/livro-form.html' 
})
export class LivroFormComponent {
   
    private livros :string[] = ['Livro de teste 1'];
	private nomeDoLivro :string;
	private titulo :string;

	constructor() {
		this.titulo = "Cadastro de livros";
	}

	adicionar() :void {
		if(this.nomeDoLivro.trim() != '') {
			this.livros.push(this.nomeDoLivro);
			this.nomeDoLivro = null;
		}
	}

	remover(index :number) :void {
		this.livros.splice(index, 1);
	}
}