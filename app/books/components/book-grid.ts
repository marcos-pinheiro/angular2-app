import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated'
import 'rxjs/add/operator/map'

@Component({
    selector: 'book-grid',
    templateUrl: 'app/books/templates/book-grid.html',
    directives: [ROUTER_DIRECTIVES]
})
export class BookGridComponent {

    private books: any[] = [];

    constructor(private http: Http) { }
    

    private listarTodos(): void {
        this.http
            .get("http://demo2050368.mockable.io/resources/books/")
            .map(response => response.json())
            .subscribe(
                data => {
                    this.books = data;
                }
            );
    }

    //onInit
    public ngOnInit(): void {
        this.listarTodos();
    }
}