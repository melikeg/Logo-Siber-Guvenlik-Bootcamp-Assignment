<template>
    <!-- Main Content -->
    <div id="content">
        <TopBar></TopBar>
        <DefaultVue></DefaultVue>        
    </div>
    <!-- End of Main Content -->
</template>

<script>
import TopBar from "./mainContentComp/TopBar.vue"
import DefaultVue from "./mainContentComp/DefaultVue.vue"
export default {
    name: 'MainContent',
    components: {
        TopBar,
        DefaultVue
    }
}
</script>

<style>
</style>