function Validation(values) {
    let error = {}

    if (!values.age.trim()) {
        error.age = "Age should not be empty";
    } 
    else if (isNaN(values.age)) {
        error.age = "Age must be a number";
    } 
    else if (parseInt(values.age) > 117) {
        error.age = "Age must be smaller than 117";
    }

    if (!values.weight.trim()) {
        error.weight = "Weight should not be empty";
    } 
    else if (isNaN(values.weight)) {
        error.weight = "Weight must be a number";
    } 
    else if (parseFloat(values.weight) <= 0) {
        error.weight = "Weight must be greater than 0";
    }

    if (!values.height.trim()) {
        error.height = "Height should not be empty";
    } 
    else if (isNaN(values.height)) {
        error.height = "Height must be a number";
    } 
    else if (parseFloat(values.height) <= 0) {
        error.height = "Height must be greater than 0";
    }

    if (!values.gender) {
        error.gender = "Gender should be selected";
    }
    return error;
}

export default Validation