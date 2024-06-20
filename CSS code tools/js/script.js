//This project function was start in the starting page win the run page the JS was run the project
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".coinatainer")
    const allborder = document.getElementById("all");
    const all_value = document.getElementById("all_value");
    const borderElement = document.getElementById("border");
    const border_display = document.getElementById("border_value")
    const node = document.getElementById("node");
    const btn = document.getElementById("btncopy");
    const border_styleElement = document.getElementById("option");

    //Setting in value of the project using JavaScript
    var allradio = 0;
    var border_size = 1;
    var border_style = "solid";
    var coding = 'Test';

    //To create a function to update the border and overall styling
    const allborderupdate = () => {
        allradio = allborder.value;
        all_value.innerText = allradio + "px"

        border_size = borderElement.value;
        border_display.innerText = border_size + "px"

        coding = `
        border-radius: ${allradio}px;
        border: ${border_size}px ${border_style} red;`
        node.value = coding;
        container.style.cssText = coding;
    }

    //To all event learner for the value change in DOM 

    //Value was change in Border radius 
    allborder.addEventListener('mousemove', allborderupdate);
    allborder.addEventListener("change", allborderupdate);

    //Value was change in Border size
    borderElement.addEventListener('mousemove', allborderupdate);
    borderElement.addEventListener("change", allborderupdate);

    //To change the value for the inner textarea to set

    //To change the value of style of Border
    border_styleElement.addEventListener("change", function () {
        border_style = this.value;
        allborderupdate();
    })

    //To change the value of border size 
    borderElement.addEventListener("change", function () {
        border_size = this.value;
        allborderupdate();
    })

    //To copy the the textarea code to use the button "Name is copy code"
    btn.addEventListener("click", () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code is copied...")
    })
    allborderupdate();
});
