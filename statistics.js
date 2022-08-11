'use strict';
const formEL= document.getElementById("form");
const perentEL = document.getElementById("t");

let foodID=0;
let Food=[];


function Info(name,type,price){
    this.FoodID= foodID++;
    this.FullName = name;
    this.Type = type;
    this.Price = price;
    Food.push(this);


}

Info.prototype.render=function(){

  let trEL= document.createElement("tr");
  trEL.innerHTML=`
  <td>${this.id}</td>
  <td>${this.name}</td>
  <td>${this.type}</td>
  <td>${this.price}</td>`
  ;

  perentEL.appendChild(trEL);



};

function savedata(){
    let SavingData=JSON.stringify(Food);
    localStorage.setItem("foods",SavingData);


  }


  function gettingdata(){
    let Data=localStorage.getItem("foods");
    console.log(Data);
    console.log(typeof Data);

    let parsedData=JSON.parse(Data);
      console.log(parsedData);
      console.log(typeof parsedData);
      for (let i=0;i<parsedData.length;i++){
        new Info(parsedData[i].FullName,parsedData[i].Type,parsedData[i].Price);
      }

    for (let i=0;i<Food.length;i++){
      Food[i].render();


    }
    }
    gettingdata();

    const types=[];
    const prices=[];
    for(let i=0;i<Food.length;i++){
      types.push(Food[i].type);
      prices.push(Food[i].price);
    }


        const labels = [
          'fat',
          'protin',
          'starchy food',
          'fruits and vegetables',
          ,
        ];

        const data = {
          labels: types,
          datasets: [{
            label: 'First data',
            backgroundColor: 'ligth green',
            borderColor: 'white',
            data: prices,
          }]
        };

        const config = {
          type: 'pie',
          data: data,
          options: {}
        };


   