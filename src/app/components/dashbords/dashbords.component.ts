import { Component, inject } from '@angular/core';
import { ChartsService } from '../charts/charts.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { topFamousCourses, uniqueUsersByRegion } from '../../data/chart.data';
import { RacingBarChartComponent } from './racing-bar-chart/racing-bar-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { color } from 'echarts';
import { PieGenderChartComponent } from './pie-gender-chart/pie-gender-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@Component({
  selector: 'app-dashbords',
  imports: [PieChartComponent, RacingBarChartComponent, BarChartComponent, PieGenderChartComponent, LineChartComponent],
  templateUrl: './dashbords.component.html',
  styleUrl: './dashbords.component.scss'
})
export default class DashbordsComponent {
  private _chartsService = inject(ChartsService);

  startCoursesOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    series: [
      {
        type: 'pie',
        radius: ['85%', '70%'],
        silent: true,
        label: { show: false },
        labelLine: { show: false },
        itemStyle: {
          color: '#e0e0e0'
        },
        data: [
          { value: 100 }
        ],
        z: 1
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['85%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        silent: true,
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
        itemStyle: {
          borderRadius: [6, 6, 6, 6]
        },
        data: [
          {
            value: 780,
            name: 'Female',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#8353D5' },
                  { offset: 1, color: '#4129C8' } // прозрачный конец
                ]
              }
            }
          },
          {
            value: 400,
            name: 'Male',
            itemStyle: {
              color: '#ffffff00' // полностью прозрачный второй сектор
            }
          }
        ]
      }

    ]
  };
  purposeOfCertificatesOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    series: [
      {
        type: 'pie',
        radius: ['85%', '70%'],
        silent: true,
        label: { show: false },
        itemStyle: {
          color: '#e0e0e0'
        }
      },
      {
        type: 'pie',
        radius: ['85%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        silent: true,
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: 'bold'
          }
        },
        itemStyle: {
          borderRadius: 6
        },
        data: [
          {
            value: 780,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#8353D5' },
                  { offset: 1, color: '#ED589D' }
                ]
              }
            }
          },
          {
            value: 200,
            itemStyle: {
              color: '#ffffff00'
            }
          }
        ]
      }

    ]
  };
  averageResultOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    series: [
      {
        type: 'pie',
        radius: ['85%', '70%'],
        silent: true,
        label: { show: false },
        labelLine: { show: false },
        itemStyle: {
          color: '#e0e0e0'
        },
        data: [
          { value: 100 }
        ],
        z: 1
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['85%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        silent: true,
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
        itemStyle: {
          borderRadius: [6, 6, 6, 6]
        },
        data: [
          {
            value: 780,
            name: 'Female',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#4C94FF' },
                  { offset: 1, color: '#B158ED' }
                ]
              }
            }
          },
          {
            value: 200,
            name: 'Male',
            itemStyle: {
              color: '#ffffff00'
            }
          }
        ]
      }

    ]
  };

  uniqueUsersByRegionOptions: any = {
    title: {
      text: uniqueUsersByRegion.title,
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
      show: true
    },
    yAxis: {
      type: 'category',
      data: uniqueUsersByRegion.topCourserData.map(v =>v.name),
      inverse: true,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        align: 'left',
        margin: 230,
        fontSize: 12,
        color: "black",
      }
    },
    series: [
      {
        type: 'bar',
        data: uniqueUsersByRegion.topCourserData.map(v =>v.value),
        show: false,
        label: {
          show: false,
        },
        barGap: '-70%',
      },
      {
        type: 'bar',
        data: uniqueUsersByRegion.topCourserData.map(v =>v.value),
        label: {
          show: false,
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#4129C8'
              },
              {
                offset: 1,
                color: '#976AE5'
              }
            ]
          },
          borderRadius: [2.5, 2.5, 2.5, 2.5]
        },
        barWidth: '20',
      }
    ],
    responsive: true
  };

  certificatesByRegionOptions: any = {
    title: {
      text: uniqueUsersByRegion.title,
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
      show: true
    },
    yAxis: {
      type: 'category',
      data: uniqueUsersByRegion.topCourserData.map(v =>v.name),
      inverse: true,
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        align: 'left',
        margin: 230,
        fontSize: 12,
        color: "black",
      }
    },
    series: [
      {
        type: 'bar',
        data: uniqueUsersByRegion.topCourserData.map(v =>v.value),
        show: false,
        label: {
          show: false,
        },
        barGap: '-70%',
      },
      {
        type: 'bar',
        data: uniqueUsersByRegion.topCourserData.map(v =>v.value),
        label: {
          show: false,
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#8353D5'
              },
              {
                offset: 0.5,
                color: '#A058CA'
              },
              {
                offset: 1,
                color: '#F665A8'
              }
            ]
          },
          borderRadius: [2.5, 2.5, 2.5, 2.5]
        },
        barWidth: '20',
      }
    ],
    responsive: true
  };

  barChartOptions = {
    legend: {
      show: true,
      data: ["Муж", "Жен"],
      orient: 'horizontal',
      bottom: 0
    },
    xAxis: {
      type: 'category',
      data: ['0-16', '16-25', '25-35', '35-45', '45-55', '55-60'],
      axisTick: { alignWithLabel: true },
      axisLabel: {
        color: '#000',
        fontSize: 12,
        align: 'center',
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#000',
        fontSize: 12,
        align: 'right',
      }
    },
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
    series: [
      {
        name: "Муж",
        type: 'bar',
        data: [550000, 270000, 700000, 780000, 600000, 240000],
        barWidth: '13',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#8348EA'
              },
              {
                offset: 1,
                color: '#1D96EF'
              }
            ]
          },
          borderRadius: 4,
        },
      },
      {
        name: "Жен",
        type: 'bar',
        data: [480000, 140000, 270000, 730000, 900000, 580000],
        barWidth: '13',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#EE2B79'
              },
              {
                offset: 1,
                color: '#F665A8'
              }
            ]
          },
          borderRadius: 4,
        },
      },
    ],
  };

  statisticGenderOptions = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['75%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        silent: true,
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
        itemStyle: {
          borderRadius: [6, 6, 6, 6]
        },
        padAngle: 5,
        startAngle: 220,
        data: [
          {
            value: 560,
            name: 'Мужчин',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#1D96EF' },
                  { offset: 1, color: '#8353D5' }
                ]
              }
            }
          },
          {
            value: 420,
            name: 'Женщин',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#DD1C69' },
                  { offset: 0.5, color: '#F65380' },
                  { offset: 1, color: '#F665A8' }
                ]
              }
            }
          }
        ]
      }

    ]
  };


  lineOption = {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      show: true,
      data: ['Email', 'Union Ads']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Сертификаты',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310, 234, 290, 330, 310, 500],
        color: "#3AACFF",
      },
      {
        name: 'Пользователи',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 90, 200],
        color: "#ED589D"
      },

    ]
  };
}
