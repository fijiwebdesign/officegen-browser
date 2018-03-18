//$(document).ready(function() {
//  $("#loadtop").delay(4000)
//      .slideUp(500)
//});

window.setTimeout(function () {
    $('#LoadingMessage').text('Modules Inladen');
},0);

window.setTimeout(function () {
    $('#LoadingMessage').text('Controleren voor updates');
}, 1500);

window.setTimeout(function () {
    $('#LoadingMessage').text('');
    document.getElementById('actiondiv').innerHTML = '<button class="actionbtn btn btn-secondary"><i class="iconbtnsz fa-download fal" ></i> Update</button><button class="iconbtnsz actionbtn btn btn-secondary"><i class="iconbtnsz fa-archive fal" ></i> Backup</button>';
    document.getElementById('skipdiv').innerHTML = '<a href="#" id="skiplink" onclick="onSkipLink()">Update overslaan</a>';
}, 3500);

onSkipLink = function() {
    $("#loadtop")
        .slideUp(500)
}

onAccountClick = function() {
  var account = document.getElementById("account");
  var backup = document.getElementById("backup");

    if (account.style.display === "none") {
        account.style.display = "block";
    } else {
        account.style.display = "block";
    }

    if (backup.style.display === "none") {
        backup.style.display = "none";
    } else {
        backup.style.display = "none";
    }

}

onBackupClick = function() {
  var account = document.getElementById("account");
  var backup = document.getElementById("backup");

    if (backup.style.display === "none") {
        backup.style.display = "block";
    } else {
        backup.style.display = "block";
    }

    if (account.style.display === "none") {
        account.style.display = "none";
    } else {
        account.style.display = "none";
    }

}
