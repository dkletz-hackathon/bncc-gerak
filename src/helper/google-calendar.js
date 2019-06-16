function generateGoogleCalendarLink(title, description, location, startDate, endDate) {
  let uri = "https://www.google.com/calendar/render";
  uri += "?";
  uri += "action=TEMPLATE&";
  uri += `text=${title}&`;
  uri += `details=${description}&`;
  uri += `location=${location}&`;
  uri += `dates=${startDate}%2F${endDate}`;

  return uri.replace(/ /g, "+");
}

function generateGoogleCalendar(title, description, location, startTime, endTime) {
  let uri = "https://www.google.com/calendar/render";
  uri += "?";
  uri += "action=TEMPLATE&";
  uri += `text=${title}&`;
  uri += `details=${description}&`;
  uri += `location=${location}&`;
  uri += `dates=20190616T${startTime}0000Z%2F20190616T${endTime}0000Z`;

  return uri.replace(/ /g, "+");
}

export {
  generateGoogleCalendarLink,
  generateGoogleCalendar
}