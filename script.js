const myForm = document.querySelector(".input-form");
const std_name = document.querySelector(".i-name");
const std_roll = document.querySelector(".i-roll");
const std_class = document.querySelector(".i-class");
const std_section = document.querySelector(".i-section");
const std_father_name = document.querySelector(".i-father");
const std_physics_mark = document.querySelector(".i-p-sec");
const std_chemistry_mark = document.querySelector(".i-c-sec");
const std_math_mark = document.querySelector(".i-math-sec");
const std_result = document.querySelector(".i-res");
const std_mob = document.querySelector(".i-mob");
const std_p_total = document.querySelector(".i-p-total");
const std_c_total = document.querySelector(".i-c-total");
const std_m_total = document.querySelector(".i-math-total");
var total_mark_secured = 0;
document.querySelector(".generate_pdf_section").style.display = "none";







myForm.addEventListener("submit",(e)=>{
	e.preventDefault();
    total_mark_secured = parseFloat(std_math_mark.value) + parseFloat(std_physics_mark.value) + parseFloat(std_chemistry_mark.value);
    // window.total_mark_secured;
    // console.log(total_mark_secured);
	send_data_from_form()
    document.querySelector(".generate_pdf_section").style.display = "";
    document.querySelector(".btn-danger").style.display = "";



	// console.log(name)


});

function send_data_from_form() {
    document.querySelector("#p-name").innerHTML = std_name.value;
    document.querySelector("#p-roll").innerHTML = std_roll.value;
    document.querySelector("#p-class").innerHTML = std_class.value;
    document.querySelector("#p-section").innerHTML = std_section.value;
    document.querySelector("#p-father").innerHTML = std_father_name.value;
    document.querySelector("#p-mobile").innerHTML = std_mob.value;
    document.querySelector("#p-phy-total").innerHTML = std_p_total.value;
    document.querySelector("#p-phy-mark").innerHTML = std_physics_mark.value;
    document.querySelector("#p-chem-total").innerHTML = std_c_total.value;
	document.querySelector("#p-chem-mark").innerHTML = std_chemistry_mark.value;
    document.querySelector("#p-math-total").innerHTML = std_m_total.value;
    document.querySelector("#p-math-mark").innerHTML = std_math_mark.value;
    document.querySelector("#p-total-mark").innerHTML = total_mark_secured;
    document.querySelector("#p-result").innerHTML = std_result.value;

	// console.log(test)
}

// code from Stack over flow

function testPdf(){
 
    //send the div to PDF
    html2canvas($(".report-card-container"), { // DIV ID HERE
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/png'); 
            var doc = new jsPDF('landscape');
            doc.addImage(imgData, 'PDF', 10, 10);
            doc.save('report-carder-by-subhranshu.pdf'); //SAVE PDF FILE
        }
    });

}

