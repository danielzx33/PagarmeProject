import $ from "jquery";
import { itens } from "../Assets/produtos";
console.log("krl maluco");
$("#itemName").change( () =>{
    let quantity:any = $("#itemQuantity").val();
    console.log($("#itemName").val())
    quantity = quantity.valueOf() > 0 ? quantity.valueOf() : 1;
    $("#itemSum").val(quantity)
  })
