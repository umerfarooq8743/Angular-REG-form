import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  userlist:any=[];
  onclick(data:any){
    this.userlist.push(data.value)
  }
  dlt(remve:any){
    this.userlist.splice(remve,1)
  }
}
