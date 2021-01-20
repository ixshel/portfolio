import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFirebaseService } from '../../services/crud-firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(
    public crudApi: CrudFirebaseService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.crudApi.AddContactInfo(form.value);
    // console.log(form.value.emailContact);
    form.resetForm();
  }

}
