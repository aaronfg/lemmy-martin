import { DateTime } from 'luxon';
export class DateUtils {
  static getUserFriendlyPostDate = (dateString: string): string => {
    console.log('new Date: ' + dateString);
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
    const days = diff.days;
    const hours = diff.hours;
    const minutes = Math.floor(diff.minutes);
    console.log('\tdays: ' + days);
    console.log('\thours: ' + hours);
    console.log('\tminutes: ' + minutes + '\n\n');
    if (years >= 1) {
      return this.getSingularOrPluralDuration(years, 'year');
    }
    if (months >= 1) {
      return this.getSingularOrPluralDuration(months, 'month');
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
    // if (days > 1) {
    //   return `${days} days ago`;
    // } else if (hours < 1) {
    //   if (minutes < 1) {
    //     return 'Now';
    //   }
    //   return `${minutes} minutes ago`;
    // } else {
    //   return `${hours} hours ago`;
    // }
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
