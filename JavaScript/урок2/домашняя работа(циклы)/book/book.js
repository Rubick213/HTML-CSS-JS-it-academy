while (true) {

    let bookGenre = prompt('Какой жанр предпочитаете?(1-роман,2-детектив,3-фентази)')
    
    if (bookGenre === null || bookGenre === '') {
        alert('вы ничего не ввели')
        continue;
    } else if (bookGenre > 3 || bookGenre < 1) {
        alert('вы ввели больше либо меньше предлагаемого значения ')
        continue
    } else if (isNaN(bookGenre))  {
        alert('выввели не допустимые символы')
        continue
    } else {
        let literature = confirm('Предпочитаете современную литературу?')
        let author = confirm('Хотели бы книгу русского автора?')
        switch (bookGenre) {
            case '1':
                if (literature && author) {
                    alert(`Предлагаем вам почитать ${'Ночной дозор'}`)
                } else {
                    alert('К сожалению, не смогли подобрать вам книгу')
                    break
                }
                break;

            case '2': 
                if (literature && author) {
                    alert(`Предлагаем вам почитать ${'Ночной дозор'}`)
                } else if (literature && !author) {
                    alert(`Предлагаем вам почитать ${'Ночной дозор'}`)
                } else {
                    alert('К сожалению, не смогли подобрать вам книгу')
                }
                break;

            case '3':
                if (!literature && !author) {
                    alert('Шерлок Холмс')
                } else if (literature && !author) {
                    alert("Девушка в поезде")
                } else {
                    alert('К сожалению, не смогли подобрать вам книгу')
                }
                break;
                default:
                    
        } 
    }
  break
}

