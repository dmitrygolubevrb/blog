<template>
    <div>
        <Header class="header"></Header>
        <Navigation></Navigation>
        <router-view class="router-view"></router-view>
        <Footer></Footer>
        <notifications position="bottom right" />
    </div>
</template>

<script>
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
import Navigation from "./Includes/Navigation"

export default {
    name: "Index",
    components: {Footer, Header, Navigation}
}
</script>

<style>
.router-view {
    min-height: 50vh;
}

@font-face {
    font-family: Calypso;
    src: url("/dist/fonts/Calypso.ttf") format('truetype');
    font-style: normal;
    font-weight: normal;
}

body, html{
    font-family: Calypso;
}

i {
    display: inline-block;
    font-size: 14pt;
    margin-right: 15px;
}

i.save:hover{
    color: #08668a;
}

i.add:hover,
i.edit:hover{
    color: #388a33;
}

i.cancel:hover,
i.destroy:hover{
    color: #ac3d30;
}

input {
    border: none;
    border-bottom: 1px solid #adb5bd;
    outline: none;
    background: transparent;
}

input:focus {
    border-bottom: 1px solid #34383c;
}
body {
    font-family: 'Calypso';
}

</style>
