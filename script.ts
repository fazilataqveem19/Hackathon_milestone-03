// Function to add a new Work Experience field
function addNewWEField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "weField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");

    const weOb = document.getElementById("we");
    const weAddButtonOb = document.getElementById("weAddButton");

    if (weOb && weAddButtonOb) {
        weOb.insertBefore(newNode, weAddButtonOb);
    } else {
        console.error("Element not found for Work Experience");
    }
}

// Function to add a new Academic Qualification field
function addNewAQField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "aqField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");

    const aqOb = document.getElementById("aq");
    const aqAddButtonOb = document.getElementById("aqAddButton");

    if (aqOb && aqAddButtonOb) {
        aqOb.insertBefore(newNode, aqAddButtonOb);
    } else {
        console.error("Element not found for Academic Qualification");
    }
}

// Function to add a new Skills field
function addNewSkillsField(): void {
    const newNode = document.createElement("textarea");
    newNode.classList.add("form-control", "skillField", "mt-2");
    newNode.setAttribute("rows", "3");
    newNode.setAttribute("placeholder", "Enter here");

    const skillsOb = document.getElementById("skills");
    const skillsAddButtonOb = document.getElementById("skillsAddButton");

    if (skillsOb && skillsAddButtonOb) {
        skillsOb.insertBefore(newNode, skillsAddButtonOb);
    } else {
        console.error("Element not found for Skills");
    }
}

// Function to validate form fields
function validateFields(): boolean {
    let isValid = true;
    
    const fields = [
        { id: "nameField", message: "Name is required" },
        { id: "contactField", message: "Contact information is required" },
        { id: "addressField", message: "Address is required" },
        { id: "objectiveField", message: "Objective is required" }
    ];

    fields.forEach(field => {
        const element = document.getElementById(field.id) as HTMLInputElement;
        if (element && !element.value.trim()) {
            alert(field.message);
            isValid = false;
        }
    });

    return isValid;
}

// Function to generate CV
function generateCV(): void {
    if (!validateFields()) {
        return; // Stop processing if validation fails
    }

    // Name
    const nameField = (document.getElementById("nameField") as HTMLInputElement).value;
    (document.getElementById("nameT1") as HTMLSpanElement).innerHTML = nameField;
    (document.getElementById("nameT2") as HTMLSpanElement).innerHTML = nameField;

    // Contacts
    (document.getElementById("contactT") as HTMLSpanElement).innerHTML = (document.getElementById("contactField") as HTMLInputElement).value;

    // Address
    (document.getElementById("addressT") as HTMLSpanElement).innerHTML = (document.getElementById("addressField") as HTMLInputElement).value;

    // Social Links
    (document.getElementById("fbT") as HTMLSpanElement).innerHTML = (document.getElementById("fbField") as HTMLInputElement).value;
    (document.getElementById("instaT") as HTMLSpanElement).innerHTML = (document.getElementById("instaField") as HTMLInputElement).value;
    (document.getElementById("linkedT") as HTMLSpanElement).innerHTML = (document.getElementById("linkedField") as HTMLInputElement).value;

    // Objective
    (document.getElementById("objectiveT") as HTMLSpanElement).innerHTML = (document.getElementById("objectiveField") as HTMLInputElement).value;

    // Work Experience
    const wes = document.getElementsByClassName("weField");
    let weStr = "";
    for (let i = 0; i < wes.length; i++) {
        const weField = wes[i] as HTMLTextAreaElement;
        if (weField.value.trim()) {
            weStr += `<li>${weField.value}</li>`;
        }
    }
    (document.getElementById("weT") as HTMLUListElement).innerHTML = weStr;

    // Academic Qualification
    const aqs = document.getElementsByClassName("aqField");
    let aqStr = "";
    for (let i = 0; i < aqs.length; i++) {
        const aqField = aqs[i] as HTMLTextAreaElement;
        if (aqField.value.trim()) {
            aqStr += `<li>${aqField.value}</li>`;
        }
    }
    (document.getElementById("aqT") as HTMLUListElement).innerHTML = aqStr;

    // Skills
    const skills = document.getElementsByClassName("skillField");
    let skillStr = "";
    for (let i = 0; i < skills.length; i++) {
        const skillField = skills[i] as HTMLTextAreaElement;
        if (skillField.value.trim()) {
            skillStr += `<li>${skillField.value}</li>`;
        }
    }
    (document.getElementById("skillsT") as HTMLUListElement).innerHTML = skillStr;

    // Hide the form and show the generated CV template
    (document.getElementById("cv-form") as HTMLElement).style.display = "none";
    (document.getElementById("cv-template") as HTMLElement).style.display = "block";
}

// Function to print CV
function printCV(): void {
    window.print();
}
