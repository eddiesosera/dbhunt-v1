export const formateDate = (rawDate)=>{
    const date = new Date(rawDate);
    const options = { day: '2-digit', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
}