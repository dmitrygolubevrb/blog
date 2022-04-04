<template>
    <div class="row mt-5 mb-5">
        <div class="col">
            <div v-for="(postsByCategory, category) in posts" class="row mb-3">

                <div class="row category-title">
                    <div class="fs-2 border-bottom mb-3 col">{{ category }}</div>
                </div>

                <div class="row mb-1 justify-content-between pb-3 border-bottom">
                    <template v-for="(post, index) in postsByCategory">
                        <div v-show="index < 5" v-bind:class="{'flex-fill': postsByCategory.length > 5}" class="col-2">
                            <a href="">
                                <div class="card text-white border-0 card-div">
                                    <img :src="post.preview_url" class="img-fluid post-header-img" alt="...">
                                    <div class="card-img-overlay text-center mt-5">
                                        <h5 class="card-text">{{ post.title }}</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </template>
                </div>


                <div class="row justify-content-between border-bottom mt-3 mb-5 position-relative">
                    <template v-for="(post, index) in postsByCategory">
                        <div v-show="index === 5" class="col-4 flex-grow-1">
                            <div class="card mb-3 border-0">
                                <div class="row g-0">
                                    <div class="col">
                                        <img :src="post.preview_url" class="img-fluid" alt="...">
                                    </div>
                                </div>

                                <div class="row card-body g-1">
                                    <div class="col-6">
                                        <a href="" class="text-decoration-none"><h5 class="card-title">{{ post.title }}
                                            {{ post.id }}</h5></a>
                                        <div class="post-information">
                                            <span class="badge bg-secondary">
                                                <i class="fa-regular fa-eye me-1"></i> {{ post.view_count }}
                                                <i class="fa-regular fa-comment ms-2 me-1"></i> 0
                                                <i class="fa-regular fa-heart ms-2 me-1"></i> 0
                                            </span>
                                            <span class="mt-2 d-block text-muted">{{ post.created_at }}</span>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <p class="card-text">выфвфы выф выф вфы выфвыф выфжв офылрв фдыо иолвыфиаыфшгвпыфи лвфып вшгфпыгшвпыф вфы врпшыфдвп рифыдвпфыгнвп фиышвфыщнвпыфдгвнвафы впфыгвлыпфвфыл вафыгавлфыглнва фыгнлва фыгнва фыгнлва фыг выфгнв ыфывфвыф в фы рвфы рвщфыг зщйгц вщцйшвйхцщвгфырщшв ныфгшвднр фыджвн щфыжнр ущцйнунйшщв ыфвыф выф вшыныыы</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-show="index === 6" class="col-3 border-right">
                            <div class="card border-0 mb-3">
                                <div class="row g-0">
                                    <div class="col">
                                        <img :src="post.preview_url" class="img-fluid post-header-img" alt="...">
                                    </div>
                                </div>

                                <div class="row card-body">
                                    <div class="col">
                                        <a href="" class="text-decoration-none"><h5 class="card-title">{{ post.title }}
                                            {{ post.id }}</h5></a>
                                        <div class="post-information mb-2">
                                            <span class="badge bg-secondary">
                                                <i class="fa-regular fa-eye me-1"></i> {{ post.view_count }}
                                                <i class="fa-regular fa-comment ms-2 me-1"></i> 0
                                                <i class="fa-regular fa-heart ms-2 me-1"></i> 0
                                            </span>
                                            <span class="ms-2 text-muted">{{ post.created_at }}</span>
                                        </div>
                                        <div class="post-preview-content">
                                            <p class="card-text">выфвфы выф выф вфы выфвыф выфжв офылрв фдыо иолвыфиаыфшгвпыфи лвфып вшгфпыгшвпыф вфы врпшыфдвп рифыдвпфыгнвп фиышвфыщнвпыфдгвнвафы впфыгвлыпфвфыл вафыгавлфыглнва фыгнлва фыгнва фыгнлва фыг выфгнв ыфывфвыф в фы рвфы рвщфыг зщйгц вщцйшвйхцщвгфырщшв ныфгшвднр фыджвн щфыжнр ущцйнунйшщв ыфвыф выф вшыныыы</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <div class="col-4 flex-grow-1">
                        <template v-for="(post, index) in postsByCategory">
                            <div v-show="index > 6" class="row">
                                <div class="card border-0 mb-3">
                                    <div class="row g-0">
                                        <div class="col-6">
                                            <img :src="post.preview_url"
                                                 class="img-fluid container-fluid post-header-img" alt="...">
                                        </div>
                                        <div class="col-6">
                                            <div class="card-body">
                                                <a href="" class="text-decoration-none"><h5 class="card-title">{{ post.title }}</h5></a>
                                                <div class="post-information">
                                                    <span class="badge bg-secondary">
                                                        <i class="fa-regular fa-eye me-1"></i> {{ post.view_count }}
                                                        <i class="fa-regular fa-comment ms-2 me-1"></i> 0
                                                        <i class="fa-regular fa-heart ms-2 me-1"></i> 0
                                                    </span>
                                                    <span class="mt-2 d-block text-muted">{{ post.created_at }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </template>
                    </div>
                    <button type="button"
                            class="btn btn-outline-secondary category-footer-button border border-top-0 col-2">
                        Смотреть все посты
                    </button>
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
.category-title {
    font-family: Calypso;
}

.card-div {
    background: #000;
    opacity: 1;
}

.post-header-img {
    height: 150px;
}

.card-div:hover .post-header-img {
    opacity: 0.8;
    transition: all 0.3s;
}

.post-information {
    font-size: 10pt;
    vertical-align: middle;
}

.post-information i {
    font-size: 10pt;
}

.category-footer-button {
    position: absolute;
    top: 100%;
    left: 42%;

}
</style>
