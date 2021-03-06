import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'



// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);
  constructor() { }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }



  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }


  //  getWeather(location){
  //     return this.http.get(
  //         'https://api.apixu.com/v1/current.json?key=YOUR_API_KEY&q=' + location
  //     );
  // }
}
