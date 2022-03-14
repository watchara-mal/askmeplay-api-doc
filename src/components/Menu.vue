<template>
    <div>
        <div class="navbar">
            <b-navbar type="dark" variant="dark">
                <b-navbar-brand tag="h1" class="mb-0">
                    <b-button @click="smallMenu = !smallMenu" variant="light" size="sm">
                        <b-icon icon="list"></b-icon>
                    </b-button>
                    BootstrapVue
                </b-navbar-brand>
            </b-navbar>
        </div>

        <div class="menu" :class="{ 'small-menu': smallMenu }">
            <MenuItem
            v-for="(item, index) in menuTree"
            :key="index"
            :data="item.children"
            :label="item.label"
            :icon="item.icon"
            :depth="0"
            :smallMenu="smallMenu"
            :active="item.active"
            :idMaster="item.idMaster"
            :idChild="item.idChild"
            />
        </div>
    </div>
    
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
    data: () => ({
        smallMenu: false,
        menuTree: [
        {
            idMaster: 10,
            idChild: null,
            label: "Home",
            icon: "house-fill",
            active: false,
            path: "",
            children: [
                {
                    idMaster: 10,
                    idChild: 101,
                    label: "Overviews",
                    active: true,
                    path: "/overview"
                },
                {
                    idMaster: 10,
                    idChild: 102,
                    label: "Update",
                    active: false,
                    path: "/update"
                },
                {
                    idMaster: 10,
                    idChild: 103,
                    label: "Flow",
                    active: false,
                    path: "/flow"
                }
            ]
        },
        // {
        //     key: 1,
        //     label: "Transfer API",
        //     icon: "globe",
        //     active: false,
        //     children: [
        //         {
        //             key: 0,
        //             label: "level 2.1",
        //             active: false
        //         },
        //         {
        //             key: 1,
        //             label: "level 2.2",
        //             active: false
        //         },
        //         {
        //             key: 2,
        //             label: "level 2.3",
        //             active: false
        //         }
        //     ]
        // },
        // {
        //     key: 2,
        //     label: "Seamless API",
        //     icon: "globe",
        //     active: false,
        //     children: [
        //         {
        //             key: 0,
        //             label: "level 2.1",
        //             active: false
        //         },
        //         {
        //             key: 1,
        //             label: "level 2.2",
        //             active: false
        //         },
        //         {
        //             key: 2,
        //             label: "level 2.3",
        //             active: false
        //         }
        //     ]
        // },
        // {
        //     key: 3,
        //     label: "Detail",
        //     icon: "globe",
        //     active: false,
        //     children: [
        //         {
        //             key: 0,
        //             label: "Parameter",
        //             active: false
        //         },
        //         {
        //             key: 1,
        //             label: "Error Code",
        //             active: false
        //         }
        //     ]
        // },
        ]
    }),
    components: {
        MenuItem
    },
    methods: {
        activeChange(){
            console.log(" activeChange =======>");
            // console.log(e);
        },
    }
}
</script>

<style lang="scss" scoped>
.menu {
    position: fixed;
    height: 100vh;
    width: 240px;
    left: 0;
    top: 57px;
    border-right: 1px solid #ececec;
    transition: all .3s ease;
    overflow: auto;
    z-index: 9999;
    i {
        position: fixed;
        left: 250px;
        font-size: 20px;
        top: 15px;
        user-select: none;
        cursor: pointer;
        transition: all .3s ease;
    }
    &.small-menu {
        overflow: inherit;
        width: 60px;
        i {
            left: 20px;
        }
    }
}

// .btn-menu {
//     position: fixed;
//     left: 0;
//     top: 0;
//     padding-top: 15px;
//     // padding: 0 20px;
// }

.navbar {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    padding-left: 20px;
}
</style>