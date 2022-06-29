var app = new Vue({
    el: '#app',
    data: {
        contador: 0
        //color:""
    },
    methods: {
        sumar(){
            this.contador += + 1
            //this.contador < 0 ? this.color = "color-red" : this.color = "";  
        },
        restar(){
            this.contador += - 1
           // this.contador < 0 ? this.color = "color-red" : this.color = "";
        }        
    },
    computed:{
        color(){
            return this.contador < 0 ? this.color = "color-red" : this.color = "";
        }
    }
 })
 