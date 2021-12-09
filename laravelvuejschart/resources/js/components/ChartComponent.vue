<script>
    import {Bar} from 'vue-chartjs';

    export default {
        extends: Bar,
        mounted() {
            let uri = 'http://127.0.0.1:8000/coins';
            let brands = new Array();
            let sells = new Array();
            this.axios.get(uri).then((response) => {
                let data = response.data.golds[0].value;
                if (data) {
                    data.forEach(element => {
                        brands.push(element.brand + ' (' + element.company + ')');
                        sells.push(Number(element.sell.replace(/[^0-9.-]+/g, "")));
                        if (element.brand1 == 'HN' && element.company == 'SJC')
                            this.$toasted.info('Giá vàng SJC Hà Nội bán ra ngày ' + response.data.golds[0].updated + ' có giá ' + Number(element.sell.replace(/[^0-9-]+/g, "")) + '/chỉ');
                    });
                    this.renderChart({
                        labels: brands,
                        datasets: [{
                            label: 'Giá vàng trong nước bán ra ngày ' + response.data.golds[0].updated,
                            backgroundColor: 'yellow',
                            data: sells
                        }]
                    }, {responsive: true, maintainAspectRatio: false});
                } else {
                    console.log('No data');
                }
            });
        }
    }
</script>
