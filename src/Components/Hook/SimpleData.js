//2020-02-10T06:03:03.683Z
export const format_date = (date) => {
  const fd = new Date(date) //fommat_date
  const setting_date =  fd.getFullYear() + '/' + (fd.getMonth()+1) + '/' + fd.getDate();
  return setting_date;
};

export const make_week_array = () => {
  let week_array = [];
  let start_day = new Date().getTime();
  for(let i = 0; i <= 6; i++){
    week_array.unshift(format_date(start_day - i*24*60*60*1000));
  }
  return week_array
}

export const simple_count = (count) => {
  if(count > 1000000){
    const fix_num = Math.round(count/1000000)
    return(fix_num + "M");
  }
  if(count > 1000){
    const fix_num = (count/1000).toFixed(2)
    return(fix_num + "K");
  }else{
    return comma(count);
  }
}

export const comma = (num) => {
  let len, point, str;
  num = num + "";
  point = num.length % 3;
  len = num.length;
  str = num.substring(0, point); 
    while (point < len) { 
        if (str !== "") str += ","; 
        str += num.substring(point, point + 3); 
        point += 3; 
    } 
  return str;
}

