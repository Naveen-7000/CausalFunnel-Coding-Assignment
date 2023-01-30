export function getDateDifference(currentDate, targetDate) {
    let targetDatetime = new Date(targetDate);
    let diffInMs = currentDate - targetDatetime;
    let diffInDays = diffInMs / 1000 / 60 / 60 / 24;
    let roundedDiffInDays = Math.round(diffInDays);
  
  if (roundedDiffInDays === 0) {
    return "today";
  } else if (roundedDiffInDays === 1) {
    return "yesterday";
  } else {
    return `${roundedDiffInDays} days ago`;
  }
  }
  
