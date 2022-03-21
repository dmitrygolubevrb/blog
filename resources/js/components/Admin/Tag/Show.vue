<template>
    <tr v-bind:class="{'d-none': this.$parent.isEdit(tag.id)}">
        <th scope="row">{{ tag.id }}</th>
        <td>{{ tag.title }}</td>
        <td>
            <i @click.prevent="$store.dispatch('changeEditTagId', {id: tag.id, title: tag.title})" class="fa fa-pencil edit" aria-hidden="true"/>
            <i @click.prevent="$store.dispatch('destroyTag', {tag, notification: $notify})" class="fa fa-trash-o destroy" aria-hidden="true"/>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Show",
    props: ['tag'],
    methods: {

    }
}
</script>

<style scoped>

</style>
