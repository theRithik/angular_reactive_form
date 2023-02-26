import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  implements OnInit{
  reactiveForm!: FormGroup;

  constructor(){}
  
  ngOnInit(): void {
   this.reactiveForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    number: new FormControl(null),
    password: new FormControl(null),
    confirm: new FormControl(null)
   })
  }

onSubmit(){
  console.log(this.reactiveForm)
}

}
