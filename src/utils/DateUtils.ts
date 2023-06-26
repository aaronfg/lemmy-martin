import { DateTime } from 'luxon';
export class DateUtils {
  static getUserFriendlyPostDate = (dateString: string): string => {
    console.log('new Date: ' + dateString);
    const date = DateTime.fromISO(dateString, { zone: 'utc' });
    const diff = DateTime.now().diff(date, ['days', 'hours', 'minutes']);
    const days = diff.days;
    const hours = diff.hours;
    const minutes = Math.floor(diff.minutes);
    console.log('\tdays: ' + days);
    console.log('\thours: ' + hours);
    console.log('\tminutes: ' + minutes + '\n\n');
    if (days > 1) {
      return `${days} days ago`;
    } else if (hours < 1) {
      if (minutes < 1) {
        return 'Now';
      }
      return `${minutes} minutes ago`;
    } else {
      return `${hours} hours ago`;
    }
  };
}
