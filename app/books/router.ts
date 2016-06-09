import { Component } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { BookFormComponent } from './components/book-form'
import { BookGridComponent } from './components/book-grid'

@Component({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES, BookFormComponent]
})
@RouteConfig([
    { path: '/',    name: 'BookGrid',   component: BookGridComponent },
    { path: '/new', name: 'BookForm',   component: BookFormComponent }
])
export class BooksRouterComponent {

}