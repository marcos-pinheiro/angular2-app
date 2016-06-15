import { Component } from '@angular/core'
import { Http, Response } from '@angular/http';
import { MessageView } from '../../widgets/messages/message-view'
import { Message, MessageType } from '../../widgets/messages/message'
//import 'rxjs/Rx'; //All operators
import 'rxjs/add/operator/map'; //map operator

@Component({
    selector: 'book-form',
    templateUrl: 'app/books/templates/book-form.html',
    directives: [MessageView]
})
export class BookFormComponent {
  
    private messages :Message[] = []
    private book :any = {}

    constructor(private http :Http) {}


    private onSearch(): void {
        this.http
            .get("http://demo5342515.mockable.io/teste")
            .map(response => response.json()) //Converte a o body da resposta para JSON se success
            .subscribe(
                data  => {
                    this.book = data;
                    this.messages[0] = Message.sucess("Sucesso");
                    console.log(data);
                },
                error => {
                    this.messages[0] = Message.error(error);
                    console.log(error.json());
                }
            );
    }

    public onSave(): void {

        if(! this.bookIsValid()) {
            this.messages.push(Message.warn("Título do livro deve ser preenchido"));
        }
    }

    private bookIsValid() :boolean {
        return this.book.title;
    }
}

/*
Example JSON teste
{
	"title": "Livro de teste",
	"author": "Marcos Pinheiro",
	"numberPages": 666,
	"used": true
}


*/