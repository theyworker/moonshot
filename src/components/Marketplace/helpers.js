 function formatDate(date) {
    const day = date.getDate();
    let suffix = 'th';
  
    if (day % 10 === 1 && day !== 11) {
      suffix = 'st';
    } else if (day % 10 === 2 && day !== 12) {
      suffix = 'nd';
    } else if (day % 10 === 3 && day !== 13) {
      suffix = 'rd';
    }
  
    return `${day}${suffix}`;
  }
  
   function getMonthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()];
  }

  export const getDateString = (date) => {
    return `${getMonthName(date)} • ${formatDate(date)}`;
  }