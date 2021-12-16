<template>
    <div class="col-md-8">
        <div class="card card-default">
            <div class="card-header">Add Gold</div>
            <div class="card-body">
                <form @submit.prevent="addGold">
                    <div class="form-group row">
                        <label for="brand" class="col-sm-4 col-form-label text-md-right">Brand</label>
                        <div class="col-md-6">
                            <input id="brand" type="text" class="form-control" v-model="gold.brand" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="company" class="col-sm-4 col-form-label text-md-right">Company</label>
                        <div class="col-md-6">
                            <input id="company" type="text" class="form-control" v-model="gold.company" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="date" class="col-sm-4 col-form-label text-md-right">Date</label>
                        <div class="col-md-6">
                            <input id="date" type="text" class="form-control" v-model="gold.date" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="month" class="col-sm-4 col-form-label text-md-right">Month</label>
                        <div class="col-md-6">
                            <input id="month" type="text" class="form-control" v-model="gold.month" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="year" class="col-sm-4 col-form-label text-md-right">Year</label>
                        <div class="col-md-6">
                            <input id="year" type="text" class="form-control" v-model="gold.year" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="price" class="col-sm-4 col-form-label text-md-right">Price</label>
                        <div class="col-md-6">
                            <input id="price" type="number" class="form-control" v-model="gold.price" required>
                        </div>
                    </div>
                    <div class="form-group row mb-0">
                        <div class="col-md-8 offset-md-4">
                            <button class="btn btn-primary">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer">Tỷ giá vàng lấy từ API</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                gold: {}
            }
        },
        methods: {
            addGold() {
                let uri = 'http://127.0.0.1:8000/gold';
                this.axios.post(uri, this.gold).then((response) => {
                    window.location.reload();
                });
            }
        }
    }
</script>
