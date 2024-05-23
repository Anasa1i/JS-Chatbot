/////// START NOW BUTTON js   ///////////

// document.getElementById("init");
// var cbots = document.getElementById("chatBox");
// // var len1 = data.chatinit.title.length

// function showChatBot() {
//     console.log(this.innerText);
//     if(this.innerText === 'START CHATBOT NOW'){
//         document.getElementById('test').style.display='block'
//         document.getElementById('init').style.innerText='CLOSE CHAT'
//     }
//     else{
//         location.reload()
//     }
// }


///////           CHATBOT JAVASCRIPT         ///////////////

// function sendMesasge() {
//     console.log("hello")
// }

var chatBox = document.getElementById("chatBox")
var typing = document.getElementById("typing")
function sendMessage() {
    // console.log(event.keyCode)
    if (event.keyCode === 13){

        var elem = event.target;

        // back to the this line
        chatBox.innerHTML += "<li class='right-side'>" + elem.value + "</li>"

        typing.style.display = "block";

        // if(event.target.value.toLowerCase() === 'hi'){

            if(['hi','hey','oye','hello','moye'].indexOf(elem.value.toLowerCase()) !== -1){
                
            setTimeout(function (){

                // chatBox.style.background = "red"

                chatBox.innerHTML += "<li class='left-side'>Hey, </li>"
            }, 2500) // time ke andr fucction time ko daldiya


            setTimeout(function (){
                chatBox.innerHTML += "<li class='left-side'>Mein SMIT student ka ek chatbot hoon. Mere paas kuch Saylani Welfare Trust ki information hai, main ismein aapki Kya madad kar sakta hoon?</li>";
                typing.style.display = "none";
            }, 1500) 


        } // reply ka js code ,,, event.target.value === 'hi' - brabr ho 'hi' ke
          


        // first else

        else if (['thek','thk','thik','theek', 'alhamdulillah','mast','fine','set','fit'].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(function (){

                chatBox.innerHTML += "<li class='left-side'> Mei Apki Kia Madad Krskhta hun</li>"
                typing.style.display = "none";
            }, 1500)
        }



        else if (['bashir','thk','thik','theek', 'alhamdulillah','mast','fine','set','fit'].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(function (){

                chatBox.innerHTML += "<li class='left-side'> Mei Apki Kia Madad Krskhta hun</li>"
                typing.style.display = "none";
            }, 1500)
        }



        else if (['thek','thk','thik','theek', 'alhamdulillah','mast','fine','set','fit'].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(function (){

                chatBox.innerHTML += "<li class='left-side'> Mei Apki Kia Madad Krskhta hun</li>"
                typing.style.display = "none";
            }, 1500)
        }


        else if (['thek','thk','thik','theek', 'alhamdulillah','mast','fine','set','fit'].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(function (){

                chatBox.innerHTML += "<li class='left-side'> Mei Apki Kia Madad Krskhta hun</li>"
                typing.style.display = "none";
            }, 1500)
        }


        else if (['thek','thk','thik','theek', 'alhamdulillah','mast','fine','set','fit'].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(function (){

                chatBox.innerHTML += "<li class='left-side'> Mei Apki Kia Madad Krskhta hun</li>"
                typing.style.display = "none";
            }, 1500)
        }


        else if (['thek','thk','thik','theek', 'alhamdulillah','mast','fine','set','fit'].indexOf(elem.value.toLowerCase()) !== -1){
            setTimeout(function (){

                chatBox.innerHTML += "<li class='left-side'> Mei Apki Kia Madad Krskhta hun</li>"
                typing.style.display = "none";
            }, 1500)
        }









        else{
            setTimeout(function (){

                chatBox.innerHTML += "<li class='left-side'> Mei samjh nahi sakha wapsi, durust likhye.</li>"
            }, 1500)
        }


        elem.value =  "";
    }
    //back to 119 line JS
}


































