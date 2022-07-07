import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) {  }
  id:any="";
  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get("id");
    localStorage.setItem('id', this.id);
    this.eliminarLocalStorage();
    console.log(localStorage.getItem('id'));
    
  }
  eliminarLocalStorage(){
    if(!localStorage.getItem('id') || localStorage.getItem('id') ===null || localStorage.getItem('id') ==='null')
    {
      localStorage.removeItem('id');
      localStorage.clear();
    }
  }
  navigar(){
    //retorno
    this.router.navigate(['']);
  }
}
