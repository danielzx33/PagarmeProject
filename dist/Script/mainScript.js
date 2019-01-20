//
const itens = [
    { id: 1234, name: "Zanpakutou", UnitValue: 20000 },
    { id: 2345, name: "Chapeu de Palha", UnitValue: 5000 }
];
$(document).ready(() => {
    const productCalc = () => {
        let quantity = $("#itemQuantity").val();
        let name = ($("#itemName").val() == null) ? 0 : $("#itemName").val();
        let item = itens.find(e => e.id == name);
        if ((quantity != 0 && name != 0)) {
            $("#itemCalc").val(((item.UnitValue * quantity) / 100).toFixed(2));
            return;
        }
        $("#itemCalc").val(0);
    };
    $("#itemName").change(() => {
        productCalc();
    });
    $("#itemQuantity").change(() => {
        productCalc();
    });
    $("#paymentType").change(() => {
        if ($("#paymentType").val() === "credit_card") {
            $("#card-row").show();
            $("#card-row .form-control").attr("required", "true");
        }
        else {
            console.log("nem entra");
            $("#card-row .form-control").removeAttr("required");
            $("#card-row").hide();
        }
    });
});
//# sourceMappingURL=mainScript.js.map