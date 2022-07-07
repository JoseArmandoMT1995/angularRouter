import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  id!:any;
  ngOnInit() {
    if(!localStorage.getItem('id')){
      this.id="";
    }
    else{
      this.id=localStorage.getItem('id');
    }
    
    
    console.log(this.id);
  }
  
  navigar(){
    this.router.navigate(['/post']);
  }
  navigarPost(id :any){
    this.router.navigate(['/postData', String(id)]);
  }
}
