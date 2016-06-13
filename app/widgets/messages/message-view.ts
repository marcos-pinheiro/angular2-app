import { Component, Input } from '@angular/core';
import { Message} from './message';

@Component({
    selector: 'message-view',
    templateUrl: 'app/widgets/messages/index.html'
})
export class MessageView {

    @Input() messages :Message[] = []
}