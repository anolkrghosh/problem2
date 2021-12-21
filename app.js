let time = "12:30:00 PM";
let add = {"h":00,"m":45,"s":45}
let mt = military_time(time,add);
console.log(mt);
function military_time(time,add=null) {
    let t,h,m,s,offset,colon,meridiem;
    colon = time.indexOf(':');
    h = time.substr(0, colon),
    m = time.substr(colon + 1, 2),
    s = time.substr(colon + 4, 2),
    meridiem = time.substr(colon + 7, 2).toUpperCase();
    h = parseInt(h,10),offset = meridiem == 'PM' ? 12 : 0;
    h = h === 12 ? h = offset:h += offset;
    m = parseInt(m,10),s = parseInt(s,10);
    if(add){
        h = h+parseInt(add.h,10);
        m = m+parseInt(add.m,10);
        s = s+parseInt(add.s,10);
    }
    const calculate = (h,m,s) => {
        s = s+m*60+h*3600;
        m = Math.floor(s/60);
        h = Math.floor(m/60);
        m = m%60;
        s = s%60;
        return {h,m,s};
    }
    t = calculate(h,m,s);
    const pad = num => { let a = num.toString(); for(;2>a.length;) a = "0"+a; return a;}
    return `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;
}

