<template>
    <div class="container-fluid m-0 p-0 no-gutters">
        <top></top>
        <left></left>
        <right></right>
    </div>
</template>

<script>
    import top from '../components/top.vue';
    import left from '../components/left.vue';
    import right from '../components/right.vue';

    export default {
        name: "zhu_ye.vue",
        components: {
            top: top,
            left: left,
            right: right
        }
    }
</script>

<style scoped>

</style>