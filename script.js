// define our user inputs and store it in a constant.

const myForm = document.querySelector("#std_input_table");
const school_name = document.querySelector(".i-school");
const std_name = document.querySelector(".i-name");
const std_roll = document.querySelector(".i-roll");
const std_class = document.querySelector(".i-class");
const std_section = document.querySelector(".i-sec");
const std_gender = document.querySelector(".i-gender")
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
var full_subject_mark = 0;
var std_percent = 0;

// Hide the card element.
document.querySelector("#report-card-HTML").style.display = "none";
document.querySelector(".table_bw-div").style.display = "none";

console.log((2.34576786).toFixed(1))



//Button onclick (submit).
function send_data_for_print() {
    total_mark_secured = parseFloat(std_math_mark.value) + parseFloat(std_physics_mark.value) + parseFloat(std_chemistry_mark.value);
    full_subject_mark = parseFloat(std_p_total.value) + parseFloat(std_c_total.value) + parseFloat(std_m_total.value);
    std_percent = (total_mark_secured/full_subject_mark)*100;
    send_data_from_form()
    document.querySelector("#report-card-HTML").style.display = "";
    document.querySelector(".table_bw-div").style.display = "";


}


//Not in use.
// myForm.addEventListener("submit",(e)=>{
// 	e.preventDefault();
//     // window.total_mark_secured;
//     // console.log(total_mark_secured);
// 	send_data_from_form()
//     document.querySelector("#std_input_table").style.display = "";
//     document.querySelector(".btn-danger").style.display = "";


// });
// Send data from table to report card.
function send_data_from_form() {
    document.querySelector(".school-title").innerHTML = school_name.value;
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
    document.querySelector("#p-total-mark").innerHTML = `${total_mark_secured}/${full_subject_mark}`;
    document.querySelector("#p-result").innerHTML = std_result.value;
    document.querySelector("#p-percentage").innerHTML = std_percent.toFixed(1) + "%";

    document.querySelector(".school-title_bw").innerHTML = school_name.value;
    document.querySelector(".p-name").innerHTML = std_name.value;
    document.querySelector(".p-roll").innerHTML = std_roll.value;
    document.querySelector(".p-class").innerHTML = std_class.value;
    document.querySelector(".p-section").innerHTML = std_section.value;
    document.querySelector(".p-father").innerHTML = std_father_name.value;
    document.querySelector(".p-mobile").innerHTML = std_mob.value;
    document.querySelector(".p-phy-total").innerHTML = std_p_total.value;
    document.querySelector(".p-phy-mark").innerHTML = std_physics_mark.value;
    document.querySelector(".p-chem-total").innerHTML = std_c_total.value;
    document.querySelector(".p-chem-mark").innerHTML = std_chemistry_mark.value;
    document.querySelector(".p-math-total").innerHTML = std_m_total.value;
    document.querySelector(".p-math-mark").innerHTML = std_math_mark.value;
    document.querySelector(".p-total-mark").innerHTML = `${total_mark_secured}/${full_subject_mark}`;
    document.querySelector(".p-result").innerHTML = std_result.value;
    document.querySelector(".p-percentage").innerHTML = std_percent.toFixed(1) + "%";
}

// Convert to Pdf.

function GenerateCard(){
 
    //send the div to PDF
    html2canvas($("#report-card-HTML"), { // DIV ID HERE
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/png'); 
            var doc = new jsPDF('portrait');
            doc.addImage(imgData, 'PDF', 10, 10);
            doc.save('report-carder-by-subhranshu.pdf'); //SAVE PDF FILE
        }
    });

}

function GenerateCard_bw(){
 
    //send the div to PDF
    html2canvas($(".table_bw-div"), { // DIV ID HERE
        onrendered: function(canvas) {
            var imgData = canvas.toDataURL('image/png'); 
            var doc = new jsPDF('portrait');
            doc.addImage(imgData, 'PDF', 10, 10);
            doc.save('report-carder-by-subhranshu.pdf'); //SAVE PDF FILE
        }
    });

}

// Print the report card.

function print_report_card() {
    var backup_whole_body = document.body.innerHTML;
    var print_div = document.querySelector("#report-card-HTML").innerHTML;
    document.body.innerHTML = print_div;
    window.print();
    document.body.innerHTML = backup_whole_body;
    // body...
}

function print_report_card_bw() {
    var backup_whole_body = document.body.innerHTML;
    var print_div = document.querySelector(".table_bw-div").innerHTML;
    document.body.innerHTML = print_div;
    window.print();
    document.body.innerHTML = backup_whole_body;
    // body...
}

function reset_table(argument) {
    std_name.value = "";
    std_mob.value = "";
    std_roll.value = "";
    std_gender.value = "";
    std_math_mark.value = "";
    std_section.value = "";
    std_physics_mark.value="";
    std_father_name.value = "";
    std_result.value = "";
    std_chemistry_mark.value="";
}

// Script 2

// <a  href="javascript:void(0)" class="btn-download">Download PDF</a>

// const options = {
//     filename: 'report-card-ssc.pdf',
//     image: {
//     type: 'png'
//     // quality: 500
//     },
//     html2canvas: {
//     scale: 1,
//     width: 810,
//     height: 1100
//     },
//     jsPDF: {
//     unit: 'in',
//     format: 'a4',
//     orientation: 'portrait'
//     }
//     }
    
//     $('.btn-download').click(function(e){
//     e.preventDefault();
//     const element = document.getElementById('report-card-HTML');
//     html2pdf().from(element).set(options).save();
//     });
//     function printDiv(divName) {
//     var printContents = document.getElementById(divName).innerHTML;
//     var originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
//     }

