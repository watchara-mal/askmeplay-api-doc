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
            pageName: "Get Bet Detail By Bet ID",
            pageDes: "Use for Operater Get Bet Detail By Bet ID",
            methodType: "POST",
            urlAPI: `{${process.env.VUE_APP_PROVIDER_URL_API}}`,
            pathURL: "getBetDetailURL",

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
                    name: 'betID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '',
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
                    example: '6bf1a086551b7609123456787542381de1fd17ec',
                    des: 'link'
                }
            ],
            jsonReq: {
                betID: "",
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
                    name: 'memberID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'betID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'gameID', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'betTime', 
                    type: 'datetime',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'betAmount', 
                    type: 'decimal',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'payoutAmount', 
                    type: 'decimal',
                    mandatory: 'N',
                    example: '',
                    des: ''
                },
                { 
                    name: 'status', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'pending',
                    des: "pending > bet success, success > payout success"
                },
                { 
                    name: 'gameCategory', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'gameType', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                }
            ],
            jsonRes: {
                code: "0000",
                description: "success",
                traceID: "97209cac",
                data: {
                    memberID: "",
                    betID: "",
                    gameID: "",
                    betTime: "",
                    betAmount: "",
                    payoutAmount: "",
                    status: "pending",
                    gameCategory: "",
                    gameType: ""
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
        this.pathParams = Method.convertDataToPathParams(this.itemsReq);
        this.textAreaRes = JSON.stringify(this.jsonRes, undefined, 4);
    },

    methods: {
        
    }
}
</script>

<style scoped>

</style>