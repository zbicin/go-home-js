import { Component } from '@angular/core';
import { ToastType } from './ui/toast/toast.component';

@Component({
  selector: 'ghj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  answers = [
    'First',
    'Second',
    'Third',
    'Fourth'
  ];
  question = 'Here is the question';

  onLogin() {
    console.log('Successful login');
  }
}
