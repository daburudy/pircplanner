function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  /*An array containing all the country names in the world:*/
  var countries = ['Angeles,Pampanga','Apalit, Pampanga', 'Arayat, Pampanga', 'Bacolor, Pampanga', 'Candaba, Pampanga',
   'Floridablanca, Pampanga', 'Guagua, Pampanga', 'Lubao, Pampanga', 'Mabalacat, Pampanga',
    'Macabebe, Pampanga', 'Magalang, Pampanga', 
    'Mexico, Pampanga', 'Minalin, Pampanga', 'Porac, Pampanga', 'San Fernando, Pampanga'
     ,'San Luis, Pampanga', 'San Simon, Pampanga', 'Santa Ana, Pampanga',
      'Santa Rita, Pampanga', 'Santo Tomas, Pampanga', 'Sasmuan, Pampanga']
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), countries);
 
let trip = document.getElementById("btnt")

function radio() {
  document.getElementById("btnt").disabled = false;
}
 

 
/*increment*/
 let count = 0;
 let countz = 0
 let counts = 0
 let counts2 = 0
 let zero = document.getElementById("zero")
 let zero1 = document.getElementById("zero1")
 let zero2 = document.getElementById("zero2")
 let visitors = document.getElementById("visitors")
 let inc = document.getElementById("inc").value
 let inc1 = document.getElementById("inc1").value
 let inc2 = document.getElementById("inc2").value

 let subBtn1 = document.getElementById("sum")
let subBtn2 = document.getElementById("sum1")
let subBtn3 = document.getElementById("sum2")

 
 
 
 
let store = localStorage

function tripping() {
  let myInput = document.getElementById("myInput").value
  localStorage.setItem("place", myInput)
  let people = document.getElementById("people").value
  localStorage.setItem("sample", people)
  let guestS = document.getElementById("your-guest").value
  localStorage.setItem("guest", guestS)
  let containerV = document.getElementById("containerV")
/*sports*/
if (document.getElementById('prefer1').checked == true) {
  /*san fernando*/
 let hold1 = 'Bren Z. Guiao Sports Complex'
 let hold2 = 'AJ Amboy Sports'
 let hold3 = 'Sindalan Sports Complex'
 let hold4 = 'Philippines Sports Performance Plus'
 let hold5 = 'Pampanga Colisium'
 let hold6 = 'None'
 let hold7 = 'None'
let duh1 = localStorage.setItem('hi1', hold1)
let duh2 =localStorage.setItem('hi2', hold2)
let duh3 = localStorage.setItem('hi3', hold3)
let duh4 = localStorage.setItem('hi4', hold4)
let duh5 = localStorage.setItem('hi5', hold5)
let duh6 = localStorage.setItem('hi6', hold6)
let duh7 = localStorage.setItem('hi7', hold7)
/*guagua*/
let hold8 = 'GL Body Body Gym'
 let hold9 = 'Betis Gymnasium'
 let hold10 = 'Ascomo Basketball Court'
 let hold11 =  'None'
 let hold12 =  'None'
 let hold13=  'None'
 let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 = 'FLORIDABLANCA SPORTS CENTER'
 let hold16 = 'None'
 let hold17 = 'None'
 let hold18 =  'None'
 let hold19 =  'None'
 let hold20=  'None'
 let hold21=  'None'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = 'Jose Songco Sports Complex'
 let hold23 = 'None'
 let hold24 = 'None'
 let hold25 =  'None'
 let hold26 =  'None'
 let hold27=  'None'
 let hold28=  'None'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = 'Arayat Sports Complex'
 let hold30 = 'None'
 let hold31 = 'None'
 let hold32 =  'None'
 let hold33 =  'None'
 let hold34 =  'None'
 let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36= 'None'
 let hold37 = 'None'
 let hold38 = 'None'
 let hold39 =  'None'
 let hold40 =  'None'
 let hold41=  'None'
 let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 = 'Candaba Arena'
 let hold44 = 'None'
 let hold45 = 'None'
 let hold46 =  'None'
 let hold47 =  'None'
 let hold48=  'None'
 let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 ='None'
 let hold51 = 'None'
 let hold52 = 'None'
 let hold53 =  'None'
 let hold54 =  'None'
 let hold55=  'None'
 let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 = 'Sasmuan Basketball Court'
 let hold58 = 'None'
 let hold59 = 'None'
 let hold60 =  'None'
 let hold61 =  'None'
 let hold62=  'None'
 let hold63=  'None'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 =  'San Luis Sports Complex'
 let hold65 = 'None'
 let hold66 = 'None'
 let hold67 =  'None'
 let hold68 =  'None'
 let hold69=  'None'
 let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 = 'San Simon Covered Court'
 let hold72 = 'None'
 let hold73 = 'None'
 let hold74 =  'None'
 let hold75 =  'None'
 let hold76 =  'None'
 let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 = 'Oakland ClubHouse At Beverly Place Pampanga'
 let hold79 = 'None'
 let hold80 = 'None'
 let hold81 =  'None'
 let hold82 =  'None'
 let hold83=  'None'
 let hold84=  'None'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = 'None'
 let hold86 = 'None'
 let hold87 = 'None'
 let hold88 =  'None'
 let hold89 =  'None'
 let hold90 =  'None'
 let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi87', hold87)
let duh88 = localStorage.setItem('hi88', hold88)
let duh99 = localStorage.setItem('hi89', hold89)
let duh90=  localStorage.setItem('hi90', hold90)
let duh91 = localStorage.setItem('hi91', hold91)
/*santa rita*/
let  hold92 =  'Becuran Sports Complex'
 let hold93 = 'None'
 let hold94 = 'None'
 let hold95 =  'None'
 let hold96 =  'None'
 let hold97=  'None'
 let hold98=  'None'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 = 'None'
 let hold100 = 'None'
 let hold101 = 'None'
 let hold102= 'None'
 let hold103= 'None'
 let hold104 =  'None'
 let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 = 'None'
 let hold107= 'None'
 let hold108 = 'None'
 let hold109=  'None'
 let hold110=  'None'
 let hold111=  'None'
 let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Bren Z Guiao Magalang Sports Complex'
 let hold114= 'None'
 let hold115= 'None'
 let hold116=  'None'
 let hold117 =  'None'
 let hold118 =  'None'
 let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'None'
 let hold121= 'None'
 let hold122= 'None'
 let hold123 =  'None'
 let hold124=  'None'
 let hold125=  'None'
 let hold126=  'None'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'None'
 let hold128 = 'None'
 let hold129 = 'None'
 let hold130 =  'None'
 let hold131 =  'None'
 let hold132 =  'None'
 let hold133 =  'None'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 = 'None'
 let hold135 = 'None'
 let hold136 = 'None'
 let hold137 =  'None'
 let hold138 =  'None'
 let hold139=  'None'
 let hold140=  'None'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 = 'None'
 let hold142 = 'None'
 let hold143 = 'None'
 let hold144 =  'None'
 let hold145 =  'None'
 let hold146 =  'None'
 let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
}


/*NUMBER2*/
else if (document.getElementById('prefer2').checked == true) {
  let hold1 = 'North Walk'
  let hold2 = 'Sm City Pampanga'
  let hold3 = 'Walter Mart'
  let hold4 = 'Sm City Down Town'
  let hold5 = 'Vista Mall'
  let hold6 = 'Sm City Telabastagan'
  let hold7 = 'Robinsons Starmills'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)
/*guagua*/
let hold8 = 'Megamart guagua'
 let hold9 = 'Primark Center Guagua'
 let hold10 = 'Savemore Market Primark Guagua'
 let hold11 = "Robison's Easmart Megamart Guagua"
 let hold12 =  'None'
 let hold13=  'None'
 let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ='Chuzon Supermarket'
 let hold16 ='Orange Supermarket'
 let hold17 = 'None'
 let hold18 =  'None'
 let hold19 =  'None'
 let hold20=  'None'
 let hold21=  'None'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi10', hold17)
let duh18 = localStorage.setItem('hi11', hold18)
let duh19 = localStorage.setItem('hi12', hold19)
let duh20=  localStorage.setItem('hi13', hold20)
let duh21 = localStorage.setItem('hi14', hold21)
/*porac*/
let  hold22 ='GT7 MALL '
 let hold23 ='ORIGINAL BRANDED OUTLET '
 let hold24 = 'DANSA MART'
 let hold25 =  'Puregold Porac'
 let hold26 =  'None'
 let hold27=  'None'
 let hold28=  'None'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = 'GT7 MALL Arayat'
 let hold30 = '588 Shopping Mall'
 let hold31 =  'City Mall Arayat'
 let hold32 =  'None'
 let hold33 =  'None'
 let hold34 =  'None'
 let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36= '365 Shopping Mart '
 let hold37 = '588 Shopping Mall '
 let hold38 =  'Savemore Apalit'
 let hold39 =  'Super 99'
 let hold40 =   'Puregold Extra Apalit'
 let hold41=  'None'
 let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 = 'Paligue Street Market '
 let hold44 = 'Puregold '
 let hold45 = 'None'
 let hold46 =  'None'
 let hold47 =  'None'
 let hold48=  'None'
 let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 ='Watson Savemore Primark Macabebe '
 let hold51 ='Best Budget Macabebe '
 let hold52 = 'None'
 let hold53 =  'None'
 let hold54 =  'None'
 let hold55=  'None'
 let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  'Alfamart'
 let hold58 = 'None'
 let hold59 = 'None'
 let hold60 =  'None'
 let hold61 =  'None'
 let hold62=  'None'
 let hold63=  'None'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = 'Old San Luis Public Market'
 let hold65 = 'None'
 let hold66 = 'None'
 let hold67 =  'None'
 let hold68 =  'None'
 let hold69=  'None'
 let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 = 'San Simon Public Market'
 let hold72 = 'None'
 let hold73 = 'None'
 let hold74 =  'None'
 let hold75 =  'None'
 let hold76 =  'None'
 let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 = 'Primark Center Mexico'
 let hold79 = 'None'
 let hold80 = 'None'
 let hold81 =  'None'
 let hold82 =  'None'
 let hold83=  'None'
 let hold84=  'None'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = 'Alfamart'
 let hold86 = 'None'
 let hold87 = 'None'
 let hold88 =  'None'
 let hold89 =  'None'
 let hold90 =  'None'
 let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 =  'Alfamart'
 let hold93 = 'None'
 let hold94 = 'None'
 let hold95 =  'None'
 let hold96 =  'None'
 let hold97=  'None'
 let hold98=  'None'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 = 'Robinsons Easymart Sto. Tomas, Pampanga'
 let hold100 = 'None'
 let hold101 = 'None'
 let hold102= 'None'
 let hold103= 'None'
 let hold104 =  'None'
 let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 = 'Xiaoo clothing'
 let hold107= 'None'
 let hold108 = 'None'
 let hold109=  'None'
 let hold110=  'None'
 let hold111=  'None'
 let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 ='Pure Gold Magalang'
 let hold114= 'INDU'
 let hold115= 'None'
 let hold116=  'None'
 let hold117 =  'None'
 let hold118 =  'None'
 let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 =  'City Mall Dau'
 let hold121= 'None'
 let hold122= 'None'
 let hold123 =  'None'
 let hold124=  'None'
 let hold125=  'None'
 let hold126=  'None'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'None'
 let hold128 = 'None'
 let hold129 = 'None'
 let hold130 =  'None'
 let hold131 =  'None'
 let hold132 =  'None'
 let hold133 =  'None'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='SM City Clark'
 let hold135 = 'Clark Cityfront'
 let hold136 = "Robinson's Place Balibago"
 let hold137 =   'Marquee Mall'
 let hold138 =  'Nepo Mart'
 let hold139=  'The Shoppes'
 let hold140=  'None'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 = 'None'
 let hold142 = 'None'
 let hold143 = 'None'
 let hold144 =  'None'
 let hold145 =  'None'
 let hold146 =  'None'
 let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
}

