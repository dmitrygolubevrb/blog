<template>
    <div>
        <Header class="header"></Header>
        <router-view class="router-view"></router-view>
        <Footer></Footer>
        <notifications position="bottom right" />
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

<style>
.router-view {
    min-height: 50vh;
}

@font-face {
    font-family: 'Calypso';
    src: url("/public/dist/fonts/Calypso.ttf") format('ttf');
    font-style: normal;
    font-weight: normal;
}

body {
    font-family: 'Calypso';
}
</style>
