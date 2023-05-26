// Helper functions
module.exports = {
  // Format date helper function
  format_date: (date) => {
    const format = require('date-fns/format')
    if (date == null){
      return 'TBD';
    }
    else {
      return format(new Date(date), 'MMMM do', ' yyyy',);
    }
  },
  // Format date distance from talk helper function
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