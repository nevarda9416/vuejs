<script>
export default {
    data() {
        return {
            coin: {}
        }
    },
    methods: {
        addCoin() {
            let uri = 'http://localhost:8000/coins';
            this.axios.post(uri, this.coin).then((response) => {
                window.location.reload();
            });
        }
    }
}
</script>