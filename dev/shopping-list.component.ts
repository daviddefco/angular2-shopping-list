import { Component, OnInit, Input } from 'angular2/core';

import { ItemEditComponent } from './item-edit.component'
import { ListItem } from './listItem'

@Component({
   selector: 'shopping-list',
   template: `   
   <h3>Shopping List</h3>
   <div class="list-group" *ngFor="#element of itemList, #i = index">
      <button type="button"
      (click)="setActiveItem(i)" 
      class="list-group-item">
         {{ element.item }} { {{ element.quantity }} }
      </button>      
   </div>
   <div *ngIf="activeIndex != null">
      <p>
         Edit the item name and/or quantity to modify the shopping list 
         and press (X) to remove the item from the list.
      </p>
      <item-edit [isAddAction]="false"
      [currentItem]="itemList[activeIndex]"
      (itemChanged)="onChangeActiveItem($event)"
      (itemRemoved)="onRemoveActiveItem($event)"></item-edit>
   </div>
   `,
   directives: [ ItemEditComponent ]
})

export class ShoppingListComponent implements OnInit {
   @Input() itemList: ListItem[]
   activeIndex

   constructor() { }

   ngOnInit() { }

   setActiveItem(activeItemIndex) {
      this.activeIndex = activeItemIndex
      console.log(`Modifying item: ${JSON.stringify(this.itemList[this.activeIndex])}`)
   }

   onChangeActiveItem($event) {
      this.itemList[this.activeIndex] = $event
   }

   onRemoveActiveItem($event) {
      this.itemList.splice(this.activeIndex, 1)
      this.activeIndex = null
   }
}