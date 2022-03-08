<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <SidebarBrand></SidebarBrand>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <SidebarMenu></SidebarMenu>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
    </ul>
    <!-- End of Sidebar -->
</template>

<script>
import SidebarBrand from "./sideBarComponents/SidebarBrand.vue";
import SidebarMenu from "./sideBarComponents/SidebarMenu.vue";
export default {
    name: "SideBar",
    components: { SidebarBrand, SidebarMenu }
}
</script>

<style>

</style>