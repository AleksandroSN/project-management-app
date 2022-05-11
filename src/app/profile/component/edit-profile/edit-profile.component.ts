import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthFormControls, UserWithName } from "@app/shared";
import { InputValidationService, ProfileService } from "@app/core/services";
import { selectUser, UserState } from "@app/redux";
import { Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<boolean>();

  user$: Observable<UserState>;

  userID = "";

  hide = true;

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private inputValidationService: InputValidationService,
    public profileServise: ProfileService,
    private store: Store,
  ) {
    this.user$ = this.store.select(selectUser);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      login: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, this.inputValidationService.passwordValidator()]],
    });
    this.updateUserID();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  updateUserID() {
    this.user$.pipe(takeUntil(this.destroy$)).subscribe((user) => {
      this.userID = user.id;
    });
  }

  get controls(): AuthFormControls {
    return this.form.controls as AuthFormControls;
  }

  onSubmit() {
    const user: UserWithName = this.form.value as UserWithName;
    this.profileServise.updateProfile(this.userID, user);
  }
}
