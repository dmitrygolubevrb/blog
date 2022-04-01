<template>
    <div class="row mt-5 mb-5">
        <div class="col">
            <div v-for="(postsByCategory, category) in posts" class="row mb-3">

                <div class="row category-title">
                    <div class="fs-2 border-bottom mb-3 col">{{ category }}</div>
                </div>

                <div class="row g-0">
                    <template v-for="(post, index) in postsByCategory">
                        <div v-show="index < 5" v-bind:class="{'flex-fill': postsByCategory.length > 5}" class="col-2">
                            <div class="card text-white border-0 card-div">
                                <img :src="post.preview_url" class="img-fluid post-header-img" alt="...">
                                <div class="card-img-overlay text-center mt-5">
                                    <h5 class="card-text">{{ post.title }}</h5>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    mounted() {
        this.$store.dispatch('getPosts')
    },
    computed: {
        posts: {
            get() {
                return this.$store.getters.posts
            },
            set(posts) {
                this.$store.commit('setPosts', posts)
            }
        }
    }
}
</script>

<style scoped>
/*@font-face {*/
/*    font-family: Calypso;*/
/*    src: url('/dist/fonts/Veles-Regular.0.9.2.otf') format("truetype");*/
/*    font-style: normal;*/
/*    font-weight: normal;*/
/*}*/
.category-title{
    font-family: Calypso;
}
.card-div{
    background: #000;
    opacity: 1;
}
.post-header-img{
    max-height: 150px;
}
.card-div:hover .post-header-img{
    opacity: 0.8;
    transition: all 0.3s;
}


</style>
