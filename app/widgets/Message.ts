import { Component } from '@angular/core'

@Component({
    selector: 'message-view',
    template: 'sss'
})
export class MessageView {

    private message :string

    constructor(message: string) {
        this.message = message;
    }

    public static teste() {
        alert('xxx');
    }

    public info(): void {
        alert('info: ' + this.message);
    }

    public warn(): void {
        alert('warn: ' + this.message);
    }

    public error(): void {
        alert('error: ' + this.message);
    }
}