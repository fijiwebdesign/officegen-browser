StreetNameCheck = function() {

var manchecks = document.getElementById("ManualCheck").checked;
  if (manchecks == false) {
    ListStreetFileName = ListStreettxt;
  } else {
    ListStreetFileName = ManualStreet;
  }
}



// CALCULATE Function

//Doc Gen
onMathClick = function() {

  var AreaFront = document.getElementById("AreaFront").value;
  var AreaBack = document.getElementById("AreaBack").value;
  var FrontOwnPrice = document.getElementById("FrontOwnPrice").value;
  var BackOwnPrice = document.getElementById("BackOwnPrice").value;
  var BFront = document.getElementById("BuildFront").value;
  var BBack = document.getElementById("BuildBack").value;
  var DevFrontOwnPrice = document.getElementById("DevOwnPrice").value;
  var DvTotalBuildArea = document.getElementById("DevTotalBuildArea").value;
  var DevKavelnum = document.getElementById("DevelopmentNumber").value;
  var DevUnitnum = document.getElementById("DevelopmentUnits").value;
  var InvestTotalBuildArea = document.getElementById("InvestTotalBuildArea").value;
  var InvestDetail = document.getElementById("InvestDetail").value;
  var InvestSale = document.getElementById("InvestSale").value;
  var NotaryCostd = document.getElementById("NotaryCost").value;
  var RoiPland = document.getElementById("RoiPlan").value;


  var FrontCalc = AreaFront * FrontOwnPrice * BFront;
  var BackCalc = AreaBack * BackOwnPrice * BBack;
  var ToStandCalc =  +FrontCalc + +BackCalc;
  var forcedCalc = ToStandCalc * 85 / 100;

  document.getElementById("Frontcalc").innerHTML = FrontCalc;//GROND VOOR PRIJS
  document.getElementById("Backcalc").innerHTML = BackCalc;// GROND ACHTER PRIJS
  document.getElementById("ToStandcalc").innerHTML = ToStandCalc;// TOTAAL GRONDPRIJS
  document.getElementById("ForcedPrice").innerHTML = forcedCalc;

  //BEREKENING ZONE VREEMD

  var OppFront = 400 * FrontOwnPrice;//GROND PRIJS VOOR ZONEVREEMD
  var OppVol = (+AreaFront + +AreaBack - 400);// GROND OPPERVLAKTE ACHTER VOOR ZONEVREEMD
  var ZoneStrange = OppVol * BackOwnPrice * BBack;// GROND PRIJS VOOR ZONEVREEMD
  var ToStandCalcZoned =  +OppFront + +ZoneStrange;// TOTAAL GRONDPRIJS ZONEVREEMD

  //BEREKENING INVEST VERKAVELING

  var midlotsized = +AreaFront + +AreaBack; // GEM OPPERVLAKTE LOTEN
  var midlotsize = midlotsized / DevKavelnum;
  var DevLotted = AreaFront * DevFrontOwnPrice;// TOTAAL GRONDVOOR PRIJS
  var BackCalc = AreaBack * BackOwnPrice * BBack;// TOTAAL GROND ACHTERPRIJS
  var TotLottedPrice = +DevLotted + +BackCalc;// TOTAAL GRONDPRIJS VERKAVELING
  var GemLottedPrice = TotLottedPrice / DevKavelnum;// PRIJS GROND PER KAVEL

  document.getElementById("GemLottedPrice").innerHTML = GemLottedPrice;
  document.getElementById("TotLottedPrice").innerHTML = TotLottedPrice;
  document.getElementById("midlotsize").innerHTML = midlotsize;
  document.getElementById("GemLottedPriced").innerHTML = GemLottedPrice;

  //BEREKENING INVEST WONINGBOUW

  var midlotsizeHomed = (+AreaFront + +AreaBack); // GEM OPPERVLAKTE LOTEN
  var midlotsizeHome = midlotsizeHomed / DevKavelnum; // GEM OPPERVLAKTE LOTEN
  var DevLottedHome = AreaFront * DevFrontOwnPrice;// TOTAAL GRONDVOOR PRIJS
  var BackCalcHome = AreaBack * BackOwnPrice * BBack;// TOTAAL GROND ACHTERPRIJS
  var TotLottedPriceHome = +DevLottedHome + +BackCalcHome;// TOTAAL GRONDPRIJS VERKAVELING
  var GemLottedPriceHome = TotLottedPrice / DevKavelnum;// PRIJS GROND PER KAVEL
  document.getElementById("midlotsizeHome").innerHTML = midlotsizeHome;
  document.getElementById("GemLottedPriceHome").innerHTML = GemLottedPriceHome;

  // BEREKNING BOUWPROCESS

  var BuildPriceHome = InvestTotalBuildArea * InvestDetail;//CONSTRUCTIEPRIJS HUIZEN
  var SalePriceHome = InvestTotalBuildArea * InvestSale;// VERKOOP PRIJS HUIZEN
  var HomeGemOpp = InvestTotalBuildArea / DevUnitnum;
  var MaxPayPrice = SalePriceHome * RoiPland;
  var MaxPayPriceFullPer = MaxPayPrice / 100;
  var sidestep = +BuildPriceHome + +MaxPayPriceFullPer;
  var FinalInvestPrice = +SalePriceHome - +sidestep;
  var RoiMinNotHome = FinalInvestPrice * +NotaryCostd;
  var MinRoiPerHome = +RoiMinNotHome / 100;
  var CalcFinishHome = +FinalInvestPrice - +MinRoiPerHome;
  var ProfCalcHome = +SalePriceHome - +BuildPriceHome;// TOTAAAL Opbrengst
  var PricePerHome = SalePriceHome / DevUnitnum;//PRIJS PER WONING
  var PriceCostHome = BuildPriceHome / DevUnitnum;// KOSTPRIJS PER Woning
  var TotalProfCalcHome = +SalePriceHome + +TotLottedPriceHome;//TOTAAL PRIJS GROND EN HUIZEN
  var TotalHome = +PriceCostHome + +GemLottedPriceHome;// PRIJS PER WONING GROND EN HUIS

  document.getElementById("GemLottedPriceHomes").innerHTML = GemLottedPriceHome;
  document.getElementById("TotLotPriceHomes").innerHTML = TotLottedPriceHome;
  document.getElementById("InvestRoiFiniHome").innerHTML = CalcFinishHome;
  document.getElementById("DevUnitnum").innerHTML = DevUnitnum;
  document.getElementById("HomeGemOpp").innerHTML = HomeGemOpp;
  document.getElementById("BuildPriceHome").innerHTML = PriceCostHome;
  document.getElementById("SalePriceHome").innerHTML = PricePerHome;
  document.getElementById("RoiPland").innerHTML = RoiPland;
  document.getElementById("NotaryCostd").innerHTML = NotaryCostd;

  //BEREKENING INVEST APPARTEMENTEN

  var DevTotAppMax = +AreaFront + +DvTotalBuildArea;// TOTAAL BEBOUWBARE OPP
  var BackCalcApp = AreaBack * BackOwnPrice * BBack;// TOTAAL GROND ACHTERPRIJS
  var DevTotaalPrice = DevTotAppMax * DevFrontOwnPrice;// TOTAAL PRIJS GROND VOOR
  var TotalAppGrondPrice = +DevTotaalPrice + +BackCalcApp;//TOTAAL PRIJS GROND
  var DevTotaalPriceSplit = TotalAppGrondPrice / DevUnitnum;// Prijs GROND PER APPARTEMENT
  var DevGemOppApp = DevTotAppMax / DevUnitnum;
  var GemGrondTot = +DevTotAppMax + +AreaBack;
  var GemTotGrondUnit = GemGrondTot / DevUnitnum;

  // BEREKNING BOUWPROCESS

  var BuildPriceApp = InvestTotalBuildArea * InvestDetail;//CONSTRUCTIEPRIJS APP
  var SalePriceApp = InvestTotalBuildArea * InvestSale;// VERKOOP PRIJS APP
  var ProfCalcApp = +SalePriceApp - +BuildPriceApp;// TOTAAAL Opbrengst
  var PricePerApp = SalePriceApp / DevUnitnum;//PRIJS PER APPARTEMENT
  var PricePerAppeld = SalePriceApp / DevUnitnum;//PRIJS PER APPARTEMENT
  var PriceCostApp = BuildPriceApp / DevUnitnum;// KOSTPRIJS PER APAPRTEMENT
  var TotalAppGround = +SalePriceApp + +TotalAppGrondPrice;//TOTAAL PRIJS GROND EN APPARTEMENTEN
  var TotalApp = +PriceCostApp + +DevTotaalPriceSplit;// PRIJS PER APPARTEMENT GROND
  var RoiCalcStart = SalePriceApp * RoiPland;
  var RoiCalcPerc = RoiCalcStart / 100;
  var MaxCalcPriceApp = +BuildPriceApp + +RoiCalcPerc;
  var EndCalcRoi = +SalePriceApp - +MaxCalcPriceApp;
  var RoiMinNot = EndCalcRoi * +NotaryCostd;
  var MinRoiPer = +RoiMinNot / 100;
  var CalcFinish = +EndCalcRoi - +MinRoiPer;

  document.getElementById("TotalAppGrondPriced").innerHTML = TotalAppGrondPrice;
  document.getElementById("InvestRoiApp").innerHTML = CalcFinish;
  document.getElementById("DevGemOppApp").innerHTML = DevGemOppApp;
  document.getElementById("GemTotGrondUnit").innerHTML = GemTotGrondUnit;
  document.getElementById("DevTotaalPriceSplit").innerHTML = DevTotaalPriceSplit;
  document.getElementById("DevTotaalPriceSplitApp").innerHTML = DevTotaalPriceSplit;
  document.getElementById("DevUnitnumApped").innerHTML = DevUnitnum;
  document.getElementById("BuildPriceAppeld").innerHTML = PriceCostApp;
  document.getElementById("SalePriceAppeld").innerHTML = PricePerAppeld;
  document.getElementById("RoiPlandApp").innerHTML = RoiPland;
  document.getElementById("NotaryCostdApp").innerHTML = NotaryCostd;

};
// SQLITE Crab


