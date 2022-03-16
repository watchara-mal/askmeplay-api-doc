<template>
    <div>
        <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8">
                <b-card>
                    <template #header>
                        <h5 class="mb-0">{{ header }}</h5>
                    </template>
                    <b-card-body class="p-0">
                        <b-form-textarea 
                            v-if="textArea!=''"
                            id="textarea-auto-height"  
                            class="mb-2"
                            :value="textArea" 
                            row="4"
                            max-rows="50"
                            readonly
                        ></b-form-textarea>

                        <b-table :fields="fields" :items="items" bordered>
                            <!-- <template #cell(des)="data">
                                {{ data.item.des }} 
                            </template> -->
                        </b-table>
                    </b-card-body>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: {
        header: {
            type: String
        },
        textArea: {
            type: String,
            default: ''
        },
        fields: {
            type: Array
        },
        items: {
            type: Array
        }
    }
}
</script>

<style scoped>
.textarea-readonly, .form-control[readonly] {
    background-color: white;
}
</style>