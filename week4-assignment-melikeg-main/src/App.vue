<template>
  <div id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <SideBar></SideBar>   
      <ContentArea></ContentArea> <!-- SideBar and ContentArea components included -->
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>


<script>
import SideBar from "./components/SideBar.vue" //components are imported
import ContentArea from "./components/ContentArea.vue"
export default {
  name: 'App',
  components: {
    SideBar,
    ContentArea
  }
}
</script>

<style> 
@import './styles/css/sb-admin-2.css';  
@import './styles/css/sb-admin-2.min.css';
</style>
