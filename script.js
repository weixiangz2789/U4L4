let labelArr = [];
let dataArr = [];
async function getData() {
  const response = await fetch("WeiXiang_dataset/data.csv");
  const data = await response.text();
  rows = data.split("\n").slice(1);
  rows.forEach(async (elem) => {
    const row = elem.split(",");
    const year = row[0];
    const temp = parseFloat(row[1]) + 14;
    labelArr.push(year);
    dataArr.push(temp);
  });
}

getData();

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: labelArr,
    datasets: [
      {
        label: "Global Average Temperature",
        data: dataArr,
        borderWidth: 1,
        borderColor: "#00FF00",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 40,
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value, index, ticks) {
            return value + "°";
          },
        },
      },
    },
  },
});
