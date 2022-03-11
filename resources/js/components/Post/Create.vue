<template>
    <div>
        <Header></Header>

        <section id="entity_section" class="entity_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="entity_wrapper">
                            <div class="entity_title">
                                <h1><a href="#">Создание поста</a></h1>
                            </div>
                            <!-- entity_title -->

                            <div class="entity_content">
                                    <div class="row entity_content">
                                        <div class="col-md-6">
                                            <label for="title" class="form-label">Заголовок поста</label>
                                            <input type="text" class="form-control" id="title">
                                        </div>
                                    </div>
                                <div class="row entity_content input-image-group">
                                    <div class="col-md-6">
                                        <label for="main-image" class="form-label">Главное изображение</label>
                                        <div ref="dropzone" id="main-image" class="p-5 btn d-block mb-3  bg-success dropzone-field">
                                            Перетащите изображение сюда
                                        </div>
                                    </div>

                                        <div class="col-md-6 slider-group" v-for="item in this.countSliders" :key="item.id">
                                            <label class="form-label">Добавление слайдера</label>
                                            <div ref="dropzone-slider" class="p-5 btn d-block mb-3  bg-success dropzone-field">
                                                Перетащите изображение сюда
                                            </div>
                                        </div>


                                    <div class="col-md-2">
                                        <label class="form-label">Добавить слайдер</label>
                                        <div class="mt-3 p-5 btn d-block mb-3  bg-success dropzone-field" @click.prevent="addSlider"><i class="fa fa-plus" aria-hidden="true"></i></div>
                                    </div>
                                </div>

                                <div class="row entity_content">
                                    <div class="col-md-12">
                                        <vue-editor :editorOptions="editorSettings" v-model="content"></vue-editor>
                                    </div>
                                </div>
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

                    <div class="col-md-3">
                        <div class="widget">
                            <div class="">
                                <h2>Настройки публикации</h2>
                            </div>
                            <div class="">
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        Выберите категорию
                                    </h3>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                               id="flexRadioDefault1">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Default radio
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- Popular News -->



                    </div>
                    <!--Settings Section-->
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

        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../Includes/Header";
import Footer from "../Includes/Footer";
import {Quill, VueEditor} from "vue2-editor";
import {ImageDrop} from "quill-image-drop-module";
import QuillResize from 'quill-resize-module'

Quill.register("modules/imageResize", QuillResize)
Quill.register("modules/imageDrop", ImageDrop);

const fonts = Quill.import('attributors/class/font')
fonts.whitelist = ["sans-serif", "serif", "monospace"]
Quill.register(fonts, true)

export default {
    name: "Create",
    components: {Footer, Header, VueEditor},
    data() {
        return {
            content: null,
            countSliders: [],
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {
                        theme: 'snow',
                        modules: ['Resize', 'DisplaySize']
                    },
                    toolbar: [
                        [{header: [false, 1, 2, 3, 4, 5, 6]}],
                        ["bold", "italic", "underline", "strike"], // toggled buttons
                        [
                            {align: ""},
                            {align: "center"},
                            {align: "right"},
                            {align: "justify"}
                        ],
                        ["blockquote", "code-block"],
                        [{list: "ordered"}, {list: "bullet"}, {list: "check"}],
                        [{indent: "-1"}, {indent: "+1"}],
                        [{color: []}, {background: []}],
                        ["link", "image", "video"],
                        ["clean"],

                        // This is what I have added
                        [{'font': fonts.whitelist}],
                    ]
                }
            }
        }
    },
    computed: {
        dropzone(){
            return this.$store.getters.dropzone
        }
    },
    mounted() {
        this.content += '\nhui'
        this.$store.commit('setDropzone', this.$refs.dropzone)
    },
    methods: {
        addSlider(){
            this.countSliders.push({
                id: this.countSliders.length + 1
            })
        }
    }
}
</script>

<style>
.dz-success-mark,
.dz-error-mark{
    display: none;
}
.dropzone-field{
    width: 100%;
    min-height: 75px;
    padding-top: 30px;
}

</style>
