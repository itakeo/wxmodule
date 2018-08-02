function setTwo(num){ return num<10 ? ('0'+num) : (''+num); };
export default class CountDown{
    constructor(t){
        if(t instanceof Array){
            this.time =new Date().getTime()+ (new Date(t[1]).getTime() - new Date(t[0]).getTime()); 
        }else{
            this.time =/\//gi.test(t.toString()) ? (new Date(t).getTime()) : ( new Date().getTime()+parseInt(t)); 
        }
    }
    timeOut (fn,t) {
        let _now = new Date().getTime(),
            json={},
            count = Math.round((this.time - _now)/1000);
        if(count <= 0) {
            json = {day :'00',hour :'00',min  :'00',sec :'00',ms :'00'}
            fn.call(this, json)
            this.endFn && this.endFn.call(this, json)
            return;
        };
        json = {
            day  : setTwo(Math.floor(count/86400)),  //天数
            hour : setTwo(Math.floor(count/ (60 * 60) % 24 )), //小时
            min  : setTwo(Math.floor(count/60 % 60)), //分钟
            sec  : setTwo(Math.floor(count%60)), //秒
            ms   : setTwo((this.time - _now)%1000).substr(0,2) //豪秒
        };
        let _end = new Date().getTime();
        let _diff = _now - _end; //误差
        fn.call(this, json);
        setTimeout(function(that){
            that.timeOut(fn,t)  
        }, t ? (t) : 1000 - _diff,this)
    }
    end(fn){
        this.endFn = fn;
    }
    run(fn,t){
        this.timeOut(fn,t);
        return this
    }
};