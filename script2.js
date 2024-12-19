document.addEventListener('DOMContentLoaded', function() {
    var timelineTitles = document.querySelectorAll('.timeline-title');

    timelineTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
