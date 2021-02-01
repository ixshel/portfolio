import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFirebaseService } from '../../services/crud-firebase.service';

//Angular material
import {MatSnackBar} from '@angular/material/snack-bar';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  messagesBot: Contact[];
  messageTemp: string;
  messagesArr: string[] = ['Hello, welcome to the contact seccion. What is your name?'];

  constructor(
    public crudApi: CrudFirebaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.crudApi.GetChatBot()
      .snapshotChanges()
      .subscribe( (messages:any[]) => {
        this.messagesBot = [];
        messages.forEach(element =>{
          let x = element.payload.toJSON();
          x["$key"]=element.key;
          this.messagesBot.push(x as Contact);
        })
      });
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

  onSendMessage(form: NgForm){
    this.messagesArr.push(form.value.contactInput);
    console.log(this.messagesArr)
  }

}
