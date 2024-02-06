<template>
  <div id="app">
    <PageOne />
  </div>
</template>

<script>
import PageOne from './components/PageOne.vue';

export default {
  name: 'App',
  components: {
    PageOne
}
}
</script>

<style lang="scss">
#app {
  * {
    margin: 0;
    padding: 0;
}

$siteWidth: 1200px;
$siteColorBlack:#292F36;
$siteColorGrey:#4D5053;
$siteColorGold:#CDA274;
$greyLines: #E7E7E7;

@mixin textPropertys($cl, $ff, $fsz, $fs, $fw, $lh) {
    color: $cl;
    font-family: $ff, sans-serif;
    font-size: $fsz;
    font-style: $fs;
    font-weight: $fw;
    line-height: $lh;
}

@mixin pageSize() {
    background-image: url('../assets/Line.svg');
    background-size: cover;
    max-width: $siteWidth;
    margin: 0 auto;
}
}
</style>
