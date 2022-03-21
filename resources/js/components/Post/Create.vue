<template>
    <div class="row">
        <Navigation></Navigation>
        <div class="col-md-9">
            <div class="entity_wrapper">
                <div class="entity_title">

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
                            <div>
                                <label class="form-label">Главное изображение</label>
                                <div ref="dropzone" id="main-image"
                                     class="p-5 btn d-block mb-3  bg-success dropzone-field">
                                    Перетащите изображение сюда
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row entity_content">
                        <div class="col-md-12">
                            <vue-editor :editorOptions="editorSettings" useCustomImageHandler
                                        @image-added="handleImageAdded" v-model="content"></vue-editor>
                            <div v-html="content" class="ql-editor"></div>
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
</template>

<script>

import editorSettings from '../../config/vueEditor'
import {mapGetters} from 'vuex'
import Navigation from "../Includes/Navigation";


export default {
    name: "Create",
    components: {Navigation},
    data() {
        return {
            content: '',
            editorSettings: editorSettings
        }
    },
    computed: {
        ...mapGetters({
            mainImageDropzone: 'mainImageDropzone',
            sliders: 'sliders'
        })
    },
    mounted() {
        this.$store.commit('setMainImageDropzone', this.$refs.dropzone)
    },
    methods: {
        addSlider() {
            let sliders = this.$store.getters.sliders
            let id = !sliders.length ? 1 : sliders[sliders.length - 1].id + 1
            this.$store.commit('addSlider', id)
            this.$nextTick(function () {
                this.$store.commit('setDropzoneForSlider', {id, ref: this.$refs[`dropzone_slider_${id}`][0]})
                this.content += `<h6 id="${id}">Slider ${this.$store.getters.sliders.length}</h6>`
            })
        },
        destroySlider(id) {
            this.$store.commit('destroySlider', id)
            document.getElementById(id).remove()
        },
        handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            const formData = new FormData()
            formData.append('image', file)
            axios.post('api/posts/images', formData)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
            Editor.insertEmbed(cursorLocation, 'image')
            resetUploader()
        }
    },
}
</script>

<style>
.dz-success-mark,
.dz-error-mark {
    display: none;
}

.dropzone-field,
.dropzone-slider-field {
    width: 100%;
    min-height: 75px;
    padding-top: 30px;
}

.slider-group {
    position: relative;
}

.delete-slider-field {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 28px;
}

.delete-slider-field:hover {
    color: #ff4050;
}

</style>
