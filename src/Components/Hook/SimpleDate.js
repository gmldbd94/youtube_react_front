//2020-02-10T06:03:03.683Z
export default (date) => {
  const fd = new Date(date) //fommat_date
  console.log(date);
  const setting_date =  fd.getFullYear() + '-' + fd.getMonth() + '-' + fd.getDay();
  return setting_date;
};