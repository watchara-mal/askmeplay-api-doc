<template>
    <div>
        <div class="navbar">
            <b-navbar type="dark" variant="dark">
                <b-navbar-brand tag="h1" class="mb-0">
                    <b-button @click="smallMenu = !smallMenu" variant="light" size="sm">
                        <b-icon icon="list"></b-icon>
                    </b-button>
                    BootstrapVue xx
                </b-navbar-brand>
            </b-navbar>
        </div>

        <div class="menu" :class="{ 'small-menu': smallMenu }">
            
            <div v-for="(master,masterIndex) in menuTree" :key="masterIndex" class="menu-item" :class="{ opened: master.expanded }">
                <div
                    class="label"
                    @click="toggleMenu(masterIndex)"
                    :style="{ paddingLeft: depth * 20 + 20 + 'px',  }"
                >
                    <div class="left">
                        <!-- <i v-if="icon" class="material-icons-outlined">{{ icon }}</i> -->
                        <b-icon v-if="master.icon" :icon="master.icon"></b-icon>
                        <span v-if="showLabel">{{ master.label }}</span>
                    </div>
                    <div v-if="master.children" class="right">
                        <b-icon :icon="'caret-'+(master.expanded ? 'down':'up')+'-fill'"></b-icon>
                        <!-- <i class="expand material-icons" :class="{ opened: expanded }">expand_more</i> -->
                    </div>
                </div>
                <div
                    v-show="master.showChildren"
                    :class="{ 'small-menu': smallMenu }"
                    class="items-container"
                    :style="{ height: master.containerHeight }"
                    ref="container"
                >
                    <menu-item
                        :class="{ opened: master.showChildren }"
                        v-for="(child, childIndex) in master.children"
                        :key="childIndex"
                        :data="child.children"
                        :label="child.label"
                        :icon="child.icon"
                        :depth="depth + 1"
                        :smallMenu="smallMenu"
                        :active="child.active"
                        :idMaster="child.idMaster"
                        :idChild="child.idChild"
                    />
                </div>
            </div>

        </div>
    </div>
    
</template>

<script>
// import MenuItem from './MenuItem.vue';
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
            children: [
                {
                    idMaster: 10,
                    idChild: 101,
                    label: "Overviews",
                    active: true
                },
                {
                    idMaster: 10,
                    idChild: 102,
                    label: "Update",
                    active: false
                },
                {
                    idMaster: 10,
                    idChild: 103,
                    label: "Flow",
                    active: false
                }
            ],
            smallMenu: false,
            showChildren: false,
            expanded: false,
            containerHeight: 0,
        }
        ],

        // showChildren: false,
        // expanded: false,
        // containerHeight: 0,

        depth: 0,

    }),

    components: {
        // MenuItem
    },

    computed: {
        showLabel() {
            return this.smallMenu ? this.depth > 0 : true;
        }
    },

    methods: {
        activeChange(){
            console.log(" activeChange =======>");
            // console.log(e);
        },

        toggleMenu(index) {
            console.log("toggleMenu",index);
            // if(this.data === undefined){
            //     this.idMenuChild = this.id;
            //     console.log(this.label, this.active, this.idMaster, this.idChild);

            //     // this.$emit('menu-active', true)
                
            //     // this.menuActive(this.id, this.active);
            // }
        

            this.menuTree[index].expanded = !this.menuTree[index].expanded;


            console.log(this.$refs["container"]);
            // if (!this.menuTree[index].showChildren) {
            //     this.menuTree[index].showChildren = true;
            //     this.$nextTick(() => {
            //         this.containerHeight = this.$refs["container"].scrollHeight + "px";
            //         setTimeout(() => {
            //             this.containerHeight = "fit-content";
            //             if(navigator.userAgent.indexOf("Firefox") != -1) 
            //             this.containerHeight = "-moz-max-content"
            //             this.$refs["container"].style.overflow = "visible";
            //         }, 300);
            //     });
            // } else {
            //     this.containerHeight = this.$refs["container"].scrollHeight + "px";
            //     this.$refs["container"].style.overflow = "hidden";
            //     setTimeout(() => {
            //         this.containerHeight = 0 + "px";
            //     }, 10);
            //     setTimeout(() => {
            //         this.menuTree[index].showChildren = false;
            //     }, 300);
            // }
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


.menu-item {
    position: relative;
    width: 100%;
    .label {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        white-space: nowrap;
        user-select: none;
        height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        font-size: 14px;
        color: #6a6a6a;
        transition: all 0.3s ease;
        > div {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        i {
            font-size: 20px;
            color: #6e6e6e;
            transition: all 0.3s ease;
            &.expand {
                font-size: 16px;
                color: #cacaca;
                &.opened {
                transform: rotate(180deg);
                }
            }
        }
        &.small-item {
            width: fit-content;
        }
        &:hover {
            background: #f2f7fc;
            cursor: pointer;
        }
    }
    .items-container {
        width: 100%;
        left: calc(100% + 6px);
        transition: height 0.3s ease;
        overflow: hidden;
        &.small-menu {
            width: fit-content;
            position: absolute;
            background: #fff;
            box-shadow: 0 0 10px #ebebeb;
            top: 0;
            .label {
                width: 100% !important;
                padding-left: 20px !important;
            }
        }
    }
}

.menu-active{
    background: #deedff;
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