export const tandaPemisahTitik = (b) => {
    var _minus = false;
    if (b < 0) _minus = true;
    b = b.toString();
    b = b.replace(".", "");
    b = b.replace("-", "");
    let c = "";
    let panjang = b.length;
    let j = 0;
    for (let i = panjang; i > 0; i--) {
      j = j + 1;
      if (((j % 3) == 1) && (j != 1)) {
        c = b.substr(i - 1, 1) + "." + c;
      } else {
        c = b.substr(i - 1, 1) + c;
      }
    }
    if (_minus) c = "-" + c;
    return c;
  }




export const date = (a) => {
  const newDate = new Date(a)
  const monthApi = newDate.getMonth()
  const yearApi = newDate.getFullYear()
  const dateApi = newDate.getDate()
  const dayApi = newDate.getDay()
  const hoursApi = newDate.getHours()
  const dateNow = new Date();
  const hoursNow = dateNow.getHours()
  let hour = null
  let month = ''
  switch (dayApi) {
    case 0:
      month = 'Jan' 
      break;
    case 1:
      month = 'Feb' 
      break;
    case 2:
      month = 'Mar' 
      break;
    case 3:
      month = 'Apr' 
      break;
    case 4:
      month = 'Mei' 
      break;
    case 5:
      month = `Jun` 
      break;
    case 6:
      month = `Jul` 
      break;
    case 7:
      month = `Agu` 
      break;
    case 8:
      month = `Sep` 
      break;
    case 9:
      month = `Okt` 
      break;
    case 10:
      month = `Nov` 
      break;
    case 11:
      month = `Des` 
      break;
    default:
      break;
  }
  const _before = `${dateApi}/${monthApi}/${yearApi}`;
  const _after = `${dateApi}  ${month}  ${yearApi}`;
  if(_before === dateNow){
    return  hour = hoursNow - hoursApi;
  } else {
    return _after
  }
  // return hoursNow - hoursApi;
}