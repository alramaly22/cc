function printInvoice(){
    window.print();
}
// script.js
document.addEventListener("DOMContentLoaded", function () {
    // الحصول على عنصر الـ div بواسطة معرفه
    var invoiceDateContainer = document.getElementById("invoiceDateContainer");

    // الحصول على تاريخ اليوم
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // يتم إضافة واحد إلى الشهر لأن الأشهر تبدأ من 0
    var yyyy = today.getFullYear();

    // تجميع التاريخ
    var currentDate = dd + '/' + mm + '/' + yyyy;

    // تحديث نص العنصر div بالتاريخ الحالي
    invoiceDateContainer.innerHTML = '<p><span class="text-bold">Date:</span> ' + currentDate + '</p>';
});

function displayUserName() {
    var userNameInput = document.getElementById("UserName");
    var userNameValue = userNameInput.value;

    alert("User Name entered: " + userNameValue);
    // يمكنك استخدام console.log(userNameValue); بدلاً من alert() إذا أردت طباعة القيمة في وحدة التحكم.
}
