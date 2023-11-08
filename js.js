//Khối Lượng
const inputValueElement = document.getElementById("inputValue");
const fromUnitElement = document.getElementById("fromUnit");
const toUnitElement = document.getElementById("toUnit");
const resultElement = document.getElementById("resultMass");
// Thể tích
const inputValueVolume = document.getElementById("inputValueVolume");
const fromUnitVolume = document.getElementById("fromUnitVolume");
const toUnitVolume = document.getElementById("toUnitVolume");
const resultVolume = document.getElementById("resultVolume");
// ÁP SUẤT
const inputValuePressure = document.getElementById("inputValuePressure");
const fromUnitPressure = document.getElementById("fromUnitPressure");
const toUnitPressure = document.getElementById("toUnitPressure");
const resultPressure = document.getElementById("resultPressure");
// Chiều Dài
const inputValueLength = document.getElementById("inputValueLength");
const fromUnitLength = document.getElementById("fromUnitLength");
const toUnitLength = document.getElementById("toUnitLength");
const resultLength = document.getElementById("resultLength");
// Diện tích
const inputValueArea = document.getElementById("inputValueArea");
const fromUnitSpeed = document.getElementById("fromUnitSpeed");
const toUnitArea = document.getElementById("toUnitArea");
const resultArea = document.getElementById("resultArea");
// Van toc
const inputValueSpeed = document.getElementById("inputValueSpeed");
const fromUnitArea = document.getElementById("fromUnitArea");
const toUnitSpeed = document.getElementById("toUnitSpeed");
const resultSpeed = document.getElementById("resultSpeed");
// Input
inputValueElement.addEventListener("input", convertMass);
inputValueVolume.addEventListener("input", convertVolume);
inputValuePressure.addEventListener("input", convertPressure);
inputValueLength.addEventListener("input", convertLength);
inputValueArea.addEventListener("input", convertArea);
inputValueSpeed.addEventListener("input", convertSpeed);
// Khoi Luong
function convertMass() {
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


    document.getElementById("resultMass").innerText = result + " " + toUnit;
}
// Thể tích
function convertVolume() {
    const inputValue = parseFloat(document.getElementById("inputValueVolume").value);
    const fromUnit = document.getElementById("fromUnitVolume").value;
    const toUnit = document.getElementById("toUnitVolume").value;
    let result = 0;

    // Chuyển đổi thể tích
    if (fromUnit === "l") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 1000;
                break;
            case "cl":
                result = inputValue * 100;
                break;
            case "dl":
                result = inputValue * 10;
                break;
            case "dm³":
                result = inputValue;
                break;
            case "Giọt":
                result = inputValue * 20000; // Giọt chuyển sang mL
                break;
            case "foot³":
                result = inputValue * 0.0353147;
                break;
            case "gallon":
                result = inputValue * 0.264172;
                break;
            case "inch³":
                result = inputValue * 61.024;
                break;
            case "l":
                result = inputValue;
                break;
            case "m³":
                result = inputValue * 0.001;
                break;
            case "ml":
                result = inputValue * 1000;
                break;
            case "mm³":
                result = inputValue * 1000000;
                break;
            case "quart":
                result = inputValue * 1.05669;
                break;
            case "thùng":
                result = inputValue * 0.001308;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.00838641;
                break;
            case "tun":
                result = inputValue * 0.001;
                break;
            case "yard³":
                result = inputValue * 0.00130795;
                break;
            default:
                result = inputValue; // Đơn vị nguồn và đích giống nhau
        }
    }
    if (fromUnit === "ml"){
        switch (toUnit) {

            case "cc":
                result = inputValue;
                break;
            case "cl":
                result = inputValue * 0.1;
                break;
            case "dl":
                result = inputValue * 0.01;
                break;
            case "dm³":
                result = inputValue * 0.001;
                break;
            case "Giọt":
                result = inputValue * 20;
                break;
            case "foot³":
                result = inputValue * 0.0000353147;
                break;
            case "gallon":
                result = inputValue * 0.000264172;
                break;
            case "inch³":
                result = inputValue * 0.0610237;
                break;
            case "l":
                result = inputValue * 0.001;
                break;
            case "m³":
                result = inputValue * 0.000001;
                break;
            case "mm³":
                result = inputValue * 1000;
                break;
            case "quart":
                result = inputValue * 0.00105669;
                break;
            case "thùng":
                result = inputValue * 0.000001308;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.00000838641;
                break;
            case "tun":
                result = inputValue * 0.000001;
                break;
            case "yard³":
                result = inputValue * 0.00000130795;
                break;
                default:
                    result = inputValue;
        }
    }
    if (fromUnit === "cc"){
        switch (toUnit) {

            case "cl":
                result = inputValue / 10;
                break;
            case "dl":
                result = inputValue / 100;
                break;
            case "dm³":
                result = inputValue * 0.001;
                break;
            case "Giọt":
                result =inputValue * 20 ;
                break;
            case "foot³":
                result = inputValue * 0.0000353147;
                break;
            case "gallon":
                result = inputValue * 0.000264172;
                break;
            case "inch³":
                result = inputValue * 0.0610237;
                break;
            case "l":
                result = inputValue * 0.001;
                break;
            case "m³":
                result = inputValue * 0.000001;
                break;
            case "ml":
                result = inputValue;
                break;
            case "mm³":
                result = inputValue * 1000;
                break;
            case "quart":
                result = inputValue * 0.00105669;
                break;
            case "thùng":
                result = inputValue * 0.000001308;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.00000838641;
                break;
            case "tun":
                result = inputValue * 0.000001;
                break;
            case "yard³":
                result = inputValue * 0.00000130795;
                break;
                default:
                    result = inputValue;
        }
    }
    if (fromUnit === "cl") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 10;
                break;
            case "dl":
                result = inputValue * 0.1;
                break;
            case "dm³":
                result = inputValue * 0.01;
                break;
            case "Giọt":
                result = inputValue * 200; // 1 cl = 2 Giọt
                break;
            case "foot³":
                result = inputValue * 0.000353147;
                break;
            case "gallon":
                result = inputValue * 0.00264172;
                break;
            case "inch³":
                result = inputValue * 0.610237;
                break;
            case "l":
                result =inputValue * 0.01;
                break;
            case "m³":
                result = inputValue * 0.00001;
                break;
            case "ml":
                result = inputValue * 10;
                break;
            case "mm³":
                result = inputValue * 100000;
                break;
            case "quart":
                result = inputValue * 0.0105669;
                break;
            case "thùng":
                result = inputValue * 0.00001308;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.0000838641;
                break;
            case "tun":
                result = inputValue * 0.00001;
                break;
            case "yard³":
                result = inputValue * 0.0000130795;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "dl") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 100;
                break;
            case "cl":
                result = inputValue * 10;
                break;
            case "dm³":
                result = inputValue * 0.1;
                break;
            case "Giọt":
                result = inputValue * 2000; // 1 dl = 2000 Giọt
                break;
            case "foot³":
                result = inputValue * 0.00353147;
                break;
            case "gallon":
                result = inputValue * 0.0264172;
                break;
            case "inch³":
                result = inputValue * 6.10237;
                break;
            case "l":
                result = inputValue * 0.1;
                break;
            case "m³":
                result = inputValue * 0.0001;
                break;
            case "ml":
                result = inputValue * 100;
                break;
            case "mm³":
                result = inputValue * 100000;
                break;
            case "quart":
                result = inputValue * 0.105669;
                break;
            case "thùng":
                result = inputValue * 0.0001308;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.000838641;
                break;
            case "tun":
                result = inputValue * 0.0001;
                break;
            case "yard³":
                result = inputValue * 0.000130795;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "dm³") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 1000;
                break;
            case "cl":
                result = inputValue * 100;
                break;
            case "dl":
                result = inputValue * 10;
                break;
            case "Giọt":
                result = inputValue * 20000; // 1 dm³ = 20000 Giọt
                break;
            case "foot³":
                result = inputValue * 0.0353147
                break;
            case "gallon":
                result = inputValue * 0.264172;
                break;
            case "inch³":
                result = inputValue * 61.0237;
                break;
            case "l":
                result = inputValue * 1;
                break;
            case "m³":
                result =  inputValue * 0.001;
                break;
            case "ml":
                result = inputValue * 1000;
                break;
            case "mm³":
                result = inputValue * 1000000;
                break;
            case "quart":
                result = inputValue * 0.008386                ;
                break;
            case "thùng":
                result = inputValue * 1.308;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.00629;
                break;
            case "tun":
                result = inputValue * 0.001048;
                break;
            case "yard³":
                result = inputValue * 0.001308;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "Giọt") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 0.05                ;
                break;
            case "cl":
                result = inputValue * 0.005;
                break;
            case "dl":
                result = inputValue *0.0005;
                break;
            case "dm³":
                result = inputValue * 0.00005;
                break;
            case "foot³":
                result = inputValue * 0.000002;
                break;
            case "gallon":
                result = inputValue *0.000013;
                break;
            case "inch³":
                result = inputValue *0.003051;
                break;
            case "l":
                result = inputValue * 0.00005;
                break;
            case "m³":
                result = inputValue * 0.000005;
                break;
            case "ml":
                result = inputValue * 0.05;
                break;
            case "mm³":
                result = inputValue * 50;
                break;
            case "quart":
                result = inputValue * 0.000053;
                break;
            case "thùng":
                result = inputValue * 0.00000654;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.0000419321;
                break;
            case "tun":
                result = inputValue * 0.000005;
                break;
            case "yard³":
                result = inputValue * 0.00000653688;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "foot³") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 28316.8;
                break;
            case "cl":
                result = inputValue * 2831.68;
                break;
            case "dl":
                result = inputValue * 283.168;
                break;
            case "dm³":
                result = inputValue * 28.3168;
                break;
            case "Giọt":
                result = inputValue * 5663400; // 1 foot³ = 5663400 Giọt
                break;
            case "gallon":
                result = inputValue * 7.48052;
                break;
            case "inch³":
                result = inputValue * 1728;
                break;
            case "l":
                result = inputValue * 28.3168;
                break;
            case "m³":
                result = inputValue * 0.0283168;
                break;
            case "ml":
                result = inputValue * 28316.8;
                break;
            case "mm³":
                result = inputValue * 28316800;
                break;
            case "quart":
                result = inputValue * 29.9221;
                break;
            case "thùng":
                result = inputValue * 0.0361103;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.237481;
                break;
            case "tun":
                result = inputValue * 0.0283168;
                break;
            case "yard³":
                result = inputValue * 0.037037;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "gallon") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 3785.41;
                break;
            case "cl":
                result = inputValue * 378.541;
                break;
            case "dl":
                result = inputValue * 37.8541;
                break;
            case "dm³":
                result = inputValue * 3.78541;
                break;
            case "Giọt":
                result = inputValue * 757082.3568; // 1 gallon = 757082.3568 Giọt
                break;
            case "foot³":
                result = inputValue * 0.133681;
                break;
            case "inch³":
                result = inputValue * 231;
                break;
            case "l":
                result = inputValue * 3.78541;
                break;
            case "m³":
                result = inputValue * 0.00378541;
                break;
            case "ml":
                result = inputValue * 3785.41;
                break;
            case "mm³":
                result = inputValue * 3785410;
                break;
            case "quart":
                result = inputValue * 4;
                break;
            case "thùng":
                result = inputValue *0.031746;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.02381;
                break;
            case "tun":
                result = inputValue * 0.00378541;
                break;
            case "yard³":
                result = inputValue * 0.00495113;
                break;
            default:
                result = inputValue;
        }
    }   
    if (fromUnit === "inch³") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 16.3871;
                break;
            case "cl":
                result = inputValue * 1.63871;
                break;
            case "dl":
                result = inputValue * 0.163871;
                break;
            case "dm³":
                result = inputValue * 0.0163871;
                break;
            case "Giọt":
                result = inputValue * 327.74128; // 1 inch³ = 3277.42 Giọt
                break;
            case "foot³":
                result = inputValue * 0.000578704;
                break;
            case "gallon":
                result = inputValue * 0.004329;
                break;
            case "l":
                result = inputValue * 0.0163871;
                break;
            case "m³":
                result = inputValue * 0.0000163871;
                break;
            case "ml":
                result = inputValue * 16.3871;
                break;
            case "mm³":
                result = inputValue * 16387.1;
                break;
            case "quart":
                result = inputValue * 0.017316;
                break;
            case "thùng":
                result = inputValue * 0.000137;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.000103;
                break;
            case "tun":
                result = inputValue * 0.000017;
                break;
            case "yard³":
                result = inputValue * 0.000021;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "m³") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 1000000;
                break;
            case "cl":
                result = inputValue * 100000;
                break;
            case "dl":
                result = inputValue * 10000;
                break;
            case "dm³":
                result = inputValue * 1000;
                break;
            case "Giọt":
                result = inputValue * 20000000; // 1 m³ = 20000 Giọt
                break;
            case "foot³":
                result = inputValue * 35.3147;
                break;
            case "gallon":
                result = inputValue * 264.172;
                break;
            case "inch³":
                result = inputValue * 61023.7;
                break;
            case "l":
                result = inputValue * 1000;
                break;
            case "ml":
                result = inputValue * 1000000;
                break;
            case "mm³":
                result = inputValue * 1000000000;
                break;
            case "quart":
                result = inputValue * 1056.69;
                break;
            case "thùng":
                result = inputValue * 8.386414;
                break;
            case "thùng (dầu)":
                result = inputValue * 6.289811;
                break;
            case "tun":
                result = inputValue *1.048302;
                break;
            case "yard³":
                result = inputValue * 1.30795;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "mm³") {
        switch (toUnit) {
            case "cc":
                result = inputValue / 1000;
                break;
            case "cl":
                result = inputValue / 10000;
                break;
            case "dl":
                result = inputValue / 100000;
                break;
            case "dm³":
                result = inputValue / 1000000;
                break;
            case "Giọt":
                result = inputValue / 50; // 1 mm³ = 10 Giọt
                break;
            case "foot³":
                result = inputValue / 28316.8;
                break;
            case "gallon":
                result = inputValue / 4546.09;
                break;
            case "inch³":
                result = inputValue / 16387.1;
                break;
            case "l":
                result = inputValue / 100000;
                break;
            case "m³":
                result = inputValue / 1000000000;
                break;
            case "ml":
                result = inputValue / 1000;
                break;
            case "quart":
                result = inputValue / 946.353;
                break;
            case "thùng":
                result = inputValue / 764556.929;
                break;
            case "thùng (dầu)":
                result = inputValue / 119240.471;
                break;
            case "tun":
                result = inputValue / 1000000;
                break;
            case "yard³":
                result = inputValue / 764.556929;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "quart") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 946.353;
                break;
            case "cl":
                result = inputValue * 94.635295                ;
                break;
            case "dl":
                result = inputValue * 9.463529;
                break;
            case "dm³":
                result = inputValue * 0.946353;
                break;
            case "Giọt":
                result = inputValue * 18927.1; // 1 quart = 20 Giọt
                break;
            case "foot³":
                result = inputValue * 0.0334201;
                break;
            case "gallon":
                result = inputValue * 0.25;
                break;
            case "inch³":
                result = inputValue * 57.75;
                break;
            case "l":
                result = inputValue * 0.946353;
                break;
            case "m³":
                result = inputValue * 0.000946353;
                break;
            case "ml":
                result = inputValue * 946.353;
                break;
            case "mm³":
                result = inputValue * 946353;
                break;
            case "thùng":
                result = inputValue * 0.0011725;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.00750594;
                break;
            case "tun":
                result = inputValue * 0.000946353;
                break;
            case "yard³":
                result = inputValue * 0.0011725;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "thùng") {
        switch (toUnit) {
            case "cc":
                result = inputValue *119240.4712;
                break;
            case "cl":
                result = inputValue * 11924.04712;
                break;
            case "dl":
                result = inputValue *1192.404712                ;
                break;
            case "dm³":
                result = inputValue * 119.240471;
                break;
            case "Giọt":
                result = inputValue * 2384809.424; // 1 thùng = 200000 Giọt
                break;
            case "foot³":
                result = inputValue * 4.210938                ;
                break;
            case "gallon":
                result = inputValue *31.5;
                break;
            case "inch³":
                result = inputValue * 7276.5;
                break;
            case "l":
                result = inputValue * 119.240471;
                break;
            case "m³":
                result = inputValue * 0.11924;
                break;
            case "ml":
                result = inputValue * 119240.4712;
                break;
            case "mm³":
                result = inputValue * 119240471.2;
                break;
            case "quart":
                result = inputValue * 126;
                break;
            case "thùng (dầu)":
                result = inputValue * 0.75                ;
                break;
            case "tun":
                result = inputValue *0.125;
                break;
            case "yard³":
                result = inputValue * 0.155961;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "thùng (dầu)") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 158987.2949                ;
                break;
            case "cl":
                result = inputValue * 15898.72949;
                break;
            case "dl":
                result = inputValue * 1589.872949;
                break;
            case "dm³":
                result = inputValue * 158.987295
                ;
                break;
            case "Giọt":
                result = inputValue * 3179745.899; // 1 thùng (dầu) = 20000 Giọt
                break;
            case "foot³":
                result = inputValue * 5.614583;
                break;
            case "gallon":
                result = inputValue * 42;
                break;
            case "inch³":
                result = inputValue * 9702;
                break;
            case "l":
                result = inputValue * 158.987295;
                break;
            case "m³":
                result = inputValue * 0.158987;
                break;
            case "ml":
                result = inputValue * 158987.2949;
                break;
            case "mm³":
                result = inputValue * 158987294.9                ;
                break;
            case "quart":
                result = inputValue * 168
                ;
                break;
            case "thùng":
                result = inputValue * 1.333333
                ;
                break;
            case "tun":
                result = inputValue * 0.166667;
                break;
            case "yard³":
                result = inputValue * 0.207948;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "tun") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 953923.7696;
                break;
            case "cl":
                result = inputValue * 95392.37696;
                break;
            case "dl":
                result = inputValue * 9539.237696;
                break;
            case "dm³":
                result = inputValue * 953.92377;
                break;
            case "Giọt":
                result = inputValue * 19078475.39; // 1 tun = 2,000,000 Giọt
                break;
            case "foot³":
                result = inputValue * 33.6875;
                break;
            case "gallon":
                result = inputValue * 252;
                break;
            case "inch³":
                result = inputValue * 58212;
                break;
            case "l":
                result = inputValue * 953.92377;
                break;
            case "m³":
                result = inputValue * 0.953924;
                break;
            case "ml":
                result = inputValue * 953923.7696;
                break;
            case "mm³":
                result = inputValue * 953923769.6;
                break;
            case "quart":
                result = inputValue * 1008;
                break;
            case "thùng":
                result = inputValue * 8;
                break;
            case "thùng (dầu)":
                result = inputValue * 6;
                break;
            case "yard³":
                result = inputValue * 1.247685;
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "yard³") {
        switch (toUnit) {
            case "cc":
                result = inputValue * 764554.858;
                break;
            case "cl":
                result = inputValue * 76455.4858;
                break;
            case "dl":
                result = inputValue * 7645.54858;
                break;
            case "dm³":
                result = inputValue * 764.554858;
                break;
            case "Giọt":
                result = inputValue * 1529109.72; // 1 yard³ = 1,529,109.72 Giọt
                break;
            case "foot³":
                result = inputValue * 27;
                break;
            case "gallon":
                result = inputValue * 201.974;
                break;
            case "inch³":
                result = inputValue * 46656;
                break;
            case "l":
                result = inputValue * 764.554858;
                break;
            case "m³":
                result = inputValue * 0.764554858;
                break;
            case "ml":
                result = inputValue * 764554.858;
                break;
            case "mm³":
                result = inputValue * 764554858;
                break;
            case "quart":
                result = inputValue * 806.294;
                break;
            case "thùng":
                result = inputValue * 6.411874;
                break;
            case "thùng (dầu)":
                result = inputValue *4.808905;
                break;
            case "tun":
                result = inputValue * 0.801484;
                break;
            default:
                result = inputValue;
        }
    }
    document.getElementById("resultVolume").innerText = result + " " + toUnit;
}