const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const gemdbPath = path.resolve(__dirname, '..','..', 'assets', 'crab', 'gem.sqlite')
const straatdbPath = path.resolve(__dirname, '..','..', 'assets', 'crab', 'straat.sqlite')

var gemdb = new sqlite3.Database(gemdbPath);

const citySelect = document.getElementById('ListCity');

gemdb.serialize(function () {
  gemdb.each('SELECT GEMID, GEMNM FROM cityname ORDER BY GEMNM ASC', function (err, row) {
    const option = document.createElement("option");
    option.text = row.GEMNM;
    option.value = row.GEMID;
    citySelect.appendChild(option);
  });
});

const streetSelect = document.getElementById('ListStreet');

citySelect.addEventListener("change", function() {
  var straatdb = new sqlite3.Database(straatdbPath);
  const id = this.value;

  streetSelect.style.display = 'block';
  streetSelect.options.length = 0;

  straatdb.each(`SELECT GEMID, STRAATNM FROM street WHERE GEMID = ${id} ORDER BY STRAATNM ASC`, function (err, row) {
    const option = document.createElement("option");
    option.text = row.STRAATNM;
    option.value = row.GEMID;
    streetSelect.appendChild(option);
  });

  straatdb.close();
});

gemdb.close();

// FOD Tabel Gem Price

$.getJSON('../assets/fod/FodTabel.json', function(data) {

var MidPriceCalced = function() {

  var AreaFront = document.getElementById("AreaFront").value;
  var AreaBack = document.getElementById("AreaBack").value;
  var Aretot = +AreaFront + +AreaBack;


  var ListCitytxtFod = $("#ListCity option:selected").text();
  var Citnam = "$.array[?(@.Gemeente=='"+ListCitytxtFod+"')].Gem"
  result = jsonPath(data, Citnam);
  result1 = result[1]
  result2 = result[2]
  result3 = result[3]
  result4 = result[4]
  result5 = result[5]
  result6 = result[6]



  if (Aretot > 0 && Aretot < 99 ){
    if (result1 == null){
        result1 = "/"
        document.getElementById("FrontMiddlePrice").value = result1;
        document.getElementById("BackMiddlePrice").value = result1;
    }
    else {
        result1 = result[1].toFixed(2)
        result1back = (+result[1] / 3).toFixed(2)
        document.getElementById("FrontMiddlePrice").value = result1;
        document.getElementById("BackMiddlePrice").value = result1back;
    }
  }

  if (Aretot > 100 && Aretot < 299){
    if (result2 == null){
        result2 = "/"
    document.getElementById("FrontMiddlePrice").value = result2;
    document.getElementById("BackMiddlePrice").value = result2;
    }
    else {
        result2 = result[2].toFixed(2)
        result2back = (+result[2] / 3).toFixed(2)
    }
    document.getElementById("FrontMiddlePrice").value = result2;
    document.getElementById("BackMiddlePrice").value = result2back;
  }


  if (Aretot > 300 && Aretot < 599){
    if (result3 == null){
        result3 = "/"
    document.getElementById("FrontMiddlePrice").value = result3;
    document.getElementById("BackMiddlePrice").value = result3;
    }
    else {
        result3 = result[3].toFixed(2)
        result3back = (+result[3] / 3).toFixed(2)
    }
    document.getElementById("FrontMiddlePrice").value = result3;
    document.getElementById("BackMiddlePrice").value = result3back;
  }


  if (Aretot > 600 && Aretot < 999){
    if (result4 == null){
        result4 = "/"
    document.getElementById("FrontMiddlePrice").value = result4;
        document.getElementById("BackMiddlePrice").value = result4;
    }
    else {
        result4 = result[4].toFixed(2)
        result4back = (+result[4] / 3).toFixed(2)
    }
    document.getElementById("FrontMiddlePrice").value = result4;
    document.getElementById("BackMiddlePrice").value = result4back;
  }


  if (Aretot > 1000 && Aretot < 1499){
    if (result5 == null){
        result5 = "/"
    document.getElementById("FrontMiddlePrice").value = result5;
    document.getElementById("BackMiddlePrice").value = result5;
    }
    else {
        result5 = result[5].toFixed(2)
        result5back = (+result[5] / 3).toFixed(2)
    }
    document.getElementById("FrontMiddlePrice").value = result5;
    document.getElementById("BackMiddlePrice").value = result5back;
  }


  if (Aretot > 1500){
    if (result6 == null){
        result6 = "/"
    document.getElementById("FrontMiddlePrice").value = result6;
    document.getElementById("BackMiddlePrice").value = result6;
    }
    else {
        result6 = result[6].toFixed(2)
        result6back = (+result[1] / 3).toFixed(2)
    }
    document.getElementById("FrontMiddlePrice").value = result6;
    document.getElementById("BackMiddlePrice").value = result6back;
  }


};

$('#AreaFront').on('change', MidPriceCalced);
$('#AreaBack').on('change', MidPriceCalced);
$('#ListCity').on('change', MidPriceCalced);

$('#FrontType').on('change', MidPriceCalced);
$('#BackType').on('change', MidPriceCalced);





});




//api

document.getElementById('Geolocated').addEventListener('click', function () {

var ListCitytxt = $("#ListCity option:selected").text();
var ListStreettxt = $("#ListStreet option:selected").text();
var ListZipcode = document.getElementById("ListZipcode").value;
var ListNumber = document.getElementById("ListNumber").value;

var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://loc.geopunt.be/v4/Location?q=' +ListStreettxt+ '%20' +ListNumber+ '%20' +ListCitytxt+ '%20' +ListZipcode+ '&c=1', false);
xhr.send();

var Respon = xhr.responseText;
var json = JSON.parse(xhr.responseText);

var LLXlam = (+json.LocationResult[0].BoundingBox.LowerLeft.X_Lambert72 - 180);
var LLYlam = (+json.LocationResult[0].BoundingBox.LowerLeft.Y_Lambert72 - 180);
var URXlam = (+json.LocationResult[0].BoundingBox.UpperRight.X_Lambert72 + 180);
var URYlam = (+json.LocationResult[0].BoundingBox.UpperRight.Y_Lambert72 + 180);


document.getElementById("GRBImg").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=GRB_RPD&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");

//document.getElementById("CadImg").src = ("https://ccff02.minfin.fgov.be/cadgisWMS/CadastralLayers/MapServer/WMSServer?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES&LAYERS=Cadastral%20building%2CCadastral%20Parcel%2CCadastral%20block%2CCadastral%20sheet%2CCadastral%20division%2CCadastral%20section&FORMAT=image%2Fpng&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG%3A31370&STYLES=&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");

document.getElementById("GewestImg").src = ("https://www.mercator.vlaanderen.be/raadpleegdienstenmercatorpubliek/ows?SERVICE=WMS&SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=raster&VERSION=1.3.0&LAYERS=lu:lu_gwp_rv_raster&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");

document.getElementById("Back1Img").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart-grijs/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=GRB_BSK_GRIJS&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");
document.getElementById("VoorkoopImg").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/RVVAfbak/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=RVVSbz,RVVWenZ,RVVWoonCode,RVVScheepvrt,RVVIntgrWatBel,RVVNatRes&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");

document.getElementById("Back2Img").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart-grijs/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=GRB_BSK_GRIJS&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");
document.getElementById("Water1Img").src = ("http://inspirepub.waterinfo.be/arcgis/services/Overstromingsgevoelige_gebieden_2017/MapServer/WMSServer?request=GetMap&service=WMSS&VERSION=1.3.0&STYLES=&LAYERS=0&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");

});














