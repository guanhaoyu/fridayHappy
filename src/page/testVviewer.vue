<template>
    <div>
        <p style="color:yellow;">点击图片放大</p>
        <viewer :images="photo"> 
          <img
                v-for="(item,index) in photo"
                :src="item.src"
                :key="index"
                :onerrorImg="errorImg"
                style="width:21px;height:21px;"
              >
        </viewer>
    </div>
</template>

<script>
import Vue from 'vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer, {
  defaultOptions: {
      button: false,
      navbar: false,
      title: false,
      toolbar: false,
  }
});

export default {
    name: 'test',
    data(){
        return {
            photo: [
                { src: 'static/images/4-2.png' },
                { src: 'static/images/4-3.png' },
                { src: 'static/images/4-4.png' },
            ],
            errorImg: 'static/images/5-2.png'
        }
    }
}
</script>

<style lang="less" scoped>

</style>
