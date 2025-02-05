import { Injectable, inject } from '@angular/core';
import { Database, ref, push, DatabaseReference } from '@angular/fire/database';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private db: Database = inject(Database);
  private contactsRef: DatabaseReference;

  constructor() {
    this.contactsRef = ref(this.db, 'contacts');
    console.log(this.contactsRef)
  }

  async sendMessage(message: Omit<ContactMessage, 'timestamp'>): Promise<void> {
    try {
      const messageWithTimestamp: ContactMessage = {
        ...message,
        timestamp: Date.now()
      };

      await push(this.contactsRef, messageWithTimestamp);
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}
