const gateBtn = document.getElementById('gate-btn');

gateBtn.addEventListener('click', () => {

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'black';
    overlay.style.zIndex = '9999';

    overlay.innerHTML = `
        <video id="rickroll-video" width="100%" height="100%" autoplay>
            <source src="assets/rickroll.mp4" type="video/mp4">
        </video>
    `;

    document.body.appendChild(overlay);

    const video = document.getElementById('rickroll-video');
    video.play();
});