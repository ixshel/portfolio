import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFirebaseService } from '../../services/crud-firebase.service';

//Angular material
import {MatSnackBar} from '@angular/material/snack-bar';

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
    public crudApi: CrudFirebaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  snackBarRef(){

  }

  onSubmit(form: NgForm) {
    this.crudApi.AddContactInfo(form.value);
    // console.log(form.value.emailContact);
    form.resetForm();
    this.snackBar('Message sent');
  }
  snackBar(message){
    this._snackBar.open(message, 'OK',{
      duration: 3000
    });
  }

}
