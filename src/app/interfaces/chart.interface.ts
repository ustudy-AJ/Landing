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
