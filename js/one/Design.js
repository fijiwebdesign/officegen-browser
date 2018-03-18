// BASIC TOGGLE MENU FOR MAIN MENUBAR

onMainClick = function() {
    var main = document.getElementById("mainview");
    var load = document.getElementById("loadview");
    var doc = document.getElementById("docview");
    var image = document.getElementById("imageview");

    if (main.style.display === "none") {
        main.style.display = "block";
    } else {
        main.style.display = "block";
    }

    if (load.style.display === "block") {
        load.style.display = "none";
    } else {
        load.style.display = "none";
    }

    if (doc.style.display === "block") {
        doc.style.display = "none";
    } else {
        doc.style.display = "none";
    }

    if (image.style.display === "block") {
        image.style.display = "none";
    } else {
        image.style.display = "none";
    }

}

onLoadClick = function() {
    var main = document.getElementById("mainview");
    var load = document.getElementById("loadview");
    var doc = document.getElementById("docview");
    var image = document.getElementById("imageview");

    if (load.style.display === "none") {
        load.style.display = "block";
    } else {
        load.style.display = "block";
    }

    if (main.style.display === "block") {
        main.style.display = "none";
    } else {
        main.style.display = "none";
    }

    if (doc.style.display === "block") {
        doc.style.display = "none";
    } else {
        doc.style.display = "none";
    }

    if (image.style.display === "block") {
        image.style.display = "none";
    } else {
        image.style.display = "none";
    }

}

onDocClick = function() {
    var main = document.getElementById("mainview");
    var load = document.getElementById("loadview");
    var doc = document.getElementById("docview");
    var image = document.getElementById("imageview");

    if (doc.style.display === "none") {
        doc.style.display = "block";
    } else {
        doc.style.display = "block";
    }

    if (load.style.display === "block") {
        load.style.display = "none";
    } else {
        load.style.display = "none";
    }

    if (main.style.display === "block") {
        main.style.display = "none";
    } else {
        main.style.display = "none";
    }

    if (image.style.display === "block") {
        image.style.display = "none";
    } else {
        image.style.display = "none";
    }

}

onimageClick = function() {
    var main = document.getElementById("mainview");
    var load = document.getElementById("loadview");
    var doc = document.getElementById("docview");
    var image = document.getElementById("imageview");

    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "block";
    }

    if (load.style.display === "block") {
        load.style.display = "none";
    } else {
        load.style.display = "none";
    }

    if (doc.style.display === "block") {
        doc.style.display = "none";
    } else {
        doc.style.display = "none";
    }

    if (main.style.display === "block") {
        main.style.display = "none";
    } else {
        main.style.display = "none";
    }

}










// FOD TABLE MENU TOOGLE


document.getElementById('men1default').addEventListener('click', function () {
  var tab1default = document.getElementById("tab1default");
  //var tab2default = document.getElementById("tab2default");
  var tab3default = document.getElementById("tab3default");
  var tab4default = document.getElementById("tab4default");
  var tab5default = document.getElementById("tab5default");
  tab1default.style.display = "block";
  //tab2default.style.display = "none";
  tab3default.style.display = "none";
  tab4default.style.display = "none";
  tab5default.style.display = "none";

});

/*document.getElementById('men2default').addEventListener('click', function () {
  var tab1default = document.getElementById("tab1default");
  var tab2default = document.getElementById("tab2default");
  var tab3default = document.getElementById("tab3default");
  var tab4default = document.getElementById("tab4default");
  var tab5default = document.getElementById("tab5default");
  tab1default.style.display = "none";
  tab2default.style.display = "block";
  tab3default.style.display = "none";
  tab4default.style.display = "none";
  tab5default.style.display = "none";

});*/

