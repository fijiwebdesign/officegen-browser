SaveAlert = function() {

StreetNameCheck();

document.getElementById('messagebox1').innerHTML = "<div class='alert alert-blue'> <p> Dossier " + ListStreetFileName + ' ' + ListNumber + ' ' + ListCitytxt + ' ' +ListZipcode +" Is Opgeslagen.</p></div>"

window.setTimeout(function () {
    $(".alert-blue").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
    });
}, 3000);
}


LoadAlert = function() {

document.getElementById('messagebox2').innerHTML = "<div class='alert alert-blue'> <p> Dossier " + filenameAlfa + " is Ingeladen.</p></div>"

window.setTimeout(function () {
    $(".alert-blue").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
    });
}, 3000);
}

DeleteAlert = function() {
document.getElementById('messagebox2').innerHTML = "<div class='alert alert-blue'> <p> Dossier " + filenameBeta + " is Verwijderd.</p></div>"

window.setTimeout(function () {
    $(".alert-blue").fadeTo(500, 0).slideUp(500, function () {
        $(this).remove();
    });
}, 3000);
}


DocumentAlert = function() {

  document.getElementById('messagebox4').innerHTML = '<div class="alert alert-doced"><a href="" class="btn wordbtn" id="worddocx" style="display:none;"><i class="fa fal fa-file-word"></i> Download Wordfile</a></div>'

}
