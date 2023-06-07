import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  conversations = [
    {
      name: 'Mummy',
      time: '8:21',
      latestMessage: 'Hii Aliva!!',
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'have your food', time: '8:21', me: true },
        { id: 2, body: 'yes', time: '8:21', me: false },
        { id: 3, body: 'what are you doing ?', time: '8:21', me: true },
        { id: 4, body: 'Hii Aliva!!', time: '8:21', me: false },
      ],
    },
    {
      name: "Dii",
      time: "9:21",
      latestMessage: "Glad to know",
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hey', time: '8:21', me: true },
        { id: 2, body: 'you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine', time: '8:21', me: true },
        { id: 4, body: 'Glad to know', time: '8:21', me: false },
      ],
    },
    {
      name: "Riya",
      time: "10:21",
      latestMessage: "Good night!",
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hell0', time: '8:21', me: true },
        { id: 2, body: 'How?', time: '8:21', me: false },
        { id: 3, body: 'thanks', time: '8:21', me: true },
        { id: 4, body: 'Good night!', time: '8:21', me: false },
      ],
    },
    {
      name: "Prabhat",
      time: "11:21",
      latestMessage: "Good Morning!",
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello Prabhat', time: '8:21', me: true },
        { id: 2, body: 'u there', time: '8:21', me: false },
        { id: 3, body: 'I want to talk to you', time: '8:21', me: true },
        { id: 4, body: 'Good Morning!', time: '8:21', me: false },
      ],
    },
    {
      name: "Sonali",
      time: "7:21",
      latestMessage: "hiii!",
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'hiii', time: '8:21', me: false },
      ],
    },
    {
      name: "Namesake",
      time: "6:21",
      latestMessage: "HOLAAAA!",
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'All right', time: '8:21', me: true },
        { id: 2, body: 'Done?', time: '8:21', me: false },
        { id: 3, body: 'fine', time: '8:21', me: true },
        { id: 4, body: 'HOLAAAA', time: '8:21', me: false },
      ],
    },
    {
      name: "Sagar",
      time: "5:21",
      latestMessage: "Good Morning!",
      latestMessageRead: false,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },
    {
      name: "Sweta",
      time: "4:21",
      latestMessage: "Good Morning!",
      latestMessageRead: true,
      messages: [
        { id: 1, body: 'Hello world', time: '8:21', me: true },
        { id: 2, body: 'How are you?', time: '8:21', me: false },
        { id: 3, body: 'I am fine thanks', time: '8:21', me: true },
        { id: 4, body: 'Glad to hear that', time: '8:21', me: false },
      ],
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }
}
