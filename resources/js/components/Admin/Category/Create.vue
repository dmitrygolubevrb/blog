<template>
    <tr>
        <th></th>
        <td><input v-model="category.title" type="text" v-bind:class="{invisible: !isAdditionCategory}"></td>
        <td>
            <i v-bind:class="{'d-none': !isAdditionCategory}"
               @click.prevent="$store.dispatch('storeCategory', {title: category.title, notification: $notify})"
               class="fa fa-floppy-o save" aria-hidden="true"/>

            <i v-bind:class="{'d-none': isAdditionCategory}"
               @click.prevent="$store.dispatch('showAddCategory')"
               class="fa-solid fa-plus add"></i>

            <i v-bind:class="{'d-none': !isAdditionCategory}"
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
        category: {
            get(){
                 return this.$store.getters.category
            },
            set(title){
                this.$store.commit('setCategory', {title})
            }
        },
        isAdditionCategory(){
            return this.$store.getters.isAdditionCategory
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
