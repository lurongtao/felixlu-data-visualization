<template>
  <div class="castle side-r-wrap">
    <TopSide :title="title"></TopSide>
    <TopMid></TopMid>
    <Left></Left>
    <Right></Right>
    <MapHeat></MapHeat>
    <Foot></Foot>
  </div>
</template>

<script>
import TopSide from '@/components/TopSide'
import TopMid from '@/components/TopMid'
import Left from '@/components/Left'
import Right from '@/components/Right'
import MapHeat from '@/components/MapHeat'
import Foot from '@/components/Foot'

export default {
  name: 'Castle',
  data () {
    return {
      title: '公安警情大屏展示'
    }
  },
  components: {
    TopSide,
    TopMid,
    Left,
    Right,
    MapHeat,
    Foot
  }
}
</script>
<style scoped>
</style>
