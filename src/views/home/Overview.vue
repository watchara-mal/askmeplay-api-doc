<template>
    <div>
        <div id="overview" :style="styleOverview"></div>
        <h1>Overview</h1>
        <br>
        <!-- <b-link href="#flow">Flow</b-link> -->

        <p>A simple wrapper for Trade Open API</p>
        <br>

        <p>Partner use APIs to participate in trades and send and receive information.</p>
        <p>Use whatever they choose API type when creating.</p>
        <br>

        <p>API type</p>
        <p>1. Transfer type</p>
        <p>2. Seamless type</p>
        <div id="update"></div>
        <br><br><br>
        <div></div>

        <h1>Update</h1>
        <br>

        <b-card>
            <template #header>
                <h5 class="mb-0">History updates a Trade Open API.</h5>
            </template>
            <b-card-body class="p-0">
                <b-table :items="items" :fields="fields" bordered>
                    <template #cell(no)="data">
                        {{ data.index + 1 }}
                    </template>
                </b-table>
            </b-card-body>
        </b-card>
        <div id="flow"></div>
        <br><br><br>

        <h1>Flow</h1>
        <br>

        <b-card id="flow">
            <template #header>
                <h5 class="mb-0">Flow Game Slot.</h5>
            </template>
            <b-card-body class="p-0">
                <div>
                    <b-img :src="require('../../assets/gameslot.jpg')" center alt="Center image"></b-img>
                </div>
            </b-card-body>
        </b-card>


    </div>
</template>

<script>
export default {
    data() {
        return {
            styleOverview: { 'padding-bottom': '60px' },
            fields: [
                { key: 'no', label: 'No.', thStyle: { width: '100px' } },
                { key: 'date', label: 'Date', thStyle: { width: '150px' } },
                { key: 'version', label: 'Version', thStyle: { width: '150px' } },
                { key: 'detail', label: 'Detail' }
            ],
            items: [
                { date: '1/1/2022', version: 'v1', detail: 'init' }
            ]
        }
    },

    created() {
        // if(this.$route.hash == "#overview"){
        //     this.styleOverview = { 'padding-bottom': '60px' }   
        // }
    }
}
</script>

<style scoped>

</style>