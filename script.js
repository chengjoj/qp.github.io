document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.querySelector('.back-to-top');
    
    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止<a>标签的默认行为
        window.scrollTo({
            top: 0, // 滚动到页面顶部
            behavior: 'smooth' // 平滑滚动
        });
    });
});
