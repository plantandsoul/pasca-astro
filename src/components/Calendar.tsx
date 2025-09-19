
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => (
  <FullCalendar
    plugins={[dayGridPlugin]}
    initialView="dayGridMonth"
    initialEvents={[
      { title: 'event1', start: new Date(), resourceId: 'a' },
      { title: 'event2', start: new Date(), resourceId: 'a' },
      { title: 'event3', start: new Date(), resourceId: 'a' },
      { title: 'event4', start: new Date(), resourceId: 'a' },
      { title: 'event5', start: new Date(), resourceId: 'a' },
    ]}
  />
);

export default Calendar;
