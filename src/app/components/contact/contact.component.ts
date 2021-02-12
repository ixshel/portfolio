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

  reEmail: string;

  messagesBot: Contact[];
  messageTemp: string;
  messagesArr: string[] = ['Hello, welcome to the contact seccion. What is your name?'];

  constructor(
    public crudApi: CrudFirebaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.name = '';
    this.email = '';
    this.message = '';
    this.reEmail = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';

    // this.crudApi.GetChatBot()
    //   .snapshotChanges()
    //   .subscribe( (messages:any[]) => {
    //     this.messagesBot = [];
    //     messages.forEach(element =>{
    //       let x = element.payload.toJSON();
    //       x["$key"]=element.key;
    //       this.messagesBot.push(x as Contact);
    //     })
    //   });
  }

  onSubmit(form: NgForm) {
    if(this.name !== '' && this.email !== '' && this.message !== '') {
      if(this.email.search(this.reEmail) !== -1){
        this.crudApi.AddContactInfo(form.value);
        form.resetForm();
        this.snackBar('Message sent');
      }else {
        this.snackBar('Use a valid email');
      }
    }else if(this.name == ''){
      this.snackBar('The name is required');
    }else if(this.email == ''){
      this.snackBar('The email is required');
    }else if(this.message == ''){
      this.snackBar('The meessage is required');
    }
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
