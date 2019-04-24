<template>
  <div class="wrapper">
    <div class="content_box" :class="{'content_collapse':collapse}"> 
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      collapse: false
    }
  },
  components: {

  },
  created() {

  }
}
</script>