document.getElementById('men3default').addEventListener('click', function () {
  var tab1default = document.getElementById("tab1default");
  //var tab2default = document.getElementById("tab2default");
  var tab3default = document.getElementById("tab3default");
  var tab4default = document.getElementById("tab4default");
  var tab5default = document.getElementById("tab5default");
  tab1default.style.display = "none";
  //tab2default.style.display = "none";
  tab3default.style.display = "block";
  tab4default.style.display = "none";
  tab5default.style.display = "none";

});

document.getElementById('men4default').addEventListener('click', function () {
  var tab1default = document.getElementById("tab1default");
  //var tab2default = document.getElementById("tab2default");
  var tab3default = document.getElementById("tab3default");
  var tab4default = document.getElementById("tab4default");
  var tab5default = document.getElementById("tab5default");
  tab1default.style.display = "none";
  //tab2default.style.display = "none";
  tab3default.style.display = "none";
  tab4default.style.display = "block";
  tab5default.style.display = "none";

});

document.getElementById('men5default').addEventListener('click', function () {
  var tab1default = document.getElementById("tab1default");
  //var tab2default = document.getElementById("tab2default");
  var tab3default = document.getElementById("tab3default");
  var tab4default = document.getElementById("tab4default");
  var tab5default = document.getElementById("tab5default");
  tab1default.style.display = "none";
  //tab2default.style.display = "none";
  tab3default.style.display = "none";
  tab4default.style.display = "none";
  tab5default.style.display = "block";

});
















// LAYOUT 1

document.getElementById('DocLayout1oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout1oN");
var times = document.getElementById("DocLayout1oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck1").checked = true;
});

document.getElementById('DocLayout1oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout1oN");
var times = document.getElementById("DocLayout1oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck1").checked = false;
});

// LAYOUT 2

document.getElementById('DocLayout2oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout2oN");
var times = document.getElementById("DocLayout2oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck2").checked = true;
});

document.getElementById('DocLayout2oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout2oN");
var times = document.getElementById("DocLayout2oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck2").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout3oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout3oN");
var times = document.getElementById("DocLayout3oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck3").checked = true;
});

document.getElementById('DocLayout3oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout3oN");
var times = document.getElementById("DocLayout3oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck3").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout4oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout4oN");
var times = document.getElementById("DocLayout4oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck4").checked = true;
});

document.getElementById('DocLayout4oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout4oN");
var times = document.getElementById("DocLayout4oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck4").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout5oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout5oN");
var times = document.getElementById("DocLayout5oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck5").checked = true;
});

document.getElementById('DocLayout5oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout5oN");
var times = document.getElementById("DocLayout5oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck5").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout6oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout6oN");
var times = document.getElementById("DocLayout6oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck6").checked = true;
});

document.getElementById('DocLayout6oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout6oN");
var times = document.getElementById("DocLayout6oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck6").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout7oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout7oN");
var times = document.getElementById("DocLayout7oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck7").checked = true;
});

document.getElementById('DocLayout7oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout7oN");
var times = document.getElementById("DocLayout7oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck7").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout8oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout8oN");
var times = document.getElementById("DocLayout8oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck8").checked = true;
});

document.getElementById('DocLayout8oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout8oN");
var times = document.getElementById("DocLayout8oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck8").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout9oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout9oN");
var times = document.getElementById("DocLayout9oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck9").checked = true;
});

document.getElementById('DocLayout9oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout9oN");
var times = document.getElementById("DocLayout9oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck9").checked = false;
});

// LAYOUT 1

document.getElementById('DocLayout10oN').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout10oN");
var times = document.getElementById("DocLayout10oFF");
checkmark.style.display = "none";
times.style.display = "inline";
document.getElementById("LayoutCheck10").checked = true;
});

document.getElementById('DocLayout10oFF').addEventListener('click', function () {

var checkmark = document.getElementById("DocLayout10oN");
var times = document.getElementById("DocLayout10oFF");
checkmark.style.display = "inline";
times.style.display = "none";
document.getElementById("LayoutCheck10").checked = false;
});






