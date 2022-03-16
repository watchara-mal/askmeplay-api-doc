<template>
    <div>
        <div v-if="pageName!=''">
            <h1>{{ pageName }}</h1>
            <br>
        </div>

        <div v-if="pageDes!=''">
            <p>{{ pageDes }}</p>
            <br>
        </div>
        
        <div v-if="methodType!='' && pathURL!=''">
            <div>
                <code>Method : {{ methodType }}</code>
            </div>
            <div>
                <code>Path : {{ urlAPI }}/{{ pathURL }}</code>
            </div>
            <br>
        </div>
        
        <CardCustom :header="headerReq" :textArea="textAreaReq" :fields="fieldsCommon" :items="itemsReq"/>
        <br><br>

        <CardCustom :header="headerRes" :textArea="textAreaRes" :fields="fieldsCommon" :items="itemsRes"/>
        <br><br>

        <CardCustom :header="headerErr" :fields="fieldsErr" :items="itemsErr"/>
        
    </div>
</template>

<script>
import CardCustom from '../../components/CardCustom.vue'
export default {
    components: {
        CardCustom
    },

    data(){
        return {
            pageName: "Get Member Info",
            pageDes: "Use for Operater Get Member Info",
            methodType: "POST",
            urlAPI: `{${process.env.VUE_APP_PROVIDER_URL_API}}`,
            pathURL: "getMemberInfo",

            headerReq: 'Request Body',
            textAreaReq: "",
            fieldsCommon: [
                { key: 'name', label: 'Name' },
                { key: 'type', label: 'Type' },
                { key: 'mandatory', label: 'Mandatory' },
                { key: 'example', label: 'Example Value' },
                { key: 'des', label: 'Description' }
            ],
            itemsReq: [
                { 
                    name: 'memberID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'member01',
                    des: ''
                },
                { 
                    name: 'agentID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'XXXX',
                    des: 'ID of agent.'
                },
                { 
                    name: 'key', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                }
            ],
            jsonReq: {
                memberID: "member01",
                agentID: "XXXX",
                key: ""
            },

            headerRes: 'Response',
            textAreaRes: "",
            itemsRes: [
                { 
                    name: 'code', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '0000',
                    des: ''
                },
                { 
                    name: 'description', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'success',
                    des: ''
                },
                { 
                    name: 'traceID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '97209cac',
                    des: ''
                },
                { 
                    name: 'data', 
                    type: 'object',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'memberID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'member01',
                    des: ''
                },
                { 
                    name: 'balance', 
                    type: 'decimal',
                    mandatory: 'Y',
                    example: '10000',
                    des: ''
                },
                { 
                    name: 'status', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'active',
                    des: 'suspend, active'
                }
            ],
            jsonRes: {
                code: "0000",
                description: "success",
                traceID: "97209cac",
                data: {
                    memberID: "member01",
                    balance: 10000,
                    status: "active"
                }
            },

            headerErr: 'Error Code',
            fieldsErr: [
                { key: 'val', label: 'Value' },
                { key: 'des', label: 'Description' }
            ],
            itemsErr: [
                { val: '0000', des: 'Success' },
                { val: '9900', des: 'System cannot process this request at the moment. Please try again later' },
                { val: '9902', des: 'Internal Server Error' }
            ]

        }
    },

    created() {
        this.textAreaReq = JSON.stringify(this.jsonReq, undefined, 4);
        this.textAreaRes = JSON.stringify(this.jsonRes, undefined, 4);
    },

    methods: {
        
    }
}
</script>

<style scoped>

</style>