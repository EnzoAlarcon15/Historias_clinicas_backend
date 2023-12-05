exports.idGenerator= ()=>{
  const time = new Date().getTime() + Math.random(Math.random() * 100);
  return Math.trunc(time).toString();
}



