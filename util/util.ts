//백한테 보낼 시간! yyyy-MM-dd/hh:mm:ss

export default function getCurrentTime(): string {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth() + 1 > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1).toString();
  const day = date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate().toString();
  const hour = date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours().toString();
  const min = date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes().toString();
  const sec = date.getSeconds() > 9 ? date.getSeconds().toString() : '0' +  date.getSeconds().toString();

  return year + "-" + month + '-' + day + '/' + hour + ':' + min + ':' + sec;
}