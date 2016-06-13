import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { BooksRouterComponent } from './books/router';
import { UsersRouterComponent } from './users/router';


@Component({
  selector: 'application',
  templateUrl: 'app/general/templates/index.html',
  directives: [ROUTER_DIRECTIVES, BooksRouterComponent]
})

@RouteConfig([
    { path: '/books/...', component: BooksRouterComponent, as:'BooksRouterComponent'},
    { path: '/users/...', component: UsersRouterComponent, as:'UsersRouterComponent'}
])
export class AppComponent {
	
}