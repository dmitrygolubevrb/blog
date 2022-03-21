<template>
    <tr v-bind:class="{'d-none': !this.$parent.isEdit(id)}">
        <th scope="row">{{ id }}</th>
        <td><input v-model="category.title" type="text"></td>
        <td>
            <i @click.prevent="$store.dispatch('updateCategory', {id, category, notification: $notify})" class="fa fa-floppy-o save" aria-hidden="true"/>
            <i @click.prevent="$store.dispatch('unsetEditCategoryId')" class="fa-solid fa-circle-xmark cancel"></i>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Edit",
    props: ['id'],
    computed: {
        category(){
            return this.$store.getters.category
        }
    }
}
</script>

<style scoped>


</style>
