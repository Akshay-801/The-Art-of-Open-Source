const gateBtn = document.getElementById('gate-btn');

gateBtn.addEventListener('click', () => {
    // 1. Create the Stark HUD Overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    `;

    // 2. Insert Video with Jarvis UI feel
    // Adding 'playsinline' for better mobile support
    overlay.innerHTML = `
        <div id="hud-frame" style="position: absolute; width: 100%; height: 100%; border: 20px solid rgba(0, 212, 255, 0.1); pointer-events: none; z-index: 10000; box-sizing: border-box;"></div>
        <video id="suit-up-video" width="100%" height="100%" style="object-fit: cover;">
            <source src="assets/ironman.mp4" type="video/mp4">
            Your browser does not support the Stark HUD.
        </video>
        <div id="exit-suit" style="position: absolute; top: 30px; right: 30px; color: #00d4ff; font-family: monospace; cursor: pointer; z-index: 10001; font-weight: bold;">[ ESCAPE_SUIT ]</div>
    `;

    document.body.appendChild(overlay);

    const video = document.getElementById('suit-up-video');
    const exitBtn = document.getElementById('exit-suit');

    // 3. Initiate Protocol
    video.play().catch(error => {
        console.log("J.A.R.V.I.S. needs a manual override (Click anywhere to play)");
    });

    // 4. Auto-remove when video ends OR on exit click
    const closeSuit = () => {
        overlay.style.transition = 'opacity 0.5s';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
    };

    video.onended = closeSuit;
    exitBtn.onclick = closeSuit;
});