new Vue({
    el: "#app",
    data: {
        isActive: false,
        case: [null, null, null, null, null, null, null, null, null],
    },
    methods: {
        jouer: function(){
            if (this.isActive == false){
                this.isActive = true
            }
        }

    },
})