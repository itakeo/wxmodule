Component({
    behaviors: ['wx://form-field'],
    relations: {
        '../checklist/index': {
            type: 'child',
            linked: function() {
                //this.emitEvent();
            },
            linkChanged: function() {
                //this.emitEvent();
            },
            unlinked: function() {
                //this.emitEvent();
            }
        }
    },
    properties: {
        type : {
            type : null,
            value : ''
        }
    },
    methods : {
        emitEvent(val) {
            const elements = this.getRelationNodes('../checklist/index');
            if (elements.length > 0) {
                if(this.data.type=='radio'){
                    let _val = '',_index=0;
                    elements.forEach((e) => {
                        if(e.data.value!=val) e.changeCurrent()
                            else _val = e.data.value,_index = e.data.index
                    });
                    this.triggerEvent('change',{value : _val,index : _index});
                }else{
                    let arr = [];
                    elements.forEach((e) => {
                        if(e.data.checkedOff){
                            arr.push(e.data.value)
                        };
                    });
                    this.triggerEvent('change',{value : arr});
                }
            }
        }
    }
})