/*5*/
 else if (document.getElementById('prefer5').checked == true) {
  let hold1 = 'None'
  let hold2 = 'None'
  let hold3 = 'None'
  let hold4 = 'None'
  let hold5 = 'None'
  let hold6 = 'None'
  let hold7 = 'None'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'None'
let hold9 = 'None'
let hold10 = 'None'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ='Basa Air Base'
let hold16 ='1876 Heritage San Jose Labrador Parish Church'
let hold17 = 'Bahay Na Puti (Alvendia House)'
let hold18 =  'St. Joseph Parish Church'
let hold19 =  'Bahay Kastila'
let hold20=  'None'
let hold21=  'None'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = 'Henson Family Ancestral Home'
let hold23 = 'Lorenzo Ancestral Home'
let hold24 = 'Chapel Of The Virgin Of Sorrows'
let hold25 =  'The Chapel in Pio'
let hold26 = 'The St. Catherine Church'
let hold27=  'Ancestral House Of Felix Ayson'
let hold28=  'Gil Family Mansion'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 =  'Santa Catalina De Alezandria Search'
let hold30 = 'None'
let hold31 = 'None'
let hold32 =  'None'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36='Church Of Apalit Historical Marker'
let hold37 ='None'
let hold38 = 'None'
let hold39 =  'None'
let hold40 =  'None'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 = 'None'
let hold44 = 'None'
let hold45 = 'None'
let hold46 =  'None'
let hold47 =  'None'
let hold48=  'None'
let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = 'St. Nicolas De Tolentino Parish Church'
let hold51 ='None'
let hold52 = 'None'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  'San Luicia Parish Church'
let hold58 ='Sasmuan Town Hall'
let hold59 =  'St. Monica Port'
let hold60 =  'Don Monico Mercado Monument'
let hold61 = 'Diosdado Macapagal Monument'
let hold62=  'Magpayo Residence'
let hold63=  'Laus Residence'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = 'St. Aloysuis Parish Church'
let hold65 = 'Bulanadi House'
let hold66 =  'Felipe Carlos House'
let hold67 =   'Loreto Punzalan House'
let hold68 =  'None'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ='Nuestra Seniora Del Pilar Parish Church'
let hold72 = 'None'
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 = 'Sanchez House'
let hold79 ='Henzon Lazatin House'
let hold80 = 'Henzon (Felipe) House'
let hold81 =   'Ayson Lorenzo House'
let hold82 = 'Ocampo House'
let hold83=   'Panlilio Julian House'
let hold84=   'Panlilio (Antonio House'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = 'None'
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 =  "Pineda Ancestral House"
let hold93 = "Maglalang Ancestral House"
let hold94 = "De Castro Ancestral House"
let hold95 = "Dominican Convent"
let hold96 =   "Guanzon Ancestral House"
let hold97=  "Santa Rita Parish Church"
let hold98= "Carlos Laxamana Ancestral House"
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Santo Nino Teracota Retablo"
let hold100 = 'None'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 = "Engineer Pedro Montoya House"
let hold107=  "Aliwalas Family House"
let hold108 =  "Ang simbahan ng St. Ana"
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 ="Search Of Magalang"
let hold114= "Hileograp Towers"
let hold115= "Magalang Municipal Hall"
let hold116=  "River House"
let hold117 =  "Gueco House"
let hold118 =  "Morales House"
let hold119=  "Luciano House"
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = "House of Don Marcos Santos"
let hold121="Our Lady of Grace Parish"
let hold122= "Kamikaze Is Air Field"
let hold123 =  "Ernesto Dela Cruz Ancestral House"
let hold124=  "Morales Ancestral Mansion"
let hold125=  "Mabalacat Train Station"
let hold126=  "Clark White House"
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = "St. Guillermo Parish Church"
let hold128 = "Our Lady Of Lourdes Shrine"
let hold129 = "Don Honorio Ventura State University"
let hold130 = "Judge De Jesus Ancestral House"
let hold131 =   "Rodriguez Ancestral House"
let hold132 =  "Joven's Ancestral House"
let hold133 =   "De Leon's House"
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ="Museo Ning Angeles"
let hold135 =  "Pamintuan House"
let hold136 =  "Mariano Lacson House"
let hold137 =  "Rafel Yutuc Sr. House"
let hold138 =   "Clark Field"
let hold139=   "Death Place Of Manuel Roxas"
let hold140=  "Holy Rosary Parish Rectory"
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ="Birth Place Of President Diosdado Macapagal P."
let hold142 = "St. Augustine Parish Church"
let hold143 =  "Denerated Wooden Cross Of St. Cruz "
let hold144 = "Old Lubao Town Hall"
let hold145 =  "Museo At Aklatan ni Diosdado Macapagal"
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }

/*9*/
else if (document.getElementById('prefer9').checked == true) {
  let hold1 =  "TPKIF NATURE'S FARM"
  let hold2 = "St. Jude Village Park"
  let hold3 = 'None'
  let hold4 = 'None'
  let hold5 = 'None'
  let hold6 = 'None'
  let hold7 = 'None'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'None'
let hold9 = 'None'
let hold10 = 'None'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Mawacat Falls"
let hold16 = 'Valdez Mini Eco Park'
let hold17 = 'Nabuclod'
let hold18 = "Gumain Dam"
let hold19 = 'Tungab Lagoon'
let hold20=  'Palakol River'
let hold21=  'Pampanga Grapes Mini Farm'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Miyamit Falls"
let hold23 = "Sapang angka"
let hold24 = 'Dara Water Falls'
let hold25 = "Ilog Camalig"
let hold26 = 'None'
let hold27=  'None'
let hold28= 'None'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Gintung Pakpak"
let hold30 = "Bahay na Bato ng Balik sa Paraiso"
let hold31 = 'None'
let hold32 =  'None'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Apalit Skate Park"
let hold37 ='None'
let hold38 = 'None'
let hold39 =  'None'
let hold40 =  'None'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Bird Sanctuary"
let hold44 =  'Miss Earth Park, Candaba'
let hold45 = 'None'
let hold46 =  'None'
let hold47 =  'None'
let hold48=  'None'
let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Macabebe Beach"
let hold51 ='None'
let hold52 = 'None'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Bangkung Malapad Bird Watching Site"
let hold58 = 'Sasmuan River'
let hold59 = 'None'
let hold60 = 'None'
let hold61 ='None'
let hold62='None'
let hold63=  'None'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "San Luis Park"
let hold65 = 'None'
let hold66 =  'None'
let hold67 =  'None'
let hold68 =  'None'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Jose Poblacion Plaza"
let hold72 = 'None'
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Lakeshore Pampanga"
let hold79 ='None'
let hold80 = 'None'
let hold81 =  'None'
let hold82 ='None'
let hold83='None'
let hold84='None'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Sunset Park"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Santa Rita Eco Park"
let hold93 = 'None'
let hold94 ='None'
let hold95 ='None'
let hold96 = 'None'
let hold97='None'
let hold98='None'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Pampanga Pottery, and Agritousim Park"
let hold100 = 'None'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='None'
let hold107= 'None'
let hold108 =  'None'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'None'
let hold114= 'None'
let hold115= 'None'
let hold116= 'None'
let hold117 = 'None'
let hold118 = 'None'
let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'None'
let hold121='None'
let hold122= 'None'
let hold123 =  'None'
let hold124= 'None'
let hold125= 'None'
let hold126= 'None'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'None'
let hold128 ='None'
let hold129 ='None'
let hold130 ='None'
let hold131 = 'None'
let hold132 = 'None'
let hold133 =  'None'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='None'
let hold135 = 'None'
let hold136 = 'None'
let hold137 = 'None'
let hold138 =  'None'
let hold139=  'None'
let hold140= 'None'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Bamboo Hub'
let hold142 ='None'
let hold143 = 'None'
let hold144 ='None'
let hold145 =  'None'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }


