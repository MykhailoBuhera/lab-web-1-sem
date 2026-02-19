const element = document.querySelector('#myElement');


element.addEventListener('dblclick', function(event) {

    alert('Бугера М.О');
    
    event.preventDefault();
});
