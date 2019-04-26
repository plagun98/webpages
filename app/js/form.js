window.onload= ()=>{
    $(".numb__input").change((e)=>{
        var target = e.target;
        var value = +target.value;
        value = value.toFixed(1);
        console.log(value);
        if(value !=0){
            target.value = value;
        } else {
            target.value = "";
        }
    });
    $(function () {
        $('input').keypress(function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        })
    });
    $('select').formSelect(); 
}