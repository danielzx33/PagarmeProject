//

const itens = [
  { id: 1234, name: "Zanpakutou", UnitValue: 20000},
  { id: 2345, name: "Chapeu de Palha", UnitValue: 5000}
]



$(document).ready(() =>{
  
  const productCalc = () =>{

    let quantity:any = $("#itemQuantity").val();
    let item = itens.find( e => e.id == $("#itemName").val().valueOf() );
    if((quantity.valueOf() != 0 && quantity.valueOf() > 0 )){
      $("#itemCalc").val( ((item.UnitValue * quantity)/ 100).toFixed(2))
      return;
    }
    $("#itemCalc").val(0);
    
    

  }

  $("#itemName").change( () =>{
      productCalc();
  })

  $("#itemQuantity").change( () =>{
    productCalc();
  })

  $("#paymentType").change( ()=>{
    if($("#paymentType").val() === "0"){

      let b = $("#card-row .form-control")
      console.log(b)
      

      for (let val  in b){
        
          
      }
      
      $("#card-row").hide();
      
      console.log($("#card-row"))
      console.log("olhao bot")
    }else{
      $("#card-row").show();

    }
  })

  





})

