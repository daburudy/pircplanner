let reservation = document.getElementById("container-add")
let tripPlace = document.getElementById("trip-name")
let title = document.getElementById("title")
function reser() {
    if (reservation.style.display == "none") {
        reservation.style.display = "block"
    }
    else {
        reservation.style.display = "none"
    }
}
/*the mapping */
let welcome = localStorage.getItem("sample")
let nameX = document.getElementById('nameX')
let itsChoice = document.getElementById('your-choice')
let mapStay = document.getElementById("mapstay")
let pictures = document.getElementById("place-pic")
let mapPlace = document.getElementById("map")
let description = document.getElementById("what-is-it")
let place = document.getElementById("places-to-stay")
let bg = document.getElementById("background-image")
let mapping = localStorage.getItem("place")
let visitors = document.getElementById('welcome-days')

let guestSet = localStorage.getItem("guest")
let firstPic = document.getElementById("hey1")
let secPic = document.getElementById("hey2")
let thirdPic = document.getElementById("hey3")
let fourthPic = document.getElementById("hey4")
let fifthPic = document.getElementById("hey5")
let sixthPic = document.getElementById("hey6")
let sevenPic = document.getElementById("hey7")
let depart = document.getElementById("depart")

if (guestSet <= 2) {
  depart.src = "images/motor.png"
  firstPic.src = "images/motor.png"
  secPic.src = "images/motor.png"
  thirdPic.src = "images/motor.png"
  fourthPic.src = "images/motor.png"
  fifthPic.src = "images/motor.png"
  sixthPic.src = "images/motor.png"
  sevenPic.src = "images/motor.png"
  }

   else if (guestSet <= 5) {
    depart.src = "images/taxi.jpg"
    firstPic.src ="images/taxi.jpg"
    secPic.src = "images/taxi.jpg"
    thirdPic.src = "images/taxi.jpg"
    fourthPic.src = "images/taxi.jpg"
    fifthPic.src = "images/taxi.jpg"
    sixthPic.src = "images/motor.jpg"
    sevenPic.src = "images/motor.jpg "
    }
 
    else if  (guestSet <= 15) {
      depart.src = "images/van.jpg"
      firstPic.src ="images/van.jpg"
      secPic.src = "images/van.jpg"
      thirdPic.src = "images/van.jpg"
      fourthPic.src = "images/van.jpg"
      fifthPic.src = "images/van.jpg"
      sixthPic.src = "images/van.jpg"
      sevenPic.src = "images/van.jpg "
    }

    else if  (guestSet <= 20) {
      depart.src = "images/jeep.jpg"
      firstPic.src ="images/jeep.jpg"
      secPic.src = "images/jeep.jpg"
      thirdPic.src ="images/jeep.jpg"
      fourthPic.src = "images/jeep.jpg"
      fifthPic.src = "images/jeep.jpg"
      sixthPic.src = "images/jeep.jpg"
      sevenPic.src = "images/jeep.jpg"
    }
    else  {
      depart.src = "images/bus.jpg"
      firstPic.src = "images/bus.jpg"
      secPic.src =  "images/bus.jpg"
      thirdPic.src = "images/bus.jpg"
      fourthPic.src = "images/bus.jpg"
      fifthPic.src =  "images/bus.jpg"
      sixthPic.src =  "images/bus.jpg"
      sevenPic.src =  "images/bus.jpg"
    }

if (welcome == '1 Day')  {
  visitors.innerHTML =   welcome
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'none'
  document.getElementById('numThree').style.display = 'none'
  document.getElementById('numFour').style.display = 'none'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'none'
  document.getElementById('holder3').style.display = 'none'
  document.getElementById('holder4').style.display = 'none'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'

}

else if (welcome == '2 Days' ) {
  visitors.innerHTML =   welcome
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'none'
  document.getElementById('numFour').style.display = 'none'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'none'
  document.getElementById('holder4').style.display = 'none'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}

else if  (welcome =='3 Days' ) {
  visitors.innerHTML =   welcome
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'none'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'none'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}

