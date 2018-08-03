Component({
    relations: {
        '../checkGroup/index': {
            type: 'parent',
        }
    },
    properties: {
        type : {
            type : null,
            value : 'm'
        },
        index : {
            type : null,
            value : 0
        },
        position : {
            type : null,
            value : 'left'
        },
        color : {
            type : null,
            value : '#FA7346'
        },
        algin :  {
            type : null,
            value : 'left'
        },
        margin : {
            type : null,
            value : '0 20rpx 0 0'
        },
        checked: {
            type: null,
            value: false,
            observer(val) {
                this.checkFn();
            }
        },
        value: {
            type: null,
            value: 0,
        },
        disabled: {
            type: null,
            value: false,
            observer(val) {
                this.setData({
                    disabledOff : typeof val === 'string' ? JSON.parse(val) : val
                });
            }
        }
    },
    data:{
        checkedOff : false,
        disabledOff : false
    },
    methods : {
        changeCurrent() {
            this.setData({ checkedOff: 0 });
        },
        checkFn(){
            if(this.data.disabledOff) return;
            this.setData({
                checkedOff : !this.data.checkedOff
            });
            this.parentFn();
            this.triggerEvent('change',{value : this.data.value,check : this.data.checkedOff,index : this.data.index})
        },
        parentFn(){
            const parent = this.getRelationNodes('../checkGroup/index')[0];
            parent && parent.emitEvent(this.data.value)
        }
    },
    ready(){
        //this.parentFn();
    },
    attached(){
        this.setData({
            checkedOff : typeof this.data.checked === 'string' ? JSON.parse(this.data.checked) : this.data.checked
        });
        
    }
})