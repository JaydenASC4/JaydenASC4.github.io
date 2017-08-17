var database = firebase.database().ref();


function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);


    var newMessage = {
        NAME: name,
        MESSAGE : message,
    }
    database.push(newMessage);

}
database.on("child_added",function(rowData){
var row = rowData.val();
var name = row.NAME;
var message = row.MESSAGE;
var fulltext = "<p class='userText'>"+name+": "+message+"</p>";

$(".allMessages").append(fulltext)
})