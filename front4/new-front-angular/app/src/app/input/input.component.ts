import {
  Component,
  Input,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() min: number = 1;
  @Output() valueChange = new EventEmitter<{ label: string; value: number }>();
  valueInputControl = new FormControl('', [
    Validators.required,
    Validators.max(5),
    this.customValidator,
  ]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['min']) {
      this.updateMinValidator();
    }
  }

  private updateMinValidator(): void {
    const validators = this.valueInputControl.validator
      ? [this.valueInputControl.validator]
      : [];

    validators.push(Validators.min(this.min));

    this.valueInputControl.setValidators(validators);
    this.valueInputControl.updateValueAndValidity();
  }
  private customValidator(
    control: AbstractControl
  ): { [key: string]: any } | null {
    const isNumeric =
      !isNaN(parseFloat(control.value)) && isFinite(control.value);
    return isNumeric ? null : { nonNumeric: true };
  }
  onInputChange(): void {
    if (this.valueInputControl.valid&&this.valueInputControl.value) {
      const value = parseFloat(this.valueInputControl.value.replace(',', '.'));
      this.valueChange.emit({ label: this.label, value });
    }
  }
}
