<script>
    import {Line} from 'vue-chartjs';

    export default {
        extends: Line,
        mounted() {
            let uri = 'http://127.0.0.1:8000/golds';
            let brands = new Array();
            let sells = new Array();
            this.axios.get(uri).then((response) => {
                let data = response.data;
                if (data) {
                    data.forEach(element => {
                        brands.push(element.brand + ' (' + element.company + ')');
                        sells.push(Number(element.price));
                    });
                    this.renderChart({
                        labels: brands,
                        datasets: [{
                            label: 'Giá vàng trong nước bán ra (VNĐ/lượng)',
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
