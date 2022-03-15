<template>
    <div>
        <section id="entity_section" class="entity_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="entity_wrapper">
                            <div class="entity_title">
                                <h1><a href="#">Добавить категорию</a></h1>
                            </div>
                            <!-- entity_title -->

                            <div class="entity_content">
                                <div class="row entity_content">
                                    <div class="col-md-6">
                                        <label for="title" class="form-label">Название категории</label>
                                        <input v-model="title" type="text" class="form-control" id="title">
                                    </div>
                                </div>
                                <input type="submit" value="Add" class="btn btn-success" @click.prevent="$store.dispatch('storeCategory', title)">
                            </div>
                            <!-- entity_content -->


                            <div class="entity_footer">
                                <div class="entity_tag">
                                    <span class="blank"><a href="#">Tech</a></span>
                                    <span class="blank"><a href="#">Transport</a></span>
                                    <span class="blank"><a href="#">Mobile</a></span>
                                    <span class="blank"><a href="#">Gadgets</a></span>
                                </div>
                                <!-- entity_tag -->

                                <div class="entity_social">
                                    <span><i class="fa fa-share-alt"></i>424 <a href="#">Shares</a> </span>
                                    <span><i class="fa fa-comments-o"></i>4 <a href="#">Comments</a> </span>
                                </div>
                                <!-- entity_social -->

                            </div>
                            <!-- entity_footer -->

                        </div>
                    </div>
                    <!--Left Section-->

                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="related_news">
                            <div class="entity_inner__title header_purple">
                                <h2><a href="#">Related News</a></h2>
                            </div>
                            <!-- entity_title -->

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/assets/img/cat-mobi-sm1.jpg"
                                                             alt="Generic placeholder image"></a>
                                        </div>
                                        <div class="media-body">
                                            <span class="tag purple"><a href="category.html"
                                                                        target="_self">Mobile</a></span>

                                            <h3 class="media-heading"><a href="single.html" target="_self">Apple
                                                launches photo-centric wrist
                                                watch for Android</a></h3>
                                            <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                            <div class="media_social">
                                                <span><a href="#"><i class="fa fa-share-alt"></i>424</a> Shares</span>
                                                <span><a href="#"><i class="fa fa-comments-o"></i>4</a> Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/assets/img/cat-mobi-sm3.jpg"
                                                             alt="Generic placeholder image"></a>
                                        </div>
                                        <div class="media-body">
                                            <span class="tag purple"><a href="category.html"
                                                                        target="_self">Mobile</a></span>

                                            <h3 class="media-heading"><a href="single.html" target="_self">The Portable
                                                Charger or data
                                                cable</a></h3>
                                            <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                            <div class="media_social">
                                                <span><a href="#"><i class="fa fa-share-alt"></i>424</a> Shares</span>
                                                <span><a href="#"><i class="fa fa-comments-o"></i>4</a> Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/assets/img/cat-mobi-sm2.jpg"
                                                             alt="Generic placeholder image"></a>
                                        </div>
                                        <div class="media-body">
                                            <span class="tag purple"><a href="category.html"
                                                                        target="_self">Mobile</a></span>

                                            <h3 class="media-heading"><a href="single.html" target="_self">Iphone 6
                                                launches white & Grey
                                                colors handset</a></h3>
                                            <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                            <div class="media_social">
                                                <span><a href="#"><i class="fa fa-share-alt"></i>424</a> Shares</span>
                                                <span><a href="#"><i class="fa fa-comments-o"></i>4</a> Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="media">
                                        <div class="media-left">
                                            <a href="#"><img class="media-object" src="/assets/img/cat-mobi-sm4.jpg"
                                                             alt="Generic placeholder image"></a>
                                        </div>
                                        <div class="media-body">
                                            <span class="tag purple"><a href="category.html"
                                                                        target="_self">Mobile</a></span>
                                            <a href="single.html" target="_self"><h3 class="media-heading">Fully new
                                                look slim handset
                                                like</h3></a>
                                            <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                            <div class="media_social">
                                                <span><a href="#"><i class="fa fa-share-alt"></i>424</a> Shares</span>
                                                <span><a href="#"><i class="fa fa-comments-o"></i>4</a> Comments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Related news -->
                    </div>
                </div>

            </div>
            <!-- container -->

        </section>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'

export default {
    name: "Create",
    components: {},
    computed: {
        title: {
            get(){
                 return this.$store.getters.title
            },
            set(title){
                this.$store.commit('setTitle', title)
            }
        }
    },
    actions: {

    }
}
</script>

<style scoped>

</style>
