document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止<a>标签的默认行为
            window.scrollTo({
                top: 0, // 滚动到页面顶部
                behavior: 'smooth' // 平滑滚动
            });
        });
    } else {
        console.error('.back-to-top element not found');
    }
});
