Component({
    properties: {
        index: {
            type: Number,
            value: 0
        },
        min: {
            type: Number,
            value: 1
        },
        max: {
            type: Number,
            value: 9999
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 1,
            observer(val) {
                this.setData({
                    minsNone : val<=this.data.min,
                    plusNone: val>=this.data.max
                });
                this.triggerEvent('change',{value : val,index:this.data.index})
            }
        },
        disabled: {
            type: null,
            value: 0,
            observer(val) {
                this.setData({
                    disabledOff : typeof val === 'string' ? JSON.parse(val) : val
                });
            }
        },
        inpDisabled: {
            type: null,
            value: 1,
            observer(val) {
                this.setData({
                    inpDisabledOff : typeof val === 'string' ? JSON.parse(val) : val
                });
            }
        }
    },
    data: {
        maxLen : 4,
        inpDisabledOff : 1,
        disabledOff : 0 ,
        minsNone : 0,
        plusNone : 0
    },
    attached(){
        this.setData({
            maxLen:this.data.max.toString().length
        });
        this.checkFn(this.data.value);
    },
    methods : {
        checkFn(val){
            if(val <= this.data.min ){
                this.setData({
                    value : this.data.min
                })
            }else if(val >= this.data.max){
                this.setData({
                    value : this.data.max
                })
            }else{
                this.setData({
                    value : val
                });
            }
            this.setData({
                minsNone : val<=this.data.min,
                plusNone: val>=this.data.max
            });
        },
        setValue(e){
            if(this.data.disabledOff) return;
            let val =e.target.dataset.type==='inp' ? e.detail.value*1 : this.data.value*1;
            if(e.target.dataset.type!='inp'){
                val = e.target.dataset.type=='mins' ? val-this.data.step : val+this.data.step;
            };
            this.checkFn(val);
        }
    }
})
