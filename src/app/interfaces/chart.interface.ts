interface ChartData {
  timestamp: Date;
  value: number;
}

interface Genders{
  type: string,
  value: string
}
interface Age{
  type: string,
  value: string
}
export interface TopCourses{
  title: string,
  topCourserData: TopCoursesData[]
}
export interface TopCoursesData{
  name: string,
  value: number,
}


export interface RacingBarChart{
  title: string,
  values: RacingBarChartValue[]
}
export interface RacingBarChartValue{
  name: string,
  value: number,
}


export interface PieChart{
  title: string,
  totalValue: number,
  currentValue: number,
}
export interface PieGenderChart{
  title: string,
  menValue: number,
  womenValue: number,
}

export interface BarChart{
  title: string,
  statisticNames: string[],
  husbandsValues: number[],
  wifesValues: number[],
}
export interface LineChart{
  title: string,
  values: {name: string, values: { timestamp: Date, value: number}[]}[]
}
