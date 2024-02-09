import * as Triangle from '../webgl/triangle.js'


export default {
    data: {
        title: ""
    },
    onInit() {

    },
    onReady (){
        let tt = setInterval(() => {
            if (this.$refs.canvas1) {
                clearInterval(tt);

                // when dom is ready, launch!
                Triangle.run({el:this.$refs.canvas1})
            }
        }, 1);

        //
    },
    // ClickBtnColorTriangle () {
    //   //  Triangle.run({el:this.$refs.canvas1})
    // }
}

