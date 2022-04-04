<template>
    <div> KEK </div>
</template>

<script>
import Dropzone from "dropzone";


export default {
    name: "Create",
    components: {},
    data() {
        return {

        }
    },
    mounted() {
        this.$store.dispatch('getPost', this.$route.params.id)
    }
}
</script>

<style>

</style>
