let DCM = '';
class Dialog{
    constructor(a,b,c) {
        let _page = getCurrentPages()
        this.page = _page[_page.length-1];
        this.set = {};
        this.init(a,b,c);
    }
    extend (n,n1){ 
        for(let i in n1){n[i] = n1[i]};
    }
    init(a,b,c){
        if(!a) return
        if(b && typeof b === 'object') this.extend(this.set,b);
        let set = this.set;
        //获取dialog组件
        DCM = this.page.selectComponent('#dialog');
        if(!DCM){
            console.error('请在页面中加载dialog组件，如下所示：');
            console.log('%c<dialog id="dialog"></dialog>', 'color: #fff; background: #f40;padding:0 8px; font-size: 14px;');
            return
        };
        DCM.setData({
            showDialog : true,
            closeDialog : false,
            content : a,
            maskClick : (set.maskClick || set.maskclick  ) || 0,
            mask : (set.mask== 0 ? 0 : 1),
            style : set.style || '',
            titleCenter : (set.titleCenter || set.titlecenter) || 0,
            oncloseFn : (set.onClose || set.onclose ) || function(){},
            title : (set.title && set.title.toString()) || ''
        });
        if(b && typeof b !== 'object') this.closeFn(b)
        if(set.time){
            this.closeFn(set.time)
        };
        if(set.button){
            let _button = set.button,_buttonArr = []
            for(let i in _button){
                _buttonArr.push({
                    name : i,
                    fn : _button[i]
                });
            };
            DCM.setData({
                button : _buttonArr
            });
        }else{
            DCM.setData({
                button : []
            });
        }

    }
    closeFn(a){
        setTimeout(()=>{
            DCM.setData({
                showDialog : false,
                closeDialog : true
            });
            setTimeout(()=>{
                DCM.setData({
                    closeDialog : false
                });
            },450);
            this.set.onClose && this.set.onClose();
            this.set.onclose && this.set.onclose();
        },a || 10)
    }
};
module.exports =  function(a,b,c){
    return new Dialog(a,b,c)
}