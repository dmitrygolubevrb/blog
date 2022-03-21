<template>
    <tr v-bind:class="{'d-none': !this.$parent.isEdit(id)}">
        <th scope="row">{{ id }}</th>
        <td><input v-model="tag.title" type="text"></td>
        <td>
            <i @click.prevent="$store.dispatch('updateTag', {id, tag, notification: $notify})" class="fa fa-floppy-o save" aria-hidden="true"/>
            <i @click.prevent="$store.dispatch('unsetEditTagId')" class="fa-solid fa-circle-xmark cancel"></i>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Edit",
    props: ['id'],
    computed: {
        tag(){
            return this.$store.getters.tag
        }
    }
}
</script>

<style scoped>


</style>
