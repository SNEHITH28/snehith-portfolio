import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {
  private contactService = inject(ContactService);

  contactForm!: FormGroup;
  submitted = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      try {
        await this.contactService.sendMessage(this.contactForm.value);
        this.submitSuccess = true;
        this.contactForm.reset();
        this.submitted = false;

        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send message. Please try again.');
      }
    }
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }
}
