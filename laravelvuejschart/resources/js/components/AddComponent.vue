<template>
    <div class="col-md-8">
        <div class="card card-default">
            <div class="card-header">Add Coin</div>
            <div class="card-body">
                <form @submit.prevent="addCoin">
                    <div class="form-group row">
                        <label for="name" class="col-sm-4 col-form-label text-md-right">Name</label>
                        <div class="col-md-6">
                            <input type="text" id="name" class="form-control" v-model="coin.name" required autofocus/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="year" class="col-md-4 col-form-label text-md-right">Year</label>
                        <div class="col-md-6">
                            <input type="text" id="year" class="form-control" v-model="coin.year" required/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="price" class="col-md-4 col-form-label text-md-right">Price</label>
                        <div class="col-md-6">
                            <input type="text" id="price" class="form-control" v-model="coin.price" required/>
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
