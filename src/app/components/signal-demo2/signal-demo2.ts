import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.html',
  styleUrl: './signal-demo2.css',
})
export class SignalDemo2 {
  userId: WritableSignal<number> = signal(1);
  userData: WritableSignal<any> = signal({});
  httpClient = inject(HttpClient);

  userDetailsEffect = effect(() => {
    const userId = this.userId();
    this.fetchUserDetails(userId);
  });

  fetchUserDetails(userId: number) {
    this.httpClient
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .subscribe((response) => {
        this.userData.set(response);
      });
  }

  incrementUserId() {
    this.userId.update((val) => val + 1);
  }

  destroyEffect() {
    this.userDetailsEffect.destroy();
  }
}