else if  (welcome == '4 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'none'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'none'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}
else if  (welcome == '5 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'block'
  document.getElementById('numSix').style.display = 'none'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'block'
  document.getElementById('holder6').style.display = 'none'
  document.getElementById('holder7').style.display = 'none'
}
else if  (welcome == '6 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'block'
  document.getElementById('numSix').style.display = 'block'
  document.getElementById('numSeven').style.display = 'none'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'block'
  document.getElementById('holder6').style.display = 'block'
  document.getElementById('holder7').style.display = 'none'
}
else if  (welcome =='7 Days' ) {
  visitors.innerHTML =   welcome 
  document.getElementById('numOne').style.display = 'block'
  document.getElementById('numTwo').style.display = 'block'
  document.getElementById('numThree').style.display = 'block'
  document.getElementById('numFour').style.display = 'block'
  document.getElementById('numFive').style.display = 'block'
  document.getElementById('numSix').style.display = 'block'
  document.getElementById('numSeven').style.display = 'block'
  document.getElementById('holder1').style.display = 'block'
  document.getElementById('holder2').style.display = 'block'
  document.getElementById('holder3').style.display = 'block'
  document.getElementById('holder4').style.display = 'block'
  document.getElementById('holder5').style.display = 'block'
  document.getElementById('holder6').style.display = 'block'
  document.getElementById('holder7').style.display = 'block'
}
/*san fernando*/
localStorage.getItem('hi1')
localStorage.getItem('hi2')
localStorage.getItem('hi3')
localStorage.getItem('hi4')
localStorage.getItem('hi5')
localStorage.getItem('hi6')
localStorage.getItem('hi7')
/*guagua*/
localStorage.getItem('hi8')
localStorage.getItem('hi9')
localStorage.getItem('hi10')
localStorage.getItem('hi11')
localStorage.getItem('hi12')
localStorage.getItem('hi13')
localStorage.getItem('hi14')
/*florida*/
localStorage.getItem('hi15')
localStorage.getItem('hi16')
localStorage.getItem('hi17')
localStorage.getItem('hi18')
localStorage.getItem('hi19')
localStorage.getItem('hi20')
localStorage.getItem('hi21')
/*porac*/
localStorage.getItem('hi22')
localStorage.getItem('hi23')
localStorage.getItem('hi24')
localStorage.getItem('hi25')
localStorage.getItem('hi26')
localStorage.getItem('hi27')
localStorage.getItem('hi28')
/*arayat*/
localStorage.getItem('hi29')
localStorage.getItem('hi30')
localStorage.getItem('hi31')
localStorage.getItem('hi32')
localStorage.getItem('hi33')
localStorage.getItem('hi34')
localStorage.getItem('hi35')
/*apalit*/
localStorage.getItem('hi36')
localStorage.getItem('hi37')
localStorage.getItem('hi38')
localStorage.getItem('hi39')
localStorage.getItem('hi40')
localStorage.getItem('hi41')
localStorage.getItem('hi42')
/*candaba*/
localStorage.getItem('hi43')
localStorage.getItem('hi44')
localStorage.getItem('hi45')
localStorage.getItem('hi46')
localStorage.getItem('hi47')
localStorage.getItem('hi48')
localStorage.getItem('hi49')
/*macabebe*/
localStorage.getItem('hi50')
localStorage.getItem('hi51')
localStorage.getItem('hi52')
localStorage.getItem('hi53')
localStorage.getItem('hi54')
localStorage.getItem('hi55')
localStorage.getItem('hi56')
/*sasmuan*/
localStorage.getItem('hi57')
localStorage.getItem('hi58')
localStorage.getItem('hi59')
localStorage.getItem('hi60')
localStorage.getItem('hi61')
localStorage.getItem('hi62')
localStorage.getItem('hi63')
/*san luis*/
localStorage.getItem('hi64')
localStorage.getItem('hi65')
localStorage.getItem('hi66')
localStorage.getItem('hi67')
localStorage.getItem('hi68')
localStorage.getItem('hi69')
localStorage.getItem('hi70')
/*san simon*/
localStorage.getItem('hi71')
localStorage.getItem('hi72')
localStorage.getItem('hi73')
localStorage.getItem('hi74')
localStorage.getItem('hi75')
localStorage.getItem('hi76')
localStorage.getItem('hi77')
/*mexico*/
localStorage.getItem('hi78')
localStorage.getItem('hi79')
localStorage.getItem('hi80')
localStorage.getItem('hi81')
localStorage.getItem('hi82')
localStorage.getItem('hi83')
localStorage.getItem('hi84')
/*minalin*/
localStorage.getItem('hi85')
localStorage.getItem('hi86')
localStorage.getItem('hi87')
localStorage.getItem('hi88')
localStorage.getItem('hi89')
localStorage.getItem('hi90')
localStorage.getItem('hi91')
/*santa rita*/
localStorage.getItem('hi92')
localStorage.getItem('hi93')
localStorage.getItem('hi94')
localStorage.getItem('hi95')
localStorage.getItem('hi96')
localStorage.getItem('hi97')
localStorage.getItem('hi98')
/*santo tomas*/
localStorage.getItem('hi09')
localStorage.getItem('hi100')
localStorage.getItem('hi101')
localStorage.getItem('hi102')
localStorage.getItem('hi103')
localStorage.getItem('hi104')
localStorage.getItem('hi105')
/*santa ana*/
localStorage.getItem('hi106')
localStorage.getItem('hi107')
localStorage.getItem('hi108')
localStorage.getItem('hi109')
localStorage.getItem('hi110')
localStorage.getItem('hi111')
localStorage.getItem('hi112')
/*magalang*/
localStorage.getItem('hi113')
localStorage.getItem('hi114')
localStorage.getItem('hi115')
localStorage.getItem('hi116')
localStorage.getItem('hi117')
localStorage.getItem('hi118')
localStorage.getItem('hi119')
/*mabalacat*/
localStorage.getItem('hi120')
localStorage.getItem('hi121')
localStorage.getItem('hi122')
localStorage.getItem('hi123')
localStorage.getItem('hi124')
localStorage.getItem('hi125')
localStorage.getItem('hi126')
/*bacolor*/
localStorage.getItem('hi127')
localStorage.getItem('hi128')
localStorage.getItem('hi129')
localStorage.getItem('hi130')
localStorage.getItem('hi131')
localStorage.getItem('hi132')
localStorage.getItem('hi133')
/*angeles*/
localStorage.getItem('hi134')
localStorage.getItem('hi135')
localStorage.getItem('hi136')
localStorage.getItem('hi137')
localStorage.getItem('hi138')
localStorage.getItem('hi139')
localStorage.getItem('hi140')
/*lubao*/
localStorage.getItem('hi141')
localStorage.getItem('hi142')
localStorage.getItem('hi143')
localStorage.getItem('hi144')
localStorage.getItem('hi145')
localStorage.getItem('hi146')
localStorage.getItem('hi147')

if (mapping == "San Fernando, Pampanga") {
  document.getElementById('from').innerHTML = 'San Fernando' 
   mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20in%20san%20fernando%20pampanga%20san%20fernando%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">'
    mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20san%20fernando%20pampanga%20san%20fernando%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
    title.innerHTML = "Trip to San Fernando, Pampanga"
    tripPlace.innerHTML = "Trip to San Fernando Pamp."
    pictures.src = "sanfernando/sky.jpg"
    bg.src = "sanfernando/sky.jpg"
    place.innerHTML = "San Fernando, Pampanga"
    nameX.innerHTML =  "San Fernando, Pampanga"
    description.innerHTML ="The town of San Fernando was founded in 1754 from the towns of Bacolor and Mexico. The first church was built in 1755 with wooden walls and nipa roofing. The municipal tribunal was erected later in the year in front of the town plaza using durable materials and thatched nipa roofing. Don Vidal de Arrozal served as its first gobernadorcillo that year."
    document.getElementById('things3').innerHTML = 'Relaxing &emsp;•'

    document.getElementById('text1').value = localStorage.getItem('hi1')
    document.getElementById('text2').value = localStorage.getItem('hi2')
    document.getElementById('text3').value = localStorage.getItem('hi3')
    document.getElementById('text4').value = localStorage.getItem('hi4')
    document.getElementById('text5').value = localStorage.getItem('hi5')
    document.getElementById('text6').value = localStorage.getItem('hi6')
    document.getElementById('text7').value = localStorage.getItem('hi7')
     
    /*sports complex*/
    if (localStorage.getItem('hi1') == 'Bren Z. Guiao Sports Complex' ) {
      document.getElementById('title-spts').innerHTML = 'Bren Z. Guiao Sports Complex'
      document.getElementById('yr-pic').src = 'images/brenz.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.5'
      document.getElementById('spotsz').innerHTML = ' Sports Complex · Gym'
      document.getElementById('ninu').innerHTML= ' The Bren Z. Guiao Sports Complex and Convention Center is a sports complex located in San Fernando, Pampanga, Philippines'
 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi1') == 'North Walk' ) {
      document.getElementById('title-spts').innerHTML = 'North Walk Clark'
      document.getElementById('yr-pic').src = 'images/north.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.5'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= ' Address: 5G7X+9H8, Manuel A. Roxas Hwy, Angeles, Pampanga Hours: Open ⋅ Closes 10PM'
    }
    /*historical*/
    else if (localStorage.getItem('hi1') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/not.jpg'
      document.getElementById('rating').style.display = 'none'
      document.getElementById('spotsz').style.display = 'none'
      document.getElementById('ninu').style.display = 'none'
      document.getElementById('starting-hour').style.display = 'none'
      document.getElementById('hour3').style.display = 'none'
    }
    /*nature*/
    else if (localStorage.getItem('hi1') ==  "TPKIF NATURE'S FARM" ) {
      document.getElementById('title-spts').innerHTML = "TPKIF NATURE'S FARM"
      document.getElementById('yr-pic').src = 'images/tfk.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Farm '
      document.getElementById('ninu').innerHTML= 'Natural farming embracing back to basic agriculture.' 
    }
    /*nature history*/
 else if (localStorage.getItem('hi1') == "City Hall Of San Fernando") {
      document.getElementById('title-spts').innerHTML = "City Hall Of San Fernando"
      document.getElementById('yr-pic').src = 'images/city.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Business center in San Fernando City.' 
    }
     /*nature shopping*/
    else if (localStorage.getItem('hi1') ==  "SM City Pampanga" ) {
      document.getElementById('title-spts').innerHTML = "SM City Pampanga"
      document.getElementById('yr-pic').src = 'images/Smp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 
    }
     /*nature sports*/
    else if (localStorage.getItem('hi1') ==  "St. Jude Village Park" ) {
      document.getElementById('title-spts').innerHTML = "St. Jude Village Park"
      document.getElementById('yr-pic').src = 'images/jude.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Village hall in San Fernando City.' 
    }
     /*history shopping*/
    else if (localStorage.getItem('hi1') ==  "Sm City Downtown" ) {
      document.getElementById('title-spts').innerHTML = "Sm City Downtown"
      document.getElementById('yr-pic').src = 'images/downtown.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 
    }
     /*history sports*/
    else if (localStorage.getItem('hi1') ==  "Philippines Sports Performance" ) {
      document.getElementById('title-spts').innerHTML = "Philippines Sports Performance"
      document.getElementById('yr-pic').src = 'images/pspp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Sport '
      document.getElementById('ninu').innerHTML= 'San Fernando Pampanga.' 
    }
     /*shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Sm City Telabastagan" ) {
      document.getElementById('title-spts').innerHTML = "Sm City Telabastagan"
      document.getElementById('yr-pic').src = 'images/telebastagan.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 
    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi1') ==  "Heroes Hall- City Hall" ) {
      document.getElementById('title-spts').innerHTML = "Heroes Hall - City Hall"
      document.getElementById('yr-pic').src = 'images/heroes.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Government office in San Fernando City.' 
    }
     /*nature history sports*/
    else if (localStorage.getItem('hi1') ==  "Pampanga Capitol" ) {
      document.getElementById('title-spts').innerHTML = "Pampanga Capitol"
      document.getElementById('yr-pic').src = 'images/capitol.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.6'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Local government office in San Fernando City.' 
    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Robinson Starmills" ) {
      document.getElementById('title-spts').innerHTML = "Robinson Starmills"
      document.getElementById('yr-pic').src = 'images/rbs.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.2'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in San Fernando City.' 
    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Lazatin House" ) {
      document.getElementById('title-spts').innerHTML = "Lazatin House"
      document.getElementById('yr-pic').src = 'images/lzh.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.6'
      document.getElementById('spotsz').innerHTML = ' History'
      document.getElementById('ninu').innerHTML= 'Historical landmark in San Fernando City.' 
    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi1') ==  "Metro Cathedral of San fernando" ) {
      document.getElementById('title-spts').innerHTML = "Metro Cathedral of San fernando"
      document.getElementById('yr-pic').src = 'images/mcsf.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Catholic cathedral in San Fernando City.' 
    }
  }
/*GUAGUA*/
     else if (mapping == "Guagua, Pampanga") {
      document.getElementById('from').innerHTML = 'Guagua' 
        mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20iguaguapampanga%20guagua%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz"" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20guagua%20pampanga%20guagua%20pampanga+(florida)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Guagua, Pampanga"
        tripPlace.innerHTML = "Trip to Guagua, Pampanga"
        bg.src = "guagua/Betis.jpg"
        place.innerHTML = "Guagua, Pampanga"
        nameX.innerHTML =  "Guagua, Pampanga"
        description.innerHTML ="Wawa was already a prosperous settlement when Spanish colonists took control of the town in the year 1561, from then on calling it Guagua, which is a Hispanised form of the original name. Indeed, archeological artifacts have been excavated in a nearby town which affirmed the existence of a prehistoric community in Guagua."
        pictures.src = "guagua/Betis.jpg"
        document.getElementById('things3').innerHTML = 'Market &emsp;•'


        document.getElementById('text1').value = localStorage.getItem('hi8')
        document.getElementById('text2').value = localStorage.getItem('hi9')
        document.getElementById('text3').value = localStorage.getItem('hi10')
        document.getElementById('text4').value = localStorage.getItem('hi11')
        document.getElementById('text5').value = localStorage.getItem('hi12')
        document.getElementById('text6').value = localStorage.getItem('hi13')
        document.getElementById('text7').value = localStorage.getItem('hi14')
        
         /*sports complex*/
    if (localStorage.getItem('hi8') == 'Ascomo Basketball Court' ) {
      document.getElementById('title-spts').innerHTML = 'Ascomo Basketball Court'
      document.getElementById('yr-pic').src = 'images/brenz.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.5'
      document.getElementById('spotsz').innerHTML = ' Sports Complex · Gym'
      document.getElementById('ninu').innerHTML= ' The Bren Z. Guiao Sports Complex and Convention Center is a sports complex located in San Fernando, Pampanga, Philippines'
 /*2*/
     
 /*shopping*/
    }
    else if  (localStorage.getItem('hi8') == 'Megamart guagua' ) {
      document.getElementById('title-spts').innerHTML = 'Megamart guagua'
      document.getElementById('yr-pic').src = 'images/mg.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.0'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in Guagua, Pampanga'
    }
    /*historical*/
    else if (localStorage.getItem('hi8') == 'None' ) {
      document.getElementById('title-spts').innerHTML = 'None'
      document.getElementById('yr-pic').src = 'images/not.jpg'
      document.getElementById('rating').style.display = 'None'
      document.getElementById('spotsz').style.display = 'None'
      document.getElementById('ninu').style.display = 'None'
      document.getElementById('starting-hour').style.display = 'none'
      document.getElementById('hour3').style.display = 'none'
    }
    /*nature*/
    else if (localStorage.getItem('hi8') ==  "None" ) {
      document.getElementById('title-spts').innerHTML = "None"
      document.getElementById('yr-pic').src = 'images/tfk.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' None '
      document.getElementById('ninu').innerHTML= 'None' 
    }
    /*nature history*/
 else if (localStorage.getItem('hi8') == "None") {
      document.getElementById('title-spts').innerHTML = "None"
      document.getElementById('yr-pic').src = 'images/None.jpg'
      document.getElementById('hide').style.color = 'None'
      document.getElementById('rating').innerHTML = 'None'
      document.getElementById('spotsz').innerHTML = ' None '
      document.getElementById('ninu').innerHTML= 'None' 
    }
     /*nature shopping*/
    else if (localStorage.getItem('hi8') ==  "Robinsons Easymart Megamart Guagua" ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart Megamart"
      document.getElementById('yr-pic').src = 'images/gre.jpg'
      document.getElementById('hide').style.color = 'Gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store' 
    }
     /*nature sports*/
    else if (localStorage.getItem('hi8') ==  "Betis Gymnesium" ) {
      document.getElementById('title-spts').innerHTML = "Betis Gymnesium'"
      document.getElementById('yr-pic').src = 'images/jude.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.4'
      document.getElementById('spotsz').innerHTML = ' Nature '
      document.getElementById('ninu').innerHTML= 'Village hall in San Fernando City.' 
    }
     /*history shopping*/
    else if (localStorage.getItem('hi8') ==  "Primark Center guagua" ) {
      document.getElementById('title-spts').innerHTML = "Primark Center guagua"
      document.getElementById('yr-pic').src = 'images/pc.png'
      document.getElementById('hide').style.color = 'orange'
      document.getElementById('rating').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in Guagua, Pampanga' 
    }
     /*history sports*/
    else if (localStorage.getItem('hi8') ==  "Philippines Sports Performance" ) {
      document.getElementById('title-spts').innerHTML = "Philippines Sports Performance"
      document.getElementById('yr-pic').src = 'images/pspp.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Sport '
      document.getElementById('ninu').innerHTML= 'San Fernando Pampanga.' 
    }
     /*shopping sports*/
    else if (localStorage.getItem('hi8') ==  "Primark Center" ) {
      document.getElementById('title-spts').innerHTML = "Primark Center Guagua"
      document.getElementById('yr-pic').src = 'images/pc.png'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '5.0'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Shopping mall in Guagua, Pampanga.' 
    }
     /*nature history shopping*/
    else if (localStorage.getItem('hi8') ==  "Savemore Market Primark" ) {
      document.getElementById('title-spts').innerHTML = "Savemore Market Primark Guagua"
      document.getElementById('yr-pic').src = 'images/savemore.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.9'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Grocery store' 
    }
     /*nature history sports*/
    else if (localStorage.getItem('hi8') ==  "Pampanga Capitol" ) {
      document.getElementById('title-spts').innerHTML = "Pampanga Capitol"
      document.getElementById('yr-pic').src = 'images/capitol.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '3.6'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Local government office in San Fernando City.' 
    }
     /*nature shopping sports*/
    else if (localStorage.getItem('hi8') ==  'Robinsons Easymart ' ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart "
      document.getElementById('yr-pic').src = 'images/rem.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' Shopping '
      document.getElementById('ninu').innerHTML= 'Grocery store.' 
    }
     /*history shopping sports*/
    else if (localStorage.getItem('hi8') ==  "Robinsons Easymart Megamart Guagua" ) {
      document.getElementById('title-spts').innerHTML = "Robinsons Easymart Megamart Guagua"
      document.getElementById('yr-pic').src = 'images/rem.jpg'
      document.getElementById('hide').style.color = 'gray'
      document.getElementById('rating').innerHTML = '4.1'
      document.getElementById('spotsz').innerHTML = ' shopping'
      document.getElementById('ninu').innerHTML= 'Grocery store' 
    }
     /*nature history shopping sports*/
    else if (localStorage.getItem('hi8') ==  "Savemore Market Primark Guagua" ) {
      document.getElementById('title-spts').innerHTML = "Metro Cathedral of San fernando"
      document.getElementById('yr-pic').src = 'images/mcsf.jpg'
      document.getElementById('hide').style.color = 'Orange'
      document.getElementById('rating').innerHTML = '4.5'
      document.getElementById('spotsz').innerHTML = ' History '
      document.getElementById('ninu').innerHTML= 'Catholic cathedral in San Fernando City.' 
    }
/*florida*/
     }
     else if (mapping == "Floridablanca, Pampanga") {
      document.getElementById('from').innerHTML = 'Florida' 
        mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20floridablanca%20pampanga%20floridablanca%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20floridablanca%20pampanga%20floridablanca%20pampanga+(florida)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Floridablanca"
        tripPlace.innerHTML = "Trip to Floridablanca Pamp."
        bg.src = "florida/nabuclod.jpg"
        pictures.src = "florida/nabuclod.jpg"
        place.innerHTML = "Floridablanca, Pampanga"
        nameX.innerHTML = "Floridablanca, Pampanga"
        description.innerHTML = "Floridablanca was founded in 1823 at the site of a monastery. In the 1920s, the Pampanga Sugar Mill was built at Del Carmen in the 1920s. The area was the site of military bases of the Philippine Commonwealth Army and the Philippine Constabulary from 1942 to 1946."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi15')
        document.getElementById('text2').value = localStorage.getItem('hi16')
        document.getElementById('text3').value = localStorage.getItem('hi17')
        document.getElementById('text4').value = localStorage.getItem('hi18')
        document.getElementById('text5').value = localStorage.getItem('hi19')
        document.getElementById('text6').value = localStorage.getItem('hi20')
        document.getElementById('text7').value = localStorage.getItem('hi21')

         }
    
         /*porac*/
         
     else if (mapping == "Porac, Pampanga") {
      document.getElementById('from').innerHTML = 'Porac' 
        mapStay.innerHTML= '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20porac%20pampanga%20porac%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20porac%20pampanga%20porac%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Porac, Pampanga"
        tripPlace.innerHTML = "Trip to Porac, Pampanga"
        bg.src = "porac/miyamit.jpg"
        pictures.src = "porac/poracay.jpg"
        place.innerHTML = "Porac, Pampanga"
        nameX.innerHTML = "Porac, Pampanga"
        description.innerHTML="Porac was founded on October 31, 1594, upon acceptance by Fray Mateo Peralta in the Friar's Intermediate Chapter (recorded by Fray Gaspar de San Agustin, by saying Porac has its First Minister and Friar, Fray Mateo de Mendoza" 
        document.getElementById('things3').innerHTML = 'Market &emsp;•'
        document.getElementById('text1').value = localStorage.getItem('hi22')
        document.getElementById('text2').value = localStorage.getItem('hi23')
        document.getElementById('text3').value = localStorage.getItem('hi24')
        document.getElementById('text4').value = localStorage.getItem('hi25')
        document.getElementById('text5').value = localStorage.getItem('hi26')
        document.getElementById('text6').value = localStorage.getItem('hi27')
        document.getElementById('text7').value = localStorage.getItem('hi28')
      }
      /*arayat*/
     else if (mapping == "Arayat, Pampanga") {
      document.getElementById('from').innerHTML = 'Arayat' 
        mapStay.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20arayat%20pampanga%20arayat%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20arayat%20pampanga%20arayat%20pampanga+(aRAYAT)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Arayat, Pampanga"
        tripPlace.innerHTML = "Trip to Arayat, Pampanga"
        bg.src = "arayat/arayat.jpg"
        pictures.src = "arayat/arayat.jpg"
        place.innerHTML = "Arayat, Pampanga"
        nameX.innerHTML = "Arayat, Pampanga"
        description.innerHTML = "Arayat, officially the Municipality of Arayat (Kapampangan: Balen ning Arayat; Tagalog: Bayan ng Arayat), is a 1st class municipality in the province of Pampanga in the Philippines. According to the 2020 census, it has a population of 144,875 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi29')
        document.getElementById('text2').value = localStorage.getItem('hi30')
        document.getElementById('text3').value = localStorage.getItem('hi31')
        document.getElementById('text4').value = localStorage.getItem('hi32')
        document.getElementById('text5').value = localStorage.getItem('hi33')
        document.getElementById('text6').value = localStorage.getItem('hi34')
        document.getElementById('text7').value = localStorage.getItem('hi35')
      }
      /*apalit*/
     else if (mapping == "Apalit, Pampanga") {
      document.getElementById('from').innerHTML = 'Apalit'
        mapStay.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20apalit%20pampanga%20apalit%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20apalit%20pampanga%20apalit%20pampanga+(apalit)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Apalit, Pampanga"
        tripPlace.innerHTML = "Trip to Apalit, Pampanga"
        bg.src = "apalit/butterfly.jpg"
        pictures.src ="apalit/butterfly.jpg"
        place.innerHTML = "Apalit, Pampanga"
        nameX.innerHTML =  "Apalit, Pampanga"
        description.innerHTML = "Apalit, officially the Municipality of Apalit (Kapampangan: Balen ning Apalit; Tagalog: Bayan ng Apalit), is a 1st class municipality in the province of Pampanga, Philippines. According to the 2020 census, it has a population of 117,160 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi36')
        document.getElementById('text2').value = localStorage.getItem('hi37')
        document.getElementById('text3').value = localStorage.getItem('hi38')
        document.getElementById('text4').value = localStorage.getItem('hi39')
        document.getElementById('text5').value = localStorage.getItem('hi40')
        document.getElementById('text6').value = localStorage.getItem('hi41')
        document.getElementById('text7').value = localStorage.getItem('hi42')
      }
      /*candaba*/
     else if (mapping == "Candaba, Pampanga") {
      document.getElementById('from').innerHTML = 'Candaba'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20candaba%20pampanga%20candaba%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20candaba%20pampanga%20candaba%20pampanga+(candaba)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Candaba, Pampanga"
        tripPlace.innerHTML = "Trip to Candaba, Pampanga"
        place.innerHTML = "Candaba, Pampanga"
        bg.src = "candaba/bird.jpg"
        nameX.innerHTML =   "Candaba, Pampanga"
        pictures.src = "candaba/bird.jpg"
        description.innerHTML = "Candaba represents the lowest point in Central Luzon Region of Luzon Island. The neighboring municipality of San Miguel (San Miguel de Mayumo) in Bulacan province used to be part of Candaba until San Miguel became a municipality itself."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        
        document.getElementById('text1').value = localStorage.getItem('hi43')
        document.getElementById('text2').value = localStorage.getItem('hi44')
        document.getElementById('text3').value = localStorage.getItem('hi45')
        document.getElementById('text4').value = localStorage.getItem('hi46')
        document.getElementById('text5').value = localStorage.getItem('hi47')
        document.getElementById('text6').value = localStorage.getItem('hi48')
        document.getElementById('text7').value = localStorage.getItem('hi49')
      }
      /*macabebe*/
     else if (mapping == "Macabebe, Pampanga") {
      document.getElementById('from').innerHTML = 'Macabebe'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20macabebe%20pampanga%20macabebe%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20macabebe%20pampanga%20macabebe%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Macabebe, Pampanga"
        tripPlace.innerHTML = "Trip to Macabebe, Pampanga"
        place.innerHTML = "Macabebe, Pampanga"
        bg.src = "macabebe/beach.png"
        pictures.src = "macabebe/beach.png"
        nameX.innerHTML =  "Macabebe, Pampanga"
        description.innerHTML = "Macabebe, an ancient town in the modern-day province of Pampanga, is intimately linked to the Pampanga River (Río Grande de la Pampanga). The town was named Macabebe because it is geographically situated along the shores (Pampangan: bebe; Tagalog: baybay) or banks of Río Grande de Pampanga. The town is sometimes referred to as Makabibe because of the abundance of corals and shells along the Río Grande in earlier times."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi50')
        document.getElementById('text2').value = localStorage.getItem('hi51')
        document.getElementById('text3').value = localStorage.getItem('hi52')
        document.getElementById('text4').value = localStorage.getItem('hi53')
        document.getElementById('text5').value = localStorage.getItem('hi54')
        document.getElementById('text6').value = localStorage.getItem('hi55')
        document.getElementById('text7').value = localStorage.getItem('hi56')
      }
      /*sasmuan*/
     else if (mapping == "Sasmuan, Pampanga") {
      document.getElementById('from').innerHTML = 'Sasmuan'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20sasmuan%20pampanga%20sasmuanpampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"id="gmapz"" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20sasmuan%20pampanga%20sasmuan%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Sasmuan, Pampanga"
        tripPlace.innerHTML = "Trip to Sasmuan, Pampanga"
        place.innerHTML = "Sasmuan, Pampanga"
        bg.src = "samuan/sasmuan.jpg"
        pictures.src = "samuan/sasmuan.jpg"
        nameX.innerHTML =  "Sasmuan, Pampanga"
        description.innerHTML = "The town's former name in Spanish was Sexmoán, as was initially transcribed by Spanish friars. In Spanish, the letter <x> used to be pronounced as a voiceless postalveolar fricative /ʃ/, identical to the digraph <sh> in English. It was derived from the ancient Kapampangan rootword sasmo, which means to meet, according to a 17th-century Kapampangan dictionary. "
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi57')
        document.getElementById('text2').value = localStorage.getItem('hi58')
        document.getElementById('text3').value = localStorage.getItem('hi59')
        document.getElementById('text4').value = localStorage.getItem('hi60')
        document.getElementById('text5').value = localStorage.getItem('hi61')
        document.getElementById('text6').value = localStorage.getItem('hi62')
        document.getElementById('text7').value = localStorage.getItem('hi63')

       
      }
      /*san luis*/
     else if (mapping == "San Luis, Pampanga") {
      document.getElementById('from').innerHTML = 'San luis'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20san%20luis%20pampanga%20san%20luis%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20san%20luis%20pampanga%20san%20luis%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to San Luis, Pampanga"
        tripPlace.innerHTML = "Trip to San Luis, Pampanga"
        place.innerHTML = "San Luis, Pampanga"
        pictures.src = "sanluis/town.jpg"
        bg.src = "sanluis/town.jpg"
        nameX.innerHTML =  "San Luis, Pampanga"
        description.innerHTML = "San Luis, officially the Municipality of San Luis (Kapampangan: Balen ning San Luis; Tagalog: Bayan ng San Luis), is a 3rd class municipality in the province of Pampanga, Philippines. According to the 2020 census, it had a population of 58,551 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi64')
        document.getElementById('text2').value = localStorage.getItem('hi65')
        document.getElementById('text3').value = localStorage.getItem('hi66')
        document.getElementById('text4').value = localStorage.getItem('hi67')
        document.getElementById('text5').value = localStorage.getItem('hi68')
        document.getElementById('text6').value = localStorage.getItem('hi69')
        document.getElementById('text7').value = localStorage.getItem('hi70')
      }
      /*san simon*/
     else if (mapping == "San Simon, Pampanga") {
      document.getElementById('from').innerHTML = 'San Simon'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20san%20simon%20%20pampanga%20san%20simon%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20san%20simon%20pampanga%20san%20simon%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to San Simon, Pamp"
        tripPlace.innerHTML = "Trip to San Simon, Pampanga"
        place.innerHTML = "San Simon, Pampanga"
          bg.src = "sansimon/sansimon.jpg"
          pictures.src =  "sansimon/sansimon.jpg"
          nameX.innerHTML =   "San Simon, Pampanga"
        description.innerHTML = "The village was located between the towns of San Luis in the north and Apalit in the south. As the population of the village kept on growing, the village leaders of that time petitioned to consolidate the village and portions of the towns of San Luis and Apalit, to form an independent pueblo."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi71')
        document.getElementById('text2').value = localStorage.getItem('hi72')
        document.getElementById('text3').value = localStorage.getItem('hi73')
        document.getElementById('text4').value = localStorage.getItem('hi74')
        document.getElementById('text5').value = localStorage.getItem('hi75')
        document.getElementById('text6').value = localStorage.getItem('hi76')
        document.getElementById('text7').value = localStorage.getItem('hi77')
      }
      /*mexico pampanga*/
     else if (mapping == "Mexico, Pampanga") {
      document.getElementById('from').innerHTML = 'Mexico'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20mexico%20%20pampanga%20mexico%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
         mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20mexico%20pampanga%20mexico%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Mexico, Pampanga"
        tripPlace.innerHTML = "Trip to Mexico, Pampanga"
        bg.src = "mexico/lakeshore.jpg"
        pictures.src =  "mexico/lakeshore.jpg"
        place.innerHTML = "Mexico, Pampanga"
        nameX.innerHTML =  "Mexico, Pampanga"
        description.innerHTML = "According to folk etymology, the original pre-Hispanic name of the village was purportedly Masicu or Maca-sicu, which the Spaniards spelled as 'México'. It is claimed that this was a reference to an abundance of chico trees. However chico trees are not endemic to the Philippines and were introduced by the Spaniards from what is now Mexico (Country)."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi78')
        document.getElementById('text2').value = localStorage.getItem('hi79')
        document.getElementById('text3').value = localStorage.getItem('hi80')
        document.getElementById('text4').value = localStorage.getItem('hi81')
        document.getElementById('text5').value = localStorage.getItem('hi82')
        document.getElementById('text6').value = localStorage.getItem('hi83')
        document.getElementById('text7').value = localStorage.getItem('hi84')
      }
      /*minalin*/
     else if (mapping == "Minalin, Pampanga") {
      document.getElementById('from').innerHTML = 'Minalin'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20minalin%20%20pampanga%20minalin%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20minalin%20pampanga%20minalin%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Minalin, Pampanga"
        tripPlace.innerHTML = "Trip to Minalin, Pampanga"
        pictures.src =  "minalin/sunset.jpg"
        place.innerHTML = "Minalin, Pampanga"
        bg.src = "minalin/sunset.jpg"
        nameX.innerHTML =  "Minalin, Pampanga"
        description.innerHTML = "The town is known for its 400-year-old church, the Santa Monica Parish Church, with its unique design that incorporates pre-colonial architectural motif alongside its European Catholic iconography.[5] Minalin is also known for its Aguman Sanduk New Year's Celebration, where in which the town's straight men dress up as beauty queens and ride through town on festive floats."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi85')
        document.getElementById('text2').value = localStorage.getItem('hi86')
        document.getElementById('text3').value = localStorage.getItem('hi87')
        document.getElementById('text4').value = localStorage.getItem('hi88')
        document.getElementById('text5').value = localStorage.getItem('hi89')
        document.getElementById('text6').value = localStorage.getItem('hi90')
        document.getElementById('text7').value = localStorage.getItem('hi91')
      }
      /*santa rita*/
     else if (mapping == "Santa Rita, Pampanga") {
      document.getElementById('from').innerHTML = 'Santa Rita'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20sta%20rita%20%20pampanga%20sta%20rita%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20santa%20rita%20pampanga%20santa%20rita%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Santa Rita, Pampanga"
        tripPlace.innerHTML = "Trip to Santa Rita, Pampanga"
        bg.src = "starita/ecopark.jpg"
        pictures.src =  "starita/ecopark.jpg"
        place.innerHTML = "Santa Rita, Pampanga"
        nameX.innerHTML = "Santa Rita, Pampanga"
        description.innerHTML = "In 1697, the town started as a settlement at a place called Gasac, now Barangay San Isidro. Sta Rita was expanded to a wide territory which is now Barangays San Vicente, San Matias, Santa Monica, San Agustin and San Juan. Due to Hispanicization, Sta Rita was referred to as Santa Rita de Lele or neighboring Santa Rita and Santa Rita Baculud."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi92')
        document.getElementById('text2').value = localStorage.getItem('hi93')
        document.getElementById('text3').value = localStorage.getItem('hi94')
        document.getElementById('text4').value = localStorage.getItem('hi95')
        document.getElementById('text5').value = localStorage.getItem('hi96')
        document.getElementById('text6').value = localStorage.getItem('hi97')
        document.getElementById('text7').value = localStorage.getItem('hi98')
      }
      /*santo tomas*/
     else if (mapping == "Santo Tomas, Pampanga") {
      document.getElementById('from').innerHTML = 'Santo tomas'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20santo%20toMAS%20%20pampanga%20santo%20tomas%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20santo%20tomas%20pampanga%20santo%20tomas%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Santo Tomas, Pampanga"
        tripPlace.innerHTML = "Trip to Santo Tomas, Pampanga"
        bg.src = "santotomas/santotomas.jpg"
        pictures.src =  "santotomas/santotomas.jpg"
        place.innerHTML = "Santo Tomas, Pampanga"
        nameX.innerHTML =  "Santo Tomas, Pampanga"
        description.innerHTML = "The town's name is derived from Baliwag ('tardy' in Spanish) a reference to local habit of arriving late for Mass. Baliwag, whose original name was Santo Tomas, had its Patron, St. Thomas the Apostle. He is also called Doubting Thomas or Didymus (meaning 'twin,' as does 'Thomas' in Aramaic) and was one of the Twelve Apostles of Jesus. "
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi09')
        document.getElementById('text2').value = localStorage.getItem('hi100')
        document.getElementById('text3').value = localStorage.getItem('hi101')
        document.getElementById('text4').value = localStorage.getItem('hi102')
        document.getElementById('text5').value = localStorage.getItem('hi103')
        document.getElementById('text6').value = localStorage.getItem('hi104')
        document.getElementById('text7').value = localStorage.getItem('hi105')
      }
    /*santa ana*/
     else if (mapping == "Santa Ana, Pampanga") {
      document.getElementById('from').innerHTML = 'Santa Ana'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20santa%20ana%20%20pampanga%20santa%20ana%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20santa%20ana%20pampanga%20santa%20ana%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Santa Ana, Pampanga"
        tripPlace.innerHTML = "Trip to Santa Ana, Pampanga"
        bg.src = "staana/church.jpg"
        pictures.src =  "staana/church.jpg"
        place.innerHTML = "Santa Ana, Pampanga"
        nameX.innerHTML = "Santa Ana, Pampanga"
        description.innerHTML =  "Santa Ana, officially the Municipality of Santa Ana (Kapampangan: Balen ning Santa Ana; Tagalog: Bayan ng Santa Ana), is a 3rd class municipality in the province of Pampanga, Philippines. According to the 2020 census, it has a population of 61,537 people."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi106')
        document.getElementById('text2').value = localStorage.getItem('hi107')
        document.getElementById('text3').value = localStorage.getItem('hi108')
        document.getElementById('text4').value = localStorage.getItem('hi109')
        document.getElementById('text5').value = localStorage.getItem('hi110')
        document.getElementById('text6').value = localStorage.getItem('hi111')
        document.getElementById('text7').value = localStorage.getItem('hi112')
      }
      /*magalang*/
     else if (mapping == "Magalang, Pampanga") {
      document.getElementById('from').innerHTML = 'Magalang'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20magalang%20%20pampanga%20magalangpampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML ='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20magalang%20pampanga%20magalang%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Magalang, Pampanga"
        tripPlace.innerHTML = "Trip to Magalang, Pampanga"
        bg.src = "magalang/balebatu.jpg"
        pictures.src =  "magalang/balebatu.jpg"
        place.innerHTML = "Magalang, Pampanga"
        nameX.innerHTML = "Magalang, Pampanga"
        description.innerHTML = "Magalang was mentioned as visita of the nearby town of Arayat on December 29, 1598. On April 30, 1605, it was separated by the Augustinians from Arayat and attained township status due to the bajo de la campana system. Augustinians appointed Fr. Gonzalo de Salazar, OSA as the first pastor."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi113')
        document.getElementById('text2').value = localStorage.getItem('hi114')
        document.getElementById('text3').value = localStorage.getItem('hi115')
        document.getElementById('text4').value = localStorage.getItem('hi116')
        document.getElementById('text5').value = localStorage.getItem('hi117')
        document.getElementById('text6').value = localStorage.getItem('hi118')
        document.getElementById('text7').value = localStorage.getItem('hi119')
      }
      /*mabalacat*/
     else if (mapping == "Mabalacat, Pampanga") {
      document.getElementById('from').innerHTML = 'Mabalacat'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20mabalacat%20pampanga%20mabalacat%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20mabalacat%20pampanga%20mabalacat%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Mabalacat, Pampanga"
        tripPlace.innerHTML = "Trip to Mabalacat, Pampanga"
        place.innerHTML = "Mabalacat, Pampanga"
        pictures.src = "mabalacat/mabalacat.jpg"
        bg.src = "mabalacat/mabalacat.jpg"
        nameX.innerHTML = "Mabalacat, Pampanga"
        description.innerHTML = "Mabalacat has a land area of 83.18 square kilometres (32.12 sq mi). It is 93 kilometres (58 mi) from Manila, 10 kilometres (6.2 mi) from Angeles, and 27 kilometres (17 mi) from the provincial capital, San Fernando."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'
        document.getElementById('text1').value = localStorage.getItem('hi120')
        document.getElementById('text2').value = localStorage.getItem('hi121')
        document.getElementById('text3').value = localStorage.getItem('hi122')
        document.getElementById('text4').value = localStorage.getItem('hi123')
        document.getElementById('text5').value = localStorage.getItem('hi124')
        document.getElementById('text6').value = localStorage.getItem('hi125')
        document.getElementById('text7').value = localStorage.getItem('hi126')
      }
      /*bacolor*/
     else if (mapping =="Bacolor, Pampanga") {
      document.getElementById('from').innerHTML = 'Bacolor'
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20bacolor%20pampanga%20bacolor%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
        mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20bacolor%20pampanga%20bacolor%20pampanga+(bacolor)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Trip to Bacolor, Pampanga"
        tripPlace.innerHTML = "Trip to Bacolor, Pampanga"
        place.innerHTML = "Bacolor, Pampanga"
        bg.src ="bacolor/bacolor-church.jpg"
        pictures.src = "bacolor/bacolor-church.jpg"
        nameX.innerHTML =  "Bacolor, Pampanga"
        description.innerHTML = "Don Guillermo Manabat, a rich landlord, is believed to be the founder of Bacolor in 1574.[7] Historical records show that Bacolor has been in existence as a proposed settlement as early as 1571, the same year Manila was founded by the Spanish."
        document.getElementById('things3').innerHTML = 'Market &emsp;•'

        document.getElementById('text1').value = localStorage.getItem('hi127')
        document.getElementById('text2').value = localStorage.getItem('hi128')
        document.getElementById('text3').value = localStorage.getItem('hi129')
        document.getElementById('text4').value = localStorage.getItem('hi130')
        document.getElementById('text5').value = localStorage.getItem('hi131')
        document.getElementById('text6').value = localStorage.getItem('hi132')
        document.getElementById('text7').value = localStorage.getItem('hi133')
      }
      /*angeles*/
     else if ((mapping =="Angeles, Pampanga") ||(mapping =="Angeles,Pampanga"))  {
        mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20angeles%20pampanga%20angeles%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz"src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20angeles%20angeles%20city+(angeles)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
      title.innerHTML = "Angeles, Pampanga"
      tripPlace.innerHTML = "Trip to Angeles, Pampanga"
      bg.src ="angeles/aqua.jpg"
      pictures.src = "angeles/aqua.jpg"
      place.innerHTML = "Angeles, Pampanga"
      nameX.innerHTML =  "Angeles, Pampanga"
      description.innerHTML = "In 1796, the gobernadorcillo or town head of San Fernando, Don Ángel Pantaleón de Miranda, and his wife, Doña Rosalía de Jesús, along with some followers, staked out a new settlement, which they named Culiát because of the abundance of vines (Gnetum indicum)[5] of that name in the area."
      document.getElementById('things3').innerHTML = 'Market &emsp;•'

      document.getElementById('text1').value = localStorage.getItem('hi134')
      document.getElementById('text2').value = localStorage.getItem('hi135')
      document.getElementById('text3').value = localStorage.getItem('hi136')
      document.getElementById('text4').value = localStorage.getItem('hi137')
      document.getElementById('text5').value = localStorage.getItem('hi138')
      document.getElementById('text6').value = localStorage.getItem('hi139')
      document.getElementById('text7').value = localStorage.getItem('hi140')
   }
   else if (mapping == "Lubao, Pampanga") {
    document.getElementById('from').innerHTML = 'Lubao'
    mapStay.innerHTML='<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=hotels%20lubao%20pampanga%20lubao%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
    mapPlace.innerHTML = '<iframe width="593" height="437" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmapz" src="https://maps.google.com/maps?width=593&amp;height=437&amp;hl=en&amp;q=tourist%20spots%20in%20lubao%20pampanga%20lubao%20pampanga+(amp)&amp;t=h&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>'
  title.innerHTML = "Trip to Lubao, Pampanga"
    tripPlace.innerHTML = "Trip to Lubao, Pampanga"
    bg.src = "lubao/bamboohub.jpg"
    place.innerHTML = "Lubao, Pampanga"
    nameX.innerHTML = "Lubao, Pampanga"
    description.innerHTML ="The town's name derives from the indigenous term lubo which means low or sunken, reflective of the area's muddy and flooded characteristics. Lubao is also known by its Kapampangan language equivalent Baba."
    pictures.src = "lubao/diosdado.jpg"
    document.getElementById('things3').innerHTML = 'Market &emsp;•'

    document.getElementById('text1').value = localStorage.getItem('hi141')
        document.getElementById('text2').value = localStorage.getItem('hi142')
        document.getElementById('text3').value = localStorage.getItem('hi143')
        document.getElementById('text4').value = localStorage.getItem('hi144')
        document.getElementById('text5').value = localStorage.getItem('hi145')
        document.getElementById('text6').value = localStorage.getItem('hi146')
        document.getElementById('text7').value = localStorage.getItem('hi147')
  }
     const file = document.querySelector('#file');
     file.addEventListener('change', (e) => {
       // Get the selected file
       const [file] = e.target.files;
       // Get the file name and size
       const { name: fileName, size } = file;
       // Convert size in bytes to kilo bytes
       const fileSize = (size / 1000).toFixed(2);
       // Set the text content
       const fileNameAndSize =`${fileName} - ${fileSize}KB`;
       document.querySelector('.file-name').textContent = fileNameAndSize;
     });
    
    let bgContainer = document.getElementById("background-container")
    
    function change() {
      if (bgContainer.style.display == "none") {
         bgContainer.style.display = "block"
      }
    else {
      bgContainer.style.display = "none"
    }
    }
    
    function bg1() {
      bg.src = "images/bg1.jpg"
    }
    function bg2() {
      bg.src = "images/bg2.jpg"
    }
    function bg3() {
      bg.src = "images/bg3.jpg"
    }
    function bg4() {
      bg.src = "images/bg4.jpg"
    }
    function bg5() {
      bg.src = "images/bg5.jpg"
    }
    function bg6() {
      bg.src = "images/bg6.jpg"
    }
    function bg7() {
      bg.src = "images/bg7.jpg"
    }
    function bg8() {
      bg.src = "images/bg8.jpg"
    }
    function bg9() {
      bg.src = "images/bg9.jpg"
    }

    /*input*/
    let files = document.getElementById("file")
     function PreviewImage() {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("file").files[0]);

        oFReader.onload = function (oFREvent) {
            bg.src = oFREvent.target.result;
        };
    };
