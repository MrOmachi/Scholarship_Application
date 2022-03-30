let allSubjects = [
  'Javascript',
  'PHP',
  'Chemistry',
  'Biolagy',
  'Economics',
  'Physics',
];

let africaCountry = ['Nigeria', 'Cameroon', 'Ghana'];
let asiaCountry = ['China', 'Japan', 'Korea'];
let europeCountry = ['Belgium', 'Nedaland', 'Norway'];

let continent = document.getElementById('continent');
let country = document.getElementById('country');
let africaSelect = document.getElementById('africaSelect');
let asiaSelect = document.getElementById('asiaSelect');
let europeSelect = document.getElementById('europeSelect');

let selectSubjects1 = document.getElementById('selectSubjects1');
let selectSubjects2 = document.getElementById('selectSubjects2');
let selectSubjects3 = document.getElementById('selectSubjects3');
let selectSubjects4 = document.getElementById('selectSubjects4');
let selectSubjects5 = document.getElementById('selectSubjects5');
let selectSubjects6 = document.getElementById('selectSubjects6');

let regBtn = document.getElementById('regBtn');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let firstNameError = document.getElementById('firstNameError');
let lastNameError = document.getElementById('lastNameError');
let age = document.getElementById('age');
let ageError = document.getElementById('ageError');
let gender = document.getElementById('gender');
let genderError = document.getElementById('genderError');
let phoneNumber = document.getElementById('phoneNumber');
let phoneError = document.getElementById('phoneError');
let school = document.getElementById('school');
let schoolError = document.getElementById('schoolError');
let continenetError = document.getElementById('continenetError');
let countryError = document.getElementById('countryError');
let subjectError = document.getElementById('subjectError');
let mathsScore = document.getElementById('mathsScore');
let engScore = document.getElementById('engScore');
let selectSubjects1Score = document.getElementById('selectSubjects1Score');
let selectSubjects2Score = document.getElementById('selectSubjects2Score');
let selectSubjects3Score = document.getElementById('selectSubjects3Score');
let selectSubjects4Score = document.getElementById('selectSubjects4Score');
let selectSubjects5Score = document.getElementById('selectSubjects5Score');
let selectSubjects6Score = document.getElementById('selectSubjects6Score');
let totalPoints = 0;
let gradeAverage = 0;
let agePointHold;
let continentPointHold;
let calculatedGrade;

regBtn.addEventListener('click', function () {
  fieldError();
});
function fieldError() {
  if (firstName.value == '') {
    firstNameError.innerHTML = 'fill this field correctly';
  } else if (lastName.value == '') {
    lastNameError.innerHTML = 'fill this field correctly';
  } else if (age.value == '') {
    ageError.innerHTML = 'fill this field correctly';
  } else if (gender.value == '') {
    genderError.innerHTML = 'Select an option';
  } else if (phoneNumber.value == '') {
    phoneError.innerHTML = 'fill this field correctly';
  } else if (school.value == '') {
    schoolError.innerHTML = 'fill this field correctly';
  } else if (continent.value == '') {
    continenetError.innerHTML = 'Select an option';
  } else if (
    selectSubjects1.value == '' ||
    selectSubjects2.value == '' ||
    selectSubjects3.value == '' ||
    selectSubjects4.value == '' ||
    selectSubjects5.value == '' ||
    selectSubjects6.value == ''
  ) {
    alert('fill eight subjects complete');
  } else if (
    mathsScore.value == '' ||
    engScore.value == '' ||
    selectSubjects1Score.value == '' ||
    selectSubjects2Score.value == '' ||
    selectSubjects3Score.value == '' ||
    selectSubjects4Score.value == '' ||
    selectSubjects5Score.value == '' ||
    selectSubjects6Score.value == ''
  ) {
    alert('Input all subject scores correctly');
  } else {
    agePoint();
  }
  clearError();
}

function clearError() {
  if (firstName.value != '') {
    firstNameError.innerHTML = '';
  }
  if (lastName.value != '') {
    lastNameError.innerHTML = '';
  }
  if (age.value != '') {
    ageError.innerHTML = '';
  }
  if (gender.value != '') {
    genderError.innerHTML = '';
  }
  if (phoneNumber.value != '') {
    phoneError.innerHTML = '';
  }
  if (school.value != '') {
    schoolError.innerHTML = '';
  }
  if (continent.value != '') {
    continenetError.innerHTML = '';
  }
}

