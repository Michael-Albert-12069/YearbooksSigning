var iframe = {
    firstHalf:'<iframe name="render_window" id="render_window" src="render/render.html?',
    lastHalf: '" width="90%" height="300" style="border:2px solid black; float:left;border-radius: 5px;"> </iframe>',
    div: '<button class="error" style=" float:right; height:300px;" width="90%" value="">Delete</button>'
}
var btn = {
    firstHalf: '<button class="error" style=" float:right; height:300px;" width="90%" onclick="deleteElement(\'',
    lastHalf: '\')">Delete</button>'
}

function deleteSig(uid){
    var authkey = document.getElementById('host_code').value;

}


// loadSignatures();

function loadSignatures(){
    var authkey = document.getElementById('host_code').value;
    console.log("reading data: " + authkey);
    readData(authkey);
}

function readData(node){
    var ref = firebase.database().ref(node);
    console.log("initiating firebase connection");
    ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("grabbing data");
            append(childData.message, childData.author);
            console.log(childData);
        });
    });
}

function append(phpStr, uid){
    console.log(uid);
    var sigWindow = iframe.firstHalf + phpStr + "&output=embed" + iframe.lastHalf;
    var delBtn = btn.firstHalf + uid + btn.lastHalf;
    document.getElementById('message_window').innerHTML += sigWindow + delBtn;
}

function deleteElement(element){
    console.log(element);
    var authkey = document.getElementById('host_code').value;
    let userRef = firebase.database().ref(authkey + '/' + element);
    userRef.remove()
    location.reload();
}