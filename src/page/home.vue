<template>
    <div class="home_container">
        <item-container father-component="home"></item-container>
    </div>
</template>

<script>
import ItemContainer from '../components/itemcontainer'

export default {
    name: 'home',
    components: {
        ItemContainer
    },
}
</script>

<style lang="less" scoped>

</style>
