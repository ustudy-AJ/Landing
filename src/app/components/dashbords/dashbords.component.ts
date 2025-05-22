import { Component, inject } from '@angular/core';
import { ChartsService } from '../charts/charts.service';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { color } from 'echarts';
import { topFamousCourses, uniqueUsersByRegion } from '../../data/chart.data';
import { RacingBarChartComponent } from './racing-bar-chart/racing-bar-chart.component';

@Component({
  selector: 'app-dashbords',
  imports: [PieChartComponent, RacingBarChartComponent],
  templateUrl: './dashbords.component.html',
  styleUrl: './dashbords.component.scss'
})
export default class DashbordsComponent {
  private _chartsService = inject(ChartsService);

  genderOptions = {
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
                  { offset: 1, color: '#ED589D' }
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

  // uniqueUsersByRegionOptions: any = {
  //   title: this._chartsService.createTitle(uniqueUsersByRegion.title, 14),
  //   grid: this._chartsService.createGrid("-10%"),
  //   xAxis: { type: 'value', show: false},
  //   yAxis: this._chartsService.createYAxis("category", uniqueUsersByRegion.topCourserData.map(v =>v.name), false, true, true),
  //   series: [
  //     this._chartsService.createSeriesItem('bar',uniqueUsersByRegion.topCourserData.map(v =>v.value), false, "insideLeft", "#000", "{b}", 0, "transparent"),
  //     this._chartsService.createSeriesItem('bar',uniqueUsersByRegion.topCourserData.map(v =>v.value), true, "insideRight", "#fff", "{c}", 20, "#1F3C88"),
  //   ],
  //   responsive: true
  // };

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
}