continent.addEventListener('change', function () {
  continentSelect();
});

function continentSelect() {
  if (continent.value == 'africaSelect') {
    let allOption = '';
    for (i = 0; i < africaCountry.length; i++) {
      allOption += `<option value''> ${africaCountry[i]}</option>`;
    }

    country.innerHTML = `<option value''>select country </option> ${allOption}`;
  } else if (continent.value == 'asiaSelect') {
    let allOptions = '';
    for (a = 0; a < asiaCountry.length; a++) {
      allOptions += `<option value="${asiaCountry[a]}"> ${asiaCountry[a]}</option>`;
    }
    country.innerHTML = `<option value="" >Select Country</option> ${allOptions}`;
  } else if (continent.value == 'europeSelect') {
    let allOptions = '';
    for (a = 0; a < europeCountry.length; a++) {
      allOptions += `<option value="${europeCountry[a]}"> ${europeCountry[a]}</option>`;
    }
    country.innerHTML = `<option value="" >Select Country</option> ${allOptions}`;
  }
}

selectSubjects1.addEventListener('change', function () {
  let studentIndex = selectSubjects1.value;
  allSubjects.splice(studentIndex, 1);
  loopStudents2();
  loopStudents3();
  loopStudents4();
  loopStudents5();
  loopStudents6();
});

selectSubjects2.addEventListener('change', function () {
  let studentIndex = selectSubjects2.value;
  allSubjects.splice(studentIndex, 1);
  loopStudents3();
  loopStudents4();
  loopStudents5();
  loopStudents6();
});

selectSubjects3.addEventListener('change', function () {
  let studentIndex = selectSubjects3.value;
  allSubjects.splice(studentIndex, 1);

  loopStudents4();
  loopStudents5();
  loopStudents6();
});
selectSubjects4.addEventListener('change', function () {
  let studentIndex = selectSubjects4.value;
  allSubjects.splice(studentIndex, 1);
  loopStudents5();
  loopStudents6();
});
selectSubjects5.addEventListener('change', function () {
  let studentIndex = selectSubjects5.value;
  allSubjects.splice(studentIndex, 1);
  loopStudents6();
});
selectSubjects6.addEventListener('change', function () {
  let studentIndex = selectSubjects6.value;
  allSubjects.splice(studentIndex, 1);
});

// //Loop an array
loopStudents1();
loopStudents2();
loopStudents3();
loopStudents4();
loopStudents5();
loopStudents6();
function loopStudents1() {
  let allOptions = '';
  for (let a = 0; a < allSubjects.length; a++) {
    allOptions += ` <option value="${a}"> ${allSubjects[a]}</option>`;
  }
  selectSubjects1.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`;
}

function loopStudents2() {
  let allOptions = '';
  for (let a = 0; a < allSubjects.length; a++) {
    allOptions += ` <option value="${a}"> ${allSubjects[a]}</option>`;
  }
  selectSubjects2.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`;
}

function loopStudents3() {
  let allOptions = '';
  for (let a = 0; a < allSubjects.length; a++) {
    allOptions += ` <option value="${a}"> ${allSubjects[a]}</option>`;
  }
  selectSubjects3.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`;
}
function loopStudents4() {
  let allOptions = '';
  for (let a = 0; a < allSubjects.length; a++) {
    allOptions += ` <option value="${a}"> ${allSubjects[a]}</option>`;
  }
  selectSubjects4.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`;
}
function loopStudents5() {
  let allOptions = '';
  for (let a = 0; a < allSubjects.length; a++) {
    allOptions += ` <option value="${a}"> ${allSubjects[a]}</option>`;
  }
  selectSubjects5.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`;
}
function loopStudents6() {
  let allOptions = '';
  for (let a = 0; a < allSubjects.length; a++) {
    allOptions += ` <option value="${a}"> ${allSubjects[a]}</option>`;
  }
  selectSubjects6.innerHTML = `  <option value="">Select Subject</option> ${allOptions}`;
}

function agePoint() {
  agePointHold = 0;
  if (age.value >= 18 && age.value <= 24) {
    totalPoints = totalPoints + 100;
  } else if (age.value >= 25 && age.value <= 30) {
    totalPoints = totalPoints + 80;
  } else if (age.value >= 31 && age.value <= 35) {
    totalPoints = totalPoints + 50;
  } else if (age.value >= 36 && age.value <= 40) {
    totalPoints = totalPoints + 30;
  } else if (age.value >= 41) {
    totalPoints = totalPoints + 10;
  }
  agePointHold = totalPoints;
  console.log('Points from age is ' + agePointHold);
  countryPoints();
}

function countryPoints() {
  continentPointHold = 0;
  if (continent.value == 'africaSelect') {
    continentPointHold = continentPointHold + 50;
  } else if (continent.value == 'asiaSelect') {
    continentPointHold = continentPointHold + 40;
  } else if (continent.value == 'europeSelect') {
    continentPointHold = continentPointHold + 30;
  } else if (continent.value == 'NortnASelect') {
    continentPointHold = continentPointHold + 20;
  } else if (continent.value == 'othersSelect') {
    continentPointHold = continentPointHold + 10;
  }
  totalPoints = totalPoints + continentPointHold;
  console.log('Points from continent is ' + continentPointHold);
  console.log('cummulative points from age and continent is ' + totalPoints);
  gradeAverageCheck();
}

function gradeAverageCheck() {
  mathsScore = parseInt(mathsScore.value);
  engScore = parseInt(engScore.value);
  selectSubjects1Score = parseInt(selectSubjects1Score.value);
  selectSubjects2Score = parseInt(selectSubjects2Score.value);
  selectSubjects3Score = parseInt(selectSubjects3Score.value);
  selectSubjects4Score = parseInt(selectSubjects4Score.value);
  selectSubjects5Score = parseInt(selectSubjects5Score.value);
  selectSubjects6Score = parseInt(selectSubjects6Score.value);

  gradeAverage =
    (mathsScore +
      engScore +
      selectSubjects1Score +
      selectSubjects2Score +
      selectSubjects3Score +
      selectSubjects4Score +
      selectSubjects5Score +
      selectSubjects6Score) /
    8;
  console.log('points from grade average is ' + gradeAverage);

  calculatedGrade = 0;
  if (gradeAverage >= 90 && gradeAverage <= 100) {
    calculatedGrade = calculatedGrade + 150;
  } else if (gradeAverage >= 85 && gradeAverage <= 89) {
    calculatedGrade = calculatedGrade + 140;
  } else if (gradeAverage >= 75 && gradeAverage <= 84) {
    calculatedGrade = calculatedGrade + 120;
  } else if (gradeAverage >= 65 && gradeAverage <= 74) {
    calculatedGrade = calculatedGrade + 100;
  } else if (gradeAverage >= 60 && gradeAverage <= 64) {
    calculatedGrade = calculatedGrade + 80;
  } else if (gradeAverage >= 50 && gradeAverage <= 59) {
    calculatedGrade = calculatedGrade + 50;
  } else if (gradeAverage >= 40 && gradeAverage <= 49) {
    calculatedGrade = calculatedGrade + 20;
  }
  console.log('points from calculated grade average is ' + calculatedGrade);
  totalPoints = totalPoints + calculatedGrade;
  console.log('cummulative points is ' + totalPoints);
  eligibilityCheck();
}

function eligibilityCheck() {
  if (totalPoints >= 180) {
    alert('Viola!!, You have been awarded the scholarship');
    showChart();
  } else {
    alert('Sorry You are not eligible for this Scholarship');
  }
}

function showChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart;
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Age', 'Country', 'Average'],
      datasets: [
        {
          label: ['Points'],
          data: [agePointHold, continentPointHold, calculatedGrade],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
          hoverBorderColor: '#000',
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: 'Chart showing Eligibility points',
        fontSize: 25,
      },
      legend: {
        display: false,
        position: 'right',
        labels: {
          fontColor: '#000',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
