<template>
    <div class="row mt-5 mb-5">
        <div class="col-md-12">
            <div class="entity_wrapper">
                <div class="entity_title">
                    <h1>Все теги</h1>
                </div>

                <div v-if="tags" class="row mt-5">
                    <div class="col-md-8">
                        <div class="table-responsive">
                            <table class="table table-hover table-striped align-middle">
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col" class="w-50">Название тега</th>
                                    <th scope="col">Действия</th>
                                </tr>
                                </thead>
                                <tbody>
                                <template v-for="tag of tags">
                                    <Edit :id="tag.id"></Edit>
                                    <Show :tag="tag"></Show>
                                </template>
                                <Create></Create>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Edit from "./Edit";
import Show from './Show'
import Create from "./Create";

export default {
    name: "Index",
    components: {Edit, Show, Create},
    data() {
        return {}
    },
    computed: {
        tags() {
            return this.$store.getters.tags
        }
    },
    mounted() {
        this.$store.dispatch('getTags', this.$notify)
    },
    methods: {
        isEdit(id) {
            return this.$store.getters.editTagId === id
        }
    }

}
</script>

<style>


</style>
