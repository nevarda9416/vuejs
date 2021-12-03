<script>
import { Line } from 'vue-chartjs';
export default {
    extends: Line,
    mounted() {
        let uri = 'http://127.0.0.1:8000/coins';
        let years = new Array();
        let labels = new Array();
        let prices = new Array();
        this.axios.get(uri).then((response)=>{
            let data = response.data;
            if (data) {
                data.forEach(element => {
                    years.push(element.year);
                    labels.push(element.name);
                    prices.push(element.price);
                });
                this.renderChart({
                    labels: years,
                    datasets: [{
                        label: 'Bitcoin',
                        backgroundColor: '#FC2525',
                        data: prices
                    }]
                }, {responsive: true, maintainAspectRatio: false});
            } else {
                console.log('No data');
            }
        });
    }
}
</script>
