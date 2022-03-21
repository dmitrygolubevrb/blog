<template>
    <tr v-bind:class="{'d-none': this.$parent.isEdit(category.id)}">
        <th scope="row">{{ category.id }}</th>
        <td>{{ category.title }}</td>
        <td>
            <i @click.prevent="$store.dispatch('changeEditCategoryId', {id: category.id, title: category.title})" class="fa fa-pencil edit" aria-hidden="true"/>
            <i @click.prevent="$store.dispatch('destroyCategory', {category, notification: $notify})" class="fa fa-trash-o destroy" aria-hidden="true"/>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Show",
    props: ['category'],
    methods: {

    }
}
</script>

<style scoped>

</style>
