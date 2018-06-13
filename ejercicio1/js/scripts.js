var listelements = {
    assamble: function (element) {
        return '<div class="row">' +
        '<span class="col-2"></span>' +
        '<span class="col-2">'+element.brand+'</span>' +
        '<span class="col-2">'+element.location+'</span>' +
        '<span class="col-2">'+element.lunch+'</span>' +
        '<span class="col-2">'+element.price+'</span>' +
        '<span class="col-2"></span>' +
        '<span class="description col-12"></span>' +
    '</div>';
    },
    elements: [],
    setelements: function (elements) {
        listelements.elements = elements;
    },
    listAll: function () {
        for (var i = 0; listelements.elements.length > i; i++) {
            $("#table-body").append(listelements.assamble(listelements.elements[i]));
        }
    },
    listbyprice: function (price){
        for (var i = 0; listelements.elements.length > i; i++) {
            if(listelements.elements[i].price<price){
                $("#table-body").append(listelements.assamble(listelements.elements[i]))
            }
        }
}
};
listelements.setelements(elementsList);


$("#action1").on("click",function(){
    $("#table-body").html(" ");
    var price=$("#price").val();
    listelements.listbyprice(price);
});

