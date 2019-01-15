//
const itens = [
    { id: 1234, name: "Zanpakutou", UnitValue: 20000 },
    { id: 2345, name: "Chapeu de Palha", UnitValue: 5000 }
];
$(document).ready(() => {
    const productCalc = () => {
        let quantity = $("#itemQuantity").val();
        let item = itens.find(e => e.id == $("#itemName").val().valueOf());
        if ((quantity.valueOf() != 0 && quantity.valueOf() > 0)) {
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
});
//# sourceMappingURL=mainScript.js.map