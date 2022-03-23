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
                             class="p-5 btn d-block mb-3  bg-success dropzone-field">
                            Перетащите изображение сюда
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-11">
                    <vue-editor :editorOptions="editorSettings" useCustomImageHandler
                                @image-added="handleImageAdded" @image-removed="removeIm"
                                v-model="content"></vue-editor>
                    <button
                        @click="$store.commit('toggleShowPreview')"
                        type="button" class="btn btn-outline-secondary mt-3 mb-4">
                        Предпросмотр
                    </button>
                </div>
            </div>
            <div class="row mt-3 mb-4">
                <div class="col">
                    <div v-bind:class="{'d-none': !$store.getters.isShowPreview}" class="preview-section border">
                        <div class="blog-title fs-3 mb-5 text-center">{{ title }}</div>
                        <div v-html="content" class="ql-editor mt-3 mb-5"></div>
                    </div>
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
                        <option :value="category.id">{{ category.title }}</option>
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

                    <div class="create-tag-block mb-3 d-flex align-items-baseline"
                         v-bind:class="{'d-none': !isAdditionTag}">
                        <input v-model="category.title" class="w-75" type="text">
                        <i v-bind:class="{'d-none': !isAdditionTag}"
                           @click.prevent="$store.dispatch('storeTag', {title: category.title, notification: $notify})"
                           class="fa fa-floppy-o me-2 ms-2 save" aria-hidden="true"/>
                        <i v-bind:class="{'d-none': !isAdditionTag}"
                           @click.prevent="$store.commit('setIsAdditionTag')"
                           class="fa-solid fa-circle-xmark cancel"></i>
                    </div>

                    <div class="tags-list ps-1">
                        <template v-for="tag in tags">
                            <div class="form-check">
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


export default {
    name: "Create",
    components: {},
    data() {
        return {

            editorSettings: editorSettings
        }
    },
    computed: {
        ...mapGetters({
            mainImageDropzone: 'mainImageDropzone',
            sliders: 'sliders',
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
        content: {
            set(content) {
                this.$store.commit('setContent', content)
            },
            get() {
                return this.$store.getters.content
            }
        },
        title: {
            set(title){
                this.$store.commit('setTitle', title)
            },
            get(){
                return this.$store.getters.title
            }
        }
    },
    mounted() {
        this.$store.commit('setMainImageDropzone', this.$refs.dropzone)
        this.$store.dispatch('getCategories')
        this.$store.dispatch('getTags')
    },
    methods: {
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

</style>
