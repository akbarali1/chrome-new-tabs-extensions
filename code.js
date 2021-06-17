/*
 * Kod akbarali tomonidan 18.06.2021 yil kuni yozildi
 * Telegram @kbarali (t.me/kbarali)
 * Email: Akbarali@webschool.uz
 */

$(document).ready(function() {
  var API_URL = 'Google.com';
  let txt = "", table = "";

  const JSON = {
    "success": true,
    "message": {
        "title": "Tizimga hush kelibsiz",
        "porucheniya": [
          {
            "id": 1,
            "time": "17.06.2021",
            "chiqnm": "\"Bu qandaydur nom\"",
            "money": "29 500 000",
            "kirnm": "Yana qandaydur nom",
            "maqsad": "BU unun tab uchun maqsad",
            "basisnew": "http:\/\/google.uz\/",
            "print": "http:\/\/google.uz\/",
            "edit": "http:\/\/google.uz\/",
            "summaedit": "http:\/\/google.uz\/",
            "xususiy_link": "http:\/\/google.uz\/",
        },{
          "id": 2,
          "time": "17.06.2021",
          "chiqnm": "\"Bu qandaydur nom\"",
          "money": "29 500 000",
          "kirnm": "Yana qandaydur nom",
          "maqsad": "BU unun tab uchun maqsad",
          "basisnew": "http:\/\/google.uz\/",
          "print": "http:\/\/google.uz\/",
          "edit": "http:\/\/google.uz\/",
          "summaedit": "http:\/\/google.uz\/",
          "xususiy_link": "http:\/\/google.uz\/",
      },{
        "id": 3,
        "time": "17.06.2021",
        "chiqnm": "\"Bu qandaydur nom\"",
        "money": "29 500 000",
        "kirnm": "Yana qandaydur nom",
        "maqsad": "BU unun tab uchun maqsad",
        "basisnew": "http:\/\/google.uz\/",
        "print": "http:\/\/google.uz\/",
        "edit": "http:\/\/google.uz\/",
        "summaedit": "http:\/\/google.uz\/",
        "xususiy_link": "http:\/\/google.uz\/",
    }
        ],
        "page_info": [
            {
                "link": "http:\/\/uzhackersw.uz\/",
                "name": "UzHackerSW",
                "description": "Kompyuter dasturlari kompyuter bo`yicha turli xil maqolalar va bloglar",
                "accesskey": "p"
            },{
              "link": "http:\/\/google.uz\/",
              "name": "GOOGLE",
              "description": "Google.com",
              "accesskey": "p"
          },
            {
                "link": "https:\/\/my.soliq.uz\/searchtin\/index?user_type=1",
                "name": "INN tortish",
                "description": "Soliqdan INN olish uchun shunga kiring",
                "accesskey": "i"
            }
            
        ]
    }
};

  function myFunction(value, index, array) {
    txt += `
		<div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
		  <a href="` + value.link + `" accesskey="`+ value.accesskey+`">
            <div class="front">
              <div class="inner">
                <p>` + value.name + `</p>
                <span>Akbarali</span>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>` + value.description + `.</p>
              </div>
            </div>
			    </a>
          </div>
        </div>`;
  }
  function Topshiriqnoma(value, index, array) {
    table += `
    <tr class="fs-6">
    <td class="verticala"  width="3%"><a href="`+value.basisnew+`" target="_blank">
            <img src="/svg/new.svg" style=" width: 50px; ">
        </a>
    </td>
    <td class="verticala" width="3%"><a href="`+value.print+`" target="_blank">
            <img src="/svg/print.svg" style=" width: 50px; ">
        </a>
    </td>
    <td class="verticala" width="3%"><a href="`+value.edit+`" target="_blank">
            <img src="/svg/edit.svg" style=" width: 50px; "></a>
    </td>
    <td class="verticala" width="3%">`+value.time+`</td>
    <td class="verticala" width="20%">
        <a href="`+value.xususiy_link+`" style="text-decoration: none;color: black;font-weight: 900;">`+value.chiqnm+`</a>
    </td>
    <td class="verticala" width="5%">
        <a href="`+value.summaedit+`" style="text-decoration: none;color: black;font-weight: 900;" target="_blank">`+value.money+`</a>
    </td>
    <td class="verticala" width="25%" style=" font-size: 16px;">`+value.maqsad+`</td>
</tr>`;
  }
  function errorReponse() {
    $('#title').text('Internet bilan aloqa mavjud emas');
    txt = `<div class="col" ontouchstart="this.classList.toggle('hover');">
  <div class="container">
<div class="front" style=" background-color: red; ">
      <div class="inner">
        <p>Internet bilan aloqa uzuldi</p>
        <span>Internet mavjud emas</span>
      </div>
    </div>
    <div class="back" style=" background-color: red; ">
      <div class="inner">
        <p>Internet bilan aloqa yo'q. Internetingizni tekshiring va F5 tugmasini bosing.</p>
      </div>
    </div>
</div>
</div>`;
}
function NotAuthorized() {
  $('#title').text('Tizimga kirilmagan');
  txt = `<div class="col" ontouchstart="this.classList.toggle('hover');">
<div class="container">
<a href="` + API_URL + `/login/">
<div class="front" style=" background-color: red; ">
    <div class="inner">
      <p>Siz tizimga Kirmagansiz</p>
      <span>Ma'lumotlarni ko'rish uchun tizimga kiring</span>
    </div>
  </div>
  <div class="back" style=" background-color: red; ">
    <div class="inner">
      <p>Siz kengaytmani muvafaqiyatli o'rnatgansiz. Lekin Login parol bilan tizimga kirmagansiz iltimos tizimga kiring.</p>
    </div>
  </div>
  <a/>
</div>
</div>`;
}
/*
 * Ajax Request BU saytingizdan API ma'lumotlarni olib kelib bu yerga chiqarish uchun kerak. Menda bu ishlaydi. Sukut bo`yicha bu o`chirilgan

$.ajax({
    url: API_URL + "/api/kengaytma/",
    beforeSend: function() {
      $('#title').text("Sahifa yuklanmoqda... Bir oz kuring!");
    },
    dataType: 'JSON',
    timeout: 10000,
    success: function(a) {
      $('#title').text(a.message.title);
      const links = a.message.page_info, topshiriqnoma = a.message.porucheniya;
      topshiriqnoma.forEach(Topshiriqnoma);
      links.forEach(myFunction);
      document.getElementById("demo").innerHTML = txt;
      document.getElementById("myTable").innerHTML = table;
      $('.loading').fadeToggle(1500);
    },
    error: function(request, status, error) {
      if (request.status == 404) {
        NotAuthorized();
      }else{
        errorReponse();
     }
    $('.search-wrapper').remove();
    $('#tabletest').remove();
    $('.loading').fadeToggle(1500);
    document.getElementById("demo").innerHTML = txt;
    }
  });
  */
  $('#title').text(JSON.message.title);
  const links = JSON.message.page_info, topshiriqnoma = JSON.message.porucheniya;
  topshiriqnoma.forEach(Topshiriqnoma);
  links.forEach(myFunction);
  document.getElementById("demo").innerHTML = txt;
  document.getElementById("myTable").innerHTML = table;
  $('.loading').fadeToggle(1500);
});