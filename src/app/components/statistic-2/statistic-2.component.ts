import { Component } from '@angular/core';

@Component({
  selector: 'app-statistic-2',
  imports: [],
  templateUrl: './statistic-2.component.html',
  styleUrl: './statistic-2.component.scss'
})
export default class Statistic2Component {
  hasOnListStatistic = {
    title: "Состоят в списке “Ижтимоий Химоя” , “Темир дафтари” и т.д",
    allUsers: 1000,
    usersOnList: 650,
    text: "Процент от общего числа пользователей"
  }
  neighborhoodStatistic = {
    title: "Состоят в списке “Ижтимоий Химоя” , “Темир дафтари” и т.д",
    value: "483",
    text: "Активных махаллей"
  }

  calculatePercent(all: number, current: number){
    return Math.floor(current / all * 100) + '%';
  }


}
