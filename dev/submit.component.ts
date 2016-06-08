import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common'

import { PersonalData } from './personalData'

@Component({
    selector: 'my-submit',
    template: `
        <section class="well">
            <h2>Details</h2>
            <p>Please, enter your details below:</p>
            <form [ngFormModel]="form" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control"
                    ngControl="fullName"
                    [ngModel]="submitData.fullName"
                    #fullName="ngForm"
                    placeholder="Enter your name here">
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="text" class="form-control"
                    ngControl="age"
                    #age="ngForm"
                    [ngModel]="submitData.age"
                    placeholder="Enter your age here">
                </div>
                <h4>Form Control:</h4>
                <ul>
                    <li><b>Partially Filled:</b> {{form.dirty}}</li>
                    <li><b>Valid:</b> {{form.valid}}</li>
                </ul>    
                <button type="submit" class="btn btn-primary"
                [disabled]="!form.valid">
                    Submit
                </button>
            </form>
        </section>
    `
})

export class SubmitComponent {
    form:ControlGroup
    @Input('confirmed-data') submitData = new PersonalData()
    @Output('submitData') submitEvent = new EventEmitter<PersonalData>()
       
    constructor(private _fb:FormBuilder) {
        this.form = this._fb.group({
           fullName: [this.submitData.fullName, Validators.required], 
           age: [this.submitData.age, Validators.required] 
        })    
    }
    
    onSubmit() {
        console.log(this.form.value)
        if(this.form.valid) {        
            this.submitData = this.form.value
            console.log(`Data entered: ${JSON.stringify(this.submitData)}`)
            this.submitEvent.emit(this.submitData)
        }        
    }
}