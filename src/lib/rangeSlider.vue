<template>
    <section @touchstart='touchStart'
            @touchmove='touchMove'
            @touchend='touchEnd'>
        <section class="ui-range">
            <div class="bar-bg">
                <div class="bar-progress"></div>
                <div class="ball-wrap">
                    <div class="ball"></div>
                </div>
            </div>
            <div class="bar-girds">
                <div v-for="item in girdCounts" class="one-gird"></div>
            </div>
        </section>
        <section class="ui-range-ruler">
            <div class="left">{{ options.min }} {{options.unit}}</div>
            <div class="right"><span class="number">{{options.max}} </span>{{options.unit}}</div>
        </section>
    </section>
</template>
<script>
export default {
    name: 'rangeSlider',
    props: {
        options: {
            required: true,
            type: Object,
            default: {
                min: 1,
                max: 10,
                unit: ''
            }
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        girdCounts() {
            return 10
        }
    },
    created() {

    },
    methods: {
        touchStart() {
            console.log('----->touchStart')
        },
        touchMove() {
            console.log('----->touchMove')
        },
        touchEnd() {
            console.log('----->touchEnd')
        }
    }
}
</script>
<style scoped>
.ui-range {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 32px;
    padding: 15px 0;
}
.ui-range .bar-bg {
    position: relative;
    height: 2px;
    background: #f0f0f0;
    width:100%;
}
.ui-range .bar-bg .bar-progress {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height:2px;
    background: #2193f5;
}
.ui-range .bar-bg .ball-wrap {
    position: relative;
    padding: 0 15px;
    height:2px;
    margin: 0 15px;
}
.ui-range .bar-bg .ball {
    left: 0;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    top: -15px;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:#ffffff;
    box-shadow:0 2px 10px 0 #d3d3d3;
    -webkit-box-shadow:0 2px 10px 0 #d3d3d3;
}
.ui-range .bar-girds {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 15px;
    margin-top: 4px;
}  
.ui-range .bar-girds .one-gird {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 6px;
    border-left: #000 solid 1px;
}
.ui-range .bar-girds .one-gird:last-of-type {
    border-right: #666 solid 1px;
}
.ui-range-ruler { 
    font-size: 12px;
    color: #666666;
    line-height: 17px;
    margin-top: -4px;
    display: flex;
    display: -webkit-box;
}
.ui-range-ruler .left {
    flex: 1;
    -webkit-box-flex: 1;
    text-align:left;
}
.ui-range-ruler .right {
    flex: 1;
    -webkit-box-flex: 1;
    text-align: right;
}
</style>


