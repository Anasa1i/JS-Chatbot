///////           CHATBOT JAVASCRIPT         ///////////////

function sendMesasge() {
    console.log("hello")
}

var list = document.getElementById("list")
var typing = document.getElementById("typing")
function sendMessage() {
    // console.log(event.keyCode)
    if (event.keyCode === 13){

        var elem = event.target;

        // back to the this line
        list.innerHTML += "<li class='right-side'>" + elem.value + "</li>"

        typing.style.display = "block";

        // if(event.target.value.toLowerCase() === 'hi'){

            if(['hi','hey','oye','hello','moye'].indexOf(elem.value.toLowerCase()) !== -1){
                
            setTimeout(function (){

                // list.style.backgroundColor = "red"

                list.innerHTML += "<li class='left-side'>  Hello </li>"
            }, 1500) // time ke andr fucction time ko daldiya


            setTimeout(function (){
                list.innerHTML += "<li class='left-side'>  how are you? </li>";
                typing.style.display = "none";
            }, 2500) 


        } // reply ka js code ,,, event.target.value === 'hi' - brabr ho 'hi' ke

        else if (['thek','thk','thik','theek', 'alhamdulillah','mast','fine','set','fit'].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(function (){

                list.innerHTML += "<li class='left-side'> Mei Apki Kia Madad Krskhta hun</li>"
                typing.style.display = "none";
            }, 1500)
        }

        else{
            setTimeout(function (){

                list.innerHTML += "<li class='left-side'> Mei samjh nahi sakha wapsi, durust likhye.</li>"
            }, 1500)
        }


        elem.value =  "";
    }
    //back to 119 line JS
}


