/*NATURE HISTORIC*/
/*san fernando*/
if  ((document.getElementById('prefer9').checked == true) && (document.getElementById('prefer5').checked == true)) {
  let hold1 =  "City Hall Of San Fernando"
  let hold2 = "Pampanga Capitol"
  let hold3 = 'San Fernando Train Station'
  let hold4 = 'Lazatin House'
  let hold5 = 'Ocampo Hizon House'
  let hold6 = 'Dayrit Cuyugan House'
  let hold7 = 'Cuyugan-Baron House'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'None'
let hold9 = 'None'
let hold10 = 'None'
let hold11 = 'None'
let hold12 = 'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Mawacat Falls"
let hold16 = 'Valdez Mini Eco Park'
let hold17 = 'Nabuclod'
let hold18 = "Gumain Dam"
let hold19 = 'Tungab Lagoon'
let hold20=  'Palakol River'
let hold21=  'Pampanga Grapes Mini Farm'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Miyamit Falls"
let hold23 = "Lorenzo Ancestral Home"
let hold24 = 'Dara Water Falls'
let hold25 = 'Henzon Family Ancestral Home'
let hold26 = "Ilog Camalig"
let hold27=  'Sapang Angka'
let hold28= 'Chapel Of The Virgin Of Sorrows'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Gintung Pakpak"
let hold30 =  'Santa Catalina De Alenzandria Church'
let hold31 =  "Bahay na Bato ng Balik sa Paraiso"
let hold32 =  'None'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Apalit Skate Park"
let hold37 ='Church Of Apalit'
let hold38 = 'Pedro Espiritu Ancestral House'
let hold39 =  'None'
let hold40 =  'None'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Bird Sanctuary"
let hold44 =  ' Saint Andrew The Apostle Church'
let hold45 =  'Miss Earth Park, Candaba'
let hold46 =  'Reyes Ancestral House'
let hold47 =  'Tores House'
let hold48=  'Castro House'
let hold49=  'Dela Cruz - Lugtu House'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Macabebe Beach"
let hold51 = 'Saint Nicolas De Tolentino Parish Church'
let hold52 = 'None'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  'San Luicia Parish Church'
let hold58 = "Bangkung Malapad Bird Watching Site"
let hold59 = 'Sasmuan River'
let hold60 = 'Sasmuan Town Hall'
let hold61 = 'St. Monica Port'
let hold62=  'Don Monico Mercado Monument '
let hold63=  'Diosdado Macapagal Monument'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = 'Bulanadi House'
let hold65 = "San Luis Park"
let hold66 = 'Felipe Carlos House'
let hold67 = 'Loreto Punzalan House'
let hold68 = 'None'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 = 'Nuestra Seniora Del Pilar Parish Church'
let hold72 = "San Jose Poblacion Plaza"
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  'Gozun House'
let hold79 ="Lakeshore Pampanga"
let hold80 = 'Sanchez House'
let hold81 = 'Henson Lazatin House'
let hold82 = 'Ocampo House'
let hold83= 'Saint Monica Parish Church'
let hold84='Henzon Lorenzo House'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = 'None'
let hold86 =  "Sunset Park"
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = 'Pineda Ancestral House '
let hold93 =  "Santa Rita Eco Park"
let hold94 ='Carpio Ancestral House'
let hold95 ='Maglalang Ancestral House'
let hold96 = 'De Castrol Ancestral House'
let hold97= 'St. Rita Parish Church'
let hold98='Miranda Ancestral House'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Pampanga Pottery, and Agritousim Park"
let hold100 = 'St. Nino Teracota Retablo'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Engineer Pedro Montoya House'
let hold107=  'Aliwalas Family House'
let hold108 = 'Ang Simbahan Ng Santa Ana'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Church Of Magalang'
let hold114= 'Gueco House'
let hold115= 'Morales House'
let hold116= 'Luciano House'
let hold117 = 'None'
let hold118 = 'None'
let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'Haduan Falls'
let hold121='Mabalacat Historic'
let hold122= 'House Of Don Marcos Santos'
let hold123 =  'Our Lady Of Grace Parish'
let hold124= 'Ernesto Dela Cruz Ancestral House'
let hold125= 'Clark White House'
let hold126= 'Mabalacat Train Station'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'San GUillermo Parish Church'
let hold128 ='Don Honoria Ventura State University'
let hold129 ='Judge De Jesus Ancestral House'
let hold130 ="Joven's House"
let hold131 = 'Simon De Anda Monument'
let hold132 = 'Pablo Angeles David Monument'
let hold133 = 'Death March Marker'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='Pamintuan House'
let hold135 = 'Museo Ning Angeles'
let hold136 = 'Church Complex Of Santo Rosario'
let hold137 = 'Clark Field'
let hold138 =  'Death Place Of Manuel Roxas'
let hold139=  'Munisipyo De Angeles'
let hold140= 'Holy Rosary Parish'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 = 'Birth Place Of President Diosdado Macapagal'
let hold142 = 'Saint Augustine Parish Church'
let hold143 = 'Venerated Wooden Cross Of Santa Cruz Parish'
let hold144 = 'Old Lubao Town Hall'
let hold145 =  'Museo At Aklatan Ni Pangulong Diosdado Macapagal'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
 /*NATURE SHOPPING*/
 if  ((document.getElementById('prefer9').checked == true) && (document.getElementById('prefer2').checked == true)) {
  let hold1 =  'SM City Pampanga'
  let hold2 = "St. Jude Village Park"
  let hold3 = 'SM CIty Down Town'
  let hold4 = "TPKIF NATURE'S FARM"
  let hold5 = 'SM City Telebastagan'
  let hold6 = 'Robinson Starmill'
  let hold7 = 'Vista Mall'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Robinsons Easymart Megamart Guagua'
let hold9 = "Primark Center Guagua"
let hold10 ='None'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Mawacat Falls"
let hold16 = 'Chuzon Super Market'
let hold17 = 'Nabuclod'
let hold18 = "Orange Market"
let hold19 = 'Tungab Lagoon'
let hold20=  'Palakol River'
let hold21=  'Pampanga Grapes Mini Farm'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Miyamit Falls"
let hold23 = 'Puregold'
let hold24 = 'Dara Water Falls'
let hold25 = 'GT& Mall'
let hold26 = "Sapang angka"
let hold27= "Ilog Camalig"
let hold28= 'Dansa Mart'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 ='GT7 Arayat'
let hold30 = 'City Mall Arayat'
let hold31 =  "Gintung Pakpak"
let hold32 =  '588 Shopping Mall'
let hold33 =  "Bahay na Bato ng Balik sa Paraiso"
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36 = 'Super 99'
let hold37 ='365 Shopping Mart '
let hold38 = "Apalit Skate Park"
let hold39 =  '588 Shopping Mall'
let hold40 =  'Savemore Apalit'
let hold41=  'None'
let hold42=  'Puregold Extra Apalit'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 = 'Paligue Street Market'
let hold44 =  'Miss Earth Park, Candaba'
let hold45 = 'Puregold Candaba'
let hold46 =   "Candaba Bird Sanctuary"
let hold47 =  'None'
let hold48=  'None'
let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = 'Watson'
let hold51 = "Macabebe Beach"
let hold52 = 'Savemore'
let hold53 =  'Best Budget Macabebe'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 = 'Alfamart'
let hold58 = 'Sasmuan River'
let hold59 =  "Bangkung Malapad Bird Watching Site"
let hold60 = 'None'
let hold61 ='None'
let hold62='None'
let hold63=  'None'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = 'Old San Luis Public Market'
let hold65 ="San Luis Park"
let hold66 =  'None'
let hold67 =  'None'
let hold68 =  'None'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 = 'San Simon Public Market'
let hold72 =  "San Jose Poblacion Plaza"
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 = 'Primark Center Mexico'
let hold79 ="Lakeshore Pampanga"
let hold80 = 'None'
let hold81 =  'None'
let hold82 ='None'
let hold83='None'
let hold84='None'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = 'Alfamart'
let hold86 =  "Sunset Park"
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = 'Alfamart'
let hold93 = "Santa Rita Eco Park"
let hold94 ='None'
let hold95 ='None'
let hold96 = 'None'
let hold97='None'
let hold98='None'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 = 'Robinson Easy Mart'
let hold100 =  "Pampanga Pottery, and Agritousim Park"
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Xiaoo Clothing'
let hold107=  'None'
let hold108 =  'None'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'INDU'
let hold114= 'Puregold'
let hold115= 'None'
let hold116= 'None'
let hold117 = 'None'
let hold118 = 'None'
let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'City Mall Dau'
let hold121='Hiduan Falls'
let hold122= 'Puregold Dau'
let hold123 =  'None'
let hold124= 'None'
let hold125= 'None'
let hold126= 'None'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'None'
let hold128 = 'None'
let hold129 = 'None'
let hold130 = 'None'
let hold131 = 'None'
let hold132 = 'None'
let hold133 =  'None'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='SM City Clark'
let hold135 = 'Robinson'
let hold136 = 'Clark City Front'
let hold137 = 'Marquee Mall'
let hold138 =  'Nepo Mart'
let hold139=  'None'
let hold140= 'None'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Bamboo Hub'
let hold142 =' None'
let hold143 = 'None'
let hold144 = 'None'
let hold145 =  'None'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/*NATURE SPORTS*/
 if  ((document.getElementById('prefer9').checked == true) && (document.getElementById('prefer1').checked == true)) {
  let hold1 =  'St. Jude Village Park'
  let hold2 = "Bren Z Guiao Sport Complex"
  let hold3 = "TPKIF NATURE'S FARM"
  let hold4 = 'Aj Amboy Sports'
  let hold5 = 'Sindalan Sports Complex'
  let hold6 = 'Philippines Sports Perfomance Plus'
  let hold7 = 'Pampanga Coliseum'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Betis Gymnesium'
let hold9 = 'GL Body Gym'
let hold10 = 'Ascomo Basketball Court'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ='Floridablanca Sports Complex'
let hold16 = 'Valdez Mini Eco Park'
let hold17 = 'Nabuclod'
let hold18 = "Gumain Dam"
let hold19 = 'Tungab Lagoon'
let hold20=  'Palakol River'
let hold21=  'Pampanga Grapes Mini Farm'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Miyamit Falls"
let hold23 = "Sapang angka"
let hold24 = 'Dara Water Falls'
let hold25 = "Ilog Camalig"
let hold26 = 'Jose Songco Sports Complex'
let hold27=  'None'
let hold28= 'None'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Gintung Pakpak"
let hold30 = "Bahay na Bato ng Balik sa Paraiso"
let hold31 = 'Arayat Sports Complex'
let hold32 =  'None'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Apalit Skate Park"
let hold37 ='None'
let hold38 = 'None'
let hold39 =  'None'
let hold40 =  'None'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Bird Sanctuary"
let hold44 =  'Miss Earth Park, Candaba'
let hold45 = 'Candaba Arena'
let hold46 =  'None'
let hold47 =  'None'
let hold48=  'None'
let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Macabebe Beach"
let hold51 = 'None'
let hold52 = 'None'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Bangkung Malapad Bird Watching Site"
let hold58 =  'Sasmuan Basketball Court'
let hold59 = 'Sasmuan River'
let hold60 = 'None'
let hold61 ='None'
let hold62='None'
let hold63=  'None'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = 'San Luis Sports Complex'
let hold65 = "San Luis Park"
let hold66 =  'None'
let hold67 =  'None'
let hold68 =  'None'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Jose Poblacion Plaza"
let hold72 = 'San Simon covered court'
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Lakeshore Pampanga"
let hold79 ='Oakland Clubhouse at Beverly Place Pampanga'
let hold80 = 'None'
let hold81 =  'None'
let hold82 ='None'
let hold83='None'
let hold84='None'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Sunset Park"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Santa Rita Eco Park"
let hold93 = 'Becuran Sports Complex'
let hold94 ='None'
let hold95 ='None'
let hold96 = 'None'
let hold97='None'
let hold98='None'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Pampanga Pottery, and Agritousim Park"
let hold100 = 'None'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='None'
let hold107= 'None'
let hold108 =  'None'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = ' Bren Z. Guiao Magalang Sports Complex'
let hold114= 'None'
let hold115= 'None'
let hold116= 'None'
let hold117 = 'None'
let hold118 = 'None'
let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'Haduan Falls'
let hold121='None'
let hold122= 'None'
let hold123 =  'None'
let hold124= 'None'
let hold125= 'None'
let hold126= 'None'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'None'
let hold128 ='None'
let hold129 ='None'
let hold130 ='None'
let hold131 = 'None'
let hold132 = 'None'
let hold133 =  'None'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='None'
let hold135 = 'None'
let hold136 = 'None'
let hold137 = 'None'
let hold138 =  'None'
let hold139=  'None'
let hold140= 'None'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Bamboo Hub'
let hold142 ='None'
let hold143 = 'None'
let hold144 ='None'
let hold145 =  'None'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/*HISTORY SHOPPING*/
if  ((document.getElementById('prefer5').checked == true) && (document.getElementById('prefer2').checked == true)) {
  let hold1 =  "Sm City Downtown"
  let hold2 = "Ocampo Hizon House"
  let hold3 = 'Sm City Pampanga'
  let hold4 = 'San guillermo Parish Church'
  let hold5 = 'Robinson Starmill'
  let hold6 = 'Dayrit Cuyugan House'
  let hold7 = 'Vista mall'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Primark Center guagua'
let hold9 = 'Robinson Easymart megamart guagua'
let hold10 = 'savemore'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Basa air base"
let hold16 = 'Chuzon'
let hold17 = '1867 Heritage San jose Labrador Parish church'
let hold18 = "Bahay na Puti"
let hold19 = 'ST. Joseph Parish Church'
let hold20=  'Bahay Castilla'
let hold21=  'None'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Henzon Familly Ancestral home"
let hold23 = "GT7 Mall"
let hold24 = 'Lorenzo Ancestral Home'
let hold25 = "Dansa Mart"
let hold26 = 'The St. Catherine Church'
let hold27=  'Ancestral House of Felix Ayson'
let hold28= 'Puregold'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Santa Catalina De Alezandria Church"
let hold30 = "City mall Arayat"
let hold31 = 'Mary mart'
let hold32 =  '588 Shopping mall'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Church of Apalit Historical Marker"
let hold37 ='365 Shopping mart'
let hold38 = 'Super 99'
let hold39 =  'None'
let hold40 =  'None'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "St. Andrew the Apostle Church"
let hold44 =  'Reyes Ancestral Church'
let hold45 = 'Torres House'
let hold46 =  'Alegria Alarcon House'
let hold47 =  'Castor House'
let hold48=  'Lacanilao House'
let hold49=  'Limjoco-Bautista House'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "St. Nicolas De Tolentino Parish Church"
let hold51 ='Best Budget Macabebe'
let hold52 = 'Primark Center Macabebe'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "San Luicia Parish Church"
let hold58 = 'Sasmuan Town Hall'
let hold59 = 'La Rambla'
let hold60 = 'Don Monico Mercado Monument'
let hold61 ='Riverside Arcade'
let hold62='St. Monica Port'
let hold63=  'Diosdado Macapagal Monument'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "St. Aloysuis Parish Church"
let hold65 = 'Old San Luis Public Market'
let hold66 =  'Bulanadi House'
let hold67 =  'Felipe Carlos House'
let hold68 =  'Loreto Punzalan House'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="Nuestra Seniora Del pilar Parish Church"
let hold72 = 'San Simon Public Market'
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 ="Primark Center Mexico"
let hold79 ='Sanchez House'
let hold80 = 'Henzon Lazatin House'
let hold81 =  'Ayson Lorenzo House'
let hold82 ='Ocampo House'
let hold83='Panlilio Julian House'
let hold84='Hizon Felipe Heritage House'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Alfamart"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Alfamart"
let hold93 = 'Pineda Ancestral House'
let hold94 ='Maglalang Ancestral House'
let hold95 ='De Castro Ancestral House'
let hold96 = 'Dominican Convent'
let hold97='Guanzon Ancestral House'
let hold98='Santa Rita Parish Church'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Sto. niño Teracota Retablo"
let hold100 = 'Robinsons Easymart Sto. Tomas Pampanga'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Engineer Pedro Montoya House'
let hold107= 'ALiwalas Family House'
let hold108 =  'Ang Simbahan ng St. Ana'
let hold109=  'Xiaoo Clothing'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Church of Magalang'
let hold114= 'Hileograph Towers'
let hold115= 'Magalang Municipial Hall'
let hold116= 'Puregold'
let hold117 = 'INDU'
let hold118 = 'River House'
let hold119=  'Gueco House'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'House of Don Marcos Santos'
let hold121='Our Lady of Grace Parish'
let hold122= 'City Mall of Dau'
let hold123 =  'Kamikaze Is Air Field'
let hold124= 'Ernesto Dela Cruz Ancestral House'
let hold125= 'Morales Ancestral Mansion'
let hold126= 'Mabalacat Train Station'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'St. Guillermo Parish Church'
let hold128 ='Our Lady of Lourdes Shrine'
let hold129 ='Don Honorio Ventura State University'
let hold130 ='Judge De Jesus Ancestral House'
let hold131 = 'Rodriguez Ancestral House'
let hold132 = 'Jovens Ancestral House'
let hold133 =  'De Leons House'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='Pamintuan House'
let hold135 = 'Sm city Clark'
let hold136 = 'Marquee mall'
let hold137 = 'Robinsons Place balibago'
let hold138 =  'Museo ning Angeles'
let hold139=  'Mariano Lacson House'
let hold140= 'Clark Field'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Birth Place of President Diosdado Macapagal'
let hold142 ='St. Augustine Parish Church'
let hold143 = 'Denerated Wooden Cross of St. Cruz'
let hold144 ='Old Lubao Town Hall'
let hold145 =  'Museo at Aklatan ni Diosdado Macapagal'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/*HISTORY AND SPORTS*/
if  ((document.getElementById('prefer1').checked == true) && (document.getElementById('prefer5').checked == true)) {
  let hold1 =  "Philippines Sports Performance"
  let hold2 = "Aj Amboy Sports Complex"
  let hold3 = 'Sindalan Sports Complex'
  let hold4 = 'Bren Z Guiao Sport Complex'
  let hold5 = 'Pampanga Colliseum'
  let hold6 = 'None'
  let hold7 = 'None'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'GL Body GYM'
let hold9 = 'Betis Gymnasium'
let hold10 = 'Ascomo Basketball Court'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Basa Air Base"
let hold16 = 'Floridablanca Sports Center'
let hold17 = 'Bahay na Puti'
let hold18 = "St. Joseph Parish Church"
let hold19 = 'Bahay Kastilla'
let hold20=  'Birthplace of President Diosdado Macapagal'
let hold21=  '1867 Heritage San Jose Labrador Parish Church'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Henson Family Ancestral Home"
let hold23 = "Jose Songco Sports Complex"
let hold24 = 'Lorenzo Ancestral Home'
let hold25 = "Chapel Of the Virgin of Sorrows"
let hold26 = 'Chapel in Pio'
let hold27=  'St. Catherine Church'
let hold28= 'Ancestral House of felix Ayson'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Santa Catalina De Alezandria"
let hold30 = "Arayat Sports Complex"
let hold31 = 'None'
let hold32 =  'None'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Church of Apalit Historical Marker"
let hold37 ='Pedro Espirito Ancestral House'
let hold38 = 'None'
let hold39 =  'None'
let hold40 =  'None'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Arena"
let hold44 =  'St. Andrew Apostle Church'
let hold45 = 'Reyes Ancestral House'
let hold46 =  'Torres  House'
let hold47 =  'Alegria Alarcon House'
let hold48=  'Castor House'
let hold49=  'Lacanilao House'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "San Nicolas De Tolentino Parish Church"
let hold51 ='None'
let hold52 = 'None'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Sasmuan Basketball Court"
let hold58 = 'Sta. Lucia Parish Church'
let hold59 = 'Diosdado Macapagal Monument'
let hold60 = 'Magpayo Residence'
let hold61 = 'Laus Residence'
let hold62= 'Miranda Ancestral House'
let hold63=  'Sasmuan Town Hall'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "San Luis Sports Complex"
let hold65 = 'St. Aloysius Parish Church'
let hold66 =  'Bulanadi House'
let hold67 =  'Felipe Carlos House'
let hold68 =  'Loreto Punzalan House'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="Nuestra Señora Del Pilar Parish Church"
let hold72 = 'San Simon Covered Court'
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Oakland Clubhouse at Beverly Place Pampanga"
let hold79 ='Gozun House'
let hold80 = 'Sanchez House'
let hold81 =  'Henson Lazatin House'
let hold82 ='St.Benedictine Monastery'
let hold83='Hizon Lorenzo House'
let hold84='Sta Monica Parish Church'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "None"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Becuran Sports Complex"
let hold93 = 'Gosioco Ancestral House'
let hold94 ='Pineda Ancestral House'
let hold95 ='Dominican Convent'
let hold96 = 'Sta.rita Parish Church'
let hold97='Carpio Ancestral House'
let hold98='Reliquary of Saint Rita De Cascia '
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Sto Niño Terracota Retablo"
let hold100 = 'None'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Engineer Pedro Montoya House'
let hold107= 'Aliwalas Family House'
let hold108 =  'Ang Simbahan ng Santa Ana'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Bren Z Guiao Magalang Sports Complex'
let hold114= 'Church of Magalang'
let hold115= 'Gueco House'
let hold116= 'Rivera House'
let hold117 = 'Heliograph Towers'
let hold118 = 'Magalang Municipal Hall'
let hold119=  'Morales House'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'House Don of Marcos Santos House '
let hold121='Artillery Memorial'
let hold122= 'Our Lady of Grace Parish'
let hold123 =  'Kamizake East Airfield'
let hold124= 'Ernesto Dela Cruz Ancestral House'
let hold125= 'Mabalacat Train Station'
let hold126= 'Clark White House'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'San Guillermo Parish Church'
let hold128 ='Our Lady of Lourdes Shrine'
let hold129 ='Don Honorio Ventura State University'
let hold130 ='Judge De Jesus Ancestral House'
let hold131 = 'Jovens House'
let hold132 = 'Deleon House'
let hold133 =  'Simon De Anda Monument'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='Museo ning Angeles'
let hold135 = 'Pamintuan House'
let hold136 = 'Mariano Lacson House'
let hold137 = 'Patricia Mercado Gomez Masnou House'
let hold138 =  'Church Complex of Sto Rosario'
let hold139=  'Jose Pedro Henson Y Leon Santos Deposito'
let hold140= 'Juan Nepomuceno Camalig'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Birthplace of President Diosdado P. Macapagal'
let hold142 ='St. Augustine Parish Church'
let hold143 = 'Venerated Wooden Cross of Sta Cruz Parish'
let hold144 ='Old Lubao Town Hall'
let hold145 =  'Museo at Aklatan ni Pangulong Diosdado Macapagal'
let hold146 =  'Pradera Verde '
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/*SHOPPING SPORTS*/
if  ((document.getElementById('prefer2').checked == true) && (document.getElementById('prefer1').checked == true)) {
  let hold1 =  "Sm City Telabastagan"
  let hold2 = "Sm City Pampanga"
  let hold3 = 'Walter Mart'
  let hold4 = 'Sm City Downtown'
  let hold5 = 'Northwalk'
  let hold6 = 'Vista Mall'
  let hold7 = 'Robinson Starmills'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Primark Center'
let hold9 = 'Megamart Guagua'
let hold10 = 'None'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Chuzon Supermarket"
let hold16 = 'Orange Supermarket'
let hold17 = 'None'
let hold18 = "None"
let hold19 = 'None'
let hold20=  'None'
let hold21=  'None'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "GT7 Mall"
let hold23 = "Dansa Mart"
let hold24 = 'Puregold Porac'
let hold25 = "None"
let hold26 = 'None'
let hold27=  'None'
let hold28= 'None'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "GT7 Arayat Mall "
let hold30 = "588 Shopping Mall"
let hold31 = 'City Mall Arayat'
let hold32 =  'None'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="365 Shopping Mart"
let hold37 ='588 Shopping Mall'
let hold38 = 'Super 99 '
let hold39 =  'Savemore Apalit'
let hold40 =  'Puregold Extra Apalit'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Paligue Street Market"
let hold44 =  'Puregold'
let hold45 = 'None'
let hold46 =  'None'
let hold47 =  'None'
let hold48=  'None'
let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Watson Savemore  "
let hold51 ='Primark Macabebe'
let hold52 = 'None'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Alfamart"
let hold58 = 'None'
let hold59 = 'None'
let hold60 = 'None'
let hold61 ='None'
let hold62='None'
let hold63=  'None'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "Old San Luis Public Market"
let hold65 = 'None'
let hold66 =  'None'
let hold67 =  'None'
let hold68 =  'None'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Simon Public Market"
let hold72 = 'None'
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Primark Center Mexico"
let hold79 ='None'
let hold80 = 'None'
let hold81 =  'None'
let hold82 ='None'
let hold83='None'
let hold84='None'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Alfamart"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Alfamart"
let hold93 = 'None'
let hold94 ='None'
let hold95 ='None'
let hold96 = 'None'
let hold97='None'
let hold98='None'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Robinson Easymart Sto tomas Pampanga"
let hold100 = 'None'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Xiaoo Clothing'
let hold107= 'None'
let hold108 =  'None'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Puregold Magalang'
let hold114= 'INDU'
let hold115= 'None'
let hold116= 'None'
let hold117 = 'None'
let hold118 = 'None'
let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'City Mall Dau'
let hold121='None'
let hold122= 'None'
let hold123 =  'None'
let hold124= 'None'
let hold125= 'None'
let hold126= 'None'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'None'
let hold128 ='None'
let hold129 ='None'
let hold130 ='None'
let hold131 = 'None'
let hold132 = 'None'
let hold133 =  'None'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='Sm City Clark'
let hold135 = 'Robinsons Place Balibago'
let hold136 = 'Clarkcityfront'
let hold137 = 'Nepo Mart'
let hold138 =  'Marquee Mall'
let hold139=  'The Shoppes'
let hold140= 'None'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Bamboo Hub'
let hold142 ='None'
let hold143 = 'None'
let hold144 ='None'
let hold145 =  'None'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/*NATURE HISTORY SHOPPING*/
if  ((document.getElementById('prefer9').checked == true) && (document.getElementById('prefer5').checked == true) && (document.getElementById('prefer2').checked == true)) {
  let hold1 =  "Heroes Hall- City Hall"
  let hold2 = "Sm City Pampanga"
  let hold3 = 'San Fernando City Hall '
  let hold4 = 'Robinsons Starmills'
  let hold5 = 'Datu Bundalian House'
  let hold6 = 'Sm City Telebastagan'
  let hold7 = 'Leaning Tower of San Fernando'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Savemore Market Primark'
let hold9 = 'Robinsons Easymart Guagua'
let hold10 = 'None'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Mawacat Falls"
let hold16 = 'Chuzon Supermarket'
let hold17 = 'Orange Supermarket'
let hold18 = "None"
let hold19 = 'None'
let hold20=  'None'
let hold21=  'None'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Miyamit Falls"
let hold23 = "GT7 Mall"
let hold24 = 'Dara Waterfalls'
let hold25 = "Saint Catherine Church"
let hold26 = 'Sapang Angka'
let hold27=  'Puregold Porac'
let hold28= 'The Chapel in Pio'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Gintung Pakpak"
let hold30 = "Bahay na Bato ng Balik sa Paraiso"
let hold31 = 'City Mall Arayat'
let hold32 =  'GT7 Mall Arayat'
let hold33 =  '588 Shopping Mall'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="365 Shopping Mart"
let hold37 ='588 Shopping Mall'
let hold38 = 'Church of Apalit/Church Complex of St. Peter the Apostle '
let hold39 =  'Pedro Espiritu Ancestral House'
let hold40 =  'Savemore Apalit'
let hold41=  'Puregold Extra Apalit'
let hold42=  'Super 99'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "St. Andrew The Apostle Church"
let hold44 =  'Castor House'
let hold45 = 'Paligue Street Market '
let hold46 =  'puregold'
let hold47 =  'Dela Cruz House'
let hold48=  'Torres House'
let hold49=  'Lacanilao House '
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Watson Savemore"
let hold51 ='Primark Macabebe'
let hold52 = 'San Nicolas De Tolentino Parish Church'
let hold53 =  'Sta. Monica Parish Church'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Alfamart"
let hold58 = 'Sta. Lucia Parish Church'
let hold59 = 'Sasmuan Town Hall'
let hold60 = 'Laus Residence'
let hold61 ='Magpayo Residence'
let hold62='Diosdado Macapagal Monument'
let hold63=  'Sta. Monica Port'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "Felipe Carlos House"
let hold65 = 'Old San Luis Public Market'
let hold66 =  'Bulanadi House'
let hold67 =  'Loreto Punzalan House'
let hold68 =  'St. Aloysius Parish Church'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Simon Public Market"
let hold72 = 'Nuestra Señora Del Pilar Parish Church'
let hold73 = 'None'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Primark Center Mexico"
let hold79 ='Sto. Monica Parish Church'
let hold80 = 'St. Benedictine Monastery '
let hold81 =  'San Jose Matulid Chapel'
let hold82 ='Reyes House'
let hold83='Henzon Lazatin House'
let hold84='Ocampo House'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Alfamart"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Sta. Rita Parish Church"
let hold93 = 'Reliquary of Saint Rita De Cascia'
let hold94 ='Dominican Convent '
let hold95 ='De Castro Ancestral House'
let hold96 = 'Alfamart'
let hold97='Miguela Aguilus Ancestral House'
let hold98='Carpio Ancestral House'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Sto. Niño Terracota Retablo"
let hold100 = 'Robinson Easymart Sto. Tomas Pampanga'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Xiaoo Clothing'
let hold107= 'Engineer Pedro Montoya House '
let hold108 =  'Aliwalas Family House'
let hold109=  'Ang Simbahan ng Santa Ana '
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Church of Magalang'
let hold114= 'INDU'
let hold115= 'Heliograph Towers'
let hold116= 'Magalang Municipal Hall'
let hold117 = 'Gueco House'
let hold118 = 'Rivera House'
let hold119=  'Morales House'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'City Mall Dau'
let hold121='Haduan Falls'
let hold122= 'House of Don Marcos Santos'
let hold123 =  'Clark Museum'
let hold124= 'Mabalacat Train Station'
let hold125= 'Our Lady Of Grace Parish'
let hold126= 'Kamikaze East Airfield'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'Our Lady of Lourdes Shrine'
let hold128 ='Don Honorio Ventura State University'
let hold129 ='San Guillermo Parish Church'
let hold130 ='Juan Crisostomo Caballa Soto Monument'
let hold131 = 'De Leons House'
let hold132 = 'Pablo Angeles David Monument'
let hold133 =  'Death March Marker'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='SM City Clark'
let hold135 = 'Museo ning Angeles'
let hold136 = 'Holy Rosary Parish'
let hold137 = 'Marquee Mall'
let hold138 =  'Pamintuan House'
let hold139=  'Nepo Mart'
let hold140= 'Municipio de Angeles'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Saint Augustine Parish Church'
let hold142 ='Old Lubao Town Hall'
let hold143 = 'Birthplace of Diosdado Macapagal'
let hold144 ='Museo at Aklatan ni Pangulong Diosdado Macapagal'
let hold145 =  'Venerated Wooden Cross of Sta. Cruz Parish'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/*NATURE HISTORY SPORTS*/
if  ((document.getElementById('prefer9').checked == true) && (document.getElementById('prefer5').checked == true) && (document.getElementById('prefer1').checked == true)) {
  let hold1 =  "Pampanga Capitol"
  let hold2 = "City Hall of Sanfernando"
  let hold3 = 'Bren Z. Guiao '
  let hold4 = 'Lazatin House'
  let hold5 = 'Philippine Sports Performance Plus'
  let hold6 = 'Sindalan Sports Complex'
  let hold7 = 'Metropolitan Cathedral of Sanfernando'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'GL Body GYM'
let hold9 = 'Betis Gymnasium'
let hold10 = 'Ascomo Basketball Court'
let hold11 = 'None'
let hold12 =  'None'
let hold13=  'None'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Floridablanca Sports Center"
let hold16 = 'Mawacat Falls'
let hold17 = 'Basa Air Base'
let hold18 = "St. Joseph Parish Church"
let hold19 = 'Bahay Kastilla'
let hold20=  '1867 Heritage San Jose Labrador Parish Church '
let hold21=  'Bahay na Puti(Alvendia House)'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Jose Songco Sports Complex"
let hold23 = "Miyamit Falls"
let hold24 = 'Dara Water Falls'
let hold25 = "St. Catherine Church"
let hold26 = 'Chapel in PIO'
let hold27=  'Gil Family Mansion'
let hold28= 'Chapel Of the Virgin of Sorrows'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Gintung Pakpak"
let hold30 = "Bahay na Bato ng Balik sa Paraiso"
let hold31 = 'Arayat Sports Complex'
let hold32 =  'Santa Catalina De Alejandria Church'
let hold33 =  'None'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Pedro Espiritu Ancestral House "
let hold37 ='Church of Apalit/Church Complex of St. Peter the Apostle'
let hold38 = 'None'
let hold39 =  'None'
let hold40 =  'None'
let hold41=  'None'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Bird Sanctuary"
let hold44 =  'Miss Earth Park, Candaba'
let hold45 = 'St. Andrew the Apostle Church'
let hold46 =  'Candaba Arena'
let hold47 =  'Castor House'
let hold48=  'Torres House'
let hold49=  'Dela Cruz Lugtu House'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Macabebe Beach"
let hold51 ='Sta. Monica Parish Church'
let hold52 = 'None'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Bangkung Malapad Bird Watching Site"
let hold58 = 'Sasmuan River'
let hold59 = 'Sasmuan Basketball Court'
let hold60 = 'Sta. Lucia Parish Church'
let hold61 ='Sasmuan Town Hall'
let hold62='Laus Residence'
let hold63=  'Miranda Ancestral House'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "San Luis Park"
let hold65 = 'Loreto Punzalan House'
let hold66 =  'San Luis Sports Complex'
let hold67 =  'St. Aloysius Parish Church'
let hold68 =  'Bulanadi House'
let hold69=  'Felipe Carlos House'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Jose Poblacion Plaza"
let hold72 = 'San Simon Covered Court'
let hold73 = 'Nuestra Señora Del Pilar Parish Church'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Lakeshore Pampanga"
let hold79 ='Oakland ClubHouse At Beverly Place Pampanga'
let hold80 = 'Sta. Monica Parish Church'
let hold81 =  'San Jose Matulid Chapel'
let hold82 ='Reyes House'
let hold83='Henson Lazatin House'
let hold84='Reyes Heritage House'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Sunset Park"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Santa Rita Eco Park"
let hold93 = 'Sta. Rita Parish Church'
let hold94 ='Becuran Sports Complex'
let hold95 ='Reliquary of Saint Rita De Cascia'
let hold96 = 'Carlos Laxamana Ancestral House'
let hold97='Miranda Ancestral House'
let hold98='Miguela Aguilus Ancestral House'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Pampanga Pottery, and Agritousim Park"
let hold100 = 'Sto. niño Terracota Retablo'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Ang Simbahan ng Santa Ana'
let hold107= 'Aliwalas Family House'
let hold108 =  'Engineer Pedro Montoya House'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Bren Z. Guiao Magalang Sports Complex'
let hold114= 'Church Of Magalang'
let hold115= 'Heliograph Towers'
let hold116= 'Magalang Municipal Hall'
let hold117 = 'Rivera House'
let hold118 = 'Gueco House'
let hold119=  'Morales House'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'Our Lady of Grace'
let hold121='Haduan Falls'
let hold122= 'Clark White House'
let hold123 =  'Clark Museum'
let hold124= 'Ernesto Dela Cruz Ancestral House'
let hold125= 'Mabalacat Train Station'
let hold126= 'Kamikaze East Airfield'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'Don Honorio Ventura State University'
let hold128 ='San Guillermo Parish Church'
let hold129 ='Our Lady Of Lourdes Shrine'
let hold130 ='Museo De Bacolor'
let hold131 = 'Parish Museum'
let hold132 = 'Juan Crisostomo Caballa Soto Monument '
let hold133 =  'Death March Marker'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='Museo ning Angeles'
let hold135 = 'Pamintuan House'
let hold136 = 'Mariano Lacson House'
let hold137 = 'Church Complex Of Santo Rosario'
let hold138 =  'Jose Pedro Henson Y Leon Santos Deposito'
let hold139=  'Juan Nepomuceno Camalig'
let hold140= 'Municipio De Angeles'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Bamboo Hub'
let hold142 ='St. Augustine Parish Church'
let hold143 = 'Old Lubao Town Hall'
let hold144 ='Museo At Aklatan ni Pangulong Diosdado Macapagal'
let hold145 =  'Birthplace of President Diosdado Macapagal' 
let hold146 =  'Venerated Wooden Cross Sta. Cruz Parish'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/*NATURE  SPORTS SHOPPING*/
if  ((document.getElementById('prefer9').checked == true) && (document.getElementById('prefer2').checked == true) && (document.getElementById('prefer1').checked == true)) {
  let hold1 =  "Robinson Starmills"
  let hold2 = "Philippine Sports Performance Plus"
  let hold3 = 'Sm City Pampanga'
  let hold4 = 'Sm City Telebastagan'
  let hold5 = 'Bren Z Guiao Sport Complex'
  let hold6 = 'Sindalan Sports Complex'
  let hold7 = 'Sm City Downtown'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Robinsons Easymart '
let hold9 = 'Primark Center Guagua'
let hold10 = 'Savemore Market Primark Guagua'
let hold11 = 'Betis Gymnasium '
let hold12 =  'GL Body Gym'
let hold13=  'Ascomo Basketball Court'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Mawacat Falls"
let hold16 = 'Floridablanca Sports Complex'
let hold17 = 'Nabuclod'
let hold18 = "Orange Supermarket"
let hold19 = 'Tungab Lagoon'
let hold20=  'Palakol River'
let hold21=  'Chuzon Supermarket'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Miyamit Falls"
let hold23 = "Sapang angka"
let hold24 = 'Dara Water Falls'
let hold25 = "GT7 Mall"
let hold26 = 'Jose Songco Sports Complex'
let hold27=  'Dansa Mart'
let hold28= 'Puregold Porac '
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Gintung Pakpak"
let hold30 = "Bahay na Bato ng Balik sa Paraiso"
let hold31 = 'GT7 Mall Arayat'
let hold32 =  '588 Shopping Mall'
let hold33 =  'Arayat Sports Complex'
let hold34 =  'City Mall Arayat'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Apalit Skate Park"
let hold37 ='365 Shoppong Mart'
let hold38 = '588 Shopping Mall'
let hold39 =  'Savemore Apalit'
let hold40 =  'Super99'
let hold41=  'Puregold Extra Apalit'
let hold42=  'None'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Bird Sanctuary"
let hold44 =  'Miss Earth Park, Candaba'
let hold45 = 'Paligue Street Market'
let hold46 =  'Puregold'
let hold47 =  'Candaba Arena'
let hold48=  'None'
let hold49=  'None'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Macabebe Beach"
let hold51 ='Watson Savemore'
let hold52 = 'Best Budget Macabebe'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Bangkung Malapad Bird Watching Site"
let hold58 = 'Sasmuan River'
let hold59 = 'Alfamart'
let hold60 = 'Sasmuan Basketball Court'
let hold61 ='None'
let hold62='None'
let hold63=  'None'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "San Luis Park"
let hold65 = 'Old San Luis Public Market'
let hold66 =  'San Luis Sports Complex'
let hold67 =  'None'
let hold68 =  'None'
let hold69=  'None'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Jose Poblacion Plaza"
let hold72 = 'San Simon Public Market'
let hold73 = 'San Simon Covered Court'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Lakeshore Pampanga"
let hold79 ='Oakland Clubhouse at Beverly Place Pampanga'
let hold80 = 'Primark Center Mexico'
let hold81 =  'None'
let hold82 ='None'
let hold83='None'
let hold84='None'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Sunset Park"
let hold86 = 'Alfamart'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Santa Rita Eco Park"
let hold93 = 'Becuran Sports Complex'
let hold94 ='Alfamart'
let hold95 ='None'
let hold96 = 'None'
let hold97='None'
let hold98='None'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Pampanga Pottery, and Agritousim Park"
let hold100 = 'Robinsons Easymart'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Xiaoo Clothing '
let hold107= 'None'
let hold108 =  'None'
let hold109=  'None'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Bren Z Guiao Magalang Sports Complex'
let hold114= 'Puregold Magalang'
let hold115= 'INDU'
let hold116= 'None'
let hold117 = 'None'
let hold118 = 'None'
let hold119=  'None'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'City Mall Dau'
let hold121='None'
let hold122= 'None'
let hold123 =  'None'
let hold124= 'None'
let hold125= 'None'
let hold126= 'None'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'None'
let hold128 ='None'
let hold129 ='None'
let hold130 ='None'
let hold131 = 'None'
let hold132 = 'None'
let hold133 =  'None'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='SM City Clark'
let hold135 = 'Marquee Mall'
let hold136 = 'Robinsons Place Balibago'
let hold137 = 'Nepo Mart'
let hold138 =  'The Shoppes'
let hold139=  'Clark City Front'
let hold140= 'None'
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Bamboo Hub'
let hold142 ='None'
let hold143 = 'None'
let hold144 ='None'
let hold145 =  'None'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }
/* HISTORY SHOPPING SPORTS*/
if  ((document.getElementById('prefer1').checked == true) && (document.getElementById('prefer2').checked == true) && (document.getElementById('prefer5').checked == true)) {
  let hold1 =  "Lazatin House"
  let hold2 = "Pampanga Capitol "
  let hold3 = 'SM City Pampanga'
  let hold4 = 'City Hall of San Fernando'
  let hold5 = 'Bren Z Guiao Sports Complex'
  let hold6 = 'Philippine Sports Performance Plus'
  let hold7 = 'SM City Telabastagan'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Robinsons Easymart Megamart Guagua'
let hold9 = 'Betis Gymnasium  '
let hold10 = 'Primark Center Guagua'
let hold11 = 'Ascomo Basketball Court '
let hold12 =  'Savemore Market Primark Guagua'
let hold13=  'GL Body Gym'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Basa Air Base"
let hold16 = 'St. Joseph Parish Church'
let hold17 = 'Bahay Kastila'
let hold18 = "Floridablanca Sports Complex"
let hold19 = 'Chuzon Supermarket'
let hold20=  'Orange Supermarket'
let hold21=  '1867 Heritage San Jose Labrador Parish Church'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Jose Songco Sports Complex"
let hold23 = "GT7 Mall"
let hold24 = 'The Chapel in PIO'
let hold25 = "Dansa Mart"
let hold26 = 'Saint Catherine Church'
let hold27=  'Puregold Porac'
let hold28= 'Gil Family Mansion'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Arayat Sports Complex"
let hold30 = "Sta. Catalina De Alejandria Church  "
let hold31 = 'GT7 Mall Arayat '
let hold32 =  '588 Shopping Mall'
let hold33 =  'City Mall Arayat'
let hold34 =  'None'
let hold35 =  'None'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="Apalit Skate Park"
let hold37 ='Church of Apalit/ Church Complex of St Peter the Apostol'
let hold38 = 'Pedro Espiritu Ancestral House'
let hold39 =  '365 Shopping Mart'
let hold40 =  'Savemore Apalit'
let hold41=  'Puregold Extra Apalit'
let hold42=  '588 Shopping Mall'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Arena"
let hold44 =  'Paligue Street Market'
let hold45 = 'St. Andrew The Apostle Church'
let hold46 =  'Torres House'
let hold47 =  'Puregold'
let hold48=  'Dela Cruz Lugtu House'
let hold49=  'Castor House'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "San Nicolas De Tolentino Parish Church"
let hold51 ='Watson Savemore Primark Macabebe'
let hold52 = 'Best Budget Macabebe'
let hold53 =  'None'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Sasmuan Basketball Court"
let hold58 = 'Alfamart'
let hold59 = 'Sta. Lucia Parish Church'
let hold60 = 'Sta. Monica Parish Port'
let hold61 ='Sasmuan Town Hall'
let hold62='Diosdado Macapagal Monument'
let hold63=  'Magpayo Residence'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "San Luis Sports Complex"
let hold65 = 'Old San Luis Public Market'
let hold66 =  'St. Aloysius Parish Church'
let hold67 =  'Bulanadi House'
let hold68 =  'Loreto Punzalan House'
let hold69=  'Felipe Carlos House'
let hold70=  'None'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Simon Covered Court"
let hold72 = 'San Simon Public Market'
let hold73 = 'Nuestra Señora Del Pilar Parish Church'
let hold74 =  'None'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Oakland Club House At Beverly Place Pampanga"
let hold79 ='Primark Center Mexico'
let hold80 = 'Sta. Monica Parich Church'
let hold81 =  'San Jose Matulid Chapel'
let hold82 ='St. Benedictine Monastery'
let hold83='Reyes House'
let hold84='Henson Lazatin House'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Alfamart"
let hold86 = 'None'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Becuran Sports Complex"
let hold93 = 'Alfamart'
let hold94 ='Sta. Rita Parish Church'
let hold95 ='Reliquary Of Saint Rita De Cascia'
let hold96 = 'Carpio Ancestral House'
let hold97='Miranda Ancestral House'
let hold98='Miguela Aguilus Ancestral House'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Sto. Niño Terracota Retablo"
let hold100 = 'Robinsons Easymart Santo Tomas Pampanga'
let hold101 = 'None'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Xiaoo Clothing'
let hold107= 'Ang Simbahan ng Santa Ana'
let hold108 =  'Aliwalas Family House'
let hold109=  'Engineer Pedro Montoya House'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Bren Z. Guiao Magalang Sports Complex'
let hold114= 'Church of Magalang'
let hold115= 'Magalang Municipal Hall'
let hold116= 'Puregold Magalang'
let hold117 = 'INDU'
let hold118 = 'Heliograph Towers'
let hold119=  'Rivera House'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'Our lady of Church Parish'
let hold121='Kamikaze East Airfield '
let hold122= 'City Mall DAU'
let hold123 =  'Mabalacat Train Station'
let hold124= 'Clark White House'
let hold125= 'Goddess of Peace Shrine '
let hold126= 'Artillery Memorial '
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'Don Honorio Ventura State University'
let hold128 ='San Guillermo Parish Church'
let hold129 ='Our Lady of Lourdes Shrine'
let hold130 ='Death March Marker'
let hold131 = 'Juan Crisostomo Caballa Soto Monument'
let hold132 = 'Museo De Bacolor'
let hold133 =  'De Leons House'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let  hold134 ='Museo Ning Angeles'
let hold135 = 'Holy Rosary Parish Church'
let hold136 = 'Sm City Clark'
let hold137 = 'Marquee mall '
let hold138 =  'Pamintuan House'
let hold139=  'Nepo Mart'
let hold140= 'Municipio De Angeles '
let duh134= localStorage.setItem('hi134 ', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136 = localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='St. Augustine Parish Church'
let hold142 ='Old Lubao Town Hall'
let hold143 = 'Birht Place of President Diosdado P Macapagal'
let hold144 ='Venerated Wooden Cross Of Sta. Cruz Parish'
let hold145 =  'Museo at Aklatan ni Pangulong Diosdado Macapagal'
let hold146 =  'None'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }

 /* HISTORY SHOPPING SPORTS NATURE*/
if  ((document.getElementById('prefer1').checked == true) && (document.getElementById('prefer2').checked == true) && (document.getElementById('prefer5').checked == true)&& (document.getElementById('prefer9').checked == true)) {
  let hold1 =  "Metro Cathedral of San fernando"
  let hold2 = "Pampanga Capitol"
  let hold3 = 'Bren Z. Guiao Sports Complex'
  let hold4 = 'Sm City telebastagan'
  let hold5 = 'Sm City Pampanga'
  let hold6 = 'Philippine Sports Performance Plus'
  let hold7 = 'Lazatin House'
 let duh1 = localStorage.setItem('hi1', hold1)
 let duh2 =localStorage.setItem('hi2', hold2)
 let duh3 = localStorage.setItem('hi3', hold3)
 let duh4 = localStorage.setItem('hi4', hold4)
 let duh5 = localStorage.setItem('hi5', hold5)
 let duh6 = localStorage.setItem('hi6', hold6)
 let duh7 = localStorage.setItem('hi7', hold7)

/*guagua*/
let hold8 = 'Savemore Market Primark Guagua'
let hold9 = 'Primark Center Guagua'
let hold10 = 'Betis Gymnasium'
let hold11 = 'Ascomo Basketball Court'
let hold12 =  'GL Body GYM'
let hold13=  'Robinson Easymart Megamark Guagua'
let hold14=  'None'
let duh8 = localStorage.setItem('hi8', hold8)
let duh9 =localStorage.setItem('hi9', hold9)
let duh10 = localStorage.setItem('hi10', hold10)
let duh11 = localStorage.setItem('hi11', hold11)
let duh12 = localStorage.setItem('hi12', hold12)
let duh13= localStorage.setItem('hi13', hold13)
let duh14 = localStorage.setItem('hi14', hold14)
/*florida*/
let  hold15 ="Chuzon Supermarket"
let hold16 = 'Floridablanca Sports Center'
let hold17 = 'Nabuclod'
let hold18 = "Orange Supermarket"
let hold19 = 'Basa Air Base'
let hold20=  'Palakol River'
let hold21=  'Bahay Kastilla'
let duh15 = localStorage.setItem('hi15', hold15)
let duh16 = localStorage.setItem('hi16', hold16)
let duh17 = localStorage.setItem('hi17', hold17)
let duh18 = localStorage.setItem('hi18', hold18)
let duh19 = localStorage.setItem('hi19', hold19)
let duh20=  localStorage.setItem('hi20', hold20)
let duh21 = localStorage.setItem('hi21', hold21)
/*porac*/
let  hold22 = "Miyamit Falls"
let hold23 = "GT7 Mall"
let hold24 = 'Jose Songco Sports Complex'
let hold25 = "Ilog Camalig"
let hold26 = 'The Chapel in pio'
let hold27=  'Puregold Porac'
let hold28= 'St. Catherine Parish Church'
let duh22 = localStorage.setItem('hi22', hold22)
let duh23 = localStorage.setItem('hi23', hold23)
let duh24 = localStorage.setItem('hi24', hold24)
let duh25 = localStorage.setItem('hi25', hold25)
let duh26 = localStorage.setItem('hi26', hold26)
let duh27=  localStorage.setItem('hi27', hold27)
let duh28 = localStorage.setItem('hi28', hold28)
/*arayat*/
let  hold29 = "Gintung Pakpak"
let hold30 = "Bahay na Bato ng Balik sa Paraiso"
let hold31 = 'City Mall Arayat'
let hold32 =  'Arayat Sports Complex'
let hold33 =  'GT7 Mall Arayat'
let hold34 =  'Sta. Catalina De Alejandria Church'
let hold35 =  '588 Shopping Mall'
let duh29 = localStorage.setItem('hi29', hold29)
let duh30 = localStorage.setItem('hi30', hold30)
let duh31 = localStorage.setItem('hi31', hold31)
let duh32 = localStorage.setItem('hi32', hold32)
let duh33 = localStorage.setItem('hi34', hold33)
let duh34=  localStorage.setItem('hi35', hold34)
let duh35 = localStorage.setItem('hi36', hold35)
/*apalit*/
let  hold36="365 Shopping Mart"
let hold37 ='Pedro Espiritu Ancestral House '
let hold38 = 'Church of Apalit/Church Complex of St. Peter The Apostle'
let hold39 =  'Savemore Apalit'
let hold40 =  'Puregold Extra Apalit'
let hold41=  'Super 99'
let hold42=  '588 Shopping Mall'
let duh36 = localStorage.setItem('hi36', hold36)
let duh37= localStorage.setItem('hi37', hold37)
let duh38 = localStorage.setItem('hi38', hold38)
let duh39 = localStorage.setItem('hi39', hold39)
let duh40 = localStorage.setItem('hi40', hold40)
let duh41=  localStorage.setItem('hi41', hold41)
let duh42 = localStorage.setItem('hi42', hold42)
/*candaba*/
let  hold43 =  "Candaba Bird Sanctuary"
let hold44 =  'Miss Earth Park, Candaba'
let hold45 = 'Candaba Arena'
let hold46 =  'Paligue Street Market'
let hold47 =  'Puregold'
let hold48=  'St. Andrew the Apostle Church'
let hold49=  'Torres House'
let duh43 = localStorage.setItem('hi43', hold43)
let duh44 = localStorage.setItem('hi44', hold44)
let duh45 = localStorage.setItem('hi45', hold45)
let duh46 = localStorage.setItem('hi46', hold46)
let duh47 = localStorage.setItem('hi47', hold47)
let duh48=  localStorage.setItem('hi48', hold48)
let duh49 = localStorage.setItem('hi49', hold49)
/*macabebe*/
let  hold50 = "Macabebe Beach"
let hold51 ='San Nicolas De Tolentino Parish Church'
let hold52 = 'Watson Savemore Primark Macabebe'
let hold53 =  'Best Budget Macabebe'
let hold54 =  'None'
let hold55=  'None'
let hold56=  'None'
let duh50 = localStorage.setItem('hi50', hold50)
let duh51 = localStorage.setItem('hi51', hold51)
let duh52 = localStorage.setItem('hi52', hold52)
let duh53 = localStorage.setItem('hi53', hold53)
let duh54 = localStorage.setItem('hi54', hold54)
let duh55=  localStorage.setItem('hi55', hold55)
let duh56 = localStorage.setItem('hi56', hold56)
/*sasmuan*/
let  hold57 =  "Bangkung Malapad Bird Watching Site"
let hold58 = 'Sasmuan River'
let hold59 = 'Sasmuan Town Hall'
let hold60 = 'Sasmuan Basketball Court'
let hold61 ='Alfamart'
let hold62='Sta. Lucia Parish Church'
let hold63=  'Sta. Monica Port'
let duh57 = localStorage.setItem('hi57', hold57)
let duh58 = localStorage.setItem('hi58', hold58)
let duh59 = localStorage.setItem('hi59', hold59)
let duh60 = localStorage.setItem('hi60', hold60)
let duh61 = localStorage.setItem('hi61', hold61)
let duh62=  localStorage.setItem('hi62', hold62)
let duh63 = localStorage.setItem('hi63', hold63)
/*san luis*/
let  hold64 = "San Luis Park"
let hold65 = 'Old San Luis Public Market'
let hold66 =  'San Luis Sports Complex'
let hold67 =  'St. Aloysius parish Church'
let hold68 =  'Felipe Carlos House'
let hold69=  'Bulanadi House'
let hold70=  'Loreto Punzalan House'
let duh64 = localStorage.setItem('hi64', hold64)
let duh65 = localStorage.setItem('hi65', hold65)
let duh66 = localStorage.setItem('hi66', hold66)
let duh67 = localStorage.setItem('hi67', hold67)
let duh68 = localStorage.setItem('hi68', hold68)
let duh69=  localStorage.setItem('hi69', hold69)
let duh70 = localStorage.setItem('hi70', hold70)
/*san simon*/
let  hold71 ="San Jose Poblacion Plaza"
let hold72 = 'San Simon Covered Court'
let hold73 = 'San Simon Public Market'
let hold74 =  'Nuestra Señora Del Pilar Parish Church'
let hold75 =  'None'
let hold76 =  'None'
let hold77 =  'None'
let duh71 = localStorage.setItem('hi71', hold71)
let duh72 = localStorage.setItem('hi72', hold72)
let duh73 = localStorage.setItem('hi73', hold73)
let duh74 = localStorage.setItem('hi74', hold74)
let duh75 = localStorage.setItem('hi75', hold75)
let duh76=  localStorage.setItem('hi76', hold76)
let duh77 = localStorage.setItem('hi77', hold77)
/*mexico*/
let  hold78 =  "Lakeshore Pampanga"
let hold79 ='Oakland Club House at Beverly Place Pampanga'
let hold80 = 'Primark Center Mexico'
let hold81 =  'Sta. monica Parish Church'
let hold82 ='San Jose Matulid Chapel'
let hold83='Reyes House'
let hold84='Ocampo House'
let duh78 = localStorage.setItem('hi78', hold78)
let duh79 = localStorage.setItem('hi79', hold79)
let duh80 = localStorage.setItem('hi80', hold80)
let duh81 = localStorage.setItem('hi81', hold81)
let duh82 = localStorage.setItem('hi82', hold82)
let duh83=  localStorage.setItem('hi83', hold83)
let duh84 = localStorage.setItem('hi84', hold84)
/*minalin*/
let  hold85 = "Sunset Park"
let hold86 = 'Alfamart'
let hold87 = 'None'
let hold88 =  'None'
let hold89 =  'None'
let hold90 =  'None'
let hold91=  'None'
let duh85 = localStorage.setItem('hi85', hold85)
let duh86 = localStorage.setItem('hi86', hold86)
let duh87 = localStorage.setItem('hi80', hold87)
let duh88 = localStorage.setItem('hi81', hold88)
let duh99 = localStorage.setItem('hi82', hold89)
let duh90=  localStorage.setItem('hi83', hold90)
let duh91 = localStorage.setItem('hi84', hold91)
/*santa rita*/
let  hold92 = "Santa Rita Eco Park"
let hold93 = 'Becuran Sports Complex'
let hold94 ='Alfamart'
let hold95 ='Sta. Rita Parich Church'
let hold96 = 'Reliquary of Saint Rita de Cascia'
let hold97='Miguel Aguilus Ancestral House'
let hold98='Carpio Ancestral House'
let duh92 = localStorage.setItem('hi92', hold92)
let duh93 = localStorage.setItem('hi93', hold93)
let duh94 = localStorage.setItem('hi94', hold94)
let duh95 = localStorage.setItem('hi95', hold95)
let duh96 = localStorage.setItem('hi96', hold96)
let duh97 =  localStorage.setItem('hi97',hold97)
let duh98 = localStorage.setItem('hi98', hold98)
/*santo tomas*/
let  hold09 =  "Pampanga Pottery, and Agritousim Park"
let hold100 = 'Robinsons Easymart Sto. Tomas Pampanga '
let hold101 = 'Sto. Niño Terracota Retablo'
let hold102= 'None'
let hold103= 'None'
let hold104 =  'None'
let hold105 =  'None'
let duh09 = localStorage.setItem('hi09', hold09)
let duh100 = localStorage.setItem('hi100', hold101)
let duh101 = localStorage.setItem('hi101', hold101)
let duh102 = localStorage.setItem('hi102', hold102)
let duh103 = localStorage.setItem('hi103', hold103)
let duh104 =  localStorage.setItem('hi104', hold104)
let duh105 = localStorage.setItem('hi105', hold105)
/*santa ana*/
let  hold106 ='Xiaoo Clothing'
let hold107= 'Ang Simbahan ng Sta. Ana'
let hold108 =  'Aliwalas Family House'
let hold109=  'Engineer Pedro Montoya House'
let hold110=  'None'
let hold111=  'None'
let hold112=  'None'
let duh106 = localStorage.setItem('hi106', hold107)
let duh107= localStorage.setItem('hi107', hold107)
let duh108 = localStorage.setItem('hi108', hold108)
let duh109 = localStorage.setItem('hi109', hold109)
let duh110 = localStorage.setItem('hi110', hold110)
let duh111=  localStorage.setItem('hi111', hold111)
let duh112 = localStorage.setItem('hi112', hold112)
/*magalang*/
let  hold113 = 'Bren Z. Guiao Magalang Sports Complex'
let hold114= 'Puregold Magalang'
let hold115= 'INDU'
let hold116= 'Church of Magalang'
let hold117 = 'Heliograph Towers'
let hold118 = 'Magalang Municipal Hall'
let hold119=  'Rivera House'
let duh113 = localStorage.setItem('hi113', hold113)
let duh114 = localStorage.setItem('hi114', hold114)
let duh115 = localStorage.setItem('hi115', hold115)
let duh116 = localStorage.setItem('hi116', hold116)
let duh117 = localStorage.setItem('hi117', hold117)
let duh118 =  localStorage.setItem('hi118', hold118)
let duh119 = localStorage.setItem('hi119', hold119)
/*mabalacat*/
let  hold120 = 'City Mall DAU'
let hold121='Our Lady of Grace Parish'
let hold122= 'Artillery Memorial'
let hold123 =  'Mabalacat Train Station'
let hold124= 'Clark White House'
let hold125= 'Kamikaze East Airfield'
let hold126= 'Goddess of Peace Shrine'
let duh120 = localStorage.setItem('hi120', hold120)
let duh121 = localStorage.setItem('hi121', hold121)
let duh122 = localStorage.setItem('hi122', hold122)
let duh123 = localStorage.setItem('hi123', hold123)
let duh124 = localStorage.setItem('hi124', hold124)
let duh125=  localStorage.setItem('hi125', hold125)
let duh126 = localStorage.setItem('hi126', hold126)
/*bacolor*/
let  hold127 = 'Don Honorio Ventura State University'
let hold128 ='San Guillermo Parish Church'
let hold129 ='Our Lady of Lourdes Shrine'
let hold130 ='De Leons House'
let hold131 = 'Museo De Bacolor'
let hold132 = 'Juan Crisostomo Caballa Soto Monument'
let hold133 =  'Death Match Marker'
let duh127 = localStorage.setItem('hi127', hold127)
let duh128 = localStorage.setItem('hi128', hold128)
let duh129 = localStorage.setItem('hi129', hold129)
let duh130 = localStorage.setItem('hi130', hold130)
let duh131 = localStorage.setItem('hi131', hold131)
let duh132 =  localStorage.setItem('hi132', hold132)
let duh133 = localStorage.setItem('hi133', hold133)
/*angeles*/
let hold134 = 'Sm City Clark'
let hold135 = 'Museo Ning Angeles'
let hold136 = 'Robinson Place Balibago'
let hold137 = 'Holy Rosary Parish Church'
let hold138 =  'Marquee Mall'
let hold139=  'Municipio De Angeles'
let hold140= 'Nepo Mart'
let duh134= localStorage.setItem('hi134', hold134)
let duh135= localStorage.setItem('hi135', hold135)
let duh136= localStorage.setItem('hi136', hold136)
let duh137 = localStorage.setItem('hi137', hold137)
let duh138= localStorage.setItem('hi138', hold138)
let duh139=  localStorage.setItem('hi139', hold139)
let duh140= localStorage.setItem('hi140', hold140)
/*lubao*/
let  hold141 ='Bamboo Hub'
let hold142 ='St. Augustine Parish Church'
let hold143 = 'Birth place of President Diosdado P Macapagal'
let hold144 ='Venerated Wooden Cross of Sta. Cruz Parish Church'
let hold145 =  'Old Lubao Town Hall'
let hold146 =  'Museo at Aklatan ni Pangulong Diosdado Macapagal'
let hold147 =  'None'
let duh141 = localStorage.setItem('hi141', hold141)
let duh142 = localStorage.setItem('hi142', hold142)
let duh143 = localStorage.setItem('hi143', hold143)
let duh144 = localStorage.setItem('hi144', hold144)
let duh145 = localStorage.setItem('hi145', hold145)
let duh146 =  localStorage.setItem('hi146',hold146)
let duh147 = localStorage.setItem('hi147', hold147)
 }

}


let myInt =  document.getElementById('myInput')
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}