import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  constructor(){
    this.getData();
  }
  array:any=[
    {
      name:"umer",
      age:12,
      email:"sm@gm.com",
    },
    {
      name:"ali",
      age:22,
      email:"sm@gm.com",
    },
    {
      name:"musa",
      age:28,
      email:"safsaam@gm.com",
    },
   
  ];

  tab_key:any=[];
  tab_value:any=[];
  getData(){
    this.array.forEach((element:any) => {
     this.tab_key=Object.keys(element);
     this.tab_value.push(Object.values(element)); 
    });
    console.log(this.tab_value)
  }
}
