window.onload = ()=>{
    $("#content").load("board.html");
    $('#board').click(()=>{
        $("#content").innerHTML="";
    });
    $('#close__btn').click(()=>{
        confirm("Уже уходите?");
    })
}