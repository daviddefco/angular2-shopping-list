import { Component, OnInit, Output, EventEmitter } from 'angular2/core';

@Component({
   selector: 'setup',
   template: `
      <div class="well">
         <h1>Game Setup</h1>          
         <form class="form-inline">
            <div class="form-group">
               <label>Enter your name please:</label>
               <input (keyup)="onKeyUp()" [(ngModel)]="userName" type="text" class="form-control" placeholder="Enter Name">
            </div>
         </form>   
      </div>
   `
})

export class SetupComponent implements OnInit {  
   @Output('nameChange') change = new EventEmitter()
   userName: string
   
   constructor() { }

   ngOnInit() { }   
   
   onKeyUp() {
      this.change.emit({ userName: this.userName})
   }
}