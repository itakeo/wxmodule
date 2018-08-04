Component({
    properties: {
        showDialog: {
            type: null,
            value: 0 
        },
        mask: {
            type: null,
            value: 1 
        },
        titleCenter : {
            type: null,
            value: 0
        },
        style: {
            type: null,
            value: '' 
        },
        maskClick: {
            type: null,
            value: 0 
        },
        button: {
            type: null,
            value:[]
        },
        oncloseFn : {
            type: null,
            value: function () {}
        }
    },
    attached(){
        
    },
    methods:{
        move(){ return },
        closeDialogFn(){
            if(!this.data.maskClick) return
            this.closeFn()
        },
        closeFn(){
            this.setData({
                showDialog : false,
                closeDialog : true
            });
            this.data.oncloseFn();
            setTimeout(()=>{
                this.setData({
                   closeDialog : false
                });
            }, 450);
        },
        buttonFn(e){
            this.data.button[e.target.dataset.index].fn();
            this.closeFn()
        }
    }
})