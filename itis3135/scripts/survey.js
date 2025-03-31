const form = document.getElementById("introductionForm");
const coursesContainer = document.getElementById("courses-container");
const addCourseButton = document.getElementById("course-btn");


function addCourse() {
    const li = document.createElement("li");


    const codeAndNameDiv = document.createElement("div");
  

    const courseCodeInput = document.createElement("input");
    courseCodeInput.type = "text";
    courseCodeInput.name = "courseCode[]";
    courseCodeInput.placeholder = "Course Code";
    courseCodeInput.required = true;
    courseCodeInput.classList.add("course-code-input");
    courseCodeInput.style.marginRight = "2%";

    const courseNameInput = document.createElement("input");
    courseNameInput.type = "text";
    courseNameInput.name = "courseName[]";
    courseNameInput.placeholder = "Course Name";
    courseNameInput.required = true;
    courseNameInput.classList.add("course-name-input");
   
    
    codeAndNameDiv.appendChild(courseCodeInput);
    codeAndNameDiv.appendChild(courseNameInput);


    const courseReasonDiv = document.createElement("div");
    const courseReasonInput = document.createElement("textarea");
    courseReasonInput.name = "courseReason[]";
    courseReasonInput.placeholder = "Reason for taking the course";
    courseReasonInput.required = true;
    courseReasonInput.classList.add("course-reason-input");
    courseReasonDiv.appendChild(courseReasonInput);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
        coursesContainer.removeChild(li);
    });

    
    li.appendChild(codeAndNameDiv);
    li.appendChild(courseReasonDiv);
    li.appendChild(deleteBtn);

    coursesContainer.appendChild(li);
}
  
function resetFormProgress() {
    while (coursesContainer.firstChild) {
        coursesContainer.removeChild(coursesContainer.firstChild);
    }
}
  
function handleSubmit(event) {
    event.preventDefault();
    
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
  
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const mascot = formData.get("mascot");
    const lastName = formData.get("lastName");

    let resultHTML = "";
    resultHTML += "<h3>" + firstName + " \"" + mascot + "\" " + lastName + "</h3>";

    const image = document.getElementById("image").files[0];
    const imageUrl = URL.createObjectURL(image);

    const imageAlt = formData.get("imageAlt");
    
    resultHTML += `<figure><img src="${imageUrl}" alt="${imageAlt}">
    <figcaption><em>${formData.get("imageCaption")}</em></figcaption></figure>`;

    resultHTML += `<ul>`;
    resultHTML += `<li><strong>Personal background:</strong> ${formData.get("personalBackground")}</li>`;
    resultHTML += `<li><strong>Professional Background:</strong> ${formData.get("professionalBackground")}</li>`;
    resultHTML += `<li><strong>Academic background:</strong> ${formData.get("academicBackground")}</li>`;
    resultHTML += `<li><strong>Background in this subject:</strong> ${formData.get("backgroundSubject")}</li>`;
    resultHTML += `<li><strong>Primary Computer Platform:</strong> ${formData.get("primaryPlatform")}</li>`;
  
    const courseCodes = formData.getAll("courseCode[]");
    const courseNames = formData.getAll("courseName[]");
    const courseReasons = formData.getAll("courseReason[]");

    if (courseCodes.length > 0) {
        resultHTML += `<li><strong>Courses I'm Taking &amp; Why:</strong>
            <ul>`;
        for (let i = 0; i < courseCodes.length; i++) {
            const code = courseCodes[i];
            const name = courseNames[i];
            const reason = courseReasons[i];
            resultHTML += `<li><strong>${code}: ${name} - </strong> ${reason}</li>`;
        }
        resultHTML += `</ul></li>`;
    } else {
        resultHTML += `<li><strong>Courses I'm Taking &amp; Why:</strong> None</li>`;
    }
  
    const funnyThing = (formData.get("funnyThing") || "").trim();
    if (funnyThing) {
        resultHTML += `<li><strong>Funny/Interesting item about yourself:</strong> ${funnyThing}</li>`;
    }

    const anythingElse = (formData.get("anythingElse") || "").trim();
    if (anythingElse) {
        resultHTML += `<li><strong>I'd also like to share:</strong> ${anythingElse}</li>`;
    }


    resultHTML += `</ul>`;
  
    resultHTML += `<p><a href="#" id="resetLink" class="buttons" >Reset</a></p>`;
  
    const resultSection = document.getElementById("resultSection");
    resultSection.innerHTML = resultHTML;
    resultSection.style.display = "block";
    form.style.display = "none";
  
    document.getElementById("resetLink").addEventListener("click", function(e) {
        e.preventDefault();
        form.reset();
        resetFormProgress();
        resultSection.style.display = "none";
        form.style.display = "block";
    });
}

  
if (form) {
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("reset", resetFormProgress);
}
if (addCourseButton) {
    addCourseButton.addEventListener("click", addCourse);
}
  