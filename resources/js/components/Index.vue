<template>
<div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
</div>
</template>

<script>
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
export default {
    name: "Index",
    components: {Footer, Header}
}
</script>

<style scoped>

</style>