// Bạn có thể thêm các hàm tương tự cho chuyển đổi áp suất ở đây.
// Áp suất
function convertPressure() {
    const inputValue = parseFloat(document.getElementById("inputValuePressure").value);
    const fromUnit = document.getElementById("fromUnitPressure").value;
    const toUnit = document.getElementById("toUnitPressure").value;
    let result = 0;

    if (fromUnit === "atm"){
        switch (toUnit) {
            case "bar":
                result = inputValue * 1.01325;
                break;
            case "cmHg":
                result = inputValue * 76.0;
                break;
            case "cmH2O":
                result = inputValue * 1033.0;
                break;
            case "kgcm2":
                result = inputValue * 1.0332;
                break;
            case "kgm2":
                result = inputValue * 10332.0;
                break;
            case "kgmm2":
                result = inputValue * 0.010332                ;
                break;
            case "kPa":
                result = inputValue * 101.325;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    
    }
    if (fromUnit === "bar"){
        switch (toUnit) {
            case "atm":
                result = inputValue * 0.986923;
                break;
            case "cmHg":
                result = inputValue * 75.0062;
                break;
            case "cmH2O":
                result = inputValue * 1019.716213;
                break;
            case "kgcm2":
                result = inputValue * 1.01972;
                break;
            case "kgm2":
                result = inputValue * 10197.2;
                break;
            case "kgmm2":
                result = inputValue * 0.010197;
                break;
            case "kPa":
                result = inputValue * 100;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "cmHg"){
        switch (toUnit) {
            case "atm":
                result = inputValue * 0.013158;
                break;
            case "bar":
                result = inputValue * 0.013332                ;
                break;
            case "cmH2O":
                result = inputValue * 13.5951;
                break;
            case "kgcm2":
                result = inputValue * 0.0135951;
                break;
            case "kgm2":
                result = inputValue * 135.951;
                break;
            case "kgmm2":
                result = inputValue * 0.000136;
                break;
            case "kPa":
                result = inputValue * 1.333224;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    
    }
    if (fromUnit === "cmH2O"){
        switch (toUnit) {
            case "atm":
                result = inputValue * 0.000968;
                break;
            case "bar":
                result = inputValue * 0.000981;
                break;
            case "cmHg":
                result = inputValue * 0.073556                ;
                break;
            case "kgcm2":
                result = inputValue * 0.001;
                break;
            case "kgm2":
                result = inputValue * 10;
                break;
            case "kgmm2":
                result = inputValue * 0.00001;
                break;
            case "kPa":
                result = inputValue * 0.098067;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "kgcm2"){
        switch (toUnit) {
            case "atm":
                result = inputValue * 0.96784;
                break;
            case "bar":
                result = inputValue * 0.980665                ;
                break;
            case "cmHg":
                result = inputValue * 73.555924;
                break;
            case "cmH2O":
                result = inputValue * 1000;
                break;
            case "kgm2":
                result = inputValue * 10000;
                break;
            case "kgmm2":
                result = inputValue * 0.01;
                break;
            case "kPa":
                result = inputValue * 98.0665;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    }
    if (fromUnit ==="kgm2"){
        switch (toUnit) {
            case "atm":
                result = inputValue * 0.0000986923;
                break;
            case "bar":
                result = inputValue * 0.000098;
                break;
            case "cmHg":
                result = inputValue * 0.007356;
                break;
            case "cmH2O":
                result = inputValue * 0.1;
                break;
            case "kgcm2":
                result = inputValue * 0.0001;
                break;
            case "kgmm2":
                result = inputValue *0.000001;
                break;
            case "kPa":
                result = inputValue * 0.009807                ;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    
    }
    if (fromUnit === "kgmm2"){
        switch (toUnit) {
            case "atm":
                result = inputValue * 96.784111                ;
                break;
            case "bar":
                result = inputValue * 98.0665;
                break;
            case "cmHg":
                result = inputValue * 7355.592401;
                break;
            case "cmH2O":
                result = inputValue * 100000;
                break;
            case "kgcm2":
                result = inputValue * 100;
                break;
            case "kgm2":
                result = inputValue * 1000000;
                break;
            case "kPa":
                result = inputValue * 9806.65                ;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    
    }
    if (fromUnit ==="kPa"){
        switch (toUnit) {
            case "atm":
                result = inputValue * 0.009869;
                break;
            case "bar":
                result = inputValue * 0.01            ;
                break;
            case "cmHg":
                result = inputValue * 0.750062;
                break;
            case "cmH2O":
                result = inputValue * 10.197162 ;
                break;
            case "kgcm2":
                result = inputValue * 0.010197;
                break;
            case "kgm2":
                result = inputValue * 101.971621;
                break;
            case "kgmm2":
                result = inputValue * 0.000102;
                break;
            // Trường hợp mặc định, không thay đổi giá trị
            default:
                result = inputValue;
        }
    }
    document.getElementById("resultPressure").innerText = result + " " + toUnit;
}
// Chiều Dài
function convertLength() {
    // Lấy giá trị và các đơn vị từ input và select elements
    const inputValue = parseFloat(document.getElementById("inputValueLength").value);
    const fromUnit = document.getElementById("fromUnitLength").value;
    const toUnit = document.getElementById("toUnitLength").value;
    let result = 0;

    if(fromUnit ==="cm"){
        switch(toUnit){
            case "dm":
                result = inputValue *  0.1; // 1 dm = 0.1 cm
                break;
            case "dặm":
                result = inputValue * 0.000006; // 1 dặm = 0.001 cm
                break;
            case "foot":
                result = inputValue *  0.032808 ; // 1 foot = 0.0328084 cm
                break;
            case "inch":
                result = inputValue *  0.393701; // 1 inch = 0.393701 cm
                break;
            case "gangtay":
                result = inputValue *  0.04; // 1 gangtay = 0.04 cm
                break;
            case "km":
                result = inputValue * 0.00001; // 1 km = 0.00001 cm
                break;
            case "m":
                result = inputValue *  0.01; // 1 m = 0.01 cm
                break;
                default:
                    result = inputValue;
        }
    }
    if(fromUnit==="dm"){
        switch (toUnit) {
            case "cm":
                result = inputValue * 10; // 1 cm = 10 dm
                break;
            case "dặm":
                result = inputValue * 0.000062; // 1 dặm = 0.0001 dm
                break;
            case "foot":
                result = inputValue *0.328084; // 1 foot = 0.328084 dm
                break;
            case "inch":
                result = inputValue * 3.93701; // 1 inch = 3.93701 dm
                break;
            case "gangtay":
                result = inputValue * 0.4; // 1 gangtay = 0.4 dm
                break;
            case "km":
                result = inputValue * 0.0001; // 1 km = 0.0001 dm
                break;
            case "m":
                result = inputValue * 0.1; // 1 m = 0.1 dm
                break;
                default:
                    result = inputValue;
    }
}
    if (fromUnit === "dặm") {
        switch (toUnit) {
            case "cm":
                result = inputValue * 160934.4; // 1 dặm = 160,934.4 cm
                break;
            case "dm":
                result = inputValue * 16093.44; // 1 dặm = 16,093.44 dm
                break;
            case "foot":
                result = inputValue * 5280; // 1 dặm = 5,280 feet
                break;
            case "inch":
                result = inputValue * 63360; // 1 dặm = 63,360 inches
                break;
            case "gangtay":
                result = inputValue * 7040; // 1 dặm = 160,934.4 gangtays
                break;
            case "km":
                result = inputValue * 1.60934; // 1 dặm = 1.60934 km
                break;
            case "m":
                result = inputValue * 1609.34; // 1 dặm = 1,609.34 m
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "foot") {
    switch (toUnit) {
        case "cm":
            result = inputValue * 30.48; // 1 foot = 30.48 cm
            break;
        case "dm":
            result = inputValue * 3.048; // 1 foot = 3.048 dm
            break;
        case "dặm":
            result = inputValue * 0.000189394; // 1 foot = 0.000189394 dặm
            break;
        case "inch":
            result = inputValue * 12; // 1 foot = 12 inches
            break;
        case "gangtay":
            result = inputValue * 1.333333; // 1 foot = 30.48 gangtays
            break;
        case "km":
            result = inputValue * 0.0003048; // 1 foot = 0.0003048 km
            break;
        case "m":
            result = inputValue * 0.3048; // 1 foot = 0.3048 m
            break;
        default:
            result = inputValue;
    }
}
if (fromUnit === "inch") {
    switch (toUnit) {
        case "cm":
            result = inputValue * 2.54; // 1 inch = 2.54 cm
            break;
        case "dm":
            result = inputValue * 0.254; // 1 inch = 0.254 dm
            break;
        case "dặm":
            result = inputValue * 0.000015783; // 1 inch = 0.000015783 dặm
            break;
        case "foot":
            result = inputValue * 0.0833333; // 1 inch = 0.0833333 foot
            break;
        case "gangtay":
            result = inputValue * 0.111111; // 1 inch = 2.54 gangtays
            break;
        case "km":
            result = inputValue * 0.0000254; // 1 inch = 0.0000254 km
            break;
        case "m":
            result = inputValue * 0.0254; // 1 inch = 0.0254 m
            break;
        default:
            result = inputValue;
    }
}
if (fromUnit === "gangtay") {
    switch (toUnit) {
        case "cm":
            result = inputValue *22.86            ; // 1 gangtay = 25.4 cm
            break;
        case "dm":
            result = inputValue * 2.286; // 1 gangtay = 2.54 dm
            break;
        case "dặm":
            result = inputValue *0.000142; // 1 gangtay = 0.00015783 dặm
            break;
        case "foot":
            result = inputValue * 0.75; // 1 gangtay = 0.833333 foot
            break;
        case "inch":
            result = inputValue * 9; // 1 gangtay = 0.393701 inch
            break;
        case "km":
            result = inputValue *0.000229; // 1 gangtay = 0.000254 km
            break;
        case "m":
            result = inputValue * 0.2286; // 1 gangtay = 0.0254 m
            break;
        default:
            result = inputValue;
    }
}
if (fromUnit === "km") {
    switch (toUnit) {
        case "cm":
            result = inputValue * 100000; // 1 km = 100000 cm
            break;
        case "dm":
            result = inputValue * 10000; // 1 km = 10000 dm
            break;
        case "dặm":
            result = inputValue * 0.621371; // 1 km = 0.621371 dặm
            break;
        case "foot":
            result = inputValue * 3280.84; // 1 km = 3280.84 foot
            break;
        case "inch":
            result = inputValue * 39370.1; // 1 km = 39370.1 inch
            break;
        case "gangtay":
            result = inputValue * 4374.453193            ; // 1 km = 100000 gangtay
            break;
        case "m":
            result = inputValue * 1000; // 1 km = 1000 m
            break;
        default:
            result = inputValue;
    }
}

if (fromUnit === "m") {
    switch (toUnit) {
        case "cm":
            result = inputValue * 100; // 1 m = 100 cm
            break;
        case "dm":
            result = inputValue * 10; // 1 m = 10 dm
            break;
        case "dặm":
            result = inputValue * 0.000621; // 1 m = 0.0621371 dặm
            break;
        case "foot":
            result = inputValue * 3.28084; // 1 m = 3.28084 foot
            break;
        case "inch":
            result = inputValue * 39.3701; // 1 m = 39.3701 inch
            break;
        case "gangtay":
            result = inputValue * 4.374453              ; // 1 m = 100 gangtay
            break;
        case "km":
            result = inputValue * 0.001; // 1 m = 0.001 km
            break;
        default:
            result = inputValue;
    }
}


    document.getElementById("resultLength").innerText = result + " " + toUnit;

}
// Bảng Diện tích
function convertArea() {
    // Lấy giá trị đầu vào và đơn vị ban đầu
    const inputValue = parseFloat(document.getElementById("inputValueArea").value);
    const fromUnit = document.getElementById("fromUnitArea").value;

    // Lấy đơn vị đích
    const toUnit = document.getElementById("toUnitArea").value;

    let result = 0;
    if (fromUnit === "cm²") {
        switch (toUnit) {
            case "dm²":
                result = inputValue * 0.01; // 1 cm² = 0.01 dm²
                break;
            case "dặm²":
                result = inputValue * 0.0000001; // 1 cm² = 0.0000001 dặm²
                break;
            case "foot²":
                result = inputValue * 0.00107639; // 1 cm² = 0.00107639 foot²
                break;
            case "hecta":
                result = inputValue * 0.0000001; // 1 cm² = 0.0000001 hecta
                break;
            case "inch²":
                result = inputValue * 0.15500031; // 1 cm² = 0.15500031 inch²
                break;
            case "km²":
                result = inputValue * 0.0000000001; // 1 cm² = 0.0000000001 km²
                break;
            case "m²":
                result = inputValue * 0.0001; // 1 cm² = 0.0001 m²
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "dm²") {
        switch (toUnit) {
            case "cm²":
                result = inputValue * 100; // 1 dm² = 100 cm²
                break;
            case "dặm²":
                result = inputValue * 0.0001; // 1 dm² = 0.0001 dặm²
                break;
            case "foot²":
                result = inputValue * 0.107639; // 1 dm² = 0.107639 foot²
                break;
            case "hecta":
                result = inputValue *0.000001; // 1 dm² = 0.0001 hecta
                break;
            case "inch²":
                result = inputValue * 15.500031; // 1 dm² = 15.500031 inch²
                break;
            case "km²":
                result = inputValue * 0.00000001; // 1 dm² = 0.00000001 km²
                break;
            case "m²":
                result = inputValue * 0.01; // 1 dm² = 0.01 m²
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "dặm²") {
        switch (toUnit) {
            case "cm²":
                result = inputValue * 25899881100; // 1 dặm² = 10,000 cm²
                break;
            case "dm²":
                result = inputValue * 258998811; // 1 dặm² = 100 dm²
                break;
            case "foot²":
                result = inputValue * 27878400; // 1 dặm² = 1076.39 foot²
                break;
            case "hecta":
                result = inputValue * 258.998811                ; // 1 dặm² = 0.107639 hecta
                break;
            case "inch²":
                result = inputValue * 4014489600
                ; // 1 dặm² = 155,000.31 inch²
                break;
            case "km²":
                result = inputValue * 2.589988; // 1 dặm² = 0.0001 km²
                break;
            case "m²":
                result = inputValue * 2589988.11                ; // 1 dặm² = 100 m²
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "foot²") {
        switch (toUnit) {
            case "cm²":
                result = inputValue * 929.0304; // 1 foot² = 929.0304 cm²
                break;
            case "dm²":
                result = inputValue * 9.290304; // 1 foot² = 9.290304 dm²
                break;
            case "dặm²":
                result = inputValue * 0.000929; // 1 foot² = 0.000929 dặm²
                break;
            case "hecta":
                result = inputValue * 0.000009; // 1 foot² = 0.092903 hecta
                break;
            case "inch²":
                result = inputValue * 144; // 1 foot² = 144 inch²
                break;
            case "km²":
                result = inputValue * 0.00000929; // 1 foot² = 0.00000929 km²
                break;
            case "m²":
                result = inputValue * 0.092903; // 1 foot² = 0.092903 m²
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "hecta") {
        switch (toUnit) {
            case "cm²":
                result = inputValue * 1000000; // 1 hecta = 1,000,000 cm²
                break;
            case "dm²":
                result = inputValue * 1000000; // 1 hecta = 10,000 dm²
                break;
            case "dặm²":
                result = inputValue * 0.003861; // 1 hecta = 9.2903 dặm²
                break;
            case "foot²":
                result = inputValue * 107639.1042                ; // 1 hecta = 107,639.1 foot²
                break;
            case "inch²":
                result = inputValue * 15500031; // 1 hecta = 15,500,031 inch²
                break;
            case "km²":
                result = inputValue * 0.01; // 1 hecta = 0.01 km²
                break;
            case "m²":
                result = inputValue * 10000; // 1 hecta = 10,000 m²
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "inch²") {
        switch (toUnit) {
            case "cm²":
                result = inputValue * 6.4516; // 1 inch² = 6.4516 cm²
                break;
            case "dm²":
                result = inputValue * 0.064516; // 1 inch² = 0.064516 dm²
                break;
            case "dặm²":
                result = inputValue * 0.00000064; // 1 inch² = 0.00000064 dặm²
                break;
            case "foot²":
                result = inputValue * 0.0069444; // 1 inch² = 0.0069444 foot²
                break;
            case "hecta":
                result = inputValue * 0.000000064516; // 1 inch² = 0.000000064516 hecta
                break;
            case "km²":
                result = inputValue * 0.00000000064516; // 1 inch² = 0.00000000064516 km²
                break;
            case "m²":
                result = inputValue * 0.00064516; // 1 inch² = 0.00064516 m²
                break;
            default:
                result = inputValue;
        }
    }   
    if (fromUnit === "km²") {
        switch (toUnit) {
            case "cm²":
                result = inputValue * 10000000000; // 1 km² = 10,000,000,000 cm²
                break;
            case "dm²":
                result = inputValue * 100000000; // 1 km² = 100,000,000 dm²
                break;
            case "dặm²":
                result = inputValue * 0.386102; // 1 km² = 0.386102 dặm²
                break;
            case "foot²":
                result = inputValue * 10763910.4; // 1 km² = 10,763,910.4 foot²
                break;
            case "hecta":
                result = inputValue * 100; // 1 km² = 100 hecta
                break;
            case "inch²":
                result = inputValue * 1550003100; // 1 km² = 1,550,003,100 inch²
                break;
            case "m²":
                result = inputValue * 1000000; // 1 km² = 1,000,000 m²
                break;
            default:
                result = inputValue;
        }
    }   
    if (fromUnit === "m²") {
        switch (toUnit) {
            case "cm²":
                result = inputValue * 10000; // 1 m² = 10,000 cm²
                break;
            case "dm²":
                result = inputValue * 100; // 1 m² = 100 dm²
                break;
            case "dặm²":
                result = inputValue * 0.0001; // 1 m² = 0.0001 dặm²
                break;
            case "foot²":
                result = inputValue * 10.7639; // 1 m² = 10.7639 foot²
                break;
            case "hecta":
                result = inputValue * 0.0001; // 1 m² = 0.0001 hecta
                break;
            case "inch²":
                result = inputValue * 1550.0031; // 1 m² = 1550.0031 inch²
                break;
            case "km²":
                result = inputValue * 0.000001; // 1 m² = 0.000001 km²
                break;
            default:
                result = inputValue;
        }
    }
    document.getElementById("resultArea").innerText = result + " " + toUnit;
}
// Vận Tốc
function convertSpeed() {
    // Lấy giá trị đầu vào và đơn vị ban đầu
    const inputValue = parseFloat(document.getElementById("inputValueSpeed").value);
    const fromUnit = document.getElementById("fromUnitSpeed").value;

    // Lấy đơn vị đích
    const toUnit = document.getElementById("toUnitSpeed").value;

    // Khai báo biến cho kết quả
    let result = 0;

    if (fromUnit === "cmh") {
        switch (toUnit) {
            case "cmp":
                result = inputValue * 0.0166667; // 1 cm/giờ = 0.0166667 cm/phút
                break;
            case "cms":
                result = inputValue * 0.000277778; // 1 cm/giờ = 0.000277778 cm/giây
                break;
            case "kmh":
                result = inputValue * 0.00001                ; // 1 cm/giờ = 0.036 km/giờ
                break;
            case "kmp":
                result = inputValue * 0.0006; // 1 cm/giờ = 0.0006 km/phút
                break;
            case "kms":
                result = inputValue * 0.00001; // 1 cm/giờ = 0.00001 km/giây
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "cmp") {
        switch (toUnit) {
            case "cmh":
                result = inputValue * 60; // 1 cm/phút = 60 cm/giờ
                break;
            case "cms":
                result = inputValue * 0.0166667; // 1 cm/phút = 0.0166667 cm/giây
                break;
            case "kmh":
                result = inputValue * 0.0006; // 1 cm/phút = 0.6 km/giờ
                break;
            case "kmp":
                result = inputValue * 0.00001; // 1 cm/phút = 0.01 km/phút
                break;
            case "kms":
                result = inputValue * 0.000166667; // 1 cm/phút = 0.000166667 km/giây
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "cms") {
        switch (toUnit) {
            case "cmh":
                result = inputValue * 3600; // 1 cm/giây = 3600 cm/giờ
                break;
            case "cmp":
                result = inputValue * 60; // 1 cm/giây = 60 cm/phút
                break;
            case "kmh":
                result = inputValue * 0.036; // 1 cm/giây = 3.6 km/giờ
                break;
            case "kmp":
                result = inputValue * 0.0006; // 1 cm/giây = 0.06 km/phút
                break;
            case "kms":
                result = inputValue * 0.00001; // 1 cm/giây = 0.001 km/giây
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "kmh") {
        switch (toUnit) {
            case "cmh":
                result = inputValue *100000; // 1 km/giờ = 27,777.8 cm/giờ
                break;
            case "cmp":
                result = inputValue * 1666.67; // 1 km/giờ = 1,666.67 cm/phút
                break;
            case "cms":
                result = inputValue * 1666.666667                ; // 1 km/giờ = 277.778 cm/giây
                break;
            case "kmp":
                result = inputValue * 0.016667; // 1 km/giờ = 16.6667 km/phút
                break;
            case "kms":
                result = inputValue *0.000278; // 1 km/giờ = 0.277778 km/giây
                break;
            default:
                result = inputValue;
        }
    }
    if (fromUnit === "kmp") {
        switch (toUnit) {
            case "cmh":
                result = inputValue * 6000000; // 1 km/phút = 100,000 cm/giờ
                break;
            case "cmp":
                result = inputValue * 100000; // 1 km/phút = 6,000 cm/phút
                break;
            case "cms":
                result = inputValue * 1666.666667                ; // 1 km/phút = 100 cm/giây
                break;
            case "kmh":
                result = inputValue * 60; // 1 km/phút = 60 km/giờ
                break;
            case "kms":
                result = inputValue * 0.016667; // 1 km/phút = 0.00166667 km/giây
                break;
            default:
                result = inputValue;
        }
    }   
    if (fromUnit === "kms") {
        switch (toUnit) {
            case "cmh":
                result = inputValue * 360000000; // 1 km/giây = 3,600,000 cm/giờ
                break;
            case "cmp":
                result = inputValue * 6000000; // 1 km/giây = 60,000 cm/phút
                break;
            case "cms":
                result = inputValue * 100000; // 1 km/giây = 1,000 cm/giây
                break;
            case "kmh":
                result = inputValue * 3600; // 1 km/giây = 3,600 km/giờ
                break;
            case "kmp":
                result = inputValue * 60            ; // 1 km/giây = 60 km/phút
                break;
            default:
                result = inputValue;
        }
    }


    document.getElementById("resultSpeed").innerText = result + " " + toUnit;
}