let stayEl = document.getElementById("to-stay")
   let today = document.getElementById("to-day")
var myVar;
function where() {
    myVar = setTimeout(showPage, 5000);
    stayEl.style.display ="block"
    document.getElementById("for-route").style.display = "none"
    function showPage() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("the-con").style.display = "block";
    }
    today.style.display = 'none'
}

function route() {
    today.style.display = "none"
    stayEl.style.display ="none"
    document.getElementById("for-route").style.display = "block"
    
}
function day() {
  today.style.display = 'block'
  document.getElementById("loader").style.display = "none";
  document.getElementById("for-route").style.display = "none"
  document.getElementById("to-stay").style.display = "none"

}

let myInput = document.getElementById('myinput')
let myTxt = document.getElementById('myText')

function go() {
  document.getElementById('add-remove').style.display = 'none'
  document.getElementById("for-route").style.display = "block"
  document.getElementById('first-ride').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('to').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('from').innerHTML = mapping
  document.getElementById('start-what').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('start-what1').innerHTML = localStorage.getItem('mytext')
  document.getElementById('second-ride').innerHTML = mapping
  document.getElementById('where-depart').innerHTML = localStorage.getItem('mytext1')
  document.getElementById('where-arrive').innerHTML = mapping
if (myText1.value == 'Inside Pampanga') {
  document.getElementById('trans').innerHTML = ' ' + '(Ride a Car..)'
}
else if (myText1.value == 'Philippines') {
  document.getElementById('trans').innerHTML = ' ' + '(Ride a Bus..)'
}
else if (myText1.value == 'Other Country') {
  document.getElementById('trans').innerHTML = ' ' + '(Ride an Airplane..)'
}

if  (myTxt.value == 'Inside Pampanga') {
  document.getElementById('trans1').innerHTML = ' ' + '(Ride a Car..)'
}
else if (myTxt.value == 'Philippines') {
  document.getElementById('trans1').innerHTML = ' ' + '(Ride a Bus..)'
}
else if (myTxt.value == 'Other Country') {
  document.getElementById('trans1').innerHTML = ' ' + '(Ride an Airplane..)'
}
}

