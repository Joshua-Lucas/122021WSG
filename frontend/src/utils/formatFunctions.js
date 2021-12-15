/**THIS FUNCTION TAKES A NUMBER VALUE 0 BEING SUNDAY AND THEN RETURNS THE DAY OF THE WEEK THAT MATCHES */
export function formatDayOfWeekAbbreviations(day) {
  switch (day.toString()) {
    case '0':
      return 'sun';
    case '1':
      return 'mon';
    case '2':
      return 'tues';
    case '3':
      return 'wed';
    case '4':
      return 'thur';
    case '5':
      return 'fri';
    case '6':
      return 'sat';
    default:
      return 'TBD';
  }
}

/**THIS FUNCTION TAKES A NUMBER VALUE 0 BEING JANUARY AND THEN RETURNS THE MONTH THAT MATCHES */
export function formatMonth(month) {
  switch (month) {
    case 0:
      return 'january';
    case 1:
      return 'february';
    case 2:
      return 'march';
    case 3:
      return 'april';
    case 4:
      return 'may';
    case 5:
      return 'june';
    case 6:
      return 'july';
    case 7:
      return 'august';
    case 8:
      return 'september';
    case 9:
      return 'october';
    case 10:
      return 'november';
    case 11:
      return 'december';
    default:
      return month;
  }
}
