<template>
    <div class="col-md-8">
        <div class="card card-default">
            <div class="card-header">Tỷ giá vàng lấy từ API</div>
            <div class="card-body">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            coin: {}
        }
    },
    methods: {
        addCoin() {
            let uri = 'http://127.0.0.1:8000/coins';
            this.axios.post(uri, this.coin).then((response) => {
                window.location.reload();
            });
        }
    }
}
</script>
