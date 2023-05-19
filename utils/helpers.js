module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear() + 5
      }`;
    },
    compare: function (var1, var2) {
        if (var1 === var2) {
          return true
        } else {
          return false
        }
    },
};