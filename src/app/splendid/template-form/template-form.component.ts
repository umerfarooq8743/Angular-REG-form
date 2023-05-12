import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  constructor(private titleService:Title){
    setTimeout(() => {
      this.titleService.setTitle('Second Task');
    }, 3000);
    setTimeout(() => {
      this.titleService.setTitle('Employee Form!');
    }, 5000);
    
  }
   
    
  
  submitted = false;
  displayData: any = [];
  forData: any = [];
  updateBtn = false;
  indexNo: number = 0;
  myForm: any = {};
  submit: any = 'Submit';
  getData(data: any) {
    if (this.updateBtn === false) {
      this.displayData = data;
      this.myForm = data.form.controls;

      // console.log(this.displayData.value);
      this.forData.push(this.displayData.value);
      this.submitted = true;
      this.displayData.reset();
    }
    else {

      this.updateBtn = false;
      this.forData[this.indexNo].name = this.myForm['name'].value;
      this.forData[this.indexNo].email = this.myForm['email'].value;
      this.forData[this.indexNo].password = this.myForm['password'].value;
      this.forData[this.indexNo].date = this.myForm['date'].value;
      this.forData[this.indexNo].gender = this.myForm['gender'].value;
      this.forData[this.indexNo].status = this.myForm['status'].value;
      this.displayData.reset();
      this.submit = "Submit";
      console.log(this.forData);
    }
  }
  upDate(updateid: number) {
    this.updateBtn = true;
    var editData = this.forData[updateid];
    this.indexNo = updateid;
    this.myForm.name.setValue(editData.name);
    this.myForm.email.setValue(editData.email);
    this.myForm.password.setValue(editData.password);
    this.myForm.date.setValue(editData.date);
    this.myForm.gender.setValue(editData.gender);
    this.myForm.status.setValue(editData.status);
    this.submit = "Save";
    // console.log(editData);
    this.indexNo = updateid;
    // console.log(this.indexNo);
  }
  reMove(removeid: any) {
    this.forData.splice(removeid, 1);
    if (this.forData.length > 0)
      this.submitted = true;
    else
      this.submitted = false;
  }
  checkEd(event:any ,user: any, index:number) {
    if (event.target.checked) {
      debugger
      user.select = !user.select;
      console.log(!user.select)
      this.forData[index].select = event.target.checked;
    }

  }
  removeAll() {
   
    var selectedItem=this.forData.filter((a: any) => a.select == true)
    var unselectedItem=this.forData.filter((a: any) => a.select == false)
    if(selectedItem && selectedItem.length>0){
      this.forData= unselectedItem;
      if (this.forData.length > 0)
      this.submitted = true;
    else
      this.submitted = false;
      console.log(this.forData);
    }
    else{
      if(this.forData  && this.forData.length>0){
        this.forData=[];
      }
    }
    
  }
}
