import React from 'react';
import {Chart, Doughnut} from 'react-chartjs-2';
import './Task.css';
import {Card} from 'react-bootstrap';

// const ProgressData=(props)=>{
//     return props.data.summary.map((summary, index)=>{
//         return(
//             <div key = {index}>
//                 <div className = 'footer'>
//                     <div className = "footerTitle">
//                         {summary.title}
//                         <div className = "footerValue">{summary.value}</div>
//                     </div>
//                 </div>

//             </div>
//         )
//     })
// }

const ProgressData=props=>{
    return props.data.summary.map((summary, index)=>{
        return(
            <div key={index}>
                <div className='footer' >
                    <div className = 'footerTitle'>
                        {summary.title}
                    <div className = 'footerValue'>{summary.value}</div>
                    </div>
                </div>
            </div>

        );
    })
}
class Task extends React.Component{
    //  getPercentage = (props)=>{
    //     let calculatePercentage = [];
    //     this.props.taskData.summary.map(summary=>{
    //         if(summary.title === 'Completed'){
    //             calculatePercentage[0]= Math.round((summary.value / this.props.taskData.total)*100)
    //             calculatePercentage[1]= calculatePercentage[0]-100;
    //         }
    //     })
    //     return calculatePercentage;
    // }

    // getDonought = ()=>{
    // const percent = this.getPercentage();

    // const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    // Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    //     draw: function(){
    //         originalDoughnutDraw.apply(this, arguments);

    //         let chart = this.chart;
    //         let ctx = chart.ctx;
    //         let height = chart.height;
    //         let width = chart.width;

    //         let text = chart.config.data.text,
    //             textX = Math.round((width - ctx.measureText(text).width)/2),
    //             textY = height / 1.65;

    //         ctx.fillText(text, textX, textY)
    //     }
    // });

    // const data = {
    //     labels: ['Completed %', 'Remaining %'],
    //     datasets:[{
    //         data: percent,
    //         backgroundColor: ['#36a2de', '#ffffee'],
    //         borderColor: '#cccccc',
    //         responsive: 'true'
    //     }],

    //     text: percent[0]+'%',
    //     weight: 0.60
    // }
    // return data
    // };


    getPercentage=()=>{
        let calculatePercentage = [];
        this.props.taskData.summary.map(summary=>{
            if(summary.title === 'Completed'){
                calculatePercentage[0] = Math.round((summary.value / this.props.taskData.total)*100);
                calculatePercentage[1] = calculatePercentage[0] - 100;
            }
            
        }); 
        return calculatePercentage;
    }

    getDonought=()=>{
        let percent = this.getPercentage();

        const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
        Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
            draw: function(){
                originalDoughnutDraw.apply(this, arguments);

                let chart = this.chart;
                let ctx = chart.ctx;
                let height = chart.height;
                let width = chart.width;

                let text = chart.config.data.text,
                    textX = Math.round((width - ctx.measureText(text).width)/2),
                    textY = height / 1.65

                    ctx.fillText(text, textX, textY);
            }
        })

        const data={
            labels: ["Completed%", "Remaining%"],
            datasets:[{
                data : percent,
                backgroundColor: ["#36a2de", "#ffffcc"],
                borderColor : "#ccccc",
                responsive: true
            }],

            text : percent[0]+"%",
            weight :  0.60
        }
        return data
    }

        render(){
            const { taskData }=this.props;
            return(
                <div>
                    <Card.Header style ={{background:"#cccc"}}>
                        {taskData.title}
                    </Card.Header>
                        <div>
                            <Doughnut
                                data={this.getDonought()}
                            />
                        </div>
                        <ProgressData data = {taskData}/>
                </div>
            );
        }

    // render() {
    //     const { taskData } = this.props;
    //     return (
    //       <div>       
    //       <Card.Header style={{ backgroundColor: "#cccc" }}>
    //         {taskData.title}
    //       </Card.Header>
    //           <div>
    //             <Doughnut
    //               data={this.getDonought()}
    //             />
    //           </div>
    //           <ProgressData data={taskData} />       
    //       </div>
    //     );
    //   }


}

export default Task;
