<template>
  <div>
    <p class="subtitle">Insights content will be here. Stay tuned. 📈</p>
    <div class="columns is-multiline">
      <div class="column">
        <apexchart
          width="500"
          type="area"
          :options="cpuGraphData.options"
          :series="cpuGraphData.series"
        />
      </div>
      <div class="column">
        <apexchart
          width="500"
          type="area"
          :options="memoryGraphData.options"
          :series="memoryGraphData.series"
        />
      </div>
    </div>
    <button class="button is-primary" @click="addDataToGraph()">
      Tick manually
    </button>
  </div>
</template>

<script>
export default {
  name: 'Insights',
  data() {
    return {
      cpuGraphData: {
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          labels: [],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'CPU',
            align: 'left',
          },
          subtitle: {
            text: 'Updates every minute',
            align: 'left',
          },
        },
        series: [
          {
            name: 'CPU (%)',
            data: [],
          },
        ],
      },
      memoryGraphData: {
        options: {
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          colors: ['#e35f5d'],
          labels: [],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: 'Memory',
            align: 'left',
          },
          subtitle: {
            text: 'Updates every minute',
            align: 'left',
          },
        },
        series: [
          {
            name: 'Memory (mb)',
            data: [],
          },
        ],
      },
    };
  },
  methods: {
    addDataToGraph() {
      const now = new Date();
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const nowLabel = `${hours}:${minutes}:${seconds}`;

      this.addCPUPoint(nowLabel);
      this.addMemoryPoint(nowLabel);
    },
    addCPUPoint(label) {
      const newSeriesData = this.cpuGraphData.series[0].data;
      newSeriesData.push(Math.floor(Math.random() * 100) + 1);
      this.cpuGraphData.series = [
        {
          name: 'CPU (%)',
          data: newSeriesData.slice(-10),
        },
      ];

      let { labels } = this.cpuGraphData.options;
      labels.push(label);
      labels = labels.slice(-10);

      this.cpuGraphData.options = {
        ...this.cpuGraphData.options,
        labels,
      };
    },
    addMemoryPoint(label) {
      const newSeriesData = this.memoryGraphData.series[0].data;
      newSeriesData.push(Math.floor(Math.random() * 100) + 1);
      this.memoryGraphData.series = [
        {
          name: 'Memory (mb)',
          data: newSeriesData.slice(-10),
        },
      ];

      let { labels } = this.memoryGraphData.options;
      labels.push(label);
      labels = labels.slice(-10);

      this.memoryGraphData.options = {
        ...this.memoryGraphData.options,
        labels,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.setInterval(() => {
        this.addDataToGraph();
      }, 3000);
    });
  },
};
</script>
