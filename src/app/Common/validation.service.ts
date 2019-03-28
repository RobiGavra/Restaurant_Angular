import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {
  getErrorMessage(control: FormControl) {
    if (control.errors['max'])
      return 'The limit is: ' + control.errors['max'].max;

    if (control.errors['pattern'])
      return 'Insert a valid value';

    if (control.errors['required'])
      return 'The field is required';

    if (control.errors['min'])
      return 'The minimum value is ' + control.errors['min'].min;

    if (control.errors['minlength'])
      return 'You need to have at least ' + control.errors['minlength'].requiredLength + ' characters';

    if (control.errors['maxlength'])
      return "You can't have more than " + control.errors['maxlength'].requiredLength + ' characters';   
  }

  hasError(control: FormControl, isSubmited: boolean = false) {
    return control.errors && ((control.dirty || control.touched) || isSubmited);
  }
}
