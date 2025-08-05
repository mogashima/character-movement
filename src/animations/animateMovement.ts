import type { Player } from '../materials/Player';

export function animateMovement(
    player: Player,
    path: { x: number; y: number }[],
    onUpdate: () => void,
    onComplete?: () => void,
    stepDuration = 200  // 1マス移動にかけるミリ秒（デフォルト200ms）
) {
    let i = 0;

    function step() {
        if (i < path.length) {
            player.moveTo(path[i].x, path[i].y);
            onUpdate();
            i++;
            setTimeout(step, stepDuration);
        } else {
            if (onComplete) onComplete();
        }
    }

    step();
}
