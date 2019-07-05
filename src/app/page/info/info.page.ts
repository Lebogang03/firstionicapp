import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  info: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.info = this.formBuilder.group({

      name: ['', Validators.required],
      surname: ['',Validators.required],
      age: [0,Validators.required],
      gender: ['',Validators.required]
    });
  }

  ngOnInit() {
  }

  submit(info){
    console.log(info.name, info.surname, info.age, info.gender)
  }

}
