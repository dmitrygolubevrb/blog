<template>
    <div class="row align-items-center pt-3">
        <div class="col d-flex justify-content-center">
            <div>
                <span class="date border-bottom">Sunday .</span>
                <span class="time">09 August . 2016</span>
            </div>
        </div>
        <div class="col d-flex justify-content-center align-items-end logo">
            <a href="#"><img src="/dist/img/logo.png"  alt="Tech NewsLogo"></a>
        </div>
        <div class="col d-flex justify-content-center">
            <div class="right_section">
                <ul class="nav navbar-nav">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.logo img {
    width: 120px;
    height: 120px;
}
.date{
    color: #575757;
}
</style>
