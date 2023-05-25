module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    const format = require('date-fns/format')
    if (date == null){
      return 'TBD';
    }
    else {
      return format(new Date(date), 'MMMM do', ' yyyy',);
    }
  },
  distance: (date) => {
    const formatDistanceStrict = require('date-fns/formatDistanceStrict');
    if (date == null){
      return 'TBD';
    }
    else {
      return formatDistanceStrict(new Date(), date, {unit: 'day'});
    }
  }
};