<template>
    <div>
        <item-container father-component="item"></item-container>
    </div>
</template>

<script>
import ItemContainer from '../components/itemcontainer'

export default {
    name: 'item',
    components: {
        ItemContainer
    }

}
</script>

<style lang="less" scoped>

</style>