//HIDE SHOW INVEST EN MANSTREET FIELD






document.getElementById('InvestType').addEventListener('change', function () {
    var home = document.getElementById('InvestType').value;
    var NumbUnitsHome = document.getElementById("NumbUnits");
    var TotSize = document.getElementById("TotSize");
    var Devnumlot = document.getElementById("NumbLot");
    var InvestModule = document.getElementById("InvestModule");
    var InvestLotPriced = document.getElementById("InvestLotPriced");
    if (home == 0) {
        NumbUnitsHome.style.display = "none";
        TotSize.style.display = "none";
        Devnumlot.style.display = "none";
        InvestModule.style.display = "none";
        InvestLotPriced.style.display = "none";
    } else {
    }
});

document.getElementById('InvestType').addEventListener('change', function () {
    var home = document.getElementById('InvestType').value;
    var NumbUnitsHome = document.getElementById("NumbUnits");
    var TotSize = document.getElementById("TotSize");
    var Devnumlot = document.getElementById("NumbLot");
    var InvestLotPriced = document.getElementById("InvestLotPriced");
    if (home == 1) {
        NumbUnitsHome.style.display = "none";
        TotSize.style.display = "none";
        Devnumlot.style.display = "block";
        InvestLotPriced.style.display = "block";
    } else {
    }
});

document.getElementById('InvestType').addEventListener('change', function () {
    var home = document.getElementById('InvestType').value;
    var NumbUnitsHome = document.getElementById("NumbUnits");
    var TotSize = document.getElementById("TotSize");
    var Devnumlot = document.getElementById("NumbLot");
    var InvestModule = document.getElementById("InvestModule");
    var InvestLotPriced = document.getElementById("InvestLotPriced");
    if (home == 2) {
        NumbUnitsHome.style.display = "block";
        TotSize.style.display = "none";
        Devnumlot.style.display = "block";
        InvestModule.style.display = "block";
        InvestLotPriced.style.display = "block";
    } else {
    }
});


document.getElementById('InvestType').addEventListener('change', function () {
    var home = document.getElementById('InvestType').value;
    var NumbUnitsHome = document.getElementById("NumbUnits");
    var TotSize = document.getElementById("TotSize");
    var Devnumlot = document.getElementById("NumbLot");
    var InvestModule = document.getElementById("InvestModule");
    var InvestLotPriced = document.getElementById("InvestLotPriced");
    if (home == 3) {
        NumbUnitsHome.style.display = "block";
        TotSize.style.display = "block";
        Devnumlot.style.display = "none";
        InvestModule.style.display = "block";
        InvestLotPriced.style.display = "block";
    } else {
    }
});


var checkbox = document.getElementById("ManualCheck");
checkbox.addEventListener( 'click', function() {
  var OGStreet = document.getElementById("OGStreet");
  var ManStreet = document.getElementById("ManStreet");
    if(this.checked) {
      OGStreet.style.display = "none";
      ManStreet.style.display = "block";
    } else {
      OGStreet.style.display = "block";
      ManStreet.style.display = "none";
    }
});














