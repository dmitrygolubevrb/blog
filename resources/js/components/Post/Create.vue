<template>
    <div>
        <Header></Header>

        <section id="entity_section" class="entity_section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="entity_wrapper">
                            <div class="entity_title">
                                <h1><a href="#">Создание поста</a></h1>
                            </div>
                            <!-- entity_title -->

                            <div class="entity_content">
                                <vue-editor :editorOptions="editorSettings" v-model="content"></vue-editor>
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
                        <!-- entity_wrapper -->

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
                    <!--Left Section-->

                    <div class="col-md-4">
                        <div class="widget">
                            <div class="widget_title widget_black">
                                <h2><a href="#">Настройки поста</a></h2>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right1.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Canon launches photo centric 00214 Model
                                            supper shutter camera</a>
                                    </h3> <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"> <i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right2.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Samsung galaxy note are the supper mobile
                                            of all products.</a>
                                    </h3>
                                    <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"> <i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right3.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Apple launches photo-centric wrist watch
                                            for Android</a>
                                    </h3>
                                    <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"> <i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right4.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Kodak Hi-Speed shutter double shot camera
                                            comming soon</a>
                                    </h3>
                                    <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"><i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <p class="widget_divider"><a href="#" target="_self">More News&nbsp;&raquo;</a></p>
                        </div>
                        <!-- Popular News -->


                        <div class="widget m30">
                            <div class="widget_title widget_black">
                                <h2><a href="#">Most Commented</a></h2>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right1.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Yasaki camera launches new generic hi-speed
                                            shutter camera.</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right2.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Samsung is the best mobile in the android
                                            market.</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right3.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Apple launches photo-centric wrist watch
                                            for Android</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right4.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">DSLR is the most old camera at this time
                                            readmore about new
                                            products</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <p class="widget_divider"><a href="#" target="_self">More News&nbsp;&nbsp;&raquo; </a></p>
                        </div>
                        <!-- Most Commented News -->


                    </div>
                    <!--Settings Section-->

                    <div class="col-md-4">
                        <div class="widget">
                            <div class="widget_title widget_black">
                                <h2><a href="#">Popular News</a></h2>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right1.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Canon launches photo centric 00214 Model
                                            supper shutter camera</a>
                                    </h3> <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"> <i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right2.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Samsung galaxy note are the supper mobile
                                            of all products.</a>
                                    </h3>
                                    <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"> <i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right3.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Apple launches photo-centric wrist watch
                                            for Android</a>
                                    </h3>
                                    <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"> <i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right4.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Kodak Hi-Speed shutter double shot camera
                                            comming soon</a>
                                    </h3>
                                    <span class="media-date"><a href="#">10Aug- 2015</a>,  by: <a href="#">Eric joan</a></span>

                                    <div class="widget_article_social">
                <span>
                    <a href="single.html" target="_self"><i class="fa fa-share-alt"></i>424</a> Shares
                </span>
                                        <span>
                    <a href="single.html" target="_self"><i class="fa fa-comments-o"></i>4</a> Comments
                </span>
                                    </div>
                                </div>
                            </div>
                            <p class="widget_divider"><a href="#" target="_self">More News&nbsp;&raquo;</a></p>
                        </div>
                        <!-- Popular News -->


                        <div class="widget m30">
                            <div class="widget_title widget_black">
                                <h2><a href="#">Most Commented</a></h2>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right1.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Yasaki camera launches new generic hi-speed
                                            shutter camera.</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right2.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Samsung is the best mobile in the android
                                            market.</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right3.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">Apple launches photo-centric wrist watch
                                            for Android</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-left">
                                    <a href="#"><img class="media-object" src="/assets/img/pop_right4.jpg"
                                                     alt="Generic placeholder image"></a>
                                </div>
                                <div class="media-body">
                                    <h3 class="media-heading">
                                        <a href="single.html" target="_self">DSLR is the most old camera at this time
                                            readmore about new
                                            products</a>
                                    </h3>

                                    <div class="media_social">
                                        <span><i class="fa fa-comments-o"></i><a href="#">4</a> Comments</span>
                                    </div>
                                </div>
                            </div>
                            <p class="widget_divider"><a href="#" target="_self">More News&nbsp;&nbsp;&raquo; </a></p>
                        </div>
                        <!-- Most Commented News -->


                    </div>
                    <!--Right Section-->

                </div>
                <!-- row -->

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
console.log(fonts);
// fonts.whitelist = ["Calibri", "sans-serif", "serif", "monospace"]
Quill.register(fonts, true)

export default {
    name: "Create",
    components: {Footer, Header, VueEditor},
    data() {
        return {
            content: "new post",
            editorSettings: {
                modules: {
                    imageDrop: true,
                    imageResize: {
                        theme: 'snow',
                        modules: ['Resize', 'DisplaySize']
                    },
                    toolbar: [
                        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                        ["bold", "italic", "underline", "strike"], // toggled buttons
                        [
                            { align: "" },
                            { align: "center" },
                            { align: "right" },
                            { align: "justify" }
                        ],
                        ["blockquote", "code-block"],
                        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ color: [] }, { background: [] }],
                        ["link", "image", "video"],
                        ["clean"],

                        // This is what I have added
                        [{ 'font': fonts.whitelist }],
                    ]
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
