

    let container = document.getElementById("container")
    let dayPrint = document.getElementById("day")
    let pDate = document.getElementById("pDate")
    let hijri = document.getElementById("hijri")
    let gregorian = document.getElementById("gregorian")


    let timingsPrint = document.getElementById("prayer-timings")
    
    fetch('http://api.aladhan.com/v1/calendar/2023/4?latitude=51.508515&longitude=-0.1254872&method=2%20http://api.aladhan.com/v1/calendar/2023?latitude=51.508515&longitude=-0.1254872&method=11')
      .then((response) => response.json())
      .then((json) => {
        
        // let time = json.data[0].timings.map((item)=>{return item})
        console.log(json);

        let gregorianDate = json.data[0].date.gregorian.date;
        let hijriDate = json.data[0].date.hijri.date;
        let day = json.data[0].date.gregorian.weekday.en;

        dayPrint.style.color="black"
        dayPrint.innerHTML= `Day : ${day}`

        hijri.addEventListener("click" ,()=>{
            pDate.innerText=hijriDate;
        })

        gregorian.addEventListener("click" ,()=>{
            pDate.innerText=gregorianDate;
        })

        printTimings();

        
        function printTimings(){

        let p1 = document.createElement("p")
        p1.innerHTML = `Asr : ${json.data[0].timings.Asr}`
        p1.classList.add("form-text")
        timingsPrint.appendChild(p1)


        let p2 = document.createElement("p")
        p2.innerHTML = `Dhuhr : ${json.data[0].timings.Dhuhr}`
        p2.classList.add("form-text")
        timingsPrint.appendChild(p2)

        let p3 = document.createElement("p")
        p3.innerHTML = `Fajr : ${json.data[0].timings.Fajr}`
        p3.classList.add("form-text")
        timingsPrint.appendChild(p3)

        let p4 = document.createElement("p")
        p4.innerHTML = `Firstthird: ${json.data[0].timings.Firstthird}`
        p4.classList.add("form-text")
        timingsPrint.appendChild(p4)

        let p5 = document.createElement("p")
        p5.innerHTML = `Imsak: ${json.data[0].timings.Imsak}`
        p5.classList.add("form-text")
        timingsPrint.appendChild(p5)

        let p6 = document.createElement("p")
        p6.innerHTML = `Isha: ${json.data[0].timings.Isha}`
        p6.classList.add("form-text")
        timingsPrint.appendChild(p6)

        let p7 = document.createElement("p")
        p7.innerHTML = `Lastthird: ${json.data[0].timings.Lastthird}`
        p7.classList.add("form-text")
        timingsPrint.appendChild(p7)

        let p8 = document.createElement("p")
        p8.innerHTML = `Maghrib: ${json.data[0].timings.Maghrib}`
        p8.classList.add("form-text")
        timingsPrint.appendChild(p8)

        let p9 = document.createElement("p")
        p9.innerHTML = `Midnight: ${json.data[0].timings.Midnight}`
        p9.classList.add("form-text")
        timingsPrint.appendChild(p9)

        let p10 = document.createElement("p")
        p10.innerHTML = `Sunrise: ${json.data[0].timings.Sunrise}`
        p10.classList.add("form-text")
        timingsPrint.appendChild(p10)

        let p11 = document.createElement("p")
        p11.innerHTML = `Sunset: ${json.data[0].timings.Sunset}`
        p11.classList.add("form-text")
        timingsPrint.appendChild(p11)
        }

        // p.innerText= json.data[0].timings.
        // console.log(json.data[0].timings.Asr);

        // let res = json.data[0].timings.map((item) => {
        //     return item;
        // });

        // console.log(res);
    
    });



    let welcomeMessage = document.getElementById("welcomeMessage") 
    welcomeMessage.innerText=localStorage.getItem("User");
    
