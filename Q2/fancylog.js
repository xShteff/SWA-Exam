var displayLog = (selector, text) => {
    var item = $("<li>").text(`'${text}'`);
    $(selector).append(item);
}