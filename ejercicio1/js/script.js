


var listelements = {
    assamble: function (element) {
        return '<strong>'
    +'<strong>'+element.brand+'</strong>'
    +'<strong>'+element.location+'</strong>'
    +'<strong>'+element.lunch+'</strong>'
    +'<strong>'+element.price+'</strong>'

+'</strong>';
    },
  
    elements: [],
    setelements: function (elements) {
        listelements.elements = elements;
    },

    listAll: function () {
        for (var i = 0; listelements.elements.length > i; i++) {
            $("#table-body span").append(listelements.assamble(listelements.elements[i]));
        }
    }
}

