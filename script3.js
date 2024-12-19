document.addEventListener('DOMContentLoaded', function() {
    const bouncingContainer = document.querySelector('.bouncing-container');
    const bouncingCircle = document.querySelector('.bouncing-circle');
    let posX = bouncingContainer.clientWidth / 2;
    let posY = bouncingContainer.clientHeight / 2;
    let speedX = 5;
    let speedY = 5;

    function moveCircle() {
        // 更新位置
        posX += speedX;
        posY += speedY;

        // 检测与容器边界的碰撞
        if (posX <= 0 || posX >= bouncingContainer.clientWidth - bouncingCircle.clientWidth) {
            speedX = -speedX;
        }
        if (posY <= 0 || posY >= bouncingContainer.clientHeight - bouncingCircle.clientHeight) {
            speedY = -speedY;
        }

        // 移动圆形
        bouncingCircle.style.left = `${posX}px`;
        bouncingCircle.style.top = `${posY}px`;

        // 请求下一帧动画
        requestAnimationFrame(moveCircle);
    }

    // 启动动画
    requestAnimationFrame(moveCircle);
});
