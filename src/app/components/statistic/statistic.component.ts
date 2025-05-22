import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


interface Card {
  title: string;
  subtitle: string;
  link: string;
  icon: string;
  buttonText: string;
}

@Component({
  selector: 'app-statistic',
  imports: [NgFor],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export default class StatisticComponent {
  userStatistic = {
    title: "Всего пользователей",
    value: 2420,
    proccent: "+ 40%",
    text: "чем прошлый месяц"
  }
  coursesStatistic = {
    title: "Всего курсов",
    value: 18,
    proccent: "+ 40%",
    text: "чем прошлый месяц"
  }
  averageTimeStatistic = {
    title: "Среднее время прохождения",
    date: new Date(1),
    text: "От старта первого курса до получения сертификата"
  }
  participatingSchoolsStatistic = {
    title: "Учащийхся школ",
    value: "65%",
    text: "Процент от общего числа пользователей"
  }

  ngOnInit(){

    let date = new Date();

    date.setDate(date.getDate()+2);
    date.setHours(date.getHours()+18);
    date.setMinutes(date.getMinutes()+32);

    this.averageTimeStatistic.date = date;

    // let milliSeconds = date.getTime() - new Date().getTime();
    // let day = Math.floor(milliSeconds/1000/60/60/24);
    // let hours = Math.floor(milliSeconds/1000/60/60%24);
    // let minutes = Math.floor(milliSeconds/1000/60%60);

    // console.log(day);
    // console.log(hours);
    // console.log(minutes);


    // console.log(new Date(10));

  }

  getDay(date: Date){
    let milliSeconds = date.getTime() - new Date().getTime();
    let day = Math.floor(milliSeconds/1000/60/60/24);

    return day;
  }
  getHours(date: Date){
    let milliSeconds = date.getTime() - new Date().getTime();
    let hours = Math.floor(milliSeconds/1000/60/60%24);
    return hours;
  }
  getMinutes(date: Date){
    let milliSeconds = date.getTime() - new Date().getTime();
    let minutes = Math.floor(milliSeconds/1000/60%60);
    return minutes;
  }
}
