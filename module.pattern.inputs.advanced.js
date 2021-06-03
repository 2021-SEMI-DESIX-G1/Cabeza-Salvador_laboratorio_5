function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
  }


(() => {
    var App = {
        htmlElements: {
            studentForm: document.getElementById('student_form'),
            studentsList: document.getElementById('students_list')
        },
        init: () => {
            // Bind events
            App.htmlElements.studentForm.addEventListener('submit', App.events.studentFormOnSubmit);
            
        },
        events: {
            studentFormOnSubmit: (event) => {
                event.preventDefault();
                const { 
                    student_name: studentNameInput,
                    student_age: studentAgeInput,
                    student_hobbies: studentHobbiesInput
                } = event.target.elements;
                const studentName = studentNameInput.value;
                const studentAge = studentAgeInput.value;
                const studentHobbies = studentHobbiesInput.value;
               // var ButtonDU = 1;
               // var suma = [];
                
               // suma.push(ButtonDU+suma.length);

                App.utils.addStudentToList({ 
                    tableBody: App.htmlElements.studentsList,
                    studentName,
                    studentAge,
                    studentHobbies,
                  //  ButtonDU,
                   // suma                    
                });
            }
        },
        utils: {
            addStudentToList: ({ tableBody, studentName, studentAge, studentHobbies }) => {
                const newRow = `<tr><td>${studentName}</td><td>${studentAge}</td><td>${studentHobbies}</td><td><button onclick = "deleteRow(this)">Prueba</button></td><td><button onclick = "deleteRow(this)">Prueba</button></td></tr>`;
                tableBody.innerHTML += newRow;
                //console.log(suma);
                
            },
        }
    }
    App.init();
})();