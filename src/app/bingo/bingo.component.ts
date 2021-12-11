import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  boxes(n: number) {
    let a : number[]= [];
   for(let i=1; i<=n; i++) {
    a.push(i);
   }
   return a.sort(() => Math.random() - 0.5);
  }
}
