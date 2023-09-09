import { DateTime } from 'luxon';

/**
 * Class with static helper methods for Date-related logic
 */
export class DateUtils {
  /**
   * Returns the date of a Post or Comment in a shorter format such as
   * `"2 hrs"` or `4 months` for use in list items on Posts and Comments
   * @param dateString the utc date string to format
   */
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
    const days = diff.days;
    const hours = diff.hours;
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

  /**
   * Returns a date phrase based on a date total (be it days, months, hours, etc),
   * a string to denote what the `dateNum` represents in singular form, and an
   * optional string to tack onto the end as a predicate.
   *
   * **Example:**
   *
   * ```ts
   * // "2 hours ago"
   * const phrase = DateUtils.getSingularOrPluralPhrase(2, 'hour', 'ago');
   *
   * // "1 year ago"
   * const phrase = DateUtils.getSingularOrPluralPhrase(1, 'year', 'ago');
   * ```
   *
   * @param dateNum - The number
   * @param singularString - Description of what the `dateNum` represents in singular form (i.e. 'hour')
   * @param predicate - Optional string to be appended to the final result
   */
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
