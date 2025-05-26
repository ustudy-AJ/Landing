import { Injectable } from "@angular/core";
import { LineChart } from "../../../interfaces/chart.interface";


@Injectable({
  providedIn: "root"
})
export class LineService{


  viewByM(name: string, data: LineChart) {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekDayNames = ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"];

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const now = new Date();

    let categories: string[] = [];
    let groupedData: { name: string, value: number }[][] = [];

    if (name === 'months') {
      categories = monthNames;
      groupedData = data.values.map(() =>
        monthNames.map(month => ({ name: month, value: 0 }))
      );

      data.values.forEach((dataset, i) => {
        dataset.values.forEach(entry => {
          const monthIndex = entry.timestamp.getMonth();
          if(monthIndex <= currentMonth){
            groupedData[i][monthIndex].value += entry.value;
          }
        });
      });

    } else if (name === 'weekdays') {
      categories = weekDayNames;

      for(let i=0;i<data.values.length; i++){
        groupedData.push([]);
        weekDayNames.forEach(v=>{
          groupedData[i].push(
            {
              name: v,
              value: 0
            }
          )
        })
      }

      data.values.forEach((dataset, i) => {
        dataset.values.forEach(entry => {
          const date = entry.timestamp;
          if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
            console.log(date.getDate() < now.getDate());
            console.log(date.getDate());
            console.log(now.getDate());

            if(now.getDate()-now.getDay() <= date.getDate() && date.getDate() <= now.getDate()+5){
              const dayIndex = date.getDay();
              groupedData[i][dayIndex].value += entry.value;
            }
          }
        });
      });
    }

    const seriesValues = groupedData.map(series => series.map(point => point.value));

    return this.getOption(data,categories, seriesValues);
  }

  getWeekDay(){

  }

  getOption(data: LineChart,dateCategoryData: string[], seriesValues: number[][]){
    let series: any[] = [];
    seriesValues.forEach((v,i) => {
        series.push({
          name: data.values[i].name,
          type: 'line',
          stack: 'Total',
          data: seriesValues[i],
          color: this.getColor(i),
        })
    })

    return {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        show: true,
        data: data.values.map(v => v.name)
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateCategoryData
      },
      yAxis: {
        type: 'value'
      },
      series: series
    };
  }

  getColor(index: number): string {
    const colors = ["#3AACFF", "#ED589D", "#FFA726", "#66BB6A", "#AB47BC", "#FF7043"];
    return colors[index];
  }
}
