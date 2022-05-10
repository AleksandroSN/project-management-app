import { AbstractControl } from "@angular/forms";
import { LOGIN_INPUT, PASSWORD_INPUT, NAME_INPUT } from "@utils";

export type AuthKeyFormControls = typeof LOGIN_INPUT | typeof PASSWORD_INPUT | typeof NAME_INPUT;

export type AuthFormControls = Record<AuthKeyFormControls, AbstractControl>;
