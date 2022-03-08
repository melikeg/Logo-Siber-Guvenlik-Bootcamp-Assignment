<template>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <MainContent></MainContent>
        <FooterArea></FooterArea>
    </div>
    <!-- End of Content Wrapper -->
</template>

<script>
import MainContent from "./wrapperComponents/MainContent.vue"
import FooterArea from "./wrapperComponents/FooterArea.vue"
export default {
    name: 'ContentArea',
    components: {
    MainContent,
    FooterArea
}
}
</script>

<style>
.flex-column {
    flex-direction: column !important;
}
.d-flex {
    display: flex !important;
}
</style>