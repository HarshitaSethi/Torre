/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//alert('here');

//function includeTemplateHtml(id, html) {
//    alert(id);
//    alert(html);
//    $(id).load(html);
//}

$(document).ready(function () {
//$(document).ready(function () {
    var elements = document.getElementsByTagName("*");
    var element, htmlFileName;
    for (var i = 0; i < elements.length; i++) {
        element = elements[i];
        /*search for elements with a certain atrribute:*/
        htmlFileName = element.getAttribute("includeHtml");
        if (htmlFileName) {
            $(element).load(htmlFileName);
        }
    }
});

function numFormatter(num) {
    return Math.abs(num) > 999000 ? Math.sign(num) * ((Math.abs(num) / 1000000).toFixed(1)) + 'M' : Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

function formatCapitalizeAndEndWithS(word) {
    return word.charAt(0).toUpperCase() + word.substring(1) + 's';
}