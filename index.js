$(document).ready(()=>{
   $("#addButton").click(()=>{ 
       var textboxValue = $("#textbox").val();
       if(textboxValue !== ""){
           var elem = $(`<div  class="row added-tasks justify-content-center no-gutter">
           <div class="col-4">`+textboxValue+`               
           </div>            
     </div>`);
           
           $(elem).append(`<i class="material-icons clearButton">clear</i>`);
           $("#inputSpace").append(elem);
           $("#textbox").val("");
           $(".clearButton").click(function(){
            $(this).parent().remove();
        });
       }
   });
  

    
});