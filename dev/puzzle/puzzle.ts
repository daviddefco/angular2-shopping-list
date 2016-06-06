export class PuzzleCombination {
   switchOne:boolean = false
   switchTwo:boolean = false
   switchThree:boolean = false
   switchFour:boolean = false
   
   constructor(data) { 
      if (data.switchOne) { this.switchOne = data.switchOne }    
      if (data.switchTwo) { this.switchTwo = data.switchTwo }    
      if (data.switchThree) { this.switchThree = data.switchThree }    
      if (data.switchFour) { this.switchFour = data.switchFour }    
   }
   
   checkSolution(solution: boolean[]):boolean {
      console.log(
         `Trying combination ${this.switchOne} - ${this.switchTwo} - ${this.switchThree} - ${this.switchFour}`
      )
      if (this.switchOne == solution[0]
      && this.switchTwo == solution[1]
      && this.switchThree == solution[2]
      && this.switchFour == solution[3]) {
         console.info("Puzzle solved")         
         return true 
      }  else {
         console.log("Combination failed")
         return false
      }
   }
}