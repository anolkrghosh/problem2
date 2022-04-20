/**
*   time - str
*   add_s - int:seconds
*   add_m - int:minutes
*   add_h - int:hours
*/
function military_time(time, add_s = false, add_m = false, add_h = false) {
    time = time.replace(/([0-9])([A-Za-z])/g, '$1:$2').split(/\:+|-/);
    let h = parseInt(time[0]), m = time[1] ? parseInt(time[1]) : 0, s, meridiem, offset;
    if (isNaN(time[2])) {
        s = 0
        meridiem = time[2].toUpperCase()
    } else {
        s = parseInt(time[2])
        meridiem = time[3] ? time[3] : false
    }
    if (h > 12 || h < 1) return "Not 12 hours time";
    if (!meridiem) return "Meridiem Not Provided";
    if (add_h) h = h + parseInt(add_h);
    if (add_m) m = m + parseInt(add_m);
    if (add_s) s = s + parseInt(add_s);
    offset = meridiem === 'PM' ? 12 : 0;
    h = h === 12 ? h = offset : h += offset;
    s = s + m * 60 + h * 3600;
    m = Math.floor(s / 60);
    h = Math.floor(m / 60);
    m = m % 60;
    s = s % 60;
    const pad = num => { let a = num.toString(); for (; 2 > a.length;) a = "0" + a; return a; }
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

let time = "12:30:00 PM";
console.log(military_time(time,10,30,01));
