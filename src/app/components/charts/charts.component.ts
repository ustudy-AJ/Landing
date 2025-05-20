import { Component, HostBinding, HostListener } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { DataComponent } from './data-component/data.component';
import { color } from 'echarts/core';
import { ECharts } from 'echarts';
import { dailyData, hourlyData, monthlyData, topCoursesOnPerfomenceData, topFamousCourses } from '../../data/chart.data';

@Component({
  selector: 'app-charts',
  imports: [ChartComponent, DataComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export default class ChartsComponent {
  genderOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: 0,
      top: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '40%'],
        color: ["#FA5EB6","#438EEC"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 548, name: 'Female' },
          { value: 735, name: 'Male' }
        ]
      }
    ]
  };
  barChartOptions = {
  xAxis: {
    type: 'category',
    data: ['0-16', '16-30', '30-50', '50+'],
    axisTick: { alignWithLabel: true },
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'bar',
      data: [2000, 3000, 4800, 2700],
      barWidth: '40%',
      itemStyle: {
        color: '#1f77ff',
        borderRadius: [5, 5, 0, 0],
      },
    },
  ],
  grid: {
    left: '5%',
    right: '5%',
    bottom: '10%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
  },
  };
  activePeriodChartOptions = {
    title: {
      text: 'Active period',
      left: 'left',
      textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#2D3649",
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
        '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
        '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
      ],
      axisLabel: {
        rotate: 0,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 320,
    },
    series: [
      {
        data: [
          10, 40, 80, 130, 70, 0, 220, 290,
          100, 140, 90, 70, 0, 230, 290, 130,
          100, 120, 240, 290, 50, 200, 80, 70
        ],
        type: 'bar',
        barWidth: '50%',
        itemStyle: {
          color: '#1f9bff',
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
  };
  topFamousCoursesOptions: any = {
    title: {
      text: topFamousCourses.title,
      left: 'left',
      top: '5%',
      textStyle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#2D3649"
      }
    },
    grid: {
      left: '-10%',
      bottom: '10%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: topFamousCourses.topCourserData.map(v =>v.name),
      inverse: true,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        align: 'left',
        margin: 230,
        fontSize: 12,
        fontWeight: 600,
        color: "black",
      }
    },
    series: [
      {
      type: 'bar',
      data: topFamousCourses.topCourserData.map(v =>v.value),
      label: {
        show: false,
        position: 'insideLeft',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        formatter: (params: any) => {
          const labels = topFamousCourses.topCourserData.map(v =>v.name);
          return labels[params.dataIndex];
        }
      },
      itemStyle: {
        color: 'transparent'
      },
      barGap: '-100%',
      barWidth: '25'
    },
      {
        type: 'bar',
        data: topFamousCourses.topCourserData.map(v =>v.value),
        label: {
          show: true,
          position: 'insideRight',
          formatter: '{c}',
          color: 'white',
          fontSize: 13,
        },
        itemStyle: {
          color: '#1F3C88',
          borderRadius: [0, 5, 5, 0]
        },
        barWidth: '25'
      }
    ],
    responsive: true
  };
  topCoursesOnPerfomenceOptions: any = {
  title: {
    text: topCoursesOnPerfomenceData.title,
    left: 'left',
    top: '5%',
    textStyle: {
      fontSize: 14
    }
  },
  grid: {
    left: '-10%',
    right: '10%',
    bottom: '10%',
    top: '20%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    show: false
  },
  yAxis: {
    type: 'category',
    data: topCoursesOnPerfomenceData.topCourserData.map(v =>v.name),
    inverse: true,
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      align: 'left',
      margin: 230,
      fontSize: 12,
      fontWeight: 600,
      color: "black",
    }
  },
  series: [
    {
      type: 'bar',
      data: topCoursesOnPerfomenceData.topCourserData.map(v=> v.value),
      label: {
        show: false,
        position: 'top',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        formatter: (params: any) => topCoursesOnPerfomenceData.topCourserData.map(v =>v.value)
      },
      itemStyle: {
        color: 'transparent'
      },
      barGap: '-100%',
      barWidth: '25'
    },
    {
      type: 'bar',
      data: topCoursesOnPerfomenceData.topCourserData.map(v =>v.value),
      label: {
        show: true,
        position: 'insideRight',
        color: 'white',
        fontSize: 13,
        formatter: (params: { value: number }) =>
          Math.floor(params.value / 15000 * 100) + '%',
      },
      itemStyle: {
        color: '#DCBA8D',
        borderRadius: [0, 5, 5, 0],
      },
      barWidth: '25'
    }
  ],
  responsive: true
};



  @HostListener('window:resize')
  onResize() {
    console.log(topFamousCourses.topCourserData.map(v =>v.name));

    const isMobile = window.innerWidth <= 768;
    this.topFamousCoursesOptions = isMobile
      ? this.getMobile(this.topFamousCoursesOptions, "number")
      : this.getDesktop(this.topFamousCoursesOptions, "number");


    this.topCoursesOnPerfomenceOptions = isMobile
      ? this.getMobile(this.topCoursesOnPerfomenceOptions, "procent")
      : this.getDesktop(this.topCoursesOnPerfomenceOptions, "procent");

  }

  ngOnInit(){
    this.updateActivePeiod("hour");
    this.onResize();
  }

  getMobile(topCoursesOptions: any, format: string | any){
    console.log(topCoursesOptions);

    format = format==="procent" ? (params: { value: number; }) => Math.floor(params.value / 15000 * 100) + '%'
        : format == "text" ? "{b}"
        : format == "number" ? "{c}": "";

    return {
    ...structuredClone({
      ...topCoursesOptions,
      series: topCoursesOptions.series.map((s: any) => ({
        ...s,
        label: { ...s.label, formatter: undefined }
      }))}),
    yAxis: {
      type: 'category',
      inverse: true,
      data: topCoursesOptions.yAxis.data,
      show: false,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        show: false,
        align: 'left',
        margin: 230,
        fontSize: 12,
        fontWeight: 600,
        color: "black",
      }
    },
    grid: {
      left: '10%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    series: [
      {
      type: 'bar',
      data: topCoursesOptions.series[0].data,
      label: {
        show: true,
        position: 'insideLeft',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
        formatter: (params: any) => {
          const labels = topCoursesOptions.yAxis.data;
          return labels[params.dataIndex];
        }
      },
      itemStyle: {
        color: 'transparent'
      },
      barWidth: '25'
    },
      {
        type: 'bar',
        data: topCoursesOptions.series[1].data,
        label: {
          show: true,
          position: 'insideRight',
          formatter: format,
          color: 'white',
          fontSize: 13,
        },
        itemStyle: {
          color: topCoursesOptions.series[1].itemStyle.color,
          borderRadius: [0, 5, 5, 0]
        },
        barWidth: '20'
      }
    ]
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
    grid: {
      left: '-10%',
      bottom: '10%',
      top: '20%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: topCoursesOptions.yAxis.data,
      inverse: true,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        align: 'left',
        margin: 230,
        fontSize: 12,
        fontWeight: 600,
        color: "black",
      }
    },
    series: [
      {
        type: 'bar',
        data: topCoursesOptions.series[0].data,
        label: {
          show: false,
          position: 'top',
          fontSize: 12,
          fontWeight: 'bold',
          color: '#000',
          formatter: (params: any) => {
            const labels = topCoursesOptions.yAxis.data;
            return labels[params.dataIndex];
          }
        },
        itemStyle: {
          color: 'transparent'
        },
        barGap: '-100%',
        barWidth: '25'
      },
      {
        type: 'bar',
        data: topCoursesOptions.series[1].data,
        label: {
          show: true,
          position: 'insideRight',
          formatter: format,
          color: 'white',
          fontSize: 13,
        },
        itemStyle: {
          color: topCoursesOptions.series[1].itemStyle.color,
          borderRadius: [0, 5, 5, 0]
        },
        barWidth: '20'
      }
    ],
    responsive: true
  };
  }

  updateActivePeiod(name: string){
    let obj!: {xLabels: string[],yValues: number[]};
    switch(name){
      case "month":
        obj = this.setMonth();
        break;
      case "day":
        obj = this.setDay();
        break;
      case "hour":
        obj = this.setHours();
    }

    this.activePeriodChartOptions = {
      title: {
        text: 'Active period',
        left: 'left',
        textStyle: { fontSize: 24, fontWeight: 'bold', color: "#2D3649" }
      },
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '10%', containLabel: true },
      xAxis: {
        type: 'category', data: obj.xLabels,
        axisLabel: {rotate: 0}
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 200
      },
      series: [
        {
          type: 'bar',
          data: obj.yValues,
          barWidth: '50%',
          itemStyle: { color: '#1f9bff', borderRadius: [5, 5, 0, 0] },
        }
      ]
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
}

