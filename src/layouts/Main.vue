<template>
    <div id="main">
        <div class="d-none d-xl-block d-lg-block d-md-block">
            <Sidebar @sidebar-toggle="SidebarToggle"/>
        </div>
        <div class="container-fluid" :style="contentStyle">
            <router-view/>
        </div>
    </div>
</template>

<script>
// import MenuTest from '../components/MenuTest.vue'
// import Menu from '../components/Menu.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
    components: {
        // MenuTest
        // Menu
        Sidebar
    },

    data() {
        return {
            contentStyle: {
                'padding-left': '300px'
            }
        }
    },

    methods: {
        SidebarToggle(data){
            if(data){
                this.contentStyle = {
                    'padding-left': '300px',
                    transition: 'all 0.3s ease-in-out'
                }
            }else{
                this.contentStyle = {
                    transition: 'all 0.3s ease-in-out'
                }
            }
        }
    }
}
</script>

<style scoped>
    html,body{
        overscroll-behavior: contain;
        /* font-family: 'myFirstFont', sans-serif, Helvetica, Arial, sans-serif; */
        height: 100%;
        font-family: 'Helvetica Neue', Helvetica, Tahoma, sans-serif;
        background: #F5F5F5;
    }

    #main {
        height: 100%;
    }

    .container-fluid {
        position: relative;
        padding-top: 60px;
        padding-bottom: 20px;
    }
</style>
