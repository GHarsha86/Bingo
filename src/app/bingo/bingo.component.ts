import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  randomNumber: any = "!!";
  boxes : number[]= [];
  randomNumbers : number [] = [];
  mincount = 0;
  winc = 0;
  result = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25], [1,7,13,19,25], [5,9,13,17,21], 
            [1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23], [4,9,14,19,24], [5,10,15,20,25]];
  win = '';
  tem: number []=[];
  constructor() { }
  
  ngOnInit(): void {
    
    this.createLayout();
  }
  
  createLayout() {
    for(let i=1; i<=25; i++) {
      this.boxes.push(i);
     }
     this.boxes.sort(() => Math.random() - 0.5); 
  }

  generateRandomNumber() {
    let number = Math.floor(Math.random() * 25) + 1;
    if (this.randomNumbers.includes(number)) {
      this.generateRandomNumber();
    } else {
      this.randomNumber = number;
      this.randomNumbers.push(number);
      document.getElementById(this.randomNumber)?.setAttribute("style", "background-color: rgb(50, 54, 54)");    
      this.mincount++;
      if (this.mincount >= 5) {
        let i=0;
        this.result.forEach((res, index) => {
         
            const node1 = document.querySelector('[title = "'+res[0]+'"]');
            const node2 = document.querySelector('[title = "'+res[1]+'"]');
            const node3 = document.querySelector('[title = "'+res[2]+'"]');
            const node4 = document.querySelector('[title = "'+res[3]+'"]');
            const node5 = document.querySelector('[title = "'+res[4]+'"]');
            if (node1 != null && node2 != null && node3 != null && node4 != null && node5 != null) {
              const style1 = getComputedStyle(node1).getPropertyValue('background-color').toString();
              const style2 = getComputedStyle(node2).getPropertyValue('background-color').toString();
              const style3 = getComputedStyle(node3).getPropertyValue('background-color').toString();
              const style4 = getComputedStyle(node4).getPropertyValue('background-color').toString();
              const style5 = getComputedStyle(node5).getPropertyValue('background-color').toString();
              // console.log(style1.getPropertyValue('background-color').toString());
              if(this.tem.includes(index)){return;}
              if (style1 === "rgb(50, 54, 54)" && style2 === "rgb(50, 54, 54)" && style3 === "rgb(50, 54, 54)" && style4 === "rgb(50, 54, 54)" && style5 === "rgb(50, 54, 54)" ) {

                  this.winc++;
                  this.tem.push(index);
              }
            }
            
            
        });
        if (this.winc === 5) {
          this.win = "WINNER!!!";
          setTimeout(() => {
            this.reset();
          }, 3000);
        }
         
      }
    }    
  }

  reset() {
  this.boxes=[];
  this.randomNumber = "!!";
  this.randomNumbers= [];
  this.mincount = 0;
  this.winc = 0;
  this.result = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25], [1,7,13,19,25], [5,9,13,17,21], 
            [1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23], [4,9,14,19,24], [5,10,15,20,25]];
  this.win = '';
  this.createLayout();
  }
}
