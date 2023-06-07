import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input() conversation: any;
  constructor() {}

  ngOnInit(): void {}

  submitMessage(event:any) {
    let value = event.target.value;
    event.target.value='';
    this.conversation.latestMessage = value;
    this.conversation.messages.push({
      id: 1,
      body: value,
      time: '10:21',
      me: true,
    });
  }
}


