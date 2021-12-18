import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private http:HttpClient) {}
  async ngOnInit() {
    const test = await this.http.get("http://localhost:3000/missions").toPromise();
    console.log(test);
  }

  

}
