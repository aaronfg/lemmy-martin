import { DateTime } from 'luxon';
export class DateUtils {
  static getUserFriendlyPostDate = (dateString: string): string => {
    const date = DateTime.fromISO(dateString, { zone: 'utc' });
    const diff = DateTime.now().diff(date, [
      'years',
      'months',
      'days',
      'hours',
      'minutes',
    ]);
    const years = diff.years;
    const months = diff.months;
    // const weeks = diff.weeks;
    const days = diff.days;
    // console.log('days: ' + days);
    const hours = diff.hours;
    // console.log('hours: ' + hours);
    const minutes = Math.floor(diff.minutes);

    if (years >= 1) {
      return this.getSingularOrPluralPhrase(years, 'year');
    }
    if (months >= 1) {
      return this.getSingularOrPluralPhrase(months, 'month');
    }
    // if (weeks >= 2) {
    //   return this.getSingularOrPluralPhrase(weeks, 'week', ' ago');
    // }
    if (days >= 1) {
      return this.getSingularOrPluralPhrase(days, 'day');
    }
    if (hours >= 1 && !(hours >= 24)) {
      return this.getSingularOrPluralPhrase(hours, 'hour');
    }
    if (minutes >= 2) {
      return this.getSingularOrPluralPhrase(minutes, 'minute');
    }
    return 'Now';
  };

  static getSingularOrPluralPhrase = (
    dateNum: number,
    singularString: string,
    predicate = '',
  ): string => {
    if (dateNum < 1) {
      return `${dateNum} ${singularString}s${predicate}`;
    }
    if (dateNum === 1) {
      return `${dateNum} ${singularString}${predicate}`;
    } else {
      return `${dateNum} ${singularString}s${predicate}`;
    }
  };
}
