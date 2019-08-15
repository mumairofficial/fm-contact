import { FormControl } from "@angular/forms";

export class CustomValidators {
  public static noWhiteSpace(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  public static phone(control: FormControl) {
    // https://stackoverflow.com/questions/123559/a-comprehensive-regex-for-phone-number-validation
    const phoneNumber = (control.value || "").trim();
    const regex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
    const isValid = regex.test(phoneNumber)
    return isValid ? null : { phone: true };
  }
}
