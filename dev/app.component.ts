import {Component} from 'angular2/core';

import { ItemEditComponent } from './item-edit.component'
import { ShoppingListComponent } from './shopping-list.component'

import {ListItem} from './listItem'

@Component({
    selector: 'my-app',
    template: `
        <div class="container col-md-6 well">
            <h3>Add Item</h3>
            <p>
                Add an item and quantity and press (+) to add the item to
                the shopping list.
            </p>
            <item-edit (itemAdded)="onAddItem($event)"></item-edit>
            <hr class="separator">            
            <shopping-list [(itemList)]="shoppingList">
            </shopping-list>
        </div>
    `,
    directives: [ ItemEditComponent, ShoppingListComponent ]
})

export class AppComponent {
    shoppingList: ListItem[] = []

    onAddItem($event) {
        console.log(`Adding ${JSON.stringify($event)} to the list`)
        this.shoppingList.push($event) 
    }

    onRemoveItem($event) {
        console.log(`Removing ${JSON.stringify($event)} from the list`)
        let index = this.shoppingList.indexOf($event, 0)
        if (index > -1) {
            this.shoppingList.splice(index, 1)
        }
    }
}