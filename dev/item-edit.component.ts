import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common'

import { ListItem } from './listItem'

@Component({
   selector: 'item-edit',
   template: `
      <form [ngFormModel]="form" 
      (ngSubmit)="onSubmit()" 
      class="form-inline">
         <div class="form-group">
            <label>Item</label>
            <input type="text" class="form-control"
            ngControl="item"
            #item="ngForm"
            [ngModel]="currentItem?.item"
            (keyup)="onChange()" 
            placeholder="Enter item">
         </div>
         <div class="form-group">
            <label>Quantity</label>
            <input type="text" class="form-control"
            ngControl="quantity"
            #quantity="ngForm"
            [ngModel]="currentItem?.quantity"  
            (keyup)="onChange()"
            placeholder="Enter quantity">
         </div>
         <button type="submit" class="btn"
         [disabled]="!form.valid" 
         [ngClass]="{
            'btn-success': isAddAction,
            'btn-danger': !isAddAction 
         }">
            <i class="fa" [ngClass]="{    
               'fa-plus': isAddAction,
               'fa-remove': !isAddAction
            }"></i>
         </button>
      </form>
   `
})
export class ItemEditComponent implements OnInit {
   @Input() isAddAction = true
   @Input() currentItem: ListItem
   @Output('itemAdded') add = new EventEmitter<ListItem>()
   @Output('itemChanged') change = new EventEmitter<ListItem>()
   @Output('itemRemoved') remove = new EventEmitter()
   
   form: ControlGroup

   constructor(private _fb: FormBuilder) { 
      this.form = _fb.group({
         item: [ '', Validators.required ],
         quantity: [ '', Validators.required ]
      })
   }

   ngOnInit() { }

   onSubmit() {  
      if (this.isAddAction) { 
         this.add.emit(this.form.value) 
      } else {
         this.remove.emit({})
         this.currentItem = null
      }            
   }

   onChange() {
      this.change.emit(this.form.value)
   }
}