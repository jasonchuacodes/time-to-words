// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }
  // switch (time) {
  //   case '0:00':
  //     return 'midnight';
  //   case '12:00':
  //     return 'midday';
  //   case '2:00': // hourNow()
  //     return "two o'clock";
  //   default:
  //     console.log(`Sorry, we are out of ${expr}.`);
  // }
}

const printNumberToWords = (number) => {
  switch (number) {
    case '1':
      return 'one';
    case '2':
      return 'two';
    case '3':
      return 'three';
    case '4':
      return 'four';
    case '5':
      return 'five';
    case '6':
      return 'six';
    case '7':
      return 'seven';
    case '8':
      return 'eight';
    case '9':
        return 'nine';
    case '10':
        return 'ten';
    case '11':
        return 'eleven';
    case '12':
        return 'twelve';
    case '13':
        return 'thirteen';
    case '14':
        return 'fourteen';
    case '15':
        return 'fifteen';
    case '16':
        return 'sixteen';
    case '17':
        return 'seventeen';
    case '18':
      return 'eighteen';
    case '19':
        return 'nineteen';
    case '20':
        return 'twenty';
    case '21':
        return 'twenty one';
    case '22':
        return 'twenty two';
    case '23':
        return 'twenty three';
    case '24':
        return 'twenty four';
    case '25':
        return 'twenty five';
    case '26':
        return 'twenty six';
    case '27':
        return 'twenty seven';
    case '28':
        return 'twenty eight';
    case '29':
        return 'twenty nine';
    default: 
      return null;
  }
}

const minutesLeftInWords = (minutes) => {
  const minutesLeft = 30 - Number(minutes);
  return printNumberToWords(minutesLeft);
}

const printMinutes = (minutes) => {
  if (minutes < 30) {
     return printNumberToWords(minutes);
  } else {
    return minutesLeftInWords(minutes)
  }
}

const convertTime = (time) => {
  // timeInStr = '8:30'
  const timeInString = time.split(':');

  const hour = timeInString[0];
  const minutes = timeInString[1];

  const printHourValue = printNumberToWords(hour);
  const printMinutesValue = printMinutes(minutes);
  console.log(printMinutesValue);

  // if (minutes < 30) -> print out `<minutes> past <currentHour>`
  // if (mintues > 30) -> <minutesLeft> to <nextHour>
};

convertTime('8:30');

module.exports = { convertTimeToWords };
