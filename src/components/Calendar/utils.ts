import type { EventInput } from '@fullcalendar/core/index.js';
import { convertIcsCalendar } from 'ts-ics';

export const convertIcsToJson = (ics: string): EventInput[] => {
  const icsJson = convertIcsCalendar(undefined, ics);

  return icsJson.events?.map(event => ({
    ...event,
    title: event.summary,
    start: event.start.date,
    end: event.end?.date,
  })) || [];
};
