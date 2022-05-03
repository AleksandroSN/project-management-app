import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { InputValidationService } from "@app/core/services";
import { LOGIN_INPUT, PASSWORD_INPUT } from "@utils";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  hide = true;

  form?: FormGroup;

  constructor(private fb: FormBuilder, private inputValidationService: InputValidationService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, this.inputValidationService.passwordValidator()]],
    });
  }

  get login() {
    return this.form?.get(LOGIN_INPUT);
  }

  get password() {
    return this.form?.get(PASSWORD_INPUT);
  }

  onSubmit() {
    console.log(this.form?.value);
    // const dataFromForm = this.form?.value as User;
    // const userName = getUsernameFromEmail(dataFromForm.login);
    // const user: User = {
    //   login: userName,
    //   password: dataFromForm.password,
    // };
    // this.loginService.login(user);
  }
}
