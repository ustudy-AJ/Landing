import { Injectable } from "@angular/core";
import { monthlyData, dailyData, hourlyData } from "../../data/chart.data";
import { SeriesOption } from "echarts";


@Injectable({
  providedIn: "root"
})
export class ChartsService{

  getMobile(topCoursesOptions: any, format: string | any){
    format = format==="procent" ? (params: { value: number; }) => Math.floor(params.value / 15000 * 100) + '%'
        : format == "text" ? "{b}"
        : format == "number" ? "{c}": "";

    let formatter = (params: any) => {
          const labels = topCoursesOptions.yAxis.data;
          return labels[params.dataIndex];
        }
    return {
    ...structuredClone({
      ...topCoursesOptions,
      series: topCoursesOptions.series.map((s: any) => ({
        ...s,
        label: { ...s.label, formatter: undefined }
      }))}),

    yAxis: this.createYAxis("category",topCoursesOptions.yAxis.data, true, false, false),
    grid: this.createGrid("10%"),
    series: [
      this.createSeriesItem('bar',topCoursesOptions.series[0].data, true, "insideLeft", "#000", formatter, 25, "transparent"),
      this.createSeriesItem("bar",topCoursesOptions.series[1].data,true, "insideRight", "#fff",format,20,topCoursesOptions.series[1].itemStyle.color)
    ],
    responsive: true
    };
  }

  getDesktop(topCoursesOptions: any, format: any){
    format = format==="procent" ? (params: { value: number; }) => Math.floor(params.value / 15000 * 100) + '%'
        : format == "text" ? "{b}"
        : format == "number" ? "{c}": "";
    return {
      ...structuredClone({
        ...topCoursesOptions,
        series: topCoursesOptions.series.map((s: any) => ({
          ...s,
          label: { ...s.label, formatter: undefined }
        }))
    }),
    grid: this.createGrid("-10%"),
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: this.createYAxis("category", topCoursesOptions.yAxis.data, false, true, true),
    series: [
      this.createSeriesItem('bar',topCoursesOptions.series[0].data, false, "insideLeft", "#000", "{b}", 0, "transparent"),
      this.createSeriesItem('bar',topCoursesOptions.series[1].data, true, "insideRight", "#fff", format, 20, topCoursesOptions.series[1].itemStyle.color),
    ],
    responsive: true
  };
  }

  setMonth(){
    const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const yValues = monthlyData.map(item => item.value);
    return {xLabels, yValues};
  }
  setDay(){
    const xLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const yValues = dailyData.map(item => item.value);
    return {xLabels,yValues};
  }
  setHours(){
    const xLabels = hourlyData.map(item =>
      item.timestamp.getHours().toString().padStart(2, '0') + ':00'
    );
    const yValues = hourlyData.map(item => item.value);
    return {xLabels,yValues};
  }



  createTitle(title: string, fontSize: number){
    return {
      text: title,
      left: 'left',
      textStyle: {
        fontSize: fontSize,
        fontWeight: "bold",
        color: "#2D3649"
      }
    }
  }
  createLabel(labelIsShow: boolean, position: string, color: string, formatter: string | any){
    return {
      show: labelIsShow,
      position: position,
      formatter: formatter,
      color: color,
      fontSize: 13,
    }
  }
  createYAxis(type: string, data: string[] | number[], isNeedLine: boolean, isAxisLabel: boolean, isShow: boolean){
    return {
      type: type,
      data: data,
      inverse: true,
      show: isShow,
      axisTick: { show: isNeedLine },
      axisLine: { show: isNeedLine },
      axisLabel: isAxisLabel ? {
        show: isShow,
        align: 'left',
        margin: 230,
        fontSize: 12,
        fontWeight: 600,
        color: "black",
      }: {
        show: isShow,
      }
    }
  }

  createGrid(left: string){
    return {
      left: left,
      right: '4%',
      bottom: '10%',
      containLabel: true,
    }
  }
  createSeriesItem(type: string, data: string[] | number[],labelIsShow: boolean,
      labelPosition: string, labelColor: string, formatter: string | any,
      barWidth: number | string, itemStyleColor: string){

    return {
      type: type,
      data: data,
      label: labelIsShow? this.createLabel(labelIsShow, labelPosition, labelColor, formatter): {show: false},
      itemStyle: {
        color: itemStyleColor,
        borderRadius: [5, 5, 5, 5]
      },
      barWidth: barWidth
    }
  }
}
