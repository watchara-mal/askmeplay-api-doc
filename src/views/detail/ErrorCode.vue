<template>
    <div>
        <div v-if="pageName!=''">
            <h1>{{ pageName }}</h1>
            <br>
        </div>

        <b-table :fields="fieldsErr" :items="itemsErr" bordered></b-table>
        
    </div>
</template>

<script>
export default {

    data(){
        return {
            pageName: "Error Code",

            fieldsErr: [
                { key: 'key', label: 'Key' },
                { key: 'desTH', label: 'Description (TH)' },
                { key: 'desEN', label: 'Description (EN)' }
            ],
            itemsErr: [
                { key: '0000', desTH: 'สำเร็จ', desEN: 'success' },

                // internal
                { key: '9999', desTH: 'กรุณาส่ง request id', desEN: 'Request id is required.' },
                { key: '9900', desTH: 'ขออภัย ระบบไม่สามารถดำเนินการได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง', desEN: 'System cannot process this request at the moment. Please try again later.' },
                { key: '9901', desTH: 'ขออภัย ระบบไม่สามารถดำเนินการได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง (Bad Requesr)', desEN: 'System cannot process this request at the moment. Please try again later. (Bad Request)' },
                { key: '9902', desTH: 'ขออภัย ระบบไม่สามารถดำเนินการได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง (Internal Server Error)', desEN: 'System cannot process this request at the moment. Please try again later. (Internal Server Error)' },
                { key: '9903', desTH: 'ขออภัย ระบบไม่สามารถดำเนินการได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง (DB Session Not Found)', desEN: 'System cannot process this request at the moment. Please try again later. (DB Session Not Found)' },
                { key: '9904', desTH: 'ไม่สามารถอ่านข้อมูลที่ร้องขอเข้ามาได้', desEN: 'Decoding incoming request process is failed' },
                { key: '9905', desTH: 'รูปแบบของข้อมูลไม่ถูกต้อง', desEN: 'Validation failed' },

                // auth
                { key: '8000', desTH: 'ผู้ใช้ไม่ถูกต้อง ผู้ใช้อยู่ในสถานะ', desEN: 'Invalid Account' },
                { key: '8001', desTH: 'ผู้ใช้อยู่ในสถานะ Inactive กรุณาติดต่อผู้ดูแล', desEN: 'Account is locked, Please Contact Admin.' },
                { key: '8002', desTH: 'บัญชีหลักอยู่ในสถานะ Inactive กรุณาติดต่อผู้ดูแล', desEN: 'Main account is locked, Please Contact Admin.' },
                { key: '8003', desTH: 'บัญชีแม่อยู่ในสถานะ Inactive กรุณาติดต่อผู้ดูแล', desEN: 'Parent account is locked, Please Contact Admin.' },
                { key: '8004', desTH: 'กรุณาล๊อกอินเข้าสู่ระบบ', desEN: 'Please login to verify user.' },
                { key: '8005', desTH: 'ขออภัย คุณไม่มีสิทธื์ใช้งานฟังก์ชั่นนี้', desEN: 'Sorry. You do not have permission to use this function.' },
                { key: '8006', desTH: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง', desEN: 'Incorrect Username or Password, Please try Again.' },
                { key: '8007', desTH: 'ผู้ใช้อยู่ในสถานะ Suspend กรุณาติดต่อผู้ดูแล', desEN: 'Account is Suspend, Please Contact Admin.' },
                { key: '8008', desTH: 'บัญชีแม่อยู่ในสถานะ Suspend กรุณาติดต่อผู้ดูแล', desEN: 'Parent account is Suspend, Please Contact Admin.' },
                { key: '8009', desTH: 'บัญชีหลักอยู่ในสถานะ Suspend กรุณาติดต่อผู้ดูแล', desEN: 'Account is Suspend, Please Contact Admin.' },
                { key: '8010', desTH: 'กรุณาใส่รหัสผ่าน 8 ตัวขึ้นไปที่มีทั้งตัวอักษร และตัวเลขผสมกัน', desEN: 'Please enter at least 8 characters that contains letters and number' },
                { key: '8011', desTH: 'ไม่สามารถเข้าสู่ระบบได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง', desEN: 'Unable to login at this time. Please try again later.' },
                { key: '8012', desTH: 'ไม่สามารถเข้าสู่ระบบได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง', desEN: 'Unable to login at this time. Please try again later.' },
                { key: '8013', desTH: 'ไม่สามารถเข้าสู่ระบบได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง', desEN: 'Unable to login at this time. Please try again later.' },
                { key: '8014', desTH: 'ไม่สามารถเข้าสู่ระบบได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง', desEN: 'Unable to login at this time. Please try again later.' },
                { key: '8015', desTH: 'ไม่สามารถเข้าสู่ระบบได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง', desEN: 'Unable to login at this time. Please try again later.' },
                { key: '8017', desTH: 'การตรวจสอบสิทธิ์ล้มเหลว กรุณาลองใหม่อีกครั้ง', desEN: 'Authorization verification was unsuccessful.' },
                { key: '8018', desTH: 'การเข้าถึงถูกจำกัด', desEN: 'Access restricted' },

                // validation
                { key: '7001', desTH: 'รูปแบบของข้อมูลไม่ถูกต้อง', desEN: 'Validation failed' },
                { key: '7002', desTH: 'การเข้ารหัสไม่ถูกต้อง', desEN: 'Hash key is invalid.' },
                { key: '7003', desTH: 'ชื่อผู้ใช้นี้ถูกใช้ไปแล้ว', desEN: 'This username has already been taken.' },
                { key: '7004', desTH: 'เกิดข้อผิดพลาดเนื่องจาก transactionRef ซ้ำ', desEN: 'transactionRef is duplicate.' },
                { key: '7005', desTH: 'เครดิตไม่เพียงพอ', desEN: 'Insufficient agent credit.' },
                { key: '7005', desTH: 'ยอดเงินของผู้เล่นไม่เพียงพอ', desEN: 'Insufficient player credit.' },
                { key: '7006', desTH: 'การถอดรหัสล้มเหลว', desEN: 'Decryption failure.' },
                { key: '7007', desTH: 'รูปแบบของข้อมูลที่ร้องขอไม่ถูกต้อง', desEN: 'Invalid request data.' },
                { key: '7008', desTH: 'รูปแบบของข้อมูลที่ตอบกลับมาไม่ถูกต้อง', desEN: 'Invalid response data.' },
                { key: '7009', desTH: 'http status ไม่เท่ากับ 200', desEN: 'http status is not ok.' },
                { key: '7010', desTH: 'agent ดังกล่าวถูกปิดการใช้งาน', desEN: 'Agent user is not active.' },
                { key: '7011', desTH: 'member ดังกล่าวถูกปิดการใช้งาน', desEN: 'Member user is not active.' },
                { key: '7012', desTH: 'การทำ transaction นี้ เสร็จสมบูรณ์ไปแล้ว', desEN: 'The transaction is already completed.' },
                { key: '7013', desTH: 'API นี้ถึงขีดจำกันการเข้าถึง', desEN: 'This API reaches the limitation.' },
                { key: '7014', desTH: 'ไม่สามารถใช้สกุลเงินดังกล่าวได้ในขณะนี้', desEN: 'Sorry, This currency is not available.' },

                // not_found
                { key: '6001', desTH: 'ไม่พบเอเย่นต์ดังกล่าว', desEN: 'Agent user is not found.' },
                { key: '6002', desTH: 'ไม่พบผู้เล่นดังกล่าว', desEN: 'Member user is not found.' },
                { key: '6003', desTH: 'ไม่พบเกมส์ดังกล่าว', desEN: 'Invalid game code.' },
                { key: '6004', desTH: 'ไม่พบรายงานการทำธุรกรรมดังกล่าว', desEN: 'There was no record of the transaction.' },
                { key: '6005', desTH: 'ไม่พบสกุลเงินดังกล่าว', desEN: 'Invalid currency.' },

                // partner
                { key: '3001', desTH: 'ไม่พบ Game provider นี้', desEN: 'Game provider not found.' },
                { key: '3002', desTH: 'ไม่สามารถสร้าง player', desEN: 'Cannot create player.' },
                { key: '3003', desTH: 'ไม่สามารถสร้าง player', desEN: 'Partner not found.' },
                { key: '3004', desTH: 'ไม่พบผู้เล่น', desEN: 'Player not found.' },
                { key: '3005', desTH: 'ไม่พบ Provider', desEN: 'Provider not found.' },

                // game
                { key: '2000', desTH: 'ขออภัยไม่สามารถเข้าเกมได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง', desEN: 'Unable to join the game at this time. Please try again later.' },
                { key: '2001', desTH: 'ขออภัยไม่พบไอดีเกมในระบบ กรุณาลองใหม่อีกครั้ง', desEN: 'Game not found, in Operator.' },

                // blacklist
                { key: '2020', desTH: 'ขออภัยไม่พบการสั่งปิดรายการดังกล่าว กรุณาลองใหม่อีกครั้ง', desEN: 'The item is not found in blacklist. Please try again later.' },
                { key: '2021', desTH: 'พบการสั่งปิดรายการดังกล่าวแล้ว', desEN: 'The item already create in Blacklist.' },
                { key: '2022', desTH: 'ไม่พบคำสั่งดังกล่าว กรุณาลองใหม่อีกครั้ง', desEN: 'The action is unknown. Please try again later.' },
                { key: '2023', desTH: 'การสั่งปิดไม่สมบูรณ์ กรุณาลองใหม่อีกครั้ง', desEN: 'The closing order is not complete.. Please try again later.' }
            ]

        }
    },

    created() {
        
    },

    methods: {
        
    }
}
</script>

<style scoped>

</style>