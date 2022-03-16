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
            pageName: "Get Bet Detail By Time",
            pageDes: "Use for Operater Get Bet Detail By Time",
            methodType: "POST",
            urlAPI: `{${process.env.VUE_APP_PROVIDER_URL_API}}`,
            pathURL: "getBetDetailByTime",

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
                    name: 'startTime', 
                    type: 'datetime',
                    mandatory: 'Y',
                    example: '2021-10-28T05:46:57Z',
                    des: 'YYYY-MM-DDThh:mm:ssZ'
                },
                { 
                    name: 'endTime', 
                    type: 'datetime',
                    mandatory: 'Y',
                    example: '2021-10-28T05:46:57Z',
                    des: 'YYYY-MM-DDThh:mm:ssZ'
                },
                { 
                    name: 'gameID', 
                    type: 'int',
                    mandatory: 'N',
                    example: '11001',
                    des: 'ID of game.'
                },
                { 
                    name: 'agentID', 
                    type: 'datetime',
                    mandatory: 'Y',
                    example: 'XXXX',
                    des: 'ID of agent.'
                },
                { 
                    name: 'pageNo', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '1',
                    des: ''
                },
                { 
                    name: 'pageLimit', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '10',
                    des: ''
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
                startTime: "2021-10-28T05:46:57Z",
                endTime: "2021-10-28T05:46:57Z",
                gameID: 11001,
                agentID: "XXXX",
                pageNo: 1,
                pageLimit: 10,
                key: ""
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
                    name: 'betDetails', 
                    type: '[]object',
                    mandatory: 'Y',
                    example: "",
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
                    type: 'string',
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
                    name: 'status', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'SUCCESS',
                    des: ''
                },
                { 
                    name: 'gameCategory', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'game',
                    des: ''
                },
                { 
                    name: 'gameType', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'slot',
                    des: ''
                },
                { 
                    name: 'balanceBefore', 
                    type: 'decimal',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'balanceAfter', 
                    type: 'decimal',
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
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'winLose', 
                    type: 'decimal',
                    mandatory: 'Y',
                    example: '',
                    des: ''
                },
                { 
                    name: 'currency', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'THB',
                    des: ""
                },
                { 
                    name: 'currentPage', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '1',
                    des: ""
                },
                { 
                    name: 'totalPages', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '100',
                    des: ""
                },
                { 
                    name: 'pageLimit', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '10',
                    des: ""
                },
                { 
                    name: 'totalRecords', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '1000',
                    des: ""
                }
            ],
            jsonRes: {
                code: "0000",
                description: "success",
                traceID: "97209cac",
                data: {
                    betDetails: [
                        {
                            memberID: "6213461936884e4c256a3958",
                            betID: "6213461936884e4c256a3960",
                            gameID: "11001",
                            betTime: "2022-02-21T07:58:17.883Z",
                            status: "SUCCESS",
                            gameCategory: "game",
                            gameType: "slot",
                            balanceBefore: 1000,
                            balanceAfter: 999,
                            betAmount: 1,
                            payoutAmount: 0,
                            winLose: -1,
                            currency: "THB"
                        }
                    ],
                    currentPage: 1,
                    totalPages: 100,
                    pageLimit: 10,
                    totalRecords: 1000
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