function deleteme() {
  document.getElementById('add-remove').style.display = 'none'
  document.getElementById("for-route").style.display = "block"
}
  
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function showme() {
  document.getElementById('add-remove').style.display = 'block'
  today.style.display = 'none'
  document.getElementById("loader").style.display = "none";
  document.getElementById("for-route").style.display = "none"
  document.getElementById("to-stay").style.display = "none"
}
let ending = document.getElementById('input-your-end')
function editme() {
 ending.style.display = 'block'
}
let myText1 = document.getElementById('myText1')
let myText = document.getElementById('myText')
let start1 = document.getElementById('spt-strt')
let start2 = document.getElementById('spt-end')
let flight = localStorage.getItem('mytext1')
let flight1 = localStorage.getItem('mytext')
localStorage.setItem('mytext1',  myText1.value)
localStorage.setItem('mytext',  myText.value)

function enter1(){
  localStorage.setItem('mytext1',  myText1.value)
  document.getElementById('input-your-start').style.display = 'none'
  start1.innerHTML = localStorage.getItem('mytext1')

}
function enter() {
  localStorage.setItem('mytext',  myText.value)
  start2.innerHTML = localStorage.getItem('mytext')
   ending.style.display = 'none'
 }
function editme1() {
  document.getElementById('input-your-start').style.display = 'block'
}


