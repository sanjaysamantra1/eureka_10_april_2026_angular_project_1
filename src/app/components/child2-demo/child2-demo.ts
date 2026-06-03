import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  outputs:['topicEvent']
})
export class Child2Demo {
  b = 200;
  topicName = 'Component Communication';

  topicEvent = new EventEmitter();
  sendDataToParent() {
    this.topicEvent.emit(this.topicName);
  }
}
