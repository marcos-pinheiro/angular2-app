import { Component } from '@angular/core'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/',    name: 'UserGrid',   component: null },
    { path: '/new', name: 'UserForm',   component: null }
])
export class UsersRouterComponent {
    
}