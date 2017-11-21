import { Component, OnInit, ViewEncapsulation , Input, Output, EventEmitter  } from '@angular/core';
declare let d3: any;

@Component({
   selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class DonutChartComponent implements OnInit {

    @Input()
    count: number = 0;
    
    @Output()
    change: EventEmitter<number> = new EventEmitter<number>();
    
    increment() {
      this.count++;
      this.change.emit(this.count);
    }
    
    decrement() {
      this.count--;
      this.change.emit(this.count);
    }

  options;
  data;
  ngOnInit() {
    this.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: false,
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
                callback: function(){
                    var svg = d3.select("#DonutChart svg");
                    var donut = svg.selectAll("g.nv-pie").filter(
                        function (d, i) {
                            return i == 1;
                        });
                        
                    donut.insert("text", "g")
                        .text("1500")
                        .attr("class", "css-label-class")
                        .attr("text-anchor", "middle");
                },
                pie: {
                dispatch: {
                    //chartClick: function(e) {alert("click");},
                   // elementClick: function(e) {alert("click");},
                   // elementDblClick: function(e) {alert("click");},
                    elementMouseover: function(e) {
                      //alert("hover");
                      console.log(e.data.value);
                       // Inserting text
                       
                  var svg = d3.select("#DonutChart svg");
                  var donut = svg.selectAll("g.nv-pie").filter(
                      function (d, i) {
                          return i == 1;
                      });
                      
                  donut.insert("text", "g")
                      .text("1500")
                      .attr("class", "css-label-class")
                      .attr("text-anchor", "middle");
                      
                    },
                    elementMouseout: function(e) {}            
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



onmouseout(element){
     // Add a click event
    d3.selectAll('.nv-slice').on('click', function(){
      d3.selectAll('.nvtooltip').each(function(){
          this.style.setProperty('display', 'block', 'important');
      });
    });
    // Clear tooltip on mouseout
    d3.selectAll('.nv-slice').each(function(){
      this.addEventListener('mouseout', function(){
          d3.selectAll('.nvtooltip').each(function(){
              this.style.setProperty('display', 'none', 'important');
              alert("asd");
          });
      }, false);
    });
    // we use foreach and event listener because the on('mouseout')
    // was overidding some other function
}


}
