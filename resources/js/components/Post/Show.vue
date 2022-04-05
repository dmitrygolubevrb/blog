<template>
    <div class="row">
        <div class="col">
            <RelatedNews></RelatedNews>
        </div>
    </div>
</template>

<script>
import Dropzone from "dropzone";
import RelatedNews from "../Includes/RelatedNews";


export default {
    name: "Create",
    components: {RelatedNews},
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
