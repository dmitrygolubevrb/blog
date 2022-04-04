<template>
    <div class="row">
        <div class="col-9">
            <div class="row">
                <div class="col-6">
                    <label for="title" class="form-label">Заголовок поста</label>
                    <input v-model="title" type="text" class="form-control" id="title">
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-6">
                    <div>
                        <label class="form-label">Главное изображение</label>
                        <div ref="dropzone" id="main-image"
                             class="p-5 btn d-block mb-3 text-white  bg-secondary dropzone-field">
                            <span class="title">Перетащите изображение сюда</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-11">
                    <label for="preview-content-editor" class="form-label">Контент превью (не более 300 символов)</label>
                    <vue-editor
                        id="preview-content-editor"
                        v-model="contentPreview"
                        @text-change="$store.dispatch('contentPreviewValidate', $notify)"
                        :editor-toolbar="editorSettings.previewContentEditorToolbar">
                    </vue-editor>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-11">
                    <label for="content-editor" class="form-label">Контент поста</label>
                    <vue-editor :editorOptions="editorSettings.contentEditor" useCustomImageHandler
                                @image-added="handleImageAdded"
                                id="content-editor"
                                v-model="content"></vue-editor>
                    <button
                        @click="$store.dispatch('storePost', $notify)"
                        type="button" class="btn btn-outline-success mt-3 mb-4 me-2"
                        :disabled="!content">
                        Опубликовать
                    </button>
                    <transition name="slide-fade" appear>
                    <button
                        @click="$store.commit('toggleShowPreview')"
                        v-show="content"
                        type="button" class="btn btn-outline-secondary mt-3 mb-4">
                        Предпросмотр
                    </button>
                    </transition>
                </div>
            </div>
            <div class="row mt-3 mb-4">
                <div class="col">
                    <transition name="slide-fade">
                    <div v-show="$store.getters.isShowPreview" class="preview-section border">
                        <div class="blog-title fs-3 mb-5 text-center">{{ title }}</div>
                        <div v-show="mainImage" class="main-image">
                            <img :src="mainImage" alt="main-image" class="container-fluid">
                        </div>
                        <div v-html="content" class="ql-editor mt-3 mb-5"></div>
                    </div>
                    </transition>
                </div>
            </div>

        </div>

        <div class="col-3">
            <div>
                <p class="fs-4">Настройки</p>
            </div>
            <div class="mt-5">
                <div class="category-title">
                    <p class="fs-5">
                        Выберите категорию
                    </p>
                </div>
                <select class="form-select" v-model="categoryId">
                    <option value="">Выберите категорию</option>
                    <template v-for="category in categories">
                        <option :value="category.id" :key="category.id">{{ category.title }}</option>
                    </template>
                </select>
            </div>
            <div class="mt-5">
                <div class="tags-title">
                    <p class="fs-5">
                        Выберите теги
                        <span><i class="fa-solid fa-plus add"
                                 @click.prevent="$store.commit('setIsAdditionTag')"></i></span>
                    </p>
                </div>
                <div class="checkbox-container">
                    <transition name="slide-fade">
                    <div v-if="isAdditionTag" class="create-tag-block mb-3 d-flex align-items-baseline">
                        <input  v-model="category.title" class="w-75" type="text">
                        <i @click.prevent="$store.dispatch('storeTag', {title: category.title, notification: $notify})"
                           class="fa fa-floppy-o me-2 ms-2 save" aria-hidden="true"/>
                        <i @click.prevent="$store.commit('setIsAdditionTag')"
                           class="fa-solid fa-circle-xmark cancel"></i>
                    </div>
                    </transition>
                    <div class="tags-list ps-1">
                        <template v-for="tag in tags">
                            <div class="form-check" :key="tag.id">
                                <input v-model="tagIds" class="form-check-input" type="checkbox" :value="tag.id"
                                       :id="tag.id">
                                <label class="form-check-label" :for="tag.id">
                                    {{ tag.title }}
                                </label>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import editorSettings from '../../config/vueEditor'
import {mapGetters} from 'vuex'
import Dropzone from "dropzone";


export default {
    name: "Create",
    components: {},
    data() {
        return {
            editorSettings,
        }
    },
    computed: {
        ...mapGetters({
            mainImageDropzone: 'mainImageDropzone',
            categories: 'categories',
            tags: 'tags',
            isAdditionTag: 'isAdditionTag',
        }),
        tagIds: {
            set(id) {
                this.$store.commit('setTagIds', id)
            },
            get() {
                return this.$store.getters.tagIds
            }
        },
        categoryId: {
            set(id) {
                this.$store.commit('setCategoryId', id)
            },
            get() {
                return this.$store.getters.categoryId
            }
        },
        category: {
            set(category) {
                this.$store.commit('setCategory', category)
            },
            get() {
                return this.$store.getters.category
            }
        },
        contentPreview: {
          set(contentPreview){
              this.$store.commit('setContentPreview', contentPreview)
          },
          get(){
              return this.$store.getters.contentPreview
          }
        },
        content: {
            set(content) {
                this.$store.commit('setContent', content)
            },
            get() {
                return this.$store.getters.content
            }
        },
        title: {
            set(title) {
                this.$store.commit('setTitle', title)
            },
            get() {
                return this.$store.getters.title
            }
        },
        mainImage: {
            set(){
                this.$store.commit('setMainImage')
            },
            get(){
                return this.$store.getters.mainImage
            }
        }
    },
    mounted() {
        this.$store.dispatch('loadMainImageDropzone', {ref: this.$refs.dropzone, dropzone: Dropzone})
        this.$store.dispatch('getCategories', this.$notify)
        this.$store.dispatch('getTags')
    },
    methods: {
        textChange(delta, oldDelta, source){
            console.log(delta);
            console.log('change text')
        },
        handleImageAdded(file, Editor, cursorLocation, resetUploader) {
            const formData = new FormData()
            formData.append('image', file)
            axios.post('/api/posts/images', formData)
                .then(res => {
                    let url = res.data.url
                    Editor.insertEmbed(cursorLocation, 'image', url)
                    resetUploader()
                })
                .catch(error => {
                    this.$notify({type: 'error', title: 'Ошибка загрузки', text: error.data.message})
                })
        }
    },
}
</script>

<style>
.dz-success-mark,
.dz-error-mark {
    display: none;
}

.dropzone-field {
    width: 100%;
    min-height: 75px;
    padding-top: 30px;
}


.tags-list {
    max-height: 250px;
    overflow-y: scroll;
}

nav.navbar .dropdown:hover > .dropdown-menu {
    display: block;
}
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
.dz-remove {
    color: #ffffff;
    text-decoration: none;
}
.dz-remove:hover {
    color: #ac3d30;
}
</style>
