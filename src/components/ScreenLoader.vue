<template>
    <div class="loader">
        <PulseLoader color="white" size="15px"/>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default{
    name: 'ScreenLoader',
    components: {
        PulseLoader
    },
    props: {
        loader: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .loader{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #21B05C;
        z-index: 1;
    }
</style>