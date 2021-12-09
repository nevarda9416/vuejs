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
                        sells.push(Number(element.sell.replace(/[^0-9]+/g, "")));
                        if (element.brand1 == 'HN' && element.company == 'SJC')
                            this.$toasted.info('Giá vàng SJC Hà Nội bán ra ngày ' + response.data.golds[0].updated + ' có giá ' + (Number(element.sell.replace(/[^0-9]+/g, "")) >= 6000000 ? '<span style="color:red;margin-left:4px;margin-right:4px">' + Number(element.sell.replace(/[^0-9]+/g, "")).toLocaleString().replace(/,/g, '.') + '</span>' : '<span style="color:green;margin-left:4px;margin-right:4px">' + Number(element.sell.replace(/[^0-9]+/g, "")).toLocaleString().replace(/,/g, '.') + '</span>') + 'VNĐ/chỉ');
                    });
                    this.renderChart({
                        labels: brands,
                        datasets: [{
                            label: 'Giá vàng trong nước bán ra ngày ' + response.data.golds[0].updated + ' (VNĐ/chỉ)',
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