// Reload Invest module
Retrig = function() {

var manch = document.getElementById("ManualCheck").checked;
var OGStreet = document.getElementById("OGStreet");
var ManStreet = document.getElementById("ManStreet");
if (manch == false) {
OGStreet.style.display = "block";
ManStreet.style.display = "none";
} else {
OGStreet.style.display = "none";
ManStreet.style.display = "block";
};

var intype =  document.getElementById("InvestType").value;
var NumbUnitsHome = document.getElementById("NumbUnits");
var TotSize = document.getElementById("TotSize");
var Devnumlot = document.getElementById("NumbLot");
var InvestModule = document.getElementById("InvestModule");
var InvestLotPriced = document.getElementById("InvestLotPriced");
if (intype == 0) {
    NumbUnitsHome.style.display = "none";
    TotSize.style.display = "none";
    Devnumlot.style.display = "none";
    InvestModule.style.display = "none";
    InvestLotPriced.style.display = "none";
} else {
}

if (intype == 1) {
    NumbUnitsHome.style.display = "none";
    TotSize.style.display = "none";
    Devnumlot.style.display = "block";
    InvestLotPriced.style.display = "block";
} else {
}

if (intype == 2) {
    NumbUnitsHome.style.display = "block";
    TotSize.style.display = "none";
    Devnumlot.style.display = "block";
    InvestModule.style.display = "block";
    InvestLotPriced.style.display = "block";
} else {
}

if (intype == 3) {
    NumbUnitsHome.style.display = "block";
    TotSize.style.display = "block";
    Devnumlot.style.display = "none";
    InvestModule.style.display = "block";
    InvestLotPriced.style.display = "block";
} else {
}


if (document.getElementById('LayoutCheck1').checked) {
  var checkmark = document.getElementById("DocLayout1oN");
  var times = document.getElementById("DocLayout1oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout1oN");
  var times = document.getElementById("DocLayout1oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}


if (document.getElementById('LayoutCheck2').checked) {
  var checkmark = document.getElementById("DocLayout2oN");
  var times = document.getElementById("DocLayout2oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout2oN");
  var times = document.getElementById("DocLayout2oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}


if (document.getElementById('LayoutCheck3').checked) {
  var checkmark = document.getElementById("DocLayout3oN");
  var times = document.getElementById("DocLayout3oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout3oN");
  var times = document.getElementById("DocLayout3oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}


if (document.getElementById('LayoutCheck4').checked) {
  var checkmark = document.getElementById("DocLayout4oN");
  var times = document.getElementById("DocLayout4oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout4oN");
  var times = document.getElementById("DocLayout4oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}


if (document.getElementById('LayoutCheck5').checked) {
  var checkmark = document.getElementById("DocLayout5oN");
  var times = document.getElementById("DocLayout5oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout5oN");
  var times = document.getElementById("DocLayout5oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}



if (document.getElementById('LayoutCheck6').checked) {
  var checkmark = document.getElementById("DocLayout6oN");
  var times = document.getElementById("DocLayout6oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout6oN");
  var times = document.getElementById("DocLayout6oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}


if (document.getElementById('LayoutCheck7').checked) {
  var checkmark = document.getElementById("DocLayout7oN");
  var times = document.getElementById("DocLayout7oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout7oN");
  var times = document.getElementById("DocLayout7oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}



if (document.getElementById('LayoutCheck8').checked) {
  var checkmark = document.getElementById("DocLayout8oN");
  var times = document.getElementById("DocLayout8oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout8oN");
  var times = document.getElementById("DocLayout8oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}


if (document.getElementById('LayoutCheck9').checked) {
  var checkmark = document.getElementById("DocLayout9oN");
  var times = document.getElementById("DocLayout9oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout9oN");
  var times = document.getElementById("DocLayout9oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}


if (document.getElementById('LayoutCheck10').checked) {
  var checkmark = document.getElementById("DocLayout10oN");
  var times = document.getElementById("DocLayout10oFF");
  checkmark.style.display = "none";
  times.style.display = "inline";
} else {
  var checkmark = document.getElementById("DocLayout10oN");
  var times = document.getElementById("DocLayout10oFF");
  checkmark.style.display = "inline";
  times.style.display = "none";
}

var ListStreettxt = $("#ListStreet option:selected").text();
var ManualStreet = document.getElementById("ManualStreet").value;
var manchecks = document.getElementById("ManualCheck").checked;
if (manchecks == false) {
var ListStreetFileName = ListStreettxt;
} else {
var ListStreetFileName = ManualStreet;
}

var ListCitytxt = $("#ListCity option:selected").text();
var ListZipcode = document.getElementById("ListZipcode").value;
var ListStreettxt = $("#ListStreet option:selected").text();
var ListNumber = document.getElementById("ListNumber").value;
};
