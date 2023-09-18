function button_title(buttonNumber) {
    var textElement = document.getElementById('text' + buttonNumber);
    var panelElement = document.getElementById('panel_for_text' + buttonNumber);
    if (panelElement.style.opacity === '0' || panelElement.style.opacity === '' || textElement.style.maxWidth === '0px' || textElement.style.maxWidth === '') {
        panelElement.style.display = 'block';
        setTimeout(function() {
            textElement.style.maxWidth = '200px'; // Плавное появление текста после задержки
        }, 300);
        setTimeout(function () {
            panelElement.style.opacity = '1'; // Показываем панель
        }, 50); 
        setTimeout(function () {
            textElement.style.opacity = '1'; // Задержка для плавного появления текста
        }, 500); 
    } else {
        textElement.style.opacity = '0'; // Скрываем текст
        setTimeout(function () {
            panelElement.style.opacity = '0'; // Скрываем панель после скрытия текста
        }, 800); // Задержка для плавного исчезновения панели
        setTimeout(function () {
            panelElement.style.display = 'none'; // Скрываем панель после завершения анимации
        }, 1000); // Задержка для скрытия панели
        textElement.style.maxWidth = '0px';
    }
}
