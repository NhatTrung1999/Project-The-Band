const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

// Hàm hiển thị modal mua vé (thêm class modal-open vào modal)
function showBuyTickets() {
    modal.classList.add('modal-open')
}

// Hàm hiển thị modal mua vé (gỡ bỏ class modal-open của modal)
function hideBuyTickets() {
    modal.classList.remove('modal-open')
}

// Lặp qua từng thẻ button và nghe hành vi click
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

// Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})