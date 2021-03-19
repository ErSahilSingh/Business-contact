
function submit1() {
    var name =$("#name1").val();
    var email = $("#email1").val();
    var number = $("#number1").val();
    var message = $("#message1").val();
 
    var submit1 = {
       name: name,
       email: email,
       number: number,
       message:message
    }
    console.log(JSON.stringify(submit1));
    if(name==null || email==null ||number==null ||message==null)
    {
        return false;
    }
    else{
      
        $.post("user/insertmessage",submit1,function(data,status){
            console.log(data);
            alert(data);
        })
    }
}