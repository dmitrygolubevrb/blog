<template>
    <tr>
        <th></th>
        <td><input v-model="tag.title" type="text" v-bind:class="{invisible: !isAdditionTag}"></td>
        <td>
            <i v-bind:class="{'d-none': !isAdditionTag}"
               @click.prevent="$store.dispatch('storeTag', {title: tag.title, notification: $notify})"
               class="fa fa-floppy-o save" aria-hidden="true"/>

            <i v-bind:class="{'d-none': isAdditionTag}"
               @click.prevent="$store.dispatch('showAddTag')"
               class="fa-solid fa-plus add"></i>

            <i v-bind:class="{'d-none': !isAdditionTag}"
               @click.prevent="$store.commit('setIsAdditionTag')"
               class="fa-solid fa-circle-xmark cancel"></i>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Create",
    components: {},
    computed: {
        tag: {
            get(){
                 return this.$store.getters.tag
            },
            set(title){
                this.$store.commit('setTag', {title})
            }
        },
        isAdditionTag(){
            return this.$store.getters.isAdditionTag
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
