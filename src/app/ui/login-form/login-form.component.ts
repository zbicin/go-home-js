import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ghj-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output() public login = new EventEmitter<string>();

  public name: string;

  constructor() { }

  onSubmit(event: any) {
      event.preventDefault();
      this.login.emit(this.name);
  }

}
