<template>
    <div>
        <div class="navbar">
            <b-navbar type="dark" variant="dark">
                <b-navbar-brand tag="h1" class="mb-0">
                    <b-button v-b-toggle.sidebar-1 variant="light" size="sm" class="btn-sidebar">
                        <b-icon icon="list"></b-icon>
                    </b-button>
                    {{ navbarName }}
                </b-navbar-brand>
            </b-navbar>
        </div>

        <b-sidebar id="sidebar-1" title="Sidebar" bg-variant="dark" text-variant="light" no-header shadow @change="SidebarToggle" v-model="visible" :no-close-on-route-change="true">
            <div>
                <b-nav vertical class="w-100">
                    <div v-for="(menu,index) in menuList" :key="index">
                        <b-nav-text class="">{{ menu.text }}</b-nav-text>
                        <b-nav-item v-b-toggle="`${index}`" @click="menuActive(index)">
                            <div class="icon-menu">
                                <b-icon :icon="menu.icon" font-scale="1.5"></b-icon>
                            </div>
                            <b class="">{{ menu.text }}</b>
                            <div class="icon-toggle">
                                <b-icon :icon="menu.active ? 'chevron-down':'chevron-up'" font-scale="1"></b-icon>
                            </div>
                        </b-nav-item>
                        <b-collapse :id="`${index}`" role="tabpanel">
                            <b-nav v-for="(subMenu,subIndex) in menu.subMenuList" :key="subIndex" vertical class="w-100 nav-sub-menu">
                                <b-nav-item :to="subMenu.link=='' ? subMenu.path : subMenu.path+subMenu.link " :class="subMenu.active ? 'nav-item-active':''" @click="subMenuActive(index,subIndex)">
                                    {{ subMenu.text }}
                                </b-nav-item>
                            </b-nav>
                        </b-collapse>
                    </div>

                </b-nav>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            expanded: true,
            navbarName: "Askmeplay Open API",
            visible: true,
            menuList: [
                {
                    text: "Home",
                    icon: "house",
                    active: false,
                    path: "",
                    subMenuList: [
                        {
                            text: "Overview",
                            icon: "",
                            active: false,
                            path: "/overview",
                            link: ""
                        },
                        {
                            text: "Update",
                            icon: "",
                            active: false,
                            path: "/overview",
                            link: "#update"
                        },
                        {
                            text: "Flow",
                            icon: "",
                            active: false,
                            path: "/overview",
                            link: "#flow"
                        }
                    ]
                },
                {
                    text: "Transfer API",
                    icon: "file-earmark-text",
                    active: false,
                    path: "",
                    subMenuList: [
                        {
                            text: "Join Game",
                            icon: "",
                            active: false,
                            path: "/joingame",
                            link: ""
                        },
                        {
                            text: "Verify Session",
                            icon: "",
                            active: false,
                            path: "/verifysession",
                            link: ""
                        },
                        {
                            text: "Kick Member",
                            icon: "",
                            active: false,
                            path: "/kickmember",
                            link: ""
                        },
                        {
                            text: "Get Game List",
                            icon: "",
                            active: false,
                            path: "/getgamelist",
                            link: ""
                        },
                        {
                            text: "Get Bet Detail URL",
                            icon: "",
                            active: false,
                            path: "/getbetdetailurl",
                            link: ""
                        },
                        {
                            text: "Get Bet Detail By Bet ID",
                            icon: "",
                            active: false,
                            path: "/getbetdetailbybetid",
                            link: ""
                        },
                        {
                            text: "Get Bet Detail By Time",
                            icon: "",
                            active: false,
                            path: "/getbetdetailbytime",
                            link: ""
                        },
                        {
                            text: "Get Member Info",
                            icon: "",
                            active: false,
                            path: "/getmemberinfo",
                            link: ""
                        },
                        {
                            text: "Exchange Transfer",
                            icon: "",
                            active: false,
                            path: "/exchangetransfer",
                            link: ""
                        },
                        {
                            text: "Verify Transfer",
                            icon: "",
                            active: false,
                            path: "/verifytransfer",
                            link: ""
                        }
                    ]
                },
                {
                    text: "Seamless API",
                    icon: "file-earmark-text",
                    active: false,
                    path: "",
                    subMenuList: [
                        {
                            text: "Join Game",
                            icon: "",
                            active: false,
                            path: "/joingame",
                            link: ""
                        },
                        {
                            text: "Verify Session",
                            icon: "",
                            active: false,
                            path: "/verifysession",
                            link: ""
                        },
                        {
                            text: "Kick Member",
                            icon: "",
                            active: false,
                            path: "/kickmember",
                            link: ""
                        },
                        {
                            text: "Get Game List",
                            icon: "",
                            active: false,
                            path: "/getgamelist",
                            link: ""
                        },
                        {
                            text: "Get Bet Detail URL",
                            icon: "",
                            active: false,
                            path: "/getbetdetailurl",
                            link: ""
                        },
                        {
                            text: "Get Bet Detail By Bet ID",
                            icon: "",
                            active: false,
                            path: "/getbetdetailbybetid",
                            link: ""
                        },
                        {
                            text: "Get Bet Detail By Time",
                            icon: "",
                            active: false,
                            path: "/getbetdetailbytime",
                            link: ""
                        },
                        {
                            text: "Bet",
                            icon: "",
                            active: false,
                            path: "/bet",
                            link: ""
                        },
                        {
                            text: "Payout",
                            icon: "",
                            active: false,
                            path: "/payout",
                            link: ""
                        },
                        {
                            text: "Cancel Bet",
                            icon: "",
                            active: false,
                            path: "/cancelbet",
                            link: ""
                        },
                        {
                            text: "Verify Bet",
                            icon: "",
                            active: false,
                            path: "/verifybet",
                            link: ""
                        },
                        {
                            text: "Resolve Bet",
                            icon: "",
                            active: false,
                            path: "/resolvebet",
                            link: ""
                        }
                    ]
                },
                {
                    text: "Detail",
                    icon: "book",
                    active: false,
                    path: "",
                    subMenuList: [
                        {
                            text: "Parameter",
                            icon: "",
                            active: false,
                            path: "/parameter",
                            link: ""
                        },
                        {
                            text: "Types",
                            icon: "",
                            active: false,
                            path: "/types",
                            link: ""
                        },
                        {
                            text: "Error Code",
                            icon: "",
                            active: false,
                            path: "/errorcode",
                            link: ""
                        }
                    ]
                }
            ]
        }
    },

    created() {
        this.menuList.forEach(menu => {
            menu.subMenuList.forEach(subMenu => {
                if(subMenu.path == this.$route.path && subMenu.link == ""){
                    subMenu.active = true;
                }
            });
        });
    },

    methods: {
        SidebarToggle(value){
            this.$emit('sidebar-toggle', value)
        },

        menuActive(id){
            if(this.menuList[id].active){
                this.menuList[id].active = false
            }else{
                this.menuList[id].active = true
            }
        },

        subMenuActive(id,subId){

            this.menuList.forEach(menu => {
                // menu.active = false;
                menu.subMenuList.forEach(subMenu => {
                    subMenu.active = false;
                });
            });

            this.menuList[id].subMenuList[subId].active = true
        }
    }
}
</script>

<style scoped>
.navbar {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    padding-left: 20px;
    z-index: 99999;
}

.pointer{
    cursor: pointer;
}

.nav-item:hover {
    background-color: #484848;
}

.nav-item-active {
    background-color: #6b6b6b;
}

.nav-link {
    position: relative;
    display: flex;
    color: rgba(255, 255, 255, 0.5);
}

/* .nav-link:hover {
    color: #fff;
} */

.nav-link:active, .nav-link:hover, .nav-link:focus  {
    color: #fff;
}


.icon-menu {
    padding-right: 5px;
}

.nav-link .icon-toggle {
    display: inline-block;
    margin-left: auto;
}

.nav-item {
    font-size: 0.9rem;
    padding-left: 15px;
}

.nav-sub-menu .nav-link {
    padding-left: 40px;
    font-weight: bold;
}

.navbar-text {
    padding-left: 20px;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.25);
}

.btn-sidebar, .btn-sidebar:focus, .btn-sidebar:hover {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid transparent;
    box-shadow: none;
}

</style>