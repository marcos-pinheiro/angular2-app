import { Component } from '@angular/core'
import { MessageView } from '../../widgets/messages/message-view'
import { Message, MessageType } from '../../widgets/messages/message'

@Component({
    selector: 'book-form',
    templateUrl: 'app/books/templates/book-form.html',
    directives: [MessageView] 
})
export class BookFormComponent {
  
    private messages  :Message[] = []
    private book :any = {}


    public onSave(): void {

        if(! this.bookIsValid()) {
            this.messages.push(Message.warn("Título do livro deve ser preenchido"));
        }
        else {
            this.messages.push(Message.sucess(":) Eh nóis"));
        }
    }

    private bookIsValid() :boolean {
        return this.book.title;
    }
}