import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Graph = (prop) => {
  let arrdata = prop.data;
  //console.log(arrdata);
  // const testdate = arrdata[0];
  // console.log(testdate);
  let totalAmtJan = 0;
  let totalAmtFeb = 0;
  let totalAmtMar = 0;
  let totalAmtApr = 0;
  let totalAmtMay = 0;
  let totalAmtJun = 0;
  let totalAmtJul = 0;
  let totalAmtAug = 0;
  let totalAmtSep = 0;
  let totalAmtOct = 0;
  let totalAmtNov = 0;
  let totalAmtDec = 0;

  //check current month and year, then sort expenditure dates across a span of 12 months
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const dateTimeNow = new Date();
  const dateNow = dateTimeNow.getDate();
  const monthNow = months[dateTimeNow.getMonth()];
  const yearNow = dateTimeNow.getFullYear();
  const dateToday = `${yearNow}-${monthNow}-${dateNow}`;

  //sort expenditure dates into 12 months//
  //check if current month is dec
  if (dateToday >= `${yearNow}-12-01` && dateToday <= `${yearNow}-12-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec this year
        case arrdata[i].ExpenseDate >= `${yearNow}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov this year
        case arrdata[i].ExpenseDate >= `${yearNow}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct this year
        case arrdata[i].ExpenseDate >= `${yearNow}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep this year
        case arrdata[i].ExpenseDate >= `${yearNow}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug this year
        case arrdata[i].ExpenseDate >= `${yearNow}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul this year
        case arrdata[i].ExpenseDate >= `${yearNow}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun this year
        case arrdata[i].ExpenseDate >= `${yearNow}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is nov
  else if (dateToday >= `${yearNow}-11-01` && dateToday <= `${yearNow}-11-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov this year
        case arrdata[i].ExpenseDate >= `${yearNow}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct this year
        case arrdata[i].ExpenseDate >= `${yearNow}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep this year
        case arrdata[i].ExpenseDate >= `${yearNow}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug this year
        case arrdata[i].ExpenseDate >= `${yearNow}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul this year
        case arrdata[i].ExpenseDate >= `${yearNow}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun this year
        case arrdata[i].ExpenseDate >= `${yearNow}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is oct
  else if (dateToday >= `${yearNow}-10-01` && dateToday <= `${yearNow}-10-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct this year
        case arrdata[i].ExpenseDate >= `${yearNow}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep this year
        case arrdata[i].ExpenseDate >= `${yearNow}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug this year
        case arrdata[i].ExpenseDate >= `${yearNow}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul this year
        case arrdata[i].ExpenseDate >= `${yearNow}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun this year
        case arrdata[i].ExpenseDate >= `${yearNow}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is sep
  else if (dateToday >= `${yearNow}-09-01` && dateToday <= `${yearNow}-09-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep this year
        case arrdata[i].ExpenseDate >= `${yearNow}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug this year
        case arrdata[i].ExpenseDate >= `${yearNow}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul this year
        case arrdata[i].ExpenseDate >= `${yearNow}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun this year
        case arrdata[i].ExpenseDate >= `${yearNow}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is aug
  else if (dateToday >= `${yearNow}-08-01` && dateToday <= `${yearNow}-08-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug this year
        case arrdata[i].ExpenseDate >= `${yearNow}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul this year
        case arrdata[i].ExpenseDate >= `${yearNow}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun this year
        case arrdata[i].ExpenseDate >= `${yearNow}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is jul
  else if (dateToday >= `${yearNow}-07-01` && dateToday <= `${yearNow}-07-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul this year
        case arrdata[i].ExpenseDate >= `${yearNow}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun this year
        case arrdata[i].ExpenseDate >= `${yearNow}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is jun
  else if (dateToday >= `${yearNow}-06-01` && dateToday <= `${yearNow}-06-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          // console.log("this is dec arrdata: " + arrdata[i].ExpenseDate);
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          // console.log("this is nov arrdata: " + arrdata[i].ExpenseDate);

          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          // console.log("this is 10 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          //console.log("this is 9 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-08-31`:
          //console.log("this is 8 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-07-31`:
          //console.log("this is 7 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun this year
        case arrdata[i].ExpenseDate >= `${yearNow}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-06-31`:
          //console.log("this is 6 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          //console.log("this is 5 arrdata: " + arrdata[i].ExpenseDate);

          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          //console.log("this is 4 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          //console.log("this is 3 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          //console.log("this is 2 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          //console.log("this is 1 arrdata: " + arrdata[i].ExpenseDate);

          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is may
  else if (dateToday >= `${yearNow}-05-01` && dateToday <= `${yearNow}-05-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may this year
        case arrdata[i].ExpenseDate >= `${yearNow}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is apr
  else if (dateToday >= `${yearNow}-04-01` && dateToday <= `${yearNow}-04-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr this year
        case arrdata[i].ExpenseDate >= `${yearNow}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is mar
  else if (dateToday >= `${yearNow}-03-01` && dateToday <= `${yearNow}-03-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar this year
        case arrdata[i].ExpenseDate >= `${yearNow}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is feb
  else if (dateToday >= `${yearNow}-02-01` && dateToday <= `${yearNow}-02-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb this year
        case arrdata[i].ExpenseDate >= `${yearNow}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }
  //check if current month is jan
  else if (dateToday >= `${yearNow}-01-01` && dateToday <= `${yearNow}-01-31`) {
    for (let i = 0; i < arrdata.length; i++) {
      switch (true) {
        //check if expenditure date is dec last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-12-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-12-31`:
          totalAmtDec = totalAmtDec + arrdata[i].Amount;
          break;
        //check if expenditure date is nov last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-11-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-11-31`:
          totalAmtNov = totalAmtNov + arrdata[i].Amount;
          break;
        //check if expenditure date is oct last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-10-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-10-31`:
          totalAmtOct = totalAmtOct + arrdata[i].Amount;
          break;
        //check if expenditure date is sep last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-09-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-09-31`:
          totalAmtSep = totalAmtSep + arrdata[i].Amount;
          break;
        //check if expenditure date is aug last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-08-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-08-31`:
          totalAmtAug = totalAmtAug + arrdata[i].Amount;
          break;
        //check if expenditure date is jul last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-07-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-07-31`:
          totalAmtJul = totalAmtJul + arrdata[i].Amount;
          break;
        //check if expenditure date is jun last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-06-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-06-31`:
          totalAmtJun = totalAmtJun + arrdata[i].Amount;
          break;
        //check if expenditure date is may last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-05-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-05-31`:
          totalAmtMay = totalAmtMay + arrdata[i].Amount;
          break;
        //check if expenditure date is apr last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-04-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-04-31`:
          totalAmtApr = totalAmtApr + arrdata[i].Amount;
          break;
        //check if expenditure date is mar last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-03-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-03-31`:
          totalAmtMar = totalAmtMar + arrdata[i].Amount;
          break;
        //check if expenditure date is feb last year
        case arrdata[i].ExpenseDate >= `${yearNow - 1}-02-01` &&
          arrdata[i].ExpenseDate <= `${yearNow - 1}-02-31`:
          totalAmtFeb = totalAmtFeb + arrdata[i].Amount;
          break;
        //check if expenditure date is jan this year
        case arrdata[i].ExpenseDate >= `${yearNow}-01-01` &&
          arrdata[i].ExpenseDate <= `${yearNow}-01-31`:
          totalAmtJan = totalAmtJan + arrdata[i].Amount;
          break;
      }
    }
  }

  //sorting data alignment by different month for graph creation
  let graphLabel = [];
  let graphData = [];
  const shortYear = yearNow.toString().substr(-2);
  if (dateToday >= `${yearNow}-12-01` && dateToday <= `${yearNow}-12-31`) {
    graphLabel = [
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
      `Jun ${shortYear}`,
      `Jul ${shortYear}`,
      `Aug ${shortYear}`,
      `Sep ${shortYear}`,
      `Oct ${shortYear}`,
      `Nov ${shortYear}`,
      `Dec ${shortYear}`,
    ];
    graphData = [
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
    ];
  } else if (
    dateToday >= `${yearNow}-11-01` &&
    dateToday <= `${yearNow}-11-31`
  ) {
    graphLabel = [
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
      `Jun ${shortYear}`,
      `Jul ${shortYear}`,
      `Aug ${shortYear}`,
      `Sep ${shortYear}`,
      `Oct ${shortYear}`,
      `Nov ${shortYear}`,
    ];
    graphData = [
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
    ];
  } else if (
    dateToday >= `${yearNow}-10-01` &&
    dateToday <= `${yearNow}-10-31`
  ) {
    graphLabel = [
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
      `Jun ${shortYear}`,
      `Jul ${shortYear}`,
      `Aug ${shortYear}`,
      `Sep ${shortYear}`,
      `Oct ${shortYear}`,
    ];
    graphData = [
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
    ];
  } else if (
    dateToday >= `${yearNow}-09-01` &&
    dateToday <= `${yearNow}-09-31`
  ) {
    graphLabel = [
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
      `Jun ${shortYear}`,
      `Jul ${shortYear}`,
      `Aug ${shortYear}`,
      `Sep ${shortYear}`,
    ];
    graphData = [
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
    ];
  } else if (
    dateToday >= `${yearNow}-08-01` &&
    dateToday <= `${yearNow}-08-31`
  ) {
    graphLabel = [
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
      `Jun ${shortYear}`,
      `Jul ${shortYear}`,
      `Aug ${shortYear}`,
    ];
    graphData = [
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
    ];
  } else if (
    dateToday >= `${yearNow}-07-01` &&
    dateToday <= `${yearNow}-07-31`
  ) {
    graphLabel = [
      `Aug ${shortYear - 1}`,
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
      `Jun ${shortYear}`,
      `Jul ${shortYear}`,
    ];
    graphData = [
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
    ];
  } else if (
    dateToday >= `${yearNow}-06-01` &&
    dateToday <= `${yearNow}-06-31`
  ) {
    graphLabel = [
      `Jul ${shortYear - 1}`,
      `Aug ${shortYear - 1}`,
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
      `Jun ${shortYear}`,
    ];
    graphData = [
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
    ];
  } else if (
    dateToday >= `${yearNow}-05-01` &&
    dateToday <= `${yearNow}-05-31`
  ) {
    graphLabel = [
      `Jun ${shortYear - 1}`,
      `Jul ${shortYear - 1}`,
      `Aug ${shortYear - 1}`,
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
      `May ${shortYear}`,
    ];
    graphData = [
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
    ];
  } else if (
    dateToday >= `${yearNow}-04-01` &&
    dateToday <= `${yearNow}-04-31`
  ) {
    graphLabel = [
      `May ${shortYear - 1}`,
      `Jun ${shortYear - 1}`,
      `Jul ${shortYear - 1}`,
      `Aug ${shortYear - 1}`,
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
      `Apr ${shortYear}`,
    ];
    graphData = [
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
    ];
  } else if (
    dateToday >= `${yearNow}-03-01` &&
    dateToday <= `${yearNow}-03-31`
  ) {
    graphLabel = [
      `Apr ${shortYear - 1}`,
      `May ${shortYear - 1}`,
      `Jun ${shortYear - 1}`,
      `Jul ${shortYear - 1}`,
      `Aug ${shortYear - 1}`,
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
      `Mar ${shortYear}`,
    ];
    graphData = [
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
      totalAmtMar,
    ];
  } else if (
    dateToday >= `${yearNow}-02-01` &&
    dateToday <= `${yearNow}-02-31`
  ) {
    graphLabel = [
      `Mar ${shortYear - 1}`,
      `Apr ${shortYear - 1}`,
      `May ${shortYear - 1}`,
      `Jun ${shortYear - 1}`,
      `Jul ${shortYear - 1}`,
      `Aug ${shortYear - 1}`,
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
      `Feb ${shortYear}`,
    ];
    graphData = [
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
      totalAmtFeb,
    ];
  } else if (
    dateToday >= `${yearNow}-01-01` &&
    dateToday <= `${yearNow}-01-31`
  ) {
    graphLabel = [
      `Feb ${shortYear - 1}`,
      `Mar ${shortYear - 1}`,
      `Apr ${shortYear - 1}`,
      `May ${shortYear - 1}`,
      `Jun ${shortYear - 1}`,
      `Jul ${shortYear - 1}`,
      `Aug ${shortYear - 1}`,
      `Sep ${shortYear - 1}`,
      `Oct ${shortYear - 1}`,
      `Nov ${shortYear - 1}`,
      `Dec ${shortYear - 1}`,
      `Jan ${shortYear}`,
    ];
    graphData = [
      totalAmtFeb,
      totalAmtMar,
      totalAmtApr,
      totalAmtMay,
      totalAmtJun,
      totalAmtJul,
      totalAmtAug,
      totalAmtSep,
      totalAmtOct,
      totalAmtNov,
      totalAmtDec,
      totalAmtJan,
    ];
  }

  return (
    <div className="graphcontainer">
      <Bar
        options={{ maintainAspectRatio: false }}
        data={{
          labels: graphLabel,
          datasets: [
            {
              label: "Total Expenditure per Month",
              data: graphData,
              backgroundColor: ["#AD9A74"],
              hoverBackgroundColor: ["#7488ad"],
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;
