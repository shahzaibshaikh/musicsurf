function convertMillisecondsToTime(ms: number): string {
  const secondsInMs = 1000;
  const minutesInMs = secondsInMs * 60;
  const hoursInMs = minutesInMs * 60;

  const hours = Math.floor(ms / hoursInMs);
  const minutes = Math.floor((ms % hoursInMs) / minutesInMs);
  const seconds = Math.floor((ms % minutesInMs) / secondsInMs);

  let result: string = '';

  if (hours !== 0) {
    result = `${hours} hr ${minutes} min ${seconds} sec`;
  } else {
    result = `${minutes} min ${seconds} sec`;
  }

  return result;
}

export default convertMillisecondsToTime;
