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
        
        <CardCustom :header="headerReq" :fields="fieldsCommon" :items="itemsReq"/>
        <div class="pt-2">
            <code>
                Example: {{ urlAPI }}/{{ pathURL }}?{{ pathParams }}
            </code>
        </div>
        <br><br>

        <CardCustom :header="headerRes" :textArea="textAreaRes" :fields="fieldsCommon" :items="itemsRes"/>
        <br><br>

        <CardCustom :header="headerErr" :fields="fieldsErr" :items="itemsErr"/>
        
    </div>
</template>

<script>
import CardCustom from '../../components/CardCustom.vue'
import Method from '../../methods'
export default {
    components: {
        CardCustom
    },

    data(){
        return {
            pageName: "Join Game",
            pageDes: "Use for Operater Join Game",
            methodType: "POST",
            urlAPI: `{${process.env.VUE_APP_PROVIDER_URL_API}}`,
            pathURL: "joinGame",

            headerReq: 'Request Params',
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
                    name: 'token', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'e6c49dd6f6d6333367e43b5f1c1173c8',
                    des: 'Token generated by operator.'
                },
                { 
                    name: 'gameID', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '11001',
                    des: ''
                },
                { 
                    name: 'language', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'en',
                    des: 'en,th,cn'
                },
                { 
                    name: 'homeURL', 
                    type: 'string',
                    mandatory: 'N',
                    example: 'http://google.com',
                    des: 'URL redirect to when the player logout.'
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
                    example: '6bf1a086551b7609123456787542381de1fd17ec',
                    des: 'link'
                }
            ],
            jsonReq: {
                token: "e6c49dd6f6d6333367e43b5f1c1173c8",
                gameID: 11001,
                language: "EN",
                homeURL: "http://google.com",
                agentID: "XXXX",
                key: "6bf1a086551b7609123456787542381de1fd17ec"
            },
            pathParams: "",

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
                    example: 'http://google.com',
                    des: ''
                }
            ],
            jsonRes: {
                code: "0000",
                description: "success",
                traceID: "97209cac",
                data: {
                    URL: "http://google.com"
                }
            },

            headerErr: 'Error Code',
            fieldsErr: [
                { key: 'val', label: 'Value' },
                { key: 'des', label: 'Description' }
            ],
            itemsErr: [
                { val: '0000', des: 'Success' },

                // internal
                { val: '9999', des: 'Request id is required.' },
                { val: '9900', des: 'System cannot process this request at the moment. Please try again later.' },
                { val: '9901', des: 'System cannot process this request at the moment. Please try again later. (Bad Request)' },
                { val: '9902', des: 'System cannot process this request at the moment. Please try again later. (Internal Server Error)' },
                { val: '9903', des: 'System cannot process this request at the moment. Please try again later. (DB Session Not Found)' },
                { val: '9904', des: 'Decoding incoming request process is failed' },
                { val: '9905', des: 'Validation failed' },

                { val: '6001', des: 'Agent user is not found.' },
                { val: '6003', des: 'Invalid game code.' },
                { val: '7001', des: 'Validation failed' }
            ]

        }
    },

    created() {
        this.pathParams = Method.convertDataToPathParams(this.itemsReq);
        this.textAreaRes = JSON.stringify(this.jsonRes, undefined, 4);
    },

    methods: {
        
    }
}
</script>

<style scoped>

</style>