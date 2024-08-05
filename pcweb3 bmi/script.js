function calcbmi() {

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let bmi = weight / (height ** 2);
        alert(`Your BMI is ${bmi}`);

    let resulttext = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        resulttext += 'You are Underweight!';
        document.getElementById('bmiresult').classList.remove('overweight');

    }   

    else if (bmi <= 25) {
        resulttext += 'You are healthy!';
        document.getElementById('bmiresult').classList.remove('overweight');
    } 

    else if (bmi>25) {
        resulttext += 'You are Overweight!';
        document.getElementById('bmiresult').classList.add('overweight');
    }

    document.getElementById('bmiresult').innerHTML = resulttext;
}