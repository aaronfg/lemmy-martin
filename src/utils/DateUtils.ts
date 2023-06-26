import { DateTime } from 'luxon';
export class DateUtils {
  static getUserFriendlyPostDate = (dateString: string): string => {
    console.log('new Date: ' + dateString);
    const date = DateTime.fromISO(dateString, { zone: 'utc' });
    const diff = DateTime.now().diff(date, [
      'years',
      'months',
      'weeks',
      'days',
      'hours',
      'minutes',
    ]);
    const years = diff.years;
    const months = diff.months;
    const weeks = diff.weeks;
    const days = diff.days;
    const hours = diff.hours;
    const minutes = Math.floor(diff.minutes);

    if (years >= 1) {
      return this.getSingularOrPluralDuration(years, 'year');
    }
    if (months >= 1) {
      return this.getSingularOrPluralDuration(months, 'month');
    }
    if (weeks >= 1) {
      return this.getSingularOrPluralDuration(weeks, 'week');
    }
    if (days >= 1) {
      return this.getSingularOrPluralDuration(days, 'day');
    }
    if (hours >= 1) {
      return this.getSingularOrPluralDuration(hours, 'hour');
    }
    if (minutes >= 2) {
      return this.getSingularOrPluralDuration(minutes, 'minute');
    }
    return 'Now';
  };

  static getSingularOrPluralDuration = (
    dateNum: number,
    singularString: string,
  ): string => {
    if (dateNum < 1) {
      return `${dateNum} ${singularString}s ago`;
    }
    if (dateNum === 1) {
      return `${dateNum} ${singularString} ago`;
    } else {
      return `${dateNum} ${singularString}s ago`;
    }
  };
}
