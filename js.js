function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = 0;

   // Xử lý chuyển đổi đơn vị khối lượng
   if (fromUnit === "kg") {
    switch (toUnit) {
        case "g":
            result = inputValue * 1000;
            break;
        case "microgram":
            result = inputValue * 1e9;
            break;
        case "miligram":
            result = inputValue * 1e6;
            break;
        case "pound":
            result = inputValue * 2.20462;
            break;
        case "tạ":
            result = inputValue * 0.0110231;
            break;
        case "tấn":
            result = inputValue * 0.001;
            break;
        case "kíp":
            result = inputValue * 0.00220462;
            break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}
if (fromUnit === "g") {
    switch (toUnit) {
        case "kg":
            result = inputValue / 1000;
            break;
        case "kíp":
            result = inputValue * 0.00110231;
            break;
        case "microgram":
            result = inputValue * 1e6;
            break;
        case "miligram":
            result = inputValue * 1000;
            break;
        case "pound":
            result = inputValue / 453.59237;
            break;
        case "tạ":
            result = inputValue * 1e-5;
            break;
        case "tấn":
            result = inputValue / 1e6;
            break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}
if (fromUnit === "kíp") {
    switch (toUnit) {
        case "kg":
            result = inputValue * 453.59237;
            break;
        case "g":
            result = inputValue * 453592.37;
            break;
        case "microgram":
            result = inputValue * 4.5359237e8;
            break;
        case "miligram":
            result = inputValue * 453592370;
            break;
        case "pound":
            result = inputValue * 1000;
            break;
        case "tạ":
            result = inputValue * 0.00110231;
            break;
        case "tấn":
            result = inputValue * 0.00045359237;
            break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}

if (fromUnit === "microgram") {
    switch (toUnit) {
        case "kg":
            result = inputValue / 1e9;
            break;
        case "g":
            result = inputValue * 1e6;
            break;
        case "kíp":
            result = inputValue * 0.00000000220462;
            break;
        case "miligram":
            result = inputValue * 0.001;
            break;
        case "pound":
            result = inputValue / 453592.37;
            break;
        case "tạ":
            result = inputValue / 9.07185e11;
            break;
        case "tấn":
            result = inputValue / 1e12;
            break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}
if (fromUnit === "miligram") {
    switch (toUnit) {
        case "kg":
            result = inputValue / 1e6;
            break;
        case "g":
            result = inputValue / 1000;
            break;
        case "kíp":
            result = inputValue * 0.00000220462;
            break;
        case "microgram":
            result = inputValue * 1000;
            break;
        case "pound":
            result = inputValue * 0.00000220462;
            break;
        case "tạ":
            result = inputValue * 0.00000220462 * 2204.62;
            break;
        case "tấn":
            result = inputValue / 1e6;
            break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}
if (fromUnit === "pound") {
    switch (toUnit) {
        case "kg":
            result = inputValue / 2.20462;
            break;
        case "g":
            result = inputValue * 453.59237;
            break;
        case "microgram":
            result = inputValue * 4.5359237e8;
            break;
        case "miligram":
            result = inputValue * 453592.37;
            break;
        case "tạ":
            result = inputValue * 0.000446429;
            break;
        case "tấn":
            result = inputValue * 0.00045359237;
            break;
        case "kíp":
            result = inputValue * 0.00110231;
            break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}
if (fromUnit === "tạ") {
    switch (toUnit) {
        case "kg":
            result = inputValue * 100;
            break;
        case "g":
            result = inputValue * 100000;
            break;
        case "microgram":
            result = inputValue * 1e11;
            break;
        case "miligram":
            result = inputValue * 1e8;
            break;
        case "pound":
            result = inputValue * 220.462;
            break;
        case "tấn":
            result = inputValue * 0.1;
            break;
            case "kíp":
                result = inputValue * 0.22;
                break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}
if (fromUnit === "tấn") {
    switch (toUnit) {
        case "kg":
            result = inputValue * 1000;
            break;
        case "g":
            result = inputValue * 1e6;
            break;
        case "kíp":
            result = inputValue * 2204.62;
            break;
        case "microgram":
            result = inputValue * 1e12;
            break;
        case "miligram":
            result = inputValue * 1e9;
            break;
        case "pound":
            result = inputValue * 2204.62;
            break;
        case "tạ":
            result = inputValue * 10;
            break;
        default:
            result = inputValue; // Đơn vị nguồn và đích giống nhau
    }
}


    document.getElementById("result").innerText = result + " " + toUnit;
}

function convertVolume() {
    const inputValue = parseFloat(document.getElementById("inputValueVolume").value);
    const fromUnit = document.getElementById("fromUnitVolume").value;
    const toUnit = document.getElementById("toUnitVolume").value;
    let result = 0;

    // Chuyển đổi thể tích
    if (fromUnit === "liter" && toUnit === "milliliter") {
        result = inputValue * 1000;
    } else if (fromUnit === "milliliter" && toUnit === "liter") {
        result = inputValue / 1000;
    }

    document.getElementById("resultVolume").innerText = result + " " + toUnit;
}

// Bạn có thể thêm các hàm tương tự cho chuyển đổi áp suất ở đây.

function convertPressure() {
    const inputValue = parseFloat(document.getElementById("inputValuePressure").value);
    const fromUnit = document.getElementById("fromUnitPressure").value;
    const toUnit = document.getElementById("toUnitPressure").value;
    let result = 0;

    // Chuyển đổi áp suất
    if (fromUnit === "atm" && toUnit === "bar") {
        result = inputValue * 1.01325;
    } else if (fromUnit === "bar" && toUnit === "atm") {
        result = inputValue / 1.01325;
    }

    document.getElementById("resultPressure").innerText = result + " " + toUnit;
}
