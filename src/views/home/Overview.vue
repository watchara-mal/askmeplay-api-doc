<template>
    <div>
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
        <br><br><br>

        <h1 id="update">Update</h1>
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
        <br><br>

        <h1 id="flow">Flow</h1>
        <br>

        <b-card>
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
    }
}
</script>

<style scoped>

</style>