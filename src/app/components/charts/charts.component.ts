import { Component } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { DataComponent } from './data-component/data.component';
import { color } from 'echarts/core';

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
  topCoursesOptions1 = {
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
      left: '30%',
      right: '10%',
      bottom: '10%',
      top: '20%'
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
        'SMM - Social Media Marketing\nvideo-o‘quv kursi',
        'UTIMOIY MEDIA MARKETING\no‘quv qo‘llanma'
      ],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        align: 'left',
        margin: 230,
        fontSize: 14,
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
    ]
  };
  topCoursesOptions2 = {
    title: {
      text: 'Курсы по популярности',
      left: 'left',
      top: '5%',
      textStyle: {
        fontSize: 14
      }
    },
    grid: {
      left: '30%',
      right: '10%',
      bottom: '10%',
      top: '20%'
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
        'SMM - Social Media Marketing\nvideo-o‘quv kursi',
        'UTIMOIY MEDIA MARKETING\no‘quv qo‘llanma'
      ],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        align: 'left',
        margin: 230,
        fontSize: 14,
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
          color: '#DCBA8D',
          borderRadius: [0, 5, 5, 0]
        },
        barWidth: '20'
      }
    ]
  };

}
