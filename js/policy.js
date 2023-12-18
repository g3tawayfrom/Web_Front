document.addEventListener('DOMContentLoaded', function () {
    const policyButton = document.getElementById('policy_button');

    policyButton.addEventListener('click', showRegistrationForm);

    function showRegistrationForm() {
        var template1 = document.getElementById('artTemplate').content.cloneNode(true);

        template1.getElementById('art_h2').textContent = 'Покупка товара';
        template1.getElementById('art_p').textContent = 'Мы выступаем посредниками при совершение сделок ' +
            'между пользователями-покупателями и пользователями-продавцами, ' +
            'проведшеми предварительную аутентификацию и сертификацию. ' +
            'Мы постоянно находимся на связи с обеими сторонами сделки ' +
            'и помогаем урегулировать спорные ситуации в случае их возникновения.';

        var template2 = document.getElementById('artTemplate').content.cloneNode(true);

        template2.getElementById('art_h2').textContent = 'Возврат товара';
        template2.getElementById('art_p').textContent = 'Возврат товара не предусмотрен на сайте в рядовых ситуация,' +
            ' однако в случае невыполнения обязательств с одной из сторон сделки,' +
            ' вторая может обратиться по каналу обратной связи к администрации сайта' +
            ' и востребовать, например, возврат средств.';

        var templateHTML = document.createElement('div');
        templateHTML.classList.add('swal2-html-container');
        templateHTML.appendChild(template1);
        templateHTML.appendChild(template2);

        //выпадение модального окна
        Swal.fire({
            title: 'Политика продаж',
            html:
                '<p class="popup_inner1">Здесь вы можете ознакомиться с политикой нашей компании ' +
                'в отношении происходящих на платформе сделок</p>' +
                templateHTML.innerHTML,
            confirmButtonText: "Понял",
            confirmButtonColor: "#113f67",
        });
    }
});