import { compileNgModule } from '@angular/compiler';
import { Component, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {
  constructor(private titleService: Title,private Overlay:OverlayContainer) {
    setTimeout(() => {
      this.titleService.setTitle('Second Task');
    }, 3000);
    setTimeout(() => {
      this.titleService.setTitle('Loading. . . .');
    }, 6000);
    setTimeout(() => {
      this.titleService.setTitle('Employee Form!');
    }, 8000);
    setTimeout(() => {
      this.titleService.setTitle('Second Task');
    }, 12000);
    setTimeout(() => {
      this.titleService.setTitle('Loading. . . .');
    }, 15000);
    setTimeout(() => {
      this.titleService.setTitle('Employee Form!');
    }, 19000);
  
  }
  title = 'Employee Form';
  userdata: any = [];
  submitted = false;
  indexno = 0;
  userkey: any = [];
  updbtn = false;
  submit: any = 'Submit';

  minDate = '1980-01-01'
  maxDate = '2006-12-31'
    // togglecontrol=new FormGroup(false);
    // @HostBinding('class')className='';
    // darkClassName='abc,';
    // lightClassName='';
    // ngOnInit(){
    //   this.togglecontrol.valueChanges.subscribe((darkmode)=>
    // { this.className=darkmode?this.darkClassName:this.lightClassName;
    //   if(darkmode){
    //     this.Overlay.getContainerElement().classList.add(this.darkClassName);
    //   }
    //   else{this.Overlay.getContainerElement().classList.remove(this.darkClassName);}  
    // })
    // }
  registration = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
    lname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")]),
    code: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    select: new FormControl(),
    // job_title:new FormControl('',[Validators.required ,Validators.pattern('^[a-zA-Z \-\']+')]),
    // department:new FormControl('',[Validators.required ,Validators.pattern('^[a-zA-Z \-\']+')]),
    // manager:new FormControl('',[Validators.required ,Validators.pattern('^[a-zA-Z \-\']+')]),
    // hire_date:new FormControl('',[Validators.required]),
    // employment_type:new FormControl('',[Validators.required]),
    // salary:new FormControl('',[Validators.required ,Validators.pattern("[0-9 ]{4,6}")]),
    // currency:new FormControl('',[Validators.required]),
    // payment_method:new FormControl('',[Validators.required]),
    // full_name:new FormControl('',[Validators.required ,Validators.pattern('^[a-zA-Z \-\']+')]),
    // relation:new FormControl('',[Validators.required ,Validators.pattern('^[a-zA-Z \-\']+')]),
    // phone_no:new FormControl('',[Validators.required ,Validators.pattern("[0-9 ]{9}")]),
    // code1:new FormControl('',[Validators.required]),
    accept: new FormControl(false, [Validators.requiredTrue]),
  })
  getData() {
    // console.log(this.registration.value);
    if (this.updbtn === false) {
      this.registration.controls.select.setValue(false)
      this.userdata.push(this.registration.value);
      this.userkey.push(Object.keys(this.registration.value));
      this.registration.reset();
      this.submit = "Submit";
      if (this.userdata.length > 0) {
        this.submitted = true;
      }
      else {
        this.submitted = false;
      }
    }
    else {
      this.updbtn = false;
      this.userdata[this.indexno].fname = this.registration.controls['fname'].value;
      this.userdata[this.indexno].lname = this.registration.controls['lname'].value;
      this.userdata[this.indexno].email = this.registration.controls['email'].value;
      this.userdata[this.indexno].phone = this.registration.controls['phone'].value;
      this.userdata[this.indexno].code = this.registration.controls['code'].value;
      this.userdata[this.indexno].date = this.registration.controls['date'].value;
      this.userdata[this.indexno].gender = this.registration.controls['gender'].value;
      this.userdata[this.indexno].status = this.registration.controls['status'].value;
      this.registration.reset();
      this.submit = "Submit";
      Swal.fire("Successfully Updated!", "You clicked the button!", "success");
    }

  }

  get f() {
    return this.registration.controls;
  }

  update(edit: any) {
    this.updbtn = true;
    var edit_data = this.userdata[edit];
    this.indexno = edit;
    this.registration.controls['fname'].setValue(edit_data.fname);
    this.registration.controls['lname'].setValue(edit_data.lname);
    this.registration.controls['email'].setValue(edit_data.email);
    this.registration.controls['phone'].setValue(edit_data.phone);
    this.registration.controls['code'].setValue(edit_data.code);
    this.registration.controls['date'].setValue(edit_data.date);
    this.registration.controls['gender'].setValue(edit_data.gender);
    this.registration.controls['status'].setValue(edit_data.status);
    this.submit = "Save";

  }
  checkedid(user: any) {
    debugger
    if (user) {
      user.select = !user.select
    }

  }
  dlt(remve: any) {
    debugger
    Swal.fire("Remove Successfully!", "You clicked the button!", "success");
    this.userdata.splice(remve, 1);
    if (this.userdata.length > 0) {
      this.submitted = true
    }
    else {
      this.submitted = false;
    }


  }
  changedate(event: any) {
    var date=event.target.value;
    if(this.minDate <= date && this.maxDate >= date)
    console.log(date)
    else{
      this.registration.controls['date'].setValue(null);
    }

    // if (event && event.target.value) {
    //   if (this.minDate < event.target.value) {
    //     this.registration.controls['date'].setValue( );
    //   }
    // }
  }
  dltall() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        var unselectedArray = this.userdata.filter((a: any) => a.select == false)
        var selectedArray = this.userdata.filter((a: any) => a.select == true)

        if (selectedArray && selectedArray.length > 0) {
          this.userdata = unselectedArray;

          if (this.userdata.length > 0) {
            this.submitted = true
          } else
            this.submitted = false;
        }
        else {
          if (this.userdata && this.userdata.length > 0) {
            this.userdata = [];
          }
          this.submitted = false
        }
        Swal.fire(
          'Deleted!',
          'Your Data has been deleted.',
          'success'
        )
      }
    })
  }

}
