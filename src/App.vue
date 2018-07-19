<template>
    <div id="app">
      qqq
      <range-slider :options="options"></range-slider>
    </div>
</template>

<script>

export default {
    name: 'app',
    data () {
        return {
            options: {
                min: 1,
                max: 101,
                unit: '元'
            }
        }
    }
}
</script>

<style>
</style>
