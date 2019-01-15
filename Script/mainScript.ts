//

const itens = [
  { id: 1, name: "Zanpakutou", UnitValue: 20000},
  { id: 2, name: "Chapeu de Palha", UnitValue: 5000}
]



$(document).ready(() =>{
  
  const productCalc = () =>{

    let quantity:any = $("#itemQuantity").val();
    let item = itens.find( e => e.id == $("#itemName").val().valueOf() );
    if((quantity.valueOf() != 0 && quantity.valueOf() > 0 )){
      $("#itemSum").val( ((item.UnitValue * quantity)/ 100).toFixed(2))
      return;
    }
    $("#itemSum").val(0);
    
    

  }

  $("#itemName").change( () =>{
      productCalc();
  })

  $("#itemQuantity").change( () =>{
    productCalc();
  })




})

