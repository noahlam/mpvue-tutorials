function moment(dt){
  var newDate = dt ? new Date(dt) : new Date()
  newDate.get = function () {
    console.log('有这个函数')
  }
  return newDate
}

export default moment
