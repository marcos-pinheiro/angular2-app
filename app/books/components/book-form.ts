import { Component } from '@angular/core'
import { MessageView } from '../../widgets/message'

@Component({
    selector: 'book-form',
    templateUrl: 'app/books/templates/book-form.html'
    //directives: [MessageView]
})
export class BookFormComponent {
    private book: Object

    constructor() {
        this.book = {};
    }

    public onSave(): void {
        var book = this.book;
        console.log(book);
        MessageView.teste();
        //new MessageView("sadsad").error();
    }

    
}