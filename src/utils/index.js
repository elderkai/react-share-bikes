import axios from 'axios'
var instance=axios.create({
    baseURL:'http://t.weather.sojson.com/api/weather',
    timeout:1000
        });
export default{

    formDate(unix){
        function fixZero(data){
            return data>=10?+data:'0'+data
        }
        let date=new Date(unix)
        let year=date.getFullYear()
        let month=fixZero(date.getMonth()+1)
        let day=fixZero(date.getDate())
        let hour=fixZero(date.getHours())
        let min=fixZero(date.getMinutes())
        let second=fixZero(date.getSeconds())
        return `${year}-${month}-${day} ${hour}:${min}:${second}`
    },
         get(url) {
    return new Promise((resolve, reject) => {
        instance(url).then(res => {
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  }
}