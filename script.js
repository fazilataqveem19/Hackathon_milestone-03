// Function to add a new Work Experience field
function addNewWEField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    var weOb = document.getElementById("we");
    var weAddButtonOb = document.getElementById("weAddButton");
    if (weOb && weAddButtonOb) {
        weOb.insertBefore(newNode, weAddButtonOb);
    }
    else {
        console.error("Element not found for Work Experience");
    }
}
// Function to add a new Academic Qualification field
function addNewAQField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    var aqOb = document.getElementById("aq");
    var aqAddButtonOb = document.getElementById("aqAddButton");
    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    }
    else {
        console.error("Element not found for Academic Qualification");
    }
}
// Function to add a new Skills field
function addNewSkillsField() {
    var newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "skillField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");
    var skillsOb = document.getElementById("skills");
    var skillsAddButtonOb = document.getElementById("skillsAddButton");
    if (skillsOb && skillsAddButtonOb) {
        skillsOb.insertBefore(newNode, skillsAddButtonOb);
    }
    else {
        console.error("Element not found for Skills");
    }
}
// Function to validate form fields
function validateFields() {
    var isValid = true;
    var fields = [
        { id: "nameField", message: "Name is required" },
        { id: "contactField", message: "Contact information is required" },
        { id: "addressField", message: "Address is required" },
        { id: "objectiveField", message: "Objective is required" }
    ];
    fields.forEach(function (field) {
        var element = document.getElementById(field.id);
        if (element && !element.value.trim()) {
            alert(field.message);
            isValid = false;
        }
    });
    return isValid;
}
// Function to generate CV
function generateCV() {
    if (!validateFields()) {
        return; // Stop processing if validation fails
    }
    // Name
    var nameField = document.getElementById("nameField").value;
    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
    // Contacts
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    // Address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    // Social Links
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    // Objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    // Work Experience
    var wes = document.getElementsByClassName("weField");
    var weStr = "";
    for (var i = 0; i < wes.length; i++) {
        var weField = wes[i];
        if (weField.value.trim()) {
            weStr += "<li>".concat(weField.value, "</li>");
        }
    }
    document.getElementById("weT").innerHTML = weStr;
    // Academic Qualification
    var aqs = document.getElementsByClassName("aqField");
    var aqStr = "";
    for (var i = 0; i < aqs.length; i++) {
        var aqField = aqs[i];
        if (aqField.value.trim()) {
            aqStr += "<li>".concat(aqField.value, "</li>");
        }
    }
    document.getElementById("aqT").innerHTML = aqStr;
    // Skills
    var skills = document.getElementsByClassName("skillField");
    var skillStr = "";
    for (var i = 0; i < skills.length; i++) {
        var skillField = skills[i];
        if (skillField.value.trim()) {
            skillStr += "<li>".concat(skillField.value, "</li>");
        }
    }
    document.getElementById("skillsT").innerHTML = skillStr;
    // Hide the form and show the generated CV template
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}
// Function to print CV
function printCV() {
    window.print();
}
