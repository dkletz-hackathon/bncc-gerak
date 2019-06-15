function generateGoogleCalendarLink(title, description, location, startDate, endDate) {
  let uri = "https://www.google.com/calendar/render";
  uri += "?";
  uri += "action=TEMPLATE&";
  uri += `text=${title}&`;
  uri += `details=${description}&`;
  uri += `location=${location}&`;
  uri += `dates=${startDate}%2F${endDate}`;

  return uri;
}

export {
  generateGoogleCalendarLink
}