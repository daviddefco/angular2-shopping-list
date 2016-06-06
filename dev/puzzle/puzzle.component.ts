import { Component, OnInit, AfterViewInit } from 'angular2/core';
import { ControlGroup, FormBuilder } from 'angular2/common'

import { PuzzleCombination } from './puzzle'

import 'rxjs/add/operator/map'

@Component({
   selector: 'puzzle',
   templateUrl: `dev/puzzle/puzzle.component.html`
})
export class PuzzleComponent implements OnInit, AfterViewInit {
   playerName = 'Anonymous'
   puzzleForm: ControlGroup
   solution = []
   puzzleSolved = false
   puzzleStatus = 'NOT SOLVED'
         
   constructor(private _fb: FormBuilder) {       
   }

   ngOnInit() {
      this.puzzleForm = this._fb.group({
         switchOne: [ ],
         switchTwo: [ ],
         switchThree: [ ],
         switchFour: [ ]
      })
             
      for (let i = 0; i < 4; i++) {
         this.solution[i] = Math.random() < 0.5 ? false : true
      }
      console.log("Puzzle solution:")
      console.log(this.solution)
   }

   ngAfterViewInit() {
      this.puzzleForm.valueChanges
         .subscribe(data => {
            this.puzzleSolved = new PuzzleCombination(data)
               .checkSolution(this.solution)
            if (this.puzzleSolved) {
               this.puzzleStatus = 'SOLVED'   
            }                            
         })
   }
   
   changePlayerName(name: string) {
      this.playerName = name
   }   
}