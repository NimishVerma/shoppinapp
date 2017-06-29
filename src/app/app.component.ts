import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <h3>Welcome to your cart</h3>
    <div class="col-md-6 ItemsBox">
    <ul>

    <li *ngFor="let movie of movieList" (click)="selectedMovie(movie)">{{movie[0]}}</li>
    </ul>
    </div>
    <div class="col-md-6 box">
  Cart:<ul><li *ngFor="let item of cart">{{item[0]}} x <div style="float:none;display:inline" [ngStyle]="{'color': item[2]}">
  {{item[1]}}
</div></li></ul> </div>`,
styleUrls:['./app.component.css']
})
export class AppComponent {
title = 'Shopping cart!';
public movieList = [['Thor',1,'green'], ['Captain America',1,'green'],['Conjuring',1,'green']];
public cart=[];

selectedMovie(movie){
  if (this.cart.indexOf(movie)== -1)
  {  this.cart.push(movie);}
else{
 this.cart[this.cart.indexOf(movie)][1]++;  }
 console.log(this.movieList)
 if(this.cart[this.cart.indexOf(movie)][1] >'3'){
 this.cart[this.cart.indexOf(movie)][2] ='red';
 console.log("yo");
 }
  }
}
