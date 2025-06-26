const button=document.getElementById("butt");
    button.addEventListener("click",()=>{
        const side =document.getElementById("side").value;
        const length=document.getElementById("length").value;
        const width =document.getElementById("width").value;

        const square=(side)=>side*side;

        function rectangle(length,width){
            return  length*width;
        }

        document.getElementById("finn").innerHTML="The Area of square is "+square(side)+"<br>"+"The Area of rectangle is "+rectangle(length,width);
        
    })