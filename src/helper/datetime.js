import moment from "moment";

moment.locale('id');

function getSanitizedDateTime(dateTime) {
  // Old format is yyyy/mm/dd:hh:mm:ss
  // Gonna change it to yyyymmddThhmm00Z
  const parsedDateTime = moment(dateTime);
  let sanitizedDateTime = parsedDateTime.format("YYYYMMDDThhmm");
  sanitizedDateTime += "07Z";
  return sanitizedDateTime;
}

// Output format start-end or if the day is the same
// it will output only start
// it will output start hour if start and end date is different
function getStartAndEndDays(startDateTime, endDateTime) {
  const parsedStart = moment(startDateTime);
  const parsedEnd = moment(endDateTime);

  const dayStart = parsedStart.format("dddd");
  console.log(dayStart);
  const dayEnd = parsedEnd.format("dddd");
  console.log(dayEnd);

  const startTime = parsedStart.format("HH:mm");
  const endTime = parsedEnd.format("HH:mm");

  let dayOutput = "";
  let timeOutput = "";
  if (dayEnd == dayStart) {
    dayOutput = dayStart;
    timeOutput = startTime + " - " + endTime;
  } else {
    dayOutput = dayStart + " - " + dayEnd;
    timeOutput = startTime;
  }

  return {
    timeOutput,
    dayOutput
  }
}

export {
  getSanitizedDateTime,
  getStartAndEndDays
}