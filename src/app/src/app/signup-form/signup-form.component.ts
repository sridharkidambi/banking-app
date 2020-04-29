import {  CustomValidator } from './customValidator';
import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray, FormBuilder} from '@angular/forms'
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form =new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3),CustomValidator.noSpaceValidator] ,CustomValidator.checkifavailable),
    password:new FormControl('',Validators.required)
    
  });

  form1 =new FormGroup({
    account: new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(3),CustomValidator.noSpaceValidator] ,CustomValidator.checkifavailable),
      password:new FormControl('',Validators.required)
    })
    
  });

  form2=new FormGroup({
    topics: new FormArray([])
  });

  form5;
  form3= new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email:  new FormControl(),
      phone:  new FormControl()
    }),
    topics: new FormArray([])
  })

  constructor(fb:FormBuilder){
  this.form5=  fb.group({
      name: ['',Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }

  get username(){
    console.log(this.form);
    return this.form.get('username')
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }

  addtopic(item:HTMLInputElement){
    console.log(item)
    console.log('sk');
    (this.form2.get('topics') as FormArray).push(new FormControl(item.value));
    item.value='';
  }

  removeitem(item:FormControl){
 let index= (this.form2.get('topics')as FormArray).controls.indexOf(item);
  (this.form2.get('topics')as FormArray).removeAt(index);
  }
}