// DOCUMENT RENDER

onWordGenClick = function() {

var ListCitytxt = $("#ListCity option:selected").text();
var ListStreettxt = $("#ListStreet option:selected").text();
var ListZipcode = document.getElementById("ListZipcode").value;
var ListNumber = document.getElementById("ListNumber").value;

var xhr = new XMLHttpRequest();
xhr.open("GET", 'http://loc.geopunt.be/v4/Location?q=' +ListStreettxt+ '%20' +ListNumber+ '%20' +ListCitytxt+ '%20' +ListZipcode+ '&c=1', false);
xhr.send();

var Respon = xhr.responseText;
var json = JSON.parse(xhr.responseText);

var LLXlam = (+json.LocationResult[0].BoundingBox.LowerLeft.X_Lambert72 - 180);
var LLYlam = (+json.LocationResult[0].BoundingBox.LowerLeft.Y_Lambert72 - 180);
var URXlam = (+json.LocationResult[0].BoundingBox.UpperRight.X_Lambert72 + 180);
var URYlam = (+json.LocationResult[0].BoundingBox.UpperRight.Y_Lambert72 + 180);


var fs = require('fs'),
request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


    var GRBImgWord = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=GRB_RPD&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=250&HEIGHT=250");
    download(GRBImgWord, 'assets/temp/GRB.png', function(){
      console.log('done');
    });

  //  var CadImgWord = ("https://ccff02.minfin.fgov.be/cadgisWMS/CadastralLayers/MapServer/WMSServer?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES&LAYERS=Cadastral%20building%2CCadastral%20Parcel%2CCadastral%20block%2CCadastral%20sheet%2CCadastral%20division%2CCadastral%20section&FORMAT=image%2Fpng&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG%3A31370&STYLES=&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=500&HEIGHT=500");
  //  download(CadImgWord, 'assets/temp/Cad.png', function(){
  //    console.log('done');
  //  });

    var GewestImgWord = ("https://www.mercator.vlaanderen.be/raadpleegdienstenmercatorpubliek/ows?SERVICE=WMS&SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=raster&VERSION=1.3.0&LAYERS=lu:lu_gwp_rv_raster&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=250&HEIGHT=250");
    download(GewestImgWord, 'assets/temp/Gewest.png', function(){
      console.log('done');
    });

setTimeout(onDocumenter, 12000);

};

