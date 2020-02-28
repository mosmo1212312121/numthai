convertNumberToThai = (value) => {
    let text=""
    for (var i = 0; i < value.length; i++) {
        switch (value[i]) {
            case "0":
                text += "๐";
                break;
            case "1":
                text += "๑";
                break;
            case "2":
                text += "๒";
                break;
            case "3":
                text += "๓";
                break;
            case "4":
                text += "๔";
                break;
            case "5":
                text += "๕";
                break;
            case "6":
                text += "๖";
                break;
            case "7":
                text += "๗";
                break;
            case "8":
                text += "๘";
                break;
            case "9":
                text += "๙";
                break;
            default:
                text += value[i];
        }
    }
    return text
}
module.exports = {
    convertNumberToThai
}