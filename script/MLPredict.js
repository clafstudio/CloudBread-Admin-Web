// ML columns
var Nickname, Gender, Login, CashDate, JoinDate, Cash, Level, Country, Coupon, Device, Accumulate, RareItem;
var EmailConfirm, Recommender, Bestitem1, Bestitem2, Bestitem3, GiftTo, GiftFrom;
var host = "/";

var Members = new Array();

function leaver() {
  $("#probab").empty();
  $("#submit_loading").append('<br>' +
    'Loading...<br>' +
    '<div id="loading">●</div>'
  );
  var memberID = document.getElementById("memberID").value;
  var promise_mem = new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url: host + "odata/Members?$filter=MemberID%20eq%20'" + memberID + "'",
      dataType: "text",
      error: function() {
        reject("Fail");
        alert('Host not found! Please check the host name.');
      },
      success: function(data) {
        var pars = JSON.parse(data);
        var value = pars['value'];
        if(value.length == "0") {
          alert('Do not exist this Member!');
          $("#submit_loading").empty();
          reject(Error("Fail"));
        } else {
          Nickname = value[0]['Name1'];
          EmailConfirm = value[0]['EmailConfirmedYN'];
          Recommender = value[0]['Recommender']?'Y':'N';
          Gender = value[0]['sCol1'];
          Device = value[0]['sCol2'];
          Country = value[0]['sCol3'];
          Login = value[0]['sCol4'];
          RareItem = parseInt(value[0]['sCol5']);
          Bestitem1 = value[0]['sCol6'];
          Bestitem2 = value[0]['sCol7'];
          Bestitem3 = value[0]['sCol8'];
          Coupon = value[0]['sCol9'];
          JoinDate = parseInt(value[0]['CreatedAt'].substring(0,4)
           + value[0]['CreatedAt'].substring(5,7)
           + value[0]['CreatedAt'].substring(8,10));
          resolve("Complete");
        }
      }
    });
  });
  var promise_level = new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url: host + "odata/MemberGameInfoes?$filter=MemberID%20eq%20'" + memberID + "'",
      dataType: "text",
      error: function() {
        reject("Fail");
      },
      success: function(data) {
        var pars = JSON.parse(data);
        var value = pars['value'];

        Level = value[0]['Level'];
        resolve("Complete");
      }
    });
  });
  var promise_cash = new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url: host + "odata/MemberItemPurchases?$filter=MemberID%20eq%20'" + memberID + "'",
      dataType: "text",
      error: function() {
        reject("Fail");
      },
      success: function(data) {
        var pars = JSON.parse(data);
        var value = pars['value'];
        var size = value.length - 1;
        Accumulate = 0;

        Cash = parseInt(value[size]['PurchasePrice']);
        CashDate = parseInt(value[size]['PurchaseDT'].substring(0,4)
         + value[size]['PurchaseDT'].substring(5,7)
         + value[size]['PurchaseDT'].substring(8,10));

        for(var i = 0; i <= size; i++) {
          Accumulate += parseInt(value[i]['PurchasePrice']);
        }
        resolve("Complete");
      }
    });
  });
  var promise_giftTo = new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url: host + "odata/GiftDepositories?$filter=FromMemberID%20eq%20'" + memberID + "'",
      dataType: "text",
      error: function() {
        reject("Fail");
      },
      success: function(data) {
        var pars = JSON.parse(data);
        var value = pars['value'];
        GiftTo = parseInt(value.length);
        resolve("Complete");
      }
    });
  });
  var promise_giftFrom = new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url: host + "odata/GiftDepositories?$filter=ToMemberID%20eq%20'" + memberID + "'",
      dataType: "text",
      error: function() {
        reject(Error("Fail"));
        alert('Host not found! Please check the host name.');
      },
      success: function(data) {
        var pars = JSON.parse(data);
        var value = pars['value'];
        GiftFrom = parseInt(value.length);
        resolve("Complete");
      }
    });
  });

  Promise.all([promise_giftFrom, promise_giftTo, promise_cash, promise_mem
    , promise_level]).then(function() {
      var requestVal = {
      "Inputs": {
        "input1": {
          "ColumnNames": [
            "Nickname",
            "Gender",
            "Login",
            "CashDate",
            "JoinDate",
            "Cash",
            "Level",
            "Country",
            "Coupon",
            "Device",
            "Accumulate",
            "RareItem",
            "EmailConfirm",
            "Recommender",
            "Bestitem1",
            "Bestitem2",
            "Bestitem3",
            "GiftTo",
            "GiftFrom",
            "Leave"
          ],
          "Values": [
            [
              Nickname,
              Gender,
              Login,
              CashDate,
              JoinDate,
              Cash,
              Level,
              Country,
              Coupon,
              Device,
              Accumulate,
              RareItem,
              EmailConfirm,
              Recommender,
              Bestitem1,
              Bestitem2,
              Bestitem3,
              GiftTo,
              GiftFrom,
              "1"
            ]
          ]
        }
      },
      "GlobalParameters": {
        "New column names": "Leave"
      }
    }

    var JsonRequest = JSON.stringify(requestVal);
      $.ajax({
        url: host + "api/values",
        type: "POST",
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        data: '=' + JsonRequest,
        error: function() {
          alert('Fail...');
          $("#submit_loading").empty();
        }
      }).done(function (data) {
        console.log(data);
        var pars = JSON.parse(data);
        var value = pars['Results']['output1']['value']['Values'];
        var arr_size = parseFloat(value[0].length) - 1;
        var result = parseFloat(value[0][arr_size]);

        result = parseInt(result * 100.0);
        $("#submit_loading").empty();
        $("#probab").empty();
        $("#probab").append("이탈 확률 : " + result + " %");
      });
  });
}

function MLPredict() {
  $('ul#nav li').removeClass('active');
  $('#main4').addClass('active');
  $('ul#nav li.active > ul li').removeClass('subactive');
  $('#sub42').addClass('subactive');
  makeButton();
}

function makeButton() {
  var pro_members = new Promise(function (resolve, reject) {
    $.ajax({
      type: "GET",
      url: host + "odata/Members?$top=1",
      dataType: "text",
      error: function() {
        reject("Fail");
        alert('Host not found! Please check the host name.');
      },
      success: function(data) {
        var pars = JSON.parse(data);
        var value = pars['value'];
        var col_name = Object.keys(value[0]);
        for(var i = 0; i < col_name.length; i++) {
          Members[i] = col_name[i];
        }
        resolve("Complete");
      }
    });
  });

  Promise.all([pro_members]).then(function() {
    $("#first_loading").empty();
    $("#SelectCol").empty();

    for(var i = 0; i < Members.length; i++) {
      $("#SelectCol").append('<input type="checkbox" id="' + Members[i] + '">' +
        '<label for="' + Members[i] + '" class="btn">' + Members[i] + '</label>');
    }
    $("#SelectCol").append('<br><div style="margin-top:20px; margin-left:10px;' +
      'color:#4C5ACC; font-size:16px;">예측할 사용자 입력</div>' +
      '<input id="memberID"></input>');
    $("#SelectCol").append('<br><button id="submitML" onclick="leaver()">' +
      '<span>Predict </span></button>');
  });
}

function checkBtn(sel_arr, all_arr) {
  for(var i = 0; i < all_arr.length; i++) {
    if ($('#' + all_arr[i]).is(":checked")) {
      sel_arr.push(all_arr[i]);
    }
  }
}
