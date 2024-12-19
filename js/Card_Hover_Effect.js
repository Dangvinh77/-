const cards = document.querySelectorAll('.card'); // Chọn tất cả phần tử .card

function adjustFontSize() {
    cards.forEach(card => {
        const content = card.querySelector('.content'); // Chọn .content trong mỗi .card
        const cardWidth = card.offsetWidth;
        const contentWidth = content.offsetWidth;

        let fontSize = 14; // Kích thước font mặc định

        // Điều chỉnh font-size sao cho nó không vượt quá chiều rộng của thẻ card
        if (contentWidth > cardWidth) {
            fontSize = (cardWidth / contentWidth) * 14;
        };

        fontSize = Math.max(8, fontSize); // Giới hạn font-size không nhỏ hơn 10px
        fontSize = Math.min(fontSize, 14); // Giới hạn font-size không lớn hơn 18px
        // Gán kích thước font đã tính toán vào thẻ content
        content.style.fontSize = `${fontSize}px`;
    });
}

// Lắng nghe sự kiện 'resize' khi thay đổi kích thước cửa sổ
window.addEventListener('resize', adjustFontSize);

// Chạy ngay khi trang được tải
window.addEventListener('load', adjustFontSize); g
adjustFontSize();
