import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls:['./app.component.css'],
  templateUrl:'./templates/index.html',
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
