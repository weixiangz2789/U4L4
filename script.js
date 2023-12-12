let labelArr = [];
let dataArr = [];
async function getData() {
  const response = await fetch(
    "Water_Consumption_in_the_City_of_New_York_20231212.csv"
  );
  const data = await response.text();
  rows = data.split("\n").slice(1);
  rows.forEach(async (elem) => {
    const row = elem.split(",");
    const year = row[0];
    const temp = row[2];
    labelArr.push(year);
    dataArr.push(temp);
  });
}

getData();

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: labelArr,
    datasets: [
      {
        label: "Water Consumption in the City of New York",
        data: dataArr,
        borderWidth: 1,
        borderColor: "#4169E1",
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
        text: "Per Capita Consumption",
        ticks: {
          callback: function (value, index, ticks) {
            return value;
          },
        },
      },
      x: {
        text: "Year",
      },
    },
  },
});