//Doc Gen
onDocumenter = function() {


  var Dosnumber = document.getElementById("Dosnumber").value;
  var DosDate = document.getElementById("DosDate").value;
  var AFirstName = document.getElementById("AFirstName").value;
  var ALastName = document.getElementById("ALastName").value;
  var ACompany= document.getElementById("ACompany").value;
  var ANumberCompany = document.getElementById("ANumberCompany").value;
  var ACity = document.getElementById("ACity").value;
  var AStreetID = document.getElementById("AStreetID").value;
  var BFirstName = document.getElementById("BFirstName").value;
  var BLastName = document.getElementById("BLastName").value;
  var BCompany = document.getElementById("BCompany").value;
  var BNumberCompany = document.getElementById("BNumberCompany").value;
  var BCity = document.getElementById("BCity").value;
  var BStreetID = document.getElementById("BStreetID").value;
  var ListCity = document.getElementById("ListCity").value;
  var ListCitytxt = $("#ListCity option:selected").text();
  var ListZipcode = document.getElementById("ListZipcode").value;
  var ListStreet = document.getElementById("ListStreet").value;
  var ListStreettxt = $("#ListStreet option:selected").text();
  var ListNumber = document.getElementById("ListNumber").value;
  var ManualStreet = document.getElementById("ManualStreet").value;
  var District = document.getElementById("District").value;
  var NisCode = document.getElementById("NisCode").value;
  var Section = document.getElementById("Section").value;
  var SubSection = document.getElementById("SubSection").value;
  var NGki = document.getElementById("NGki").value;
  var Gki = document.getElementById("Gki").value;
  var OwnageProperty = document.getElementById("OwnageProperty").value;
  var SplittedLot = document.getElementById("SplittedLot").value;
  var Flooding = document.getElementById("Flooding").value;
  var RealFlooding = document.getElementById("RealFlooding").value;
  var BuildCont = document.getElementById("BuildCont").value;
  var Inherited = document.getElementById("Inherited").value;
  var UndefZone = document.getElementById("UndefZone").value;
  var FirstSale = document.getElementById("FirstSale").value;
  var AreaFront = document.getElementById("AreaFront").value;
  var AreaBack = document.getElementById("AreaBack").value;
  var ConfigRegularity = document.getElementById("ConfigRegularity").value;
  var Zoning = document.getElementById("Zoning").value;
  var BuildFront = document.getElementById("BuildFront").value;
  var BuildBack = document.getElementById("BuildBack").value;
  var WidthArea = document.getElementById("WidthArea").value;
  var DepthArea = document.getElementById("DepthArea").value;
  var FrontType = document.getElementById("FrontType").value;
  var BackType = document.getElementById("BackType").value;
  var FrontMiddlePrice = document.getElementById("FrontMiddlePrice").value;
  var FrontOwnPrice = document.getElementById("FrontOwnPrice").value;
  var BackMiddlePrice = document.getElementById("BackMiddlePrice").value;
  var BackOwnPrice = document.getElementById("BackOwnPrice").value;
  var DevelopmentNumber = document.getElementById("DevelopmentNumber").value;
  var InvestType = document.getElementById("InvestType").value;
  var DevTotalBuildArea = document.getElementById("DevTotalBuildArea").value;
  var DevelopmentUnits = document.getElementById("DevelopmentUnits").value;
  var DevMiddlePrice = document.getElementById("DevMiddlePrice").value;
  var DevOwnPrice = document.getElementById("DevOwnPrice").value;
  var InvestTotalBuildArea = document.getElementById("InvestTotalBuildArea").value;
  var InvestSale = document.getElementById("InvestSale").value;
  var InvestDetail = document.getElementById("InvestDetail").value;
  var RoiPlan = document.getElementById("RoiPlan").value;
  var NotaryCost = document.getElementById("NotaryCost").value;

  var checkbox = document.getElementById("ManualCheck");
  if(checkbox.checked) {
    var DocStreet = ManualStreet;
  } else {
    var DocStreet = ListStreettxt;
    }

    //Math function

  var AreaFront = document.getElementById("AreaFront").value;
  var AreaBack = document.getElementById("AreaBack").value;
  var FrontOwnPrice = document.getElementById("FrontOwnPrice").value;
  var BackOwnPrice = document.getElementById("BackOwnPrice").value;
  var BFront = document.getElementById("BuildFront").value;
  var BBack = document.getElementById("BuildBack").value;
  var DevFrontOwnPrice = document.getElementById("DevOwnPrice").value;
  var DvTotalBuildArea = document.getElementById("DevTotalBuildArea").value;
  var DevKavelnum = document.getElementById("DevelopmentNumber").value;
  var DevUnitnum = document.getElementById("DevelopmentUnits").value;
  var InvestTotalBuildArea = document.getElementById("InvestTotalBuildArea").value;
  var InvestDetail = document.getElementById("InvestDetail").value;
  var InvestSale = document.getElementById("InvestSale").value;
  var NotaryCostd = document.getElementById("NotaryCost").value;
  var RoiPland = document.getElementById("RoiPlan").value;

  var FrontCalc = AreaFront * FrontOwnPrice * BFront;
  var BackCalc = AreaBack * BackOwnPrice * BBack;
  var ToStandCalc =  +FrontCalc + +BackCalc;
  var forcedCalc = ToStandCalc * 85 / 100;

  //BEREKENING ZONE VREEMD

  var OppFront = 400 * FrontOwnPrice;//GROND PRIJS VOOR ZONEVREEMD
  var OppVol = (+AreaFront + +AreaBack - 400);// GROND OPPERVLAKTE ACHTER VOOR ZONEVREEMD
  var ZoneStrange = OppVol * BackOwnPrice * BBack;// GROND PRIJS VOOR ZONEVREEMD
  var ToStandCalcZoned =  +OppFront + +ZoneStrange;// TOTAAL GRONDPRIJS ZONEVREEMD

  //BEREKENING INVEST VERKAVELING

  var midlotsized = +AreaFront + +AreaBack; // GEM OPPERVLAKTE LOTEN
  var midlotsize = midlotsized / DevKavelnum;
  var DevLotted = AreaFront * DevFrontOwnPrice;// TOTAAL GRONDVOOR PRIJS
  var BackCalc = AreaBack * BackOwnPrice * BBack;// TOTAAL GROND ACHTERPRIJS
  var TotLottedPrice = +DevLotted + +BackCalc;// TOTAAL GRONDPRIJS VERKAVELING
  var GemLottedPrice = TotLottedPrice / DevKavelnum;// PRIJS GROND PER KAVEL

  //BEREKENING INVEST WONINGBOUW

  var midlotsizeHomed = (+AreaFront + +AreaBack); // GEM OPPERVLAKTE LOTEN
  var midlotsizeHome = midlotsizeHomed / DevKavelnum; // GEM OPPERVLAKTE LOTEN
  var DevLottedHome = AreaFront * DevFrontOwnPrice;// TOTAAL GRONDVOOR PRIJS
  var BackCalcHome = AreaBack * BackOwnPrice * BBack;// TOTAAL GROND ACHTERPRIJS
  var TotLottedPriceHome = +DevLottedHome + +BackCalcHome;// TOTAAL GRONDPRIJS VERKAVELING
  var GemLottedPriceHome = TotLottedPrice / DevKavelnum;// PRIJS GROND PER KAVEL

  // BEREKNING BOUWPROCESS

  var BuildPriceHome = InvestTotalBuildArea * InvestDetail;//CONSTRUCTIEPRIJS HUIZEN
  var SalePriceHome = InvestTotalBuildArea * InvestSale;// VERKOOP PRIJS HUIZEN
  var HomeGemOpp = InvestTotalBuildArea / DevUnitnum;
  var MaxPayPrice = SalePriceHome * RoiPland;
  var MaxPayPriceFullPer = MaxPayPrice / 100;
  var sidestep = +BuildPriceHome + +MaxPayPriceFullPer;
  var FinalInvestPrice = +SalePriceHome - +sidestep;
  var RoiMinNotHome = FinalInvestPrice * +NotaryCostd;
  var MinRoiPerHome = +RoiMinNotHome / 100;
  var CalcFinishHome = +FinalInvestPrice - +MinRoiPerHome;
  var ProfCalcHome = +SalePriceHome - +BuildPriceHome;// TOTAAAL Opbrengst
  var PricePerHome = SalePriceHome / DevUnitnum;//PRIJS PER WONING
  var PriceCostHome = BuildPriceHome / DevUnitnum;// KOSTPRIJS PER Woning
  var TotalProfCalcHome = +SalePriceHome + +TotLottedPriceHome;//TOTAAL PRIJS GROND EN HUIZEN
  var TotalHome = +PriceCostHome + +GemLottedPriceHome;// PRIJS PER WONING GROND EN HUIS

  //BEREKENING INVEST APPARTEMENTEN

  var DevTotAppMax = +AreaFront + +DvTotalBuildArea;// TOTAAL BEBOUWBARE OPP
  var BackCalcApp = AreaBack * BackOwnPrice * BBack;// TOTAAL GROND ACHTERPRIJS
  var DevTotaalPrice = DevTotAppMax * DevFrontOwnPrice;// TOTAAL PRIJS GROND VOOR
  var TotalAppGrondPrice = +DevTotaalPrice + +BackCalcApp;//TOTAAL PRIJS GROND
  var DevTotaalPriceSplit = TotalAppGrondPrice / DevUnitnum;// Prijs GROND PER APPARTEMENT
  var DevGemOppApp = DevTotAppMax / DevUnitnum;
  var GemGrondTot = +DevTotAppMax + +AreaBack;
  var GemTotGrondUnit = GemGrondTot / DevUnitnum;

  // BEREKNING BOUWPROCESS

  var BuildPriceApp = InvestTotalBuildArea * InvestDetail;//CONSTRUCTIEPRIJS APP
  var SalePriceApp = InvestTotalBuildArea * InvestSale;// VERKOOP PRIJS APP
  var ProfCalcApp = +SalePriceApp - +BuildPriceApp;// TOTAAAL Opbrengst
  var PricePerApp = SalePriceApp / DevUnitnum;//PRIJS PER APPARTEMENT
  var PriceCostApp = BuildPriceApp / DevUnitnum;// KOSTPRIJS PER APAPRTEMENT
  var TotalAppGround = +SalePriceApp + +TotalAppGrondPrice;//TOTAAL PRIJS GROND EN APPARTEMENTEN
  var TotalApp = +PriceCostApp + +DevTotaalPriceSplit;// PRIJS PER APPARTEMENT GROND
  var RoiCalcStart = SalePriceApp * RoiPland;
  var RoiCalcPerc = RoiCalcStart / 100;
  var MaxCalcPriceApp = +BuildPriceApp + +RoiCalcPerc;
  var EndCalcRoi = +SalePriceApp - +MaxCalcPriceApp;
  var RoiMinNot = EndCalcRoi * +NotaryCostd;
  var MinRoiPer = +RoiMinNot / 100;
  var CalcFinish = +EndCalcRoi - +MinRoiPer;

  //Load Invest Element For Hide Show

  var home = document.getElementById('InvestType').value;

var async = require ( 'async' );
var officegen = require('officegen');

var fs = require('fs');
var path = require('path');
var themeXml = fs.readFileSync ( path.resolve ( __dirname, '../../assets/themes/StartTheme.xml' ), 'utf8' );
var docx = officegen ( {
	type: 'docx',
	orientation: 'portrait',
	pageMargins: { top: 500, left: 0, bottom: 1000, right: 0 }
	// The theme support is NOT working yet...
	// themeXml: themeXml
} );

// Remove this comment in case of debugging Officegen:
// officegen.setVerboseMode ( true );



docx.on ( 'error', function ( err ) {
			console.log ( err );
		});

var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addImage ( path.resolve(__dirname, '../../assets/img/main-logo-sm.png' ) );
pObj.addText ( '                                                                                  ' );
pObj.addImage ( path.resolve(__dirname, '../../assets/img/kavex-logo-sm.png' ) );



var pObj = docx.createP ();
pObj.options.align = 'center';
pObj.addText ( ' Beëdigd M.S.O.G. - Waardebepalingen - Plaatsbeschrijvingen ', { font_face: 'Arial', font_size: 10 } );
pObj.addLineBreak ();
pObj.addText ( ' Energiedeskundige Private en Publieke gebouwen - Beëdigd Registerexpert KAVEX ', { font_face: 'Arial', font_size: 10 } );;


var pObj = docx.createP ();
pObj.addHorizontalLine ();

pObj.options.align = 'left';
pObj.addText ( 'Kerkestraat 56 bus 1');
pObj.addText ( '                                                                                ' );
pObj.addText ( 'Filiaal: Langestraat 91' );
pObj.addLineBreak ();
pObj.addText ( '3971 LEOPOLDSBURG');
pObj.addText ( '                                                                              ' );
pObj.addText ( '8400 OOSTENDE' );
pObj.addLineBreak ();
pObj.addText ( 'KBC BE 42 7350 1362 5454');
pObj.addText ( '                                                                     ' );
pObj.addText ( 'BIC KREDBEBB' );
pObj.addLineBreak ();
pObj.addText ( 'BTW - BE -0879 152 669');
pObj.addText ( '                                                                          ' );
pObj.addText ( 'BA 730.246.035 AXA' );
pObj.addLineBreak ();
pObj.addText ( 'RPR Antwerpen afdeling Hasselt');
pObj.addText ( '                                                           ' );
pObj.addText ( 'E-mail: info@epe-partners.be' );

pObj.addHorizontalLine ();

var tableStyle = {
  tableColWidth: 4400,
  sz: 20,
  tableAlign: "left",
  tableFontFamily: "Arial"
}

if (document.getElementById('LayoutCheck1').checked) {
} else {
  var table = [
    ['Dossier: ' +Dosnumber,'       ','Datum: ' +DosDate]
  ]

  docx.createTable (table, tableStyle);
}

if (document.getElementById('LayoutCheck2').checked) {
} else {
var pObj = docx.createP ();
pObj.addText ( 'Opdrachtgever:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableOpdracht = [
	['Bedrijf: ' +ACompany,'BTW Nummer: ' +ANumberCompany],
	['Voornaam: ' +AFirstName,'Achternaam: ' +ALastName],
	['Gemeente: ' +ACity,'Straat + nr: ' +AStreetID]
]
var pObj = docx.createTable (tableOpdracht, tableStyle);
}

if (document.getElementById('LayoutCheck3').checked) {
} else {
var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Eigenaar:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableEigenaar = [
	['Bedrijf: ' +BCompany,'BTW Nummer: ' +BNumberCompany],
	['Voornaam: ' +BFirstName,'Achternaam: ' +BLastName],
	['Gemeente: ' +BCity,'Straat + nr: ' +BStreetID]
]
var pObj = docx.createTable (tableEigenaar, tableStyle);
}

if (document.getElementById('LayoutCheck4').checked) {
} else {
var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Ligging van het goed:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableLocatie = [
	['Straat: '  +DocStreet,'Nummer: ' +ListNumber],
	['Gemeente: ' +ListCitytxt,'Postcode: ' +ListZipcode]
]
var pObj = docx.createTable (tableLocatie, tableStyle);
}

if (document.getElementById('LayoutCheck5').checked) {
} else {
var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Kadastrale gegevens:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableKadaster = [
	['Afdeling: ' +District,'Sectie: ' +Section,'Perceel Nr: ' +SubSection],
	['NIS-Code: ' +NisCode,'GKI: ' +Gki,'NGKI: ' +NGki]
]
var pObj = docx.createTable (tableKadaster, tableStyle);
}

docx.putPageBreak ();

var pObj = docx.createP ();
pObj.addText ( '1. Opdrachtomschrijving', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var pObj = docx.createP ();
pObj.addText ( '1.1 De OPDRACHTGEVERS, geven de opdracht aan de ondertekenende vastgoedexpert, zijnde GAETHOFS Eddy, Meetkundige Schatter Onroerende Goederen, beëdigd door de Rechtbank van Eerste Aanleg te Hasselt om een waardebepaling te doen van het onroerend.' );

var pObj = docx.createP ();
pObj.addText ( '1.2 De VASTGOEDEXPERT-TAXATEUR heeft geen persoonlijke belangen bij de opstelling of de inhoud van het rapport en voert de waardebepaling uit naar best vermogen en volgens de deontologische code van KAVEX.' );

var pObj = docx.createP ();
pObj.addText ( '1.3 De DOELSTELLING van de taxatie is het bepalen van de Venale Waarde en de Gedwongen verkoopwaarde per waardepeildatum.' );

var pObj = docx.createP ();
pObj.addText ( '1.4 Deze taxatie heeft als WAARDEPEILDATUM ' +DosDate );

var pObj = docx.createP ();
pObj.addText ( '1.5 Onze voorafgaande SCHRIFTELIJKE TOESTEMMING is vereist voor elke openbaarmaking van dit taxatierapport of delen daarvan of voor een ander gebruik dan vermeld op het einde van oins rapport. Dit geldt ook voor publicatie op internet, het openbaar maken of verzenden aan derden van een verslag waarin onze naam wordt genoemd, alsmede ten aanzien van het gebruik van onze naam in elk ander document dat openbaar wordt gemaakt of ter beschikking wordt gesteld aan derden. In al deze gevallen dient u ons tijdig een concept van het document te verstrekken voordat het wordt verspreid.' );

if (document.getElementById('LayoutCheck6').checked) {
} else {
var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( '2. Privaatrechtelijke positie', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var pObj = docx.createP ();
var tableRechtelijk = [
	['' +OwnageProperty,'Ja'],
	['Verkaveling:','' +SplittedLot],
	['Overstromingsgevoelig:','' +Flooding],
	['Effectief overstromingsgebied:','' +RealFlooding],
	['Recht van opstal:','' +BuildCont],
	['Erfdienstbaarheid:','' +Inherited],
	['Zonevreemd:','' +UndefZone],
	['Voorkooprecht:','' +FirstSale]
]
var pObj = docx.createTable (tableRechtelijk, tableStyle);
}

docx.putPageBreak ();

var pObj = docx.createP ();
pObj.addText ( '3. Algemene Afmetingen', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();



var pObj = docx.createP ();
pObj.addText ( 'Terrein:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableTerrein = [
	['Oppervlakte Alfa: ' +AreaFront +' m²','Oppervlakte Beta: ' +AreaBack +' m²'],
	['Diepte Perceel: ' +DepthArea +' m','Breedte Perceel: ' +WidthArea +' m'],
	['Configuratie Perceel: ' +ConfigRegularity,'Locatie Perceel: ' +Zoning]
]

var pObj = docx.createTable (tableTerrein, tableStyle);
var pObj = docx.createP ();
pObj.addText ( 'Alle maten zijn benaderend.', { font_face: 'Arial', font_size: 10 } );


var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( '4. Zonering', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var tableZonering = [
	['Zonering Alfa:','' +FrontType],
	['Zonering Beta:','' +BackType],
]

var pObj = docx.createTable (tableZonering, tableStyle);


var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( '5. Berekening van de grondwaarde', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var pObj = docx.createP ();
pObj.addText ( 'Waardering Grond Alfa', { font_face: 'Arial', font_size: 12, underline:true } );
var tableAlfa = [
	[{
	val: "Oppervlakte:",
	opts: {
		b:true
	}
},{
	val: "€/m²",
	opts: {
		b:true
	}
},{
	val: "Bebouwd:",
	opts: {
		b:true
	}
},{
	val: "Grondwaarde:",
	opts: {
		b:true
	}
}],
	['' +AreaFront +' m²','' +FrontOwnPrice,'' +BuildFront,'' +FrontCalc +' €'],

]

var pObj = docx.createTable (tableAlfa, tableStyle);


var pObj = docx.createP ();
pObj.addText ( 'Waardering Grond Beta', { font_face: 'Arial', font_size: 12, underline:true } );
var tableBeta = [
	[{
	val: "Oppervlakte:",
	opts: {
		b:true
	}
},{
	val: "€/m²",
	opts: {
		b:true
	}
},{
	val: "Bebouwd:",
	opts: {
		b:true
	}
},{
	val: "Grondwaarde:",
	opts: {
		b:true
	}
}],
	['' +AreaBack +' m²','' +BackOwnPrice,'' +BuildBack,'' +BackCalc +' €'],

]

var pObj = docx.createTable (tableBeta, tableStyle);


docx.putPageBreak ();

var pObj = docx.createP ();
pObj.addText ( '6. Geopunt', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var pObj = docx.createP ();
pObj.addLineBreak ();

pObj.addImage ( path.resolve('./assets/temp/GRB.png'));
pObj.addText ( '           ', { font_face: 'Arial', font_size: 12 } );
pObj.addImage ( path.resolve('./assets/temp/Gewest.png'));

pObj.addLineBreak ();


docx.putPageBreak ();

var pObj = docx.createP ();
pObj.addText ( '7. Kadaster', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( '         ', { font_face: 'Arial', font_size: 12 } );
pObj.addImage ( path.resolve('./assets/temp/Cad.png'));

docx.putPageBreak ();

if (document.getElementById('LayoutCheck7').checked) {
} else {
var pObj = docx.createP ();
pObj.addText ( '8. Berekening Investering', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

if (home == 1) {
var pObj = docx.createP ();
pObj.addText ( 'Verkaveling:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableVerkaveling = [
	[{
	val: "Aantal Kavels:",
	opts: {
		b:true
	}
},{
	val: "Gemiddelde Opp.",
	opts: {
		b:true
	}
},{
	val: "€/m²",
	opts: {
		b:true
	}
},{
	val: "Waarde/Perceel",
	opts: {
		b:true
	}
}],
	['' +DevelopmentNumber,'' +midlotsize +' m²','' +DevOwnPrice,'' +GemLottedPrice +' €'],

]

var pObj = docx.createTable (tableVerkaveling, tableStyle);

if (document.getElementById('LayoutCheck8').checked) {
} else {
var pObj = docx.createP ();
pObj.addText ( 'Gemiddelde Prijs Per Lot: ' +GemLottedPrice +' €', { font_face: 'Arial', font_size: 10, bold:true } );
pObj.addLineBreak ();
pObj.addLineBreak ();
pObj.addText ( 'Totaal Verkoop Prijs: ' +TotLottedPrice +' €', { font_face: 'Arial', font_size: 10, bold:true } );
}

var pObj = docx.createP ();
pObj.addHorizontalLine ();

} else {
}

if (home == 2) {
var pObj = docx.createP ();
pObj.addText ( 'Woningen Grond Deel:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableVerkavelingHome = [
	[{
	val: "Verdeling:",
	opts: {
		b:true
	}
},{
	val: "Gemiddelde Opp.",
	opts: {
		b:true
	}
},{
	val: "€/m²",
	opts: {
		b:true
	}
},{
	val: "Waarde/Perceel",
	opts: {
		b:true
	}
}],
	['' +DevelopmentNumber,'' +midlotsizeHome +' m²','' +DevOwnPrice,'' +GemLottedPriceHome +' €'],

]

var pObj = docx.createTable (tableVerkavelingHome, tableStyle);


var pObj = docx.createP ();
pObj.addText ( 'Investering ROI:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableVerkavelingHome = [
	[{
	val: "Aantal Units",
	opts: {
		b:true
	}
},{
	val: "Gemiddelde Opp.",
	opts: {
		b:true
	}
},{
	val: "Constructie/Unit",
	opts: {
		b:true
	}
},{
	val: "Verkoop/Unit",
	opts: {
		b:true
	}
}],
	['' +DevUnitnum,'' +HomeGemOpp +' m²','' +PriceCostHome +' €','' +PricePerHome +' €'],

]

var pObj = docx.createTable (tableVerkavelingHome, tableStyle);

var tableRoi = [
	['ROI: ' +RoiPland +' %','Onkosten:' +NotaryCostd +' %'],
	['',''],
]

var pObj = docx.createTable (tableRoi, tableStyle);

if (document.getElementById('LayoutCheck8').checked) {
} else {
var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Gemiddelde Prijs Per Lot: ' +GemLottedPriceHome  +' €', { font_face: 'Arial', font_size: 10, bold:true } );
pObj.addLineBreak ();
pObj.addLineBreak ();
pObj.addText ( 'Totaal Verkoop Prijs: ' +TotLottedPriceHome  +' €', { font_face: 'Arial', font_size: 10, bold:true } );
pObj.addLineBreak ();
pObj.addLineBreak ();
pObj.addText ( 'Maximum prijs Investering Aankoop: ' +CalcFinishHome  +' €', { font_face: 'Arial', font_size: 10, bold:true } );
}

var pObj = docx.createP ();
pObj.addHorizontalLine ();


} else {
}

if (home == 3) {
var pObj = docx.createP ();
pObj.addText ( 'Appartementen Grond Deel:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableVerkavelingApp = [
	[{
	val: "Verdeling:",
	opts: {
		b:true
	}
},{
	val: "Gemiddelde Opp.",
	opts: {
		b:true
	}
},{
	val: "€/m²",
	opts: {
		b:true
	}
},{
	val: "Waarde/Perceel",
	opts: {
		b:true
	}
}],
	['' +DevelopmentUnits,'' +GemTotGrondUnit  +' m²','' +DevOwnPrice,'' +DevTotaalPriceSplit +' €'],

]

var pObj = docx.createTable (tableVerkavelingApp, tableStyle);


var pObj = docx.createP ();
pObj.addText ( 'Investering ROI:', { font_face: 'Arial', font_size: 12, underline:true } );
var tableVerkavelingApp = [
	[{
	val: "Aantal Units",
	opts: {
		b:true
	}
},{
	val: "Gemiddelde Opp.",
	opts: {
		b:true
	}
},{
	val: "Constructie/Unit",
	opts: {
		b:true
	}
},{
	val: "Verkoop/Unit",
	opts: {
		b:true
	}
}],
	['' +DevUnitnum,'' +DevGemOppApp +' m²','' +PriceCostApp +' €','' +PricePerApp +' €'],

]

var pObj = docx.createTable (tableVerkavelingApp, tableStyle);

var tableRoi = [
	['ROI: ' +RoiPland +' %','Onkosten: ' +NotaryCostd +' %'],
	['',''],
]

var pObj = docx.createTable (tableRoi, tableStyle);

if (document.getElementById('LayoutCheck8').checked) {
} else {
var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Gemiddelde Prijs Per Lot: ' +DevTotaalPriceSplit +' €', { font_face: 'Arial', font_size: 10, bold:true } );
pObj.addLineBreak ();
pObj.addLineBreak ();
pObj.addText ( 'Totaal Verkoop Prijs: ' +TotalAppGrondPrice +' €', { font_face: 'Arial', font_size: 10, bold:true } );
pObj.addLineBreak ();
pObj.addLineBreak ();
pObj.addText ( 'Maximum prijs Investering Aankoop: ' +CalcFinish +' €', { font_face: 'Arial', font_size: 10, bold:true } );
}

} else {
}
}
docx.putPageBreak ();


var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Besluit', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var tableRaming = [
	['Gelet op de ligging van het Onroerend Goed','Gelet op onze berekeningen'],
	['Gelet op de staat van onderhoud','Gelet op ons plaatsbezoek dd'],
]

var pObj = docx.createTable (tableRaming, tableStyle);

var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Ramen wij volgende waarden:', { font_face: 'Arial', font_size: 10, bold:true } );



var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Venale Waarde: ' +ToStandCalc  +' €', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();


var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'Gedwongen Verkoopwaarde: ' +forcedCalc +' €', { font_face: 'Arial', font_size: 12, bold:true } );
pObj.addHorizontalLine ();

var pObj = docx.createP ();
pObj.addLineBreak ();
pObj.addText ( 'GEBRUIK VAN HET SCHATTINGSVERSLAG EN VERANTWOORDELIJKHEID EXPERT', { font_face: 'Arial', font_size: 10, bold:true } );
pObj.addLineBreak ();
pObj.addText ( '1) De expert heeft het Onroerend Goed bezocht en het rapport opgesteld naar best vermogen.', { font_face: 'Arial', font_size: 10} );
pObj.addLineBreak ();
pObj.addText ( '2) De expert - Taxateur heeft geen persoonlijke belangen bij het opstellen van dit rapport.', { font_face: 'Arial', font_size: 10} );
pObj.addLineBreak ();
pObj.addText ( '3) De expert - Taxateur heeft de inlichtingen die door de eigenaars aangebracht zijn voor waar aangenomen en geen onderzoek gedaan naar eventuele verborgen gebreken en stedenbouwkundige inbreuken.', { font_face: 'Arial', font_size: 10} );
pObj.addLineBreak ();
pObj.addText ( '4) Deze waardebepaling houdt géén rekening met enige vorm van bodemverontreiniging.', { font_face: 'Arial', font_size: 10} );
pObj.addLineBreak ();
pObj.addLineBreak ();
pObj.addText ( 'Ik bevestig dat ik mijn opdracht in eer en geweten, nauwgezet en eerlijk vervuld heb.', { font_face: 'Arial', font_size: 10, bold:true} );
pObj.addLineBreak ();
pObj.addLineBreak ();
pObj.addText ( 'Eddy Gaethofs', { font_face: 'Arial', font_size: 10, bold:true} );

var docname = ListStreettxt + '-' + ListNumber + '-' + ListCitytxt + '-' +ListZipcode;
var docnamestrip = docname.replace(/\s/g, '');

var DocLinkBtn = document.getElementById("worddocx");
document.getElementById("worddocx").href = '../fs/docs/'+ docnamestrip +'.docx';
DocLinkBtn.style.removeProperty('display');

var out = fs.createWriteStream ( 'fs/docs/'+ docnamestrip +'.docx' );

out.on ( 'error', function ( err ) {
	console.log ( err );
});

async.parallel ([
	function ( done ) {
		out.on ( 'close', function () {
			console.log ( 'Finish to create a DOCX file.' );
			done ( null );
		});
		docx.generate ( out );
	}

], function ( err ) {
	if ( err ) {
		console.log ( 'error: ' + err );
	} // Endif.
});




};






// PREVIEW DOCUMENT GENERATOR



//Doc Gen
onDocRenderClick = function() {

      DocumentAlert();



  $.getJSON('../assets/fod/FodTabel.json', function(data) {

  var ListCitytxtFod = $("#ListCity option:selected").text();
  var Citnam = "$.array[?(@.Gemeente=='"+ListCitytxtFod+"')].Gem"
  result = jsonPath(data, Citnam);
  result0 = result[0]
  result1 = result[1]
  result2 = result[2]
  result3 = result[3]
  result4 = result[4]
  result5 = result[5]
  result6 = result[6]

  if (result0 == null){
      result0 = "/"
  }
  else {
      result0 = result[0].toFixed(2)
  }

  if (result1 == null){
      result1 = "/"
  }
  else {
      result1 = result[1].toFixed(2)
  }

  if (result2 == null){
      result2 = "/"
  }
  else {
      result2 = result[2].toFixed(2)
  }

  if (result3 == null){
      result3 = "/"
  }
  else {
      result3 = result[3].toFixed(2)
  }

  if (result4 == null){
      result4 = "/"
  }
  else {
      result4 = result[4].toFixed(2)
  }

  if (result5 == null){
      result5 = "/"
  }
  else {
      result5 = result[5].toFixed(2)
  }

  if (result6 == null){
      result6 = "/"
  }
  else {
      result6 = result[6].toFixed(2)
  }

  //}
  document.getElementById("fodres0").innerHTML = result0;
  document.getElementById("fodres1").innerHTML = result1;
  document.getElementById("fodres2").innerHTML = result2;
  document.getElementById("fodres3").innerHTML = result3;
  document.getElementById("fodres4").innerHTML = result4;
  document.getElementById("fodres5").innerHTML = result5;
  document.getElementById("fodres6").innerHTML = result6;

  });


onMathClick();

    var ListCitytxtdLC = $("#ListCity option:selected").text();
    var ListStreettxtdLC = $("#ListStreet option:selected").text();
    var ListZipcodedLC = document.getElementById("ListZipcode").value;
    var ListNumberdLC = document.getElementById("ListNumber").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://loc.geopunt.be/v4/Location?q=' +ListStreettxtdLC+ '%20' +ListNumberdLC+ '%20' +ListCitytxtdLC+ '%20' +ListZipcodedLC+ '&c=1', false);
    xhr.send();

    var Respon = xhr.responseText;
    var json = JSON.parse(xhr.responseText);

    var LLXlam = (+json.LocationResult[0].BoundingBox.LowerLeft.X_Lambert72 - 180);
    var LLYlam = (+json.LocationResult[0].BoundingBox.LowerLeft.Y_Lambert72 - 180);
    var URXlam = (+json.LocationResult[0].BoundingBox.UpperRight.X_Lambert72 + 180);
    var URYlam = (+json.LocationResult[0].BoundingBox.UpperRight.Y_Lambert72 + 180);

    document.getElementById("GRBImgDoc").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=GRB_RPD&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=300&HEIGHT=300");

  //  document.getElementById("CadImgDoc").src = ("https://ccff02.minfin.fgov.be/cadgisWMS/CadastralLayers/MapServer/WMSServer?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES&LAYERS=Cadastral%20building%2CCadastral%20Parcel%2CCadastral%20block%2CCadastral%20sheet%2CCadastral%20division%2CCadastral%20section&FORMAT=image%2Fpng&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG%3A31370&STYLES=&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=600&HEIGHT=600");

    document.getElementById("GewestImgDoc").src = ("https://www.mercator.vlaanderen.be/raadpleegdienstenmercatorpubliek/ows?SERVICE=WMS&SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=raster&VERSION=1.3.0&LAYERS=lu:lu_gwp_rv_raster&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=300&HEIGHT=300");

    document.getElementById("Back1ImgDoc").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart-grijs/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=GRB_BSK_GRIJS&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=300&HEIGHT=300");
    document.getElementById("VoorkoopImgDoc").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/RVVAfbak/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=RVVSbz,RVVWenZ,RVVWoonCode,RVVScheepvrt,RVVIntgrWatBel,RVVNatRes&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=300&HEIGHT=300");

    document.getElementById("Back2ImgDoc").src = ("https://geoservices.informatievlaanderen.be/raadpleegdiensten/GRB-basiskaart-grijs/wms?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0&STYLES=&LAYERS=GRB_BSK_GRIJS&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=300&HEIGHT=300");
    document.getElementById("Water1ImgDoc").src = ("http://inspirepub.waterinfo.be/arcgis/services/Overstromingsgevoelige_gebieden_2017/MapServer/WMSServer?request=GetMap&service=WMSS&VERSION=1.3.0&STYLES=&LAYERS=0&FORMAT=image/png&BGCOLOR=0xFFFFFF&TRANSPARENT=TRUE&CRS=EPSG:31370&BBOX="+LLXlam+","+LLYlam+","+URXlam+","+URYlam+"&WIDTH=300&HEIGHT=300");


  var Dosnumber = document.getElementById("Dosnumber").value;
  var DosDate = document.getElementById("DosDate").value;
  var AFirstName = document.getElementById("AFirstName").value;
  var ALastName = document.getElementById("ALastName").value;
  var ACompany= document.getElementById("ACompany").value;
  var ANumberCompany = document.getElementById("ANumberCompany").value;
  var ACity = document.getElementById("ACity").value;
  var AStreetID = document.getElementById("AStreetID").value;
  var BFirstName = document.getElementById("BFirstName").value;
  var BLastName = document.getElementById("BLastName").value;
  var BCompany = document.getElementById("BCompany").value;
  var BNumberCompany = document.getElementById("BNumberCompany").value;
  var BCity = document.getElementById("BCity").value;
  var BStreetID = document.getElementById("BStreetID").value;
  var ListCity = document.getElementById("ListCity").value;
  var ListCitytxt = $("#ListCity option:selected").text();
  var ListZipcode = document.getElementById("ListZipcode").value;
  var ListStreet = document.getElementById("ListStreet").value;
  var ListStreettxt = $("#ListStreet option:selected").text();
  var ListNumber = document.getElementById("ListNumber").value;
  var ManualStreet = document.getElementById("ManualStreet").value;
  var District = document.getElementById("District").value;
  var NisCode = document.getElementById("NisCode").value;
  var Section = document.getElementById("Section").value;
  var SubSection = document.getElementById("SubSection").value;
  var NGki = document.getElementById("NGki").value;
  var Gki = document.getElementById("Gki").value;
  var OwnageProperty = document.getElementById("OwnageProperty").value;
  var SplittedLot = document.getElementById("SplittedLot").value;
  var Flooding = document.getElementById("Flooding").value;
  var RealFlooding = document.getElementById("RealFlooding").value;
  var BuildCont = document.getElementById("BuildCont").value;
  var Inherited = document.getElementById("Inherited").value;
  var UndefZone = document.getElementById("UndefZone").value;
  var FirstSale = document.getElementById("FirstSale").value;
  var AreaFront = document.getElementById("AreaFront").value;
  var AreaBack = document.getElementById("AreaBack").value;
  var ConfigRegularity = document.getElementById("ConfigRegularity").value;
  var Zoning = document.getElementById("Zoning").value;
  var BuildFront = document.getElementById("BuildFront").value;
  var BuildBack = document.getElementById("BuildBack").value;
  var WidthArea = document.getElementById("WidthArea").value;
  var DepthArea = document.getElementById("DepthArea").value;
  var FrontType = document.getElementById("FrontType").value;
  var BackType = document.getElementById("BackType").value;
  var FrontMiddlePrice = document.getElementById("FrontMiddlePrice").value;
  var FrontOwnPrice = document.getElementById("FrontOwnPrice").value;
  var BackMiddlePrice = document.getElementById("BackMiddlePrice").value;
  var BackOwnPrice = document.getElementById("BackOwnPrice").value;
  var DevelopmentNumber = document.getElementById("DevelopmentNumber").value;
  var InvestType = document.getElementById("InvestType").value;
  var DevTotalBuildArea = document.getElementById("DevTotalBuildArea").value;
  var DevelopmentUnits = document.getElementById("DevelopmentUnits").value;
  var DevMiddlePrice = document.getElementById("DevMiddlePrice").value;
  var DevOwnPrice = document.getElementById("DevOwnPrice").value;
  var InvestTotalBuildArea = document.getElementById("InvestTotalBuildArea").value;
  var InvestSale = document.getElementById("InvestSale").value;
  var InvestDetail = document.getElementById("InvestDetail").value;
  var RoiPlan = document.getElementById("RoiPlan").value;
  var NotaryCost = document.getElementById("NotaryCost").value;

  var checkbox = document.getElementById("ManualCheck");

  document.getElementById("dos").innerHTML = Dosnumber;
  document.getElementById("date").innerHTML = DosDate;
  document.getElementById("Afn").innerHTML = AFirstName;
  document.getElementById("Aln").innerHTML = ALastName;
  document.getElementById("Acom").innerHTML = ACompany;
  document.getElementById("Anumb").innerHTML = ANumberCompany;
  document.getElementById("Acity").innerHTML = ACity;
  document.getElementById("Astrnum").innerHTML = AStreetID;
  document.getElementById("Bfn").innerHTML = BFirstName;
  document.getElementById("Bln").innerHTML = BLastName;
  document.getElementById("Bcom").innerHTML = BCompany;
  document.getElementById("Bnumb").innerHTML = BNumberCompany;
  document.getElementById("Bcity").innerHTML = BCity;
  document.getElementById("Bstrnum").innerHTML = BStreetID;
  document.getElementById("LstCity").innerHTML = ListCitytxt;
  document.getElementById("LstZip").innerHTML = ListZipcode;
  document.getElementById("LstNumb").innerHTML = ListNumber;
  document.getElementById("Dist").innerHTML = District;
  document.getElementById("Nis").innerHTML = NisCode;
  document.getElementById("Sect").innerHTML = Section;
  document.getElementById("SubSect").innerHTML = SubSection;
  document.getElementById("dcNgki").innerHTML = NGki;
  document.getElementById("dcGki").innerHTML = Gki;
  document.getElementById("valdate").innerHTML = DosDate;
  document.getElementById("ownage").innerHTML = OwnageProperty;
  document.getElementById("SplittedLotdc").innerHTML = SplittedLot;
  document.getElementById("Floodingdc").innerHTML = Flooding;
  document.getElementById("RealFloodingdc").innerHTML = RealFlooding;
  document.getElementById("BuildContdc").innerHTML = BuildCont;
  document.getElementById("Inheriteddc").innerHTML = Inherited;
  document.getElementById("UndefZonedc").innerHTML = UndefZone;
  document.getElementById("FirstSaledc").innerHTML = FirstSale;
  document.getElementById("DepthAreadc").innerHTML = DepthArea;
  document.getElementById("WidthAreadc").innerHTML = WidthArea;
  document.getElementById("AreaFrontdc").innerHTML = AreaFront;
  document.getElementById("Zoningdc").innerHTML = Zoning;
  document.getElementById("ConfigRegularitydc").innerHTML = ConfigRegularity;
  document.getElementById("AreaBackdc").innerHTML = AreaBack;
  document.getElementById("ZoningFrontdc").innerHTML = FrontType;
  document.getElementById("ZoningBackdc").innerHTML = BackType;
  document.getElementById("SizeAlfa").innerHTML = AreaFront;
  document.getElementById("PriceAlfa").innerHTML = FrontOwnPrice;
  document.getElementById("BuildAlfa").innerHTML = BuildFront;
  document.getElementById("SizeBeta").innerHTML = AreaBack;
  document.getElementById("PriceBeta").innerHTML = BackOwnPrice;
  document.getElementById("BuildBeta").innerHTML = BuildBack;
  document.getElementById("DevelopmentNumberDC").innerHTML = DevelopmentNumber;
  document.getElementById("DevOwnPriceDC").innerHTML = DevOwnPrice;
  document.getElementById("DevelopmentNumberDCHome").innerHTML = DevelopmentNumber;
  document.getElementById("DevOwnPriceDCHome").innerHTML = DevOwnPrice;
  document.getElementById("DevelopmentUnitsDC").innerHTML = DevelopmentUnits;
  document.getElementById("DevOwnPriceDCApp").innerHTML = DevOwnPrice;

  if(checkbox.checked) {
    document.getElementById("LstStreet").innerHTML = ManualStreet;
  } else {
    document.getElementById("LstStreet").innerHTML = ListStreettxt;
  }

  var home = document.getElementById('InvestType').value;
  var LotInvestShowed = document.getElementById('ShowLottedInvest');
  var HomeInvestShowed = document.getElementById('ShowHomeInvest');
  var AppInvestShowed = document.getElementById('ShowAppInvest');
  if (home == 0) {
      LotInvestShowed.style.display = "none";
      HomeInvestShowed.style.display = "none";
      AppInvestShowed.style.display = "none";
  }
  if (home == 1) {
      LotInvestShowed.style.display = "block";
      HomeInvestShowed.style.display = "none";
      AppInvestShowed.style.display = "none";
  }
  if (home == 2) {
      LotInvestShowed.style.display = "none";
      HomeInvestShowed.style.display = "block";
      AppInvestShowed.style.display = "none";
  }
  if (home == 3) {
      LotInvestShowed.style.display = "none";
      HomeInvestShowed.style.display = "none";
      AppInvestShowed.style.display = "block";
  } else {
  }


  if (document.getElementById('LayoutCheck1').checked) {
    var dc1 = document.getElementById("doslay1");
    dc1.style.display = "none";
  } else {
    var dc1 = document.getElementById("doslay1");
    dc1.style.display = "block";
  }

  if (document.getElementById('LayoutCheck2').checked) {
    var dc2 = document.getElementById("doslay2");
    dc2.style.display = "none";
  } else {
    var dc2 = document.getElementById("doslay2");
    dc2.style.display = "block";
  }

  if (document.getElementById('LayoutCheck3').checked) {
    var dc3 = document.getElementById("doslay3");
    dc3.style.display = "none";
  } else {
    var dc3 = document.getElementById("doslay3");
    dc3.style.display = "block";
  }

  if (document.getElementById('LayoutCheck4').checked) {
    var dc4 = document.getElementById("doslay4");
    dc4.style.display = "none";
  } else {
    var dc4 = document.getElementById("doslay4");
    dc4.style.display = "block";
  }

  if (document.getElementById('LayoutCheck5').checked) {
    var dc5 = document.getElementById("doslay5");
    dc5.style.display = "none";
  } else {
    var dc5 = document.getElementById("doslay5");
    dc5.style.display = "block";
  }

  if (document.getElementById('LayoutCheck6').checked) {
    var dc6 = document.getElementById("doslay6");
    dc6.style.display = "none";
  } else {
    var dc6 = document.getElementById("doslay6");
    dc6.style.display = "block";
  }

  if (document.getElementById('LayoutCheck7').checked) {
    var dc7 = document.getElementById("doslay7");
    dc7.style.display = "none";
  } else {
    var dc7 = document.getElementById("doslay7");
    dc7.style.display = "block";
  }

  if (document.getElementById('LayoutCheck8').checked) {

    var x = document.getElementsByClassName("doslay8");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

  } else {
    var x = document.getElementsByClassName("doslay8");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";

  }
}


};
