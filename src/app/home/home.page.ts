import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
name;
surname;
age;
gender;

  constructor(private route:Router) {}
nextPage()
{
  this.route.navigateByUrl('tabs/details')

  console.log(this.name);
  console.log(this.surname);
  console.log(this.age);
  console.log(this.gender);
}




}
