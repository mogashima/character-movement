import type { Player } from './materials/Player';

export function animateMovement(player: Player, path: { x: number; y: number }[], onUpdate: () => void, onComplete?: () => void) {
    let i = 0;

    function step() {
        if (i < path.length) {
            player.moveTo(path[i].x, path[i].y);
            onUpdate();
            i++;
            requestAnimationFrame(step);
        } else {
            if (onComplete) onComplete();
        }
    }

    step();
}
