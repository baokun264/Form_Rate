const start = document.querySelectorAll(".btnStart");
var Is_Start=null;
var btnEvent = document.querySelector(".btn-submit");
var getStart = document.querySelector(".text-muted");
var getValue =0;
start.forEach((link)=> {
  link.addEventListener("click", function(){
    var current = link.classList.contains("active")
    //console.log(current)
    if(current==true){
      this.classList.remove('active'); 
      Is_Start= false;
    }
    else{
      start.forEach((e)=> {
        e.classList.remove('active');
      })  
      this.classList.add('active');
      getValue=this.value;
      Is_Start= true;
    }
  })
})


btnEvent.addEventListener("click", function(){
  if(Is_Start==true){
    document.querySelector(".content").classList.add("hide");
    document.querySelector(".form-thanks").classList.remove("hide");
    getStart.innerHTML = "Your selected" + " "  +getValue + " "  +"out of 5";
  }
  else{
    alert("Please rate and try again");
  }
})

