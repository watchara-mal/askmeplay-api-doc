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
            pageName: "Exchange Transfer",
            pageDes: "Use for Operater Exchange Transfer",
            methodType: "POST",
            urlAPI: `{${process.env.VUE_APP_PROVIDER_URL_API}}`,
            pathURL: "exchangeTransfer",

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
                    name: 'transactionID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '2021123105000000001',
                    des: 'YYYYDDMM+<API ID(05)>+<running number 9 digits>'
                },
                { 
                    name: 'amount', 
                    type: 'decimal',
                    mandatory: 'Y',
                    example: '10000',
                    des: ''
                },
                { 
                    name: 'transferType', 
                    type: 'int',
                    mandatory: 'Y',
                    example: '1',
                    des: `${"Transfer type:\n1: provider > operator. (Transfer all balance; the amount is ignored)\n2: operator > provider.\n3: provider > operator."}`
                },
                { 
                    name: 'memberID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: 'member01',
                    des: 'create new member if does not exist and transferType is 2(deposit)'
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
                transactionID: "2021123105000000001",
                amount: 10000,
                transferType: "1",
                memberID: "member01",
                agentID: "XXXX",
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
                    name: 'transationID', 
                    type: 'string',
                    mandatory: 'Y',
                    example: '2021123105000000001',
                    des: 'YYYYDDMM+<API ID(05)>+<running number 9 digits>'
                },
                { 
                    name: 'balanceBefore', 
                    type: 'decimal',
                    mandatory: 'Y',
                    example: '10000',
                    des: ''
                },
                { 
                    name: 'balanceAfter', 
                    type: 'decimal',
                    mandatory: 'Y',
                    example: '10000',
                    des: ''
                }
            ],
            jsonRes: {
                code: "0000",
                description: "success",
                traceID: "97209cac",
                data: {
                    transactionID: "2021123105000000001",
                    balanceBefore: 10000,
                    balanceAfter: 10000
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