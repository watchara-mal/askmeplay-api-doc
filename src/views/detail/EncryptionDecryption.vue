<template>
    <div>
        <h1>Encryption / Decryption</h1>
        <div class="row">
            <div class="col-xl-8 col-lg-8 col-md-8">
                <b-card>
                    <template #header>
                        <h5 class="mb-0">Key</h5>
                    </template>
                    <b-card-body class="p-0">
                        <p class="pb-4">How to generate Key</p>
                        <ol>
                            <li>Generate raw signature string by Secret Key. And append with request params.</li>
                                <ul>
                                    <li>Ex. Raw signature: <code>4b73302f6211afa2b37339768c7e83b64</code>appID=XXXX&username=member01</li>
                                </ul>
                            <li>Generate Key.</li>
                                <ul>
                                    <li>Step 1: Use MD5 encryption algorithm to encrypt data.</li>
                                    <ul>
                                        <li>How to use: MD5(<code>4b73302f6211afa2b37339768c7e83b64</code>appID=XXXX&username=member01)</li>
                                        <li>Ex. keyMD5: 6bf1a086551b76097542381de1fd17ec</li>
                                    </ul>
                                    <li>Step 2: Insert Random HEX 8 digits.</li>
                                    <ul>
                                        <li>How to use: <code>[First keyMD5 16 digits] + [Random HEX 8 digits] + [Last keyMD5 16 digits]</code></li>
                                        <li>Ex. key: 6bf1a086551b7609123456787542381de1fd17ec</li>
                                    </ul>
                                </ul>
                            <li>Request Params Append key.</li>
                                <ul>
                                    <li>Ex. appID=XXXX&username=member01&key=6bf1a086551b7609123456787542381de1fd17ec</li>
                                </ul>
                            <li>Compare with key params.</li>
                                <ul>
                                    <li>Step 1: Use MD5 encryption algorithm to encrypt data.</li>
                                    <ul>
                                        <li>How to use: MD5(<code>4b73302f6211afa2b37339768c7e83b64</code>appID=XXXX&username=member01)</li>
                                        <li>Ex. keyMD5: 6bf1a086551b76097542381de1fd17ec</li>
                                    </ul>
                                    <li>Step 2: Remove Random HEX 8 digits by Request Params key.</li>
                                    <ul>
                                        <li>How to use: <code>[First key 16 digits] + [Last key 16 digits]</code></li>
                                        <li>Ex. key: 6bf1a086551b76097542381de1fd17ec</li>
                                    </ul>
                                    <li>Step 3: Compare key with Request Params.</li>
                                    <ul>
                                        <li>How to use: <code>MD5(Secret Key + Request Params) == Request Params key</code></li>
                                        <li>Ex. MD5(<code>4b73302f6211afa2b37339768c7e83b64</code>appID=XXXX&username=member01) == 6bf1a086551b76097542381de1fd17ec</li>
                                    </ul>
                                </ul>
                        </ol>
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
    }
}
</script>

<style scoped>

</style>