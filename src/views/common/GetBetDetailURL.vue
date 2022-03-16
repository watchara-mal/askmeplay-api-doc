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
            pageName: "Get Bet Detail URL",
            pageDes: "Use for Operater Get Bet Detail URL",
            methodType: "POST",
            urlAPI: `{${process.env.VUE_APP_PROVIDER_URL_API}}`,
            pathURL: "getBetDetailURL",

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
                    name: 'betID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'language', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'EN',
                    des: 'EN,TH,CN'
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
                betID: "",
                language: "EN",
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
                    name: 'URL', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '?token=1232131',
                    des: 'Token bind with betID.'
                }
            ],
            jsonRes: {
                code: "0000",
                description: "success",
                traceID: "97209cac",
                data: {
                    URL: "?token=1232131"
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