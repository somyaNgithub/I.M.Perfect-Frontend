function formatDateTime(inputDateTime) {
    
    // console.log(inputDateTime,"date time bby input")
    const inputDate = new Date(inputDateTime );
    
    // Define an array for the month names.
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    //  console.log(inputDate)
    // Extract the day, month, year, hour, and minute components from the date.
    let day = inputDate.getDate();
    // console.log(day ,"sasmansn")
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear().toString().slice(-2); // Extract last two digits of the year.
    let hour = inputDate.getHours();
    const minute = inputDate.getMinutes();
    if(day===0){
        day=1
    }
    // console.log(day)
    // Determine the suffix for the day (e.g., 1st, 2nd, 3rd, 4th).
    let daySuffix = 'th';
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = 'st';
    } else if (day === 2 || day === 22) {
      daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
      daySuffix = 'rd';
    }
  
    // Format the time in 12-hour format with AM/PM.
    const period = hour < 12 ? 'AM' : 'PM';
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }
  
    // Construct the formatted date-time string.
    const formattedDateTime = `${day}${daySuffix} ${month} ${year} ${hour}:${minute.toString().padStart(2, '0')} ${period}`;
  
    return formattedDateTime;
  }
   export {formatDateTime};
  