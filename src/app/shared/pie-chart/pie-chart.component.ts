import { Component, OnInit, ViewEncapsulation   } from '@angular/core';
declare let d3: any;

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PieChartComponent implements OnInit {

  options;
  data;
  ngOnInit() {
    this.options = {
            chart: {
                type: 'pieChart',
                height: 500,              
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                tooltip: {
                         contentGenerator: function (e) {
                
                          console.log('elementClick in callback', e);
                      
                        }
                  }
            }
        };


  

    this.data =  [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];

        
  }


public open(event, item) {
    alert('Open ' + item);
  }

}
