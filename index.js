const scriptURL = 'https://script.google.com/macros/s/AKfycbydpDILHTvl7YcV7DLG5o8MUpJSO4eBRcJmwAiVxokzBSnR5WYe8STlgsHNbjZxiaS2nA/exec'
const form = document.forms['google-sheet']

console.log("working properly")
// console.log(document.getElementById("dateandtime").value)
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    // .then(response => $("#form_alerts").html("<div class='alert alert-success'>Submitted successfully.</div>"))
    .then(response => alert("Submitted Successfully"))
    .catch(error => alert("Submission not Successful"))
    // .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Submission not successful</div>"))
})
let theDate;
let TimeZone;
function fn1(){
    document.getElementsByName("Time Zone").forEach(radio =>{
        if(radio.checked){
            TimeZone = radio.value;
        }
    });
    console.log(TimeZone);
    console.log("function is working"); 

    let dateandtime = document.getElementById('dateandtime').value;
    let arr1 = dateandtime.split("T");
    let time = arr1[1];
    let changed = time.split(":")
    let date = arr1[0].split("-");

    let year = date[0];
    let month = date[1]-1;
    let day = date[2];
    let hours = changed[0];
    let minutes = changed[1];

    console.log(month);

    // console.log(year +" " + month +" " +day)
    

    if(TimeZone == "PST"){
        // theDate = new Date(year, month, day, hours, minutes).toLocaleString(undefined, {timeZone: 'America/Swift_Current'});//PST
        // console.log(theDate);
        // console.log(day);
        offset = +18.0;
            clientDate = new Date(year, month, day, hours, minutes);
            console.log("OUR Time: "+clientDate);
            utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

            // serverDate = new Date(utc + (3600000 * offset));
            console.log("checking done : "+new Date(utc + (3600000 * offset)).toLocaleString());

            theDate = new Date(utc + (3600000 * offset)).toLocaleString();


    }else if(TimeZone == "EST"){


            offset = +15.0;
            clientDate = new Date(year, month, day, hours, minutes);
            console.log("OUR Time: "+clientDate);
            utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

            // serverDate = new Date(utc + (3600000 * offset));
            console.log("checking done : "+new Date(utc + (3600000 * offset)).toLocaleString());

            theDate = new Date(utc + (3600000 * offset)).toLocaleString();
        // theDate = new Date(year, month, day, hours, minutes).toLocaleString(undefined, {timeZone: 'America/Detroit'});//EST
    }else if(TimeZone == "CST"){



        offset = +16.0;
            clientDate = new Date(year, month, day, hours, minutes);
            console.log("OUR Time: "+clientDate);
            utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
            // serverDate = new Date(utc + (3600000 * offset));
            console.log("checking done : "+new Date(utc + (3600000 * offset)).toLocaleString());

            theDate = new Date(utc + (3600000 * offset)).toLocaleString();


        // theDate = new Date(year, month, day, hours, minutes).toLocaleString(undefined, {timeZone: 'America/Anchorage'});//CST
    }else{


        offset = +17.0;
            clientDate = new Date(year, month, day, hours, minutes);
            console.log("OUR Time: "+clientDate);
            utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);

            // serverDate = new Date(utc + (3600000 * offset));
            console.log("checking done : "+new Date(utc + (3600000 * offset)).toLocaleString());

            theDate = new Date(utc + (3600000 * offset)).toLocaleString();



        // theDate =new Date(year, month, day, hours, minutes).toLocaleString(undefined, {timeZone: 'America/Phoenix'});//MST
    }

    parseInt(theDate.toLocaleString);
    console.log("converted Time : " + theDate);
    document.getElementById("demo").innerHTML = "Local date Time: "+ theDate.toLocaleString();

}