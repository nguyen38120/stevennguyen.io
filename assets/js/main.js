jQuery(document).ready(function($) {

    /*======= Contact *========*/
    $("#contactbutton").click(function(){
        $("#contactform").slideToggle("slow");
    })
    $('input').change(function(e){
        if ($('#contactname').val() && validateEmail($('#contactemail').val())) {
            $('#contactsubmit').toggle();
        }
    });

    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
});

var validateEmail = function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


//document.getElementById("contactsubmit").addEventListener("click", getVisitor);
document.getElementById("contactsubmit").addEventListener("click", saveVisitor);

/*
function getVisitor(){
    alert('getVisitor');
    var dbref = firebase.database().ref('visitors/');
    dbref.on('value',function(snapshot) {
    alert(snapshot.val());
    }, function (errorObject) {
        alert("read failed: "+errorObject.code);
    })
}
*/

function saveVisitor(){
    alert('calling saveVisitor');
    var user = document.getElementById('contactname').value;
    var email = document.getElementById('contactemail').value;
    var comment = document.getElementById('contactmessage').value;
    alert(user);
    alert(email);
    alert(comment);
    // save the data
    var mydatabase = firebase.database();
    var dbref  = mydatabase.ref('visitors/').push({
        username: user,
        email: email,
        comment: comment}, function(errorObject) {
        alert("PushError" + errorObject.code); 
    });
    alert(dbref);
}


