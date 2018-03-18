onSaveClick = function() {

  var fs = require("fs");

      BaseObject();

//Create Save Object
  var SaveObject = {
      Dosnumber: Dosnumber,
      DosDate: DosDate,
      AFirstName: AFirstName,
      ALastName: ALastName,
      ACompany: ACompany,
      ANumberCompany: ANumberCompany,
      ACity: ACity,
      AStreetID: AStreetID,
      BFirstName: BFirstName,
      BLastName: BLastName,
      BCompany: BCompany,
      BNumberCompany: BNumberCompany,
      BCity: BCity,
      BStreetID: BStreetID,
      ListCity: ListCity,
      ListCitytxt: ListCitytxt,
      ListZipcode: ListZipcode,
      ListStreettxt: ListStreettxt,
      ListNumber: ListNumber,
      ManualStreet: ManualStreet,
      District: District,
      NisCode: NisCode,
      Section: Section,
      SubSection: SubSection,
      NGki: NGki,
      Gki: Gki,
      OwnageProperty: OwnageProperty,
      SplittedLot: SplittedLot,
      Flooding: Flooding,
      RealFlooding: RealFlooding,
      BuildCont: BuildCont,
      Inherited: Inherited,
      UndefZone: UndefZone,
      FirstSale: FirstSale,
      AreaFront: AreaFront,
      AreaBack: AreaBack,
      ConfigRegularity: ConfigRegularity,
      Zoning: Zoning,
      BuildFront: BuildFront,
      BuildBack: BuildBack,
      WidthArea: WidthArea,
      DepthArea: DepthArea,
      FrontType: FrontType,
      BackType: BackType,
      FrontMiddlePrice: FrontMiddlePrice,
      FrontOwnPrice: FrontOwnPrice,
      BackMiddlePrice: BackMiddlePrice,
      BackOwnPrice: BackOwnPrice,
      DevelopmentNumber: DevelopmentNumber,
      InvestType: InvestType,
      DevTotalBuildArea: DevTotalBuildArea,
      DevelopmentUnits: DevelopmentUnits,
      DevMiddlePrice: DevMiddlePrice,
      DevOwnPrice: DevOwnPrice,
      InvestTotalBuildArea: InvestTotalBuildArea,
      InvestSale: InvestSale,
      InvestDetail: InvestDetail,
      RoiPlan: RoiPlan,
      NotaryCost: NotaryCost,
      ManualCheck: ManualCheck,
      LayoutCheck1: LayoutCheck1,
      LayoutCheck2: LayoutCheck2,
      LayoutCheck3: LayoutCheck3,
      LayoutCheck4: LayoutCheck4,
      LayoutCheck5: LayoutCheck5,
      LayoutCheck6: LayoutCheck6,
      LayoutCheck7: LayoutCheck7,
      LayoutCheck8: LayoutCheck8,
      LayoutCheck9: LayoutCheck9,
      LayoutCheck10: LayoutCheck10
  }
//Write Object to Json File

    StreetNameCheck();

// Write Filename Check

  fs.writeFile('./fs/one/' + ListStreetFileName + '*' + ListNumber + '*' + ListCitytxt + '*' +ListZipcode +'.json', JSON.stringify(SaveObject, null, 4), (err) => {
      if (err) {
          console.error(err);
          return;
      };
      console.log("File has been created");
  });

      SaveAlert();

};









// Function That Reads Directory /fs/one/ and creates a table with Loadfunction
onReadDirClick = function() {
const fs = require('fs')
const os = require('os')
const path = require('path');
const readfiles = path.resolve(__dirname, '..', '..', 'fs', 'one');
var table = document.getElementById("loadingtable");
var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var rows = "";
fs.readdirSync(readfiles).forEach((file) => {
    table.insertRow(0);
    var load = file.split("*")
    rows += `<tr>
     <td>${load[0]}</td>
     <td>${load[1]}</td>
     <td>${load[2]}</td>
     <td>${load[3].replace('.json','')}</td>
     <td><a onclick="onJsonLoadClick()"><i class="fa Cleanlink fontaw fa-save fal"></i></a></td>
     <td><a onclick="onJsonDeleteClick()"><i class="fa Cleanlink fontaw fa-trash-alt fal"></i></a></td>
     </tr>`;
  });
document.getElementById('loadingtable').innerHTML = rows;
};

//Function that based on the cell row stitches together the cells to form the filename
//GetJson Loading function that loads INPUTFIELDS and SELECTOPTIONS
onJsonLoadClick = function() {
    const path = require('path');
    var table = document.getElementsByTagName("table")[0];
    var tbody = table.getElementsByTagName("tbody")[0];

    var empcel = document.getElementById("ListStreet");
    var length = empcel.options.length;
    for (i = 0; i < length; i++) {
      empcel.options[i] = null;
    }


    tbody.onclick = function (e) {
        e = e || window.event;
        var cel = [];
        var target = e.srcElement || e.target;
        while (target && target.nodeName !== "TR") {
            target = target.parentNode;
        }
        if (target) {
            var cells = target.getElementsByTagName("td");
            for (var i = 0; i < 4; i++) {
                cel.push(cells[i].innerHTML);
            }
        }
        var filename = cel[0] + "*" + cel[1] + "*" + cel[2] + "*" + cel[3] + ".json";
        filenameAlfa = cel[0] + " " + cel[1] + " " + cel[2] + " " + cel[3] ;
        var filename = encodeURIComponent(filename.trim())

        $.getJSON('../fs/one/' +filename, function(data) {
            $('#ListStreet').append($("<option></option>").text(data.ListStreettxt));
            for (var i in data) {
                $('input[name="'+i+'"]').val(data[i]);
                $('select[id="'+i+'"]').val(data[i]);
                $('input[id="'+i+'"]').prop('checked', data[i]);
            }
        });

        LoadAlert();

    };
    //RECHECK MANUEEL STREET

    setTimeout(Retrig, 1000);

};





onJsonDeleteClick = function() {
  const fs = require('fs')
  const path = require('path');
  var table = document.getElementsByTagName("table")[0];
  var tbody = table.getElementsByTagName("tbody")[0];
  tbody.onclick = function (e) {
      e = e || window.event;
      var cel = [];
      var target = e.srcElement || e.target;
      while (target && target.nodeName !== "TR") {
          target = target.parentNode;
      }
      if (target) {
          var cells = target.getElementsByTagName("td");
          for (var i = 0; i < 4; i++) {
              cel.push(cells[i].innerHTML);
          }
      }
      var filename = cel[0] + "*" + cel[1] + "*" + cel[2] + "*" + cel[3] + ".json";
      filenameBeta = cel[0] + " " + cel[1] + " " + cel[2] + " " + cel[3] ;

  var filepath = 'fs/one/' +filename ;// Previously saved path somewhere

    DeleteAlert();

  if (fs.existsSync(filepath)) {
      fs.unlink(filepath, (err) => {
          if (err) {
              alert("An error ocurred updating the file" + err.message);
              console.log(err);
              return;
          }
      });
  } else {
      alert("Dit Dossier Bestaat Niet Meer!");
  }
}



};
