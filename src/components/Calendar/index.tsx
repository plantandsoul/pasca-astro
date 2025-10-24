
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { convertIcsToJson } from './utils';

const { PUBLIC_GOOGLE_CALENDAR_API_KEY } = import.meta.env;

const meetupEvents = await (async () => {
  const icsResponse = await fetch('https://corsproxy.io/https://www.meetup.com/pasca-volunteers/events/ical/');
  const icsFile = await icsResponse.text();
  const icsJson = convertIcsToJson(icsFile);

  return icsJson;
})();

const Calendar = () => {
  return (
    <FullCalendar
      eventSources={[
        {
          googleCalendarId: 'c_aff2d883ae36649a50f6e287c666c1a5ee0fcabf38e92993972561e3ce8929a0@group.calendar.google.com',
        }
      ]}
      events={meetupEvents}
      googleCalendarApiKey={PUBLIC_GOOGLE_CALENDAR_API_KEY}
      initialView='listYear'
      plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
    />
  );
};

export default Calendar;
