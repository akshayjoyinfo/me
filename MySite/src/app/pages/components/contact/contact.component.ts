import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  responsive = true;
  loading = true;
  cols = 3;
  contactForm: FormGroup;
  errorMessage = '';


  // tslint:disable-next-line: variable-name
  constructor(private fb: FormBuilder, private _messageBar: MatSnackBar) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emailMessage: ['',  Validators.required]
    });

    this.loading = false;


  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.contactForm.value);
    // tslint:disable-next-line: variable-name
    const template_params = {
      reply_to: this.contactForm.get('email').value,
      from_name: this.contactForm.get('name').value,
      message_html: this.contactForm.get('emailMessage').value
   };

    // tslint:disable-next-line: variable-name
    const service_id = 'gmail';
    // tslint:disable-next-line: variable-name
    const template_id = 'template_78Tddzal';
    console.log(template_params);
    this.loading = true;
    emailjs.init('user_Gw8Kw6mmHIhEykoiqV2vy');
    emailjs.send(service_id, template_id, template_params);
    this.loading = false;
    this._messageBar.open('Mail Sent Successfully', 'SEND', {
      duration: 2000,
    });
    this.contactForm.reset();
    this.contactForm.markAsUntouched();
  }
  goToLink(url: string){
    window.open(url, '_blank');
  }

}
