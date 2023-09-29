// https://github.com/jayanthbabu123/how-to-convert-html-web-pages-to-pdf-in-javascript
// https://ekoopmans.github.io/html2pdf.js/
// https://html2canvas.hertzen.com/configuration
// https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
// https://github.com/jayanthbabu123/how-to-convert-html-web-pages-to-pdf-in-javascript


window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: [10,0,10,0],
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.95 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}