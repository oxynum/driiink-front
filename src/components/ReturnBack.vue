<template>
    <div class="top-box-line">
        <router-link :to="{ name: 'Cart', params: {id: this.$route.params.id}}"><button><font-awesome-icon icon="angle-left" /></button></router-link>
    </div>
</template>

<script>
export default {
    name: 'ReturnBack'
}
</script>

<style lang="scss" scoped>
    .top-box {
        width: 100%;
        height:  281px;
        display: flex;
        flex-direction: column;
        background-color: #D7D7D7;
        position: relative;

        &-line{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 10px 0 20px;
        }
    }

    button {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #21B05C;
        border: none;
        color: white;
    }
</style>