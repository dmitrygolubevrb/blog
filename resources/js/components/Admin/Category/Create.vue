<template>
    <tr>
        <th></th>
        <td>
            <input
                type="text"
                v-model="category.title"
                v-bind:class="{invisible: !isAdditionCategory}"
                v-on:keyup.enter="$store.dispatch('storeCategory', {title: category.title, notification: $notify})"
            >
        </td>
        <td>
            <div v-show="isAdditionCategory">
                <i @click.prevent="$store.dispatch('storeCategory', {title: category.title, notification: $notify})"
                   class="fa fa-floppy-o save" aria-hidden="true"/>

                <i @click.prevent="$store.commit('setIsAdditionCategory')"
                   class="fa-solid fa-circle-xmark cancel"></i>
            </div>
            <i v-show="!isAdditionCategory"
               @click.prevent="$store.dispatch('showAddCategory')"
               class="fa-solid fa-plus add"></i>
        </td>
    </tr>
</template>

<script>
export default {
    name: "Create",
    components: {},
    computed: {
        category: {
            get() {
                return this.$store.getters.category
            },
            set(title) {
                this.$store.commit('setCategory', {title})
            }
        },
        isAdditionCategory() {
            return this.$store.getters.isAdditionCategory
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>
