import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common'

import { SubmitComponent } from './submit.component'
import { ConfirmationComponent } from './confirmation.component'

import { PersonalData } from './personalData'

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <my-submit  
            class="col-md-6"
            [confirmed-data]="confirmedData"
            (submitData)="submittedData=$event">
            </my-submit>
            <my-confirmation 
            class="col-md-6"
            [submitted-data]="submittedData"
            (confirmData)="confirmedData=$event">
            </my-confirmation>
        </div>
    `,
    directives: [ SubmitComponent, ConfirmationComponent ]
})

export class AppComponent {
    submittedData = new PersonalData()
    confirmedData = new PersonalData()
}