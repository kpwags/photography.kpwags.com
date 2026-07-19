import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);


export default (dateObj, format = 'MMMM D, YYYY', zone) => {
    if (typeof dateObj === 'string') {
        dateObj = new Date(dateObj);
    }

    return dayjs.utc(dateObj).format(format);
};
