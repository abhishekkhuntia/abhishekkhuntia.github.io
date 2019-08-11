function StateManager(preset){
            this.value = {
                prevValue: undefined,
                currentVal: preset,
                get val(){
                    return this.currentVal;
                },
                set val(newValue){
                    switch(typeof(this.currentVal)){
                        case 'undefined':
                        // do nothing;
                        break;
                        case 'string':
                        this.prevValue = this.currentVal;
                        break;
                        case 'object':
                        this.prevValue = Object.assign({}, this.currentVal);
                        break;
                    }
                    this.currentVal = newValue;
                }
            };
            this.cbs = {};
        }
        StateManager.prototype.next = function(value){
            if(this.value.val != value){ // triggers when there is change in value
                if(this.cbs &&
                Object.values(this.cbs).length){
                    for(var i=0; i< Object.keys(this.cbs).length; i++){
                        this.cbs[i].call(this, this.value.val, value);
                    }
                }
                this.value.val = value;
            }
        };
        StateManager.prototype.value = function(){
            return this.value.val;
        }
        StateManager.prototype.subscribe = function(cb){
            var i = Object.keys(this.cbs).length,
                _self = this;
            if(cb && typeof(cb) == 'function'){
                this.cbs[i] = cb;
            }
            function d(){
                delete _self.cbs[i];
            }
            return {dispose: d};
        }