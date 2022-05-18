import { AbstractControl } from "@angular/forms";

export type BoardModalKeyFormControls = "title" | "description";

export type BoardModalFormControls = Record<BoardModalKeyFormControls, AbstractControl>;
