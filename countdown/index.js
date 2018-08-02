import CountDown from './countdown.js';
Component({
    properties: {
        showDay : {
            type: null,
            value:  0 ,
            observer(val) {
                console.log(this.data)
                this.setData({
                    dayOff : typeof val === 'string' ? JSON.parse(val) : val
                });
            }
        },
        showHour : {
            type: null,
            value:  1 ,
            observer(val) {
                this.setData({
                    hourOff :typeof val === 'string' ? JSON.parse(val) : val
                });
            }
        },
        showMin : {
            type: null,
            value:  1 ,
            observer(val) {
                this.setData({
                    minOff :typeof val === 'string' ? JSON.parse(val) : val
                });
            }
        },
        showSec : {
            type: null,
            value:  1 ,
            observer(val) {
                this.setData({
                    secOff :typeof val === 'string' ? JSON.parse(val) : val
                });
            }
        },
        index : {
            type: null,
            value:  0 
        },
        time: {
            type: null,
            value:  0 
        }
    },
    data: {
        dayOff : 0,
        hourOff :1,
        minOff :1,
        secOff :1,
        countTime: ''
    },
    attached(){
        new CountDown(this.data.time).run(t=>{
            this.setData({
                countTime : t
            });
        }).end(()=>{
            this.triggerEvent('end',{index : this.data.index})
        });
    }
})