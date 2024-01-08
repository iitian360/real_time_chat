



const FindDate=(date)=>{
//   const val=message.date.seconds;
//   const date=new Date(val*1000)
  const monthAbbreviation = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dateString=`${monthAbbreviation} ${day} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
  return dateString;
}

export default FindDate;