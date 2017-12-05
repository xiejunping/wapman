/**
 * Created by junpingxie on 2017/11/9.
 */
import Moment from 'moment';

const DATEREGEXP = /\d{4}(-|\/|.)\d{1,2}\1\d{1,2}/;

function dateFormat (val, fmt) {
  return DATEREGEXP.test(val) ? Moment(val).format(fmt) : val;
}

// 整日期
export function fullDateFormat (val) {
  return dateFormat(val, 'YYYY-MM-DD');
}

// 日期到时分
export function datetimeToMin (val) {
  return dateFormat(val, 'YYYY-MM-DD HH:mm');
}

// 日期到时分 变异
export function datetimeToMinOpt (val) {
  const FMT = 'YYYY-MM-DD', MT = ' HH:mm';
  const DATE = dateFormat(val, FMT + MT);

  return DATEREGEXP.test(DATE) ? Moment(DATE).calendar(null, {
    sameDay: '[今天]' + MT,
    nextDay: '[明天]' + MT,
    nextWeek: FMT + MT,
    lastDay: '[昨天]' + MT,
    lastWeek: FMT + MT,
    sameElse: FMT + MT
  }) : DATE;
}
