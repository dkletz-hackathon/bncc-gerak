import moment from "moment";

function getSanitizedDateTime(dateTime) {
  // Old format is yyyy/mm/dd:hh:mm:ss
  // Gonna change it to yyyymmddThhmm00Z
  const parsedDateTime = moment(dateTime, "YYYY/MM/DD hh:mm:ss");
  let sanitizedDateTime = parsedDateTime.format("YYYYMMDDThhmm");
  sanitizedDateTime += "00Z";
  return sanitizedDateTime;
}

export {
  getSanitizedDateTime
}