 export const  formatDate=(date)=> {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


 export const getLast30daysDate=()=>{
    let currentDate = new Date();
   let last30Days= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 30);

    return formatDate(last30Days);
 }

