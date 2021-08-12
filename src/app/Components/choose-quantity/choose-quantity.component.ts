import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';


@Component({
  selector: 'app-choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: ChooseQuantityComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ChooseQuantityComponent
    }
  ]
})
export class ChooseQuantityComponent implements ControlValueAccessor , Validator {
  quantity = 0;

  @Input() increment !: number;

  @Output () valuechanged : EventEmitter<number> = new EventEmitter();
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
      if(quantity<=0)
            return {mustBePositive:{quantity}}
      return null;      
}

  onTouched = () => {};

  touched = false;

  disabled = false;

  onRemove()
  {
    this.quantity-=this.increment;
    this.onChange(this.quantity);
    this.onTouched();
    this.valuechanged.emit(this.quantity)
  }

  onAdd()
  {
    this.quantity+=this.increment;
    this.onChange(this.quantity);
    this.onTouched();
    this.valuechanged.emit(this.quantity)
  }


  writeValue(quantity: number): void {
    this.quantity=quantity;
  }

  onChange = (quantity:number) => {};

  registerOnChange(fn: (quantity:number) => {}): void {
   this.onChange =  fn;
  }
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }



  
  
}
