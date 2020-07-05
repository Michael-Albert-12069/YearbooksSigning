function save(){
    var confirmed = confirm("Are you sure you want to send this!");
    if(confirmed){
        var font = getRadiochecked('font');
        var message = document.getElementById("message").value;
        var name = document.getElementById("name").value;
        

        var key=  "message="+message + "&name="+name + "&font="+font;

        userInfo = acct;
        // window.alert(key);
        console.log(JSON.stringify(userInfo));

        var host = document.getElementById("host_code").value;

        // alert("PHPkey = '" + key + "'");
        // console.log(key);
        writeNewPost(host, acct.uid, key);
        // if(key.includes("+")){
        //     alert("ERROR: String contains the character '+'");
        //     break;
        // } else{


        // }
        window.alert("Signature Sent!");
        // window.location= "home.html";

    }else{
        window.alert("Operation Canceled!");
        return;
        // break;
        //do nothing
    }
    // if(confirm("Return Home?")){
    //     window.location = "home.html";
    // }

}


function writeNewPost(hostID, userID, message) {
          // A post entry.
          var postData = {
            author: userID,
            host: hostID,
            message: message
          };

          console.log("signing: " + hostID + "; from: " + userID + "; with message: " + message);

          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates['/' + hostID + '/' + userID] = postData;

          return firebase.database().ref().update(updates);
}


function getRadiochecked(groupname){
    var radios = document.getElementsByName(groupname);

    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // return checked radio
        return (radios[i].value);

        // only one radio can be logically checked, don't check the rest
    }
    }
}