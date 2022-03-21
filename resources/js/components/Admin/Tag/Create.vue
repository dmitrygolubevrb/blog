<template>
    <tr>
        <th></th>
        <td><input v-model="tag.title" type="text" v-bind:class="{invisible: !isAddition}"></td>
        <td>
            <i v-bind:class="{'d-none': !isAddition}"
               @click.prevent="$store.dispatch('storeTag', {title: tag.title, notification: $notify})"
               class="fa fa-floppy-o save" aria-hidden="true"/>

            <i v-bind:class="{'d-none': isAddition}"
               @click.prevent="$store.dispatch('showAddTag')"
               class="fa-solid fa-plus add"></i>

            <i v-bind:class="{'d-none': !isAddition}"
               @click.prevent="$store.commit('setIsAddition')"
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
        isAddition(){
            return this.$store.getters.isAddition
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
