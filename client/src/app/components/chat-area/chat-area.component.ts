import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {
  public events: any[];

  public options: any;
  constructor() { }

  ngOnInit() {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false
    };


    this.events = [
      {
        title: "Evento 1",
        start: new Date().getTime(),
        description: "evento 1"
      },
      {
        title: "Evento 2",
        start: new Date(new Date().getTime() + 86400000),
        description: "evento 2"
      },
      {
        title: "Evento 3",
        start: new Date(new Date().getTime() + (86400000 * 2)),
        end: new Date(new Date().getTime() + (86400000 * 3)),
        description: "evento 2"
      },
    ]

  }
}
