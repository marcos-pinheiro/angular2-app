"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.livros = ['Livro de teste 1'];
        this.titulo = "Cadastro de livros";
    }
    AppComponent.prototype.adicionar = function () {
        if (this.nomeDoLivro.trim() != '') {
            this.livros.push(this.nomeDoLivro);
            this.nomeDoLivro = null;
        }
    };
    AppComponent.prototype.remover = function (index) {
        this.livros.splice(index, 1); //Remove pelo index do array;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<h2>{{titulo | uppercase}}</h2>\n  \t<ul>\n  \t\t<li *ngFor=\"#livro of livros; #i = index\"> <!-- o # fala que a variavel tarefa vai ser visivel somente neste escopo | index variavel do proprio angular-->\n  \t\t\t{{livro}} <a href=\"#\" (click)=\"remover(i)\"> [X] </a>\n  \t\t</li>\n  \t</ul>\n  \t<input type=\"text\" name=\"nome\" placeholder=\"Digite o nome do livro...\" [(ngModel)]=\"nomeDoLivro\"/> \n  \t<!-- [())] = Faz um bind bidirecional de sincronizacao -->\n  \t<button (click)=\"adicionar()\">Adicionar</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map