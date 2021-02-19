import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFirebaseService } from '../../services/crud-firebase.service';

//Angular material
import {MatSnackBar} from '@angular/material/snack-bar';
import { Contact } from 'src/app/models/contact.model';

import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  from_name: string;
  from_email: string;
  message: string;

  reEmail: string;

  messagesBot: Contact[];
  messageTemp: string;
  messagesArr: string[] = ['Hello, welcome to the contact seccion. What is your name?'];

  constructor(
    public crudApi: CrudFirebaseService,
    private _snackBar: MatSnackBar,
    private mailService: MailService
  ) { }

  ngOnInit(): void {
    this.from_name = '';
    this.from_email = '';
    this.message = '';
    this.reEmail = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
  }

  onSubmit(form: NgForm) {
    let data = {
      service_id: 'service_6lbt26p',
      template_id: 'template_tzfpmuk',
      user_id: 'user_JXRxbwA4WQXKVTtpe1bd7',
      template_params: form.value
    }

    if(this.from_name !== '' && this.from_email !== '' && this.message !== '') {
      if(this.from_email.toLowerCase().search(this.reEmail) !== -1){
        this.mailService.send(data).subscribe((response) => {
          console.log('email respomnse: ', response);
            form.resetForm();
            this.snackBar('Message sent');
        }, error => {
          this.snackBar(error.message);
        });
        
      }else {
        this.snackBar('Use a valid email');
      }
    }else if(this.from_name == ''){
      this.snackBar('The name is required');
    }else if(this.from_email == ''){
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