dragElement(document.getElementById("mydiv1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*functions*/


function transport() {
  let Options = document.getElementById('optionIt').value
  if (Options == 'Bicycle') {
    document.getElementById('hey1').src = 'images/bike.jpg'
    document.getElementById('hey2').src = 'images/bike.jpg'
    document.getElementById('hey3').src = 'images/bike.jpg'
    document.getElementById('hey4').src = 'images/bike.jpg'
    document.getElementById('hey5').src = 'images/bike.jpg'
    document.getElementById('hey6').src = 'images/bike.jpg'
    document.getElementById('hey7').src = 'images/bike.jpg'
  }
  else if  (Options == 'By foot') {
    document.getElementById('hey1').src = 'images/foot.png'
    document.getElementById('hey2').src = 'images/foot.png'
    document.getElementById('hey3').src = 'images/foot.png'
    document.getElementById('hey4').src = 'images/foot.png'
    document.getElementById('hey5').src = 'images/foot.png'
    document.getElementById('hey6').src = 'images/foot.png'
    document.getElementById('hey7').src = 'images/foot.png'
  }
  else if (Options == 'Car') {
    document.getElementById('hey1').src = 'images/taxi.jpg'
    document.getElementById('hey2').src = 'images/taxi.jpg'
    document.getElementById('hey3').src = 'images/taxi.jpg'
    document.getElementById('hey4').src = 'images/taxi.jpg'
    document.getElementById('hey5').src = 'images/taxi.jpg'
    document.getElementById('hey6').src = 'images/taxi.jpg'
    document.getElementById('hey7').src = 'images/taxi.jpg'
  }
  else if (Options == 'Motorcycle') {
    document.getElementById('hey1').src = 'images/motor.png'
    document.getElementById('hey2').src = 'images/motor.png'
    document.getElementById('hey3').src = 'images/motor.png'
    document.getElementById('hey4').src = 'images/motor.png'
    document.getElementById('hey5').src = 'images/motor.png'
    document.getElementById('hey6').src = 'images/motor.png'
    document.getElementById('hey7').src = 'images/motor.png'
  }
  else if  (Options == 'Jeepney') {
    document.getElementById('hey1').src = 'images/jeep.jpg'
    document.getElementById('hey2').src = 'images/jeep.jpg'
    document.getElementById('hey3').src = 'images/jeep.jpg'
    document.getElementById('hey4').src = 'images/jeep.jpg'
    document.getElementById('hey5').src = 'images/jeep.jpg'
    document.getElementById('hey6').src = 'images/jeep.jpg'
    document.getElementById('hey7').src = 'images/jeep.jpg'
  }
  else if  (Options == 'Bus') {
    document.getElementById('hey1').src = 'images/bus.jpg'
    document.getElementById('hey2').src = 'images/bus.jpg'
    document.getElementById('hey3').src = 'images/bus.jpg'
    document.getElementById('hey4').src = 'images/bus.jpg'
    document.getElementById('hey5').src = 'images/bus.jpg'
    document.getElementById('hey6').src = 'images/bus.jpg'
    document.getElementById('hey7').src = 'images/bus.jpg'
  }
}