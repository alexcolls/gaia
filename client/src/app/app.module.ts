import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { MessageAreaComponent } from './components/message-area/message-area.component';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { FormsModule } from '@angular/forms';

import { FullCalendarModule } from '@fullcalendar/angular';
import { ErrorComponent } from './components/error/error.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EmailsComponent } from './components/emails/emails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainDisplayComponent,
    FooterBarComponent,
    MessageAreaComponent,
    ChatAreaComponent,
    ErrorComponent,
    CalendarComponent,
    ContactsComponent,
    EmailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
