import {Component} from 'angular2/core';

import {SetupComponent} from './puzzle/setup.component'
import {PuzzleComponent} from './puzzle/puzzle.component'

@Component({
    selector: 'my-app',
    template: `
        <setup (nameChange)="puzzle.changePlayerName($event.userName)"></setup>
        <puzzle #puzzle></puzzle>
    `,
    directives: [ SetupComponent, PuzzleComponent ]
})

export class AppComponent {
}