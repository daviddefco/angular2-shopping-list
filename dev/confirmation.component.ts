import { Component, Input, Output, EventEmitter } from 'angular2/core'
import { FormBuilder, ControlGroup, Validators } from 'angular2/common'

import { PersonalData } from './personalData'

@Component({
   selector: 'my-confirmation',
   template: `
      <section class="well">
         <h2>Submitted Data</h2>         
         <p>Your name is <span class="data">{{realTimeData? realTimeData.fullName : confirmData.fullName}}</span> 
         and you are <span class="data">{{realTimeData? realTimeData.age : confirmData.age}}</span> years old. 
         Is that right?</p>
            <form [ngFormModel]="form" (ngSubmit)="onConfirm()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" 
                    ngControl="fullName"
                    [ngModel]="confirmData.fullName"
                    (keyup)="realTimeData.fullName = fullName.value"
                    #fullName="ngForm"              
                    placeholder="Enter your name here">
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control" 
                    ngControl="age"
                    #age="ngForm"
                    [ngModel]="confirmData.age"
                    (keyup)="realTimeData.age = age.value"
                    placeholder="Enter your age here">
                </div>
                <h4>Form Control:</h4>
                <ul>
                    <li><b>Partially Filled:</b> {{form.dirty}}</li>
                    <li><b>Valid:</b> {{form.valid}}</li>
                </ul>    
                <button type="submit" class="btn btn-primary"
                [disabled]="!form.valid">
                    Confirm
                </button>
            </form>         
      </section>    
   `,
})

export class ConfirmationComponent {
   @Input('submitted-data') confirmData = new PersonalData()
   @Output('confirmData') confirmEvent = new EventEmitter<PersonalData>()
   
   realTimeData = this.confirmData
   form:ControlGroup

   constructor(private _fb:FormBuilder) { 
       this.form = this._fb.group({
           fullName: [this.confirmData.fullName, Validators.required],
           age: [this.confirmData.age, Validators.required]
       })
   }

   onConfirm() {
       if(this.form.valid) {        
            this.confirmData = this.form.value            
            console.log(`Data confirmed: ${JSON.stringify(this.confirmData)}`)
            this.confirmEvent.emit(this.confirmData)
        }              
   }
} 