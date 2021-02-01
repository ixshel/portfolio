import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {
  form_info_ref: AngularFireObject<any>;
  all_form_info_ref: AngularFireList<any>;
  
  constructor(private db: AngularFireDatabase) { }

  AddContactInfo(form: Contact){
    this.all_form_info_ref = this.db.list('contact');
    this.all_form_info_ref.push({
      name: form.nameContact,
      email: form.emailContact,
      message: form.messageContact
    })
    console.log(form.nameContact, form.emailContact, form.messageContact);
  }
  
  GetChatBot(){
    return this.all_form_info_ref = this.db.list('bot');
  }
  
}
