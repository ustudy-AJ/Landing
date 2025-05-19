import { Component, HostListener } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { DataComponent } from './data-component/data.component';
import { color } from 'echarts/core';
import { ECharts } from 'echarts';

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
  topCoursesOptions1: any = {
    title: {
      text: 'Курсы по популярности',
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
      data: [
        'INGLIZ TILI',
        'ELEKTRON TUORAT',
        'WEB DESIGN',
        'SMM - Social Media\nMarketing video-o‘quv kursi',
        'UTIMOIY MEDIA MARKETING\no‘quv qo‘llanma'
      ],
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
        data: [12356, 9568, 7981, 3546, 3546],
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
        barWidth: '20'
      }
    ],
    responsive: true
  };
  topCoursesOptions2: any = {
  title: {
    text: 'Курсы по популярности',
    left: 'left',
    top: '5%',
    textStyle: {
      fontSize: 14
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
    data: [
      'INGLIZ TILI',
      'ELEKTRON TUORAT',
      'WEB DESIGN',
      'SMM - Social Media\nMarketing video-o‘quv kursi',
      'UTIMOIY MEDIA MARKETING\no‘quv qo‘llanma'
    ],
    inverse: true,
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: {
      align: 'left',
      margin: 210,
      fontSize: 12,
      fontWeight: 600,
      color: "black",
      // formatter: (value: string) => {
      //   const maxLength = 20;
      //   if (value.length > maxLength) {
      //     return value.match(/.{1,20}/g)?.join('\n');
      //   }
      //   return value;
      // }
    }
  },
  series: [
    {
      type: 'bar',
      data: [12356, 9568, 7981, 3546, 3546],
      label: {
        show: true,
        position: 'right',
        formatter: '{c}',
        color: 'black',
        fontSize: 13,
      },
      itemStyle: {
        color: '#DCBA8D',
        borderRadius: [0, 5, 5, 0]
      },
      barWidth: '40%'
    }
  ],
  responsive: true
  };
  option = {
    title: {
      text: 'World Population'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['INGLIZ TILI', 'ELEKTRON TUORAT', 'WEB DESIGN', 'SMM - Social Media Marketing\nvideo-o‘quv kursi', 'UTIMOIY MEDIA MARKETING\no‘quv qo‘llanma'],
      show: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
          align: 'center',
          fontSize: 12,
          fontWeight: 600,
          color: "black",
          margin: -150
        }
    },
    series: [
      {
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744],
        label: {
          show: true,
          position: 'bottom',
          formatter: '{b}',
          color: 'black',
          fontSize: 13,
        },
        itemStyle: {
          color: '#1F3C88',
          borderRadius: [4, 4, 4, 4]
        },
        barWidth: '20',
      }
    ]
  };
  @HostListener('window:resize')
  onResize() {
    const isMobile = window.innerWidth <= 768;
    this.topCoursesOptions1 = isMobile
      ? this.getMobile(this.topCoursesOptions1)
      : this.getDesktop(this.topCoursesOptions1);

    this.topCoursesOptions2 = isMobile
      ? this.getMobile(this.topCoursesOptions2)
      : this.getDesktop(this.topCoursesOptions2);
  }

  getMobile(topCoursesOptions: any){
    return {
    ...structuredClone(topCoursesOptions),
    yAxis: {
      type: 'category',
      data: topCoursesOptions.yAxis.data,
      inverse: true,
      show: false,
      axisLabel: {
        margin: -150
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
          position: 'bottom',
          formatter: '{b}',
          color: 'black',
          fontSize: 10,
        },
        itemStyle: {
          color: '#1F3C88',
          borderRadius: [4, 4, 4, 4]
        },
        barWidth: '20',
      }
    ]
    };
  }
  getDesktop(topCoursesOptions: any){
    return {
      ...structuredClone(topCoursesOptions),
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
        barWidth: '20'
      }
    ],
    responsive: true
  };
  }

  ngAfterContentInit(){
    this.updateActivePeiod("hour");
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

interface ChartData {
  timestamp: Date;
  value: number;
}
const monthlyData = [
  { timestamp: new Date(2025, 0, 1), value: 120 },
  { timestamp: new Date(2025, 1, 1), value: 95 },
  { timestamp: new Date(2025, 2, 1), value: 140 },
  { timestamp: new Date(2025, 3, 1), value: 170 },
  { timestamp: new Date(2025, 4, 1), value: 120 },
  { timestamp: new Date(2025, 5, 1), value: 100 },
  { timestamp: new Date(2025, 6, 1), value: 160 },
  { timestamp: new Date(2025, 7, 1), value: 70 },
  { timestamp: new Date(2025, 8, 1), value: 80 },
  { timestamp: new Date(2025, 9, 1), value: 140 },
  { timestamp: new Date(2025, 10, 1), value: 110 },
  { timestamp: new Date(2025, 11, 1), value: 150 },
  { timestamp: new Date(2025, 12, 1), value: 50 }
];
const dailyData = [
  { timestamp: new Date(2025, 4, 1), value: 30 },
  { timestamp: new Date(2025, 4, 2), value: 60 },
  { timestamp: new Date(2025, 4, 3), value: 50 },
  { timestamp: new Date(2025, 4, 3), value: 20 },
  { timestamp: new Date(2025, 4, 3), value: 100 },
  { timestamp: new Date(2025, 4, 3), value: 60 },
  { timestamp: new Date(2025, 4, 3), value: 80 }
];

const hourlyData = [
  { timestamp: new Date(2025, 4, 18, 1), value: 10 },
  { timestamp: new Date(2025, 4, 18, 2), value: 20 },
  { timestamp: new Date(2025, 4, 18, 3), value: 30 },
  { timestamp: new Date(2025, 4, 18, 4), value: 40 },
  { timestamp: new Date(2025, 4, 18, 5), value: 50 },
  { timestamp: new Date(2025, 4, 18, 6), value: 60 },
  { timestamp: new Date(2025, 4, 18, 7), value: 70 },
  { timestamp: new Date(2025, 4, 18, 8), value: 80 },
  { timestamp: new Date(2025, 4, 18, 9), value: 90 },
  { timestamp: new Date(2025, 4, 18, 10), value: 100 },
  { timestamp: new Date(2025, 4, 18, 11), value: 110 },
  { timestamp: new Date(2025, 4, 18, 12), value: 120 },
  { timestamp: new Date(2025, 4, 18, 13), value: 130 },
  { timestamp: new Date(2025, 4, 18, 14), value: 140 },
  { timestamp: new Date(2025, 4, 18, 15), value: 150 },
  { timestamp: new Date(2025, 4, 18, 16), value: 140 },
  { timestamp: new Date(2025, 4, 18, 17), value: 130 },
  { timestamp: new Date(2025, 4, 18, 18), value: 120 },
  { timestamp: new Date(2025, 4, 18, 19), value: 110 },
  { timestamp: new Date(2025, 4, 18, 20), value: 100 },
  { timestamp: new Date(2025, 4, 18, 21), value: 90 },
  { timestamp: new Date(2025, 4, 18, 22), value: 70 },
  { timestamp: new Date(2025, 4, 18, 23), value: 80 },
  { timestamp: new Date(2025, 4, 18, 24), value: 60 }
];

