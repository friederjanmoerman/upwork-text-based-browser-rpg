
import { useGameStore } from '../context/gameStore';
import { Button } from '@medusajs/ui';

export default function Game() {
    const { playerName, setPlayerName } = useGameStore();

    return (
        <div className="p-5">
            <h1 className="text-xl">Player: {playerName || "Unknown"}</h1>
            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setPlayerName(e.target.value)}
                className="border p-2 rounded"
            />
            <Button variant="primary" className="mt-4">Continue</Button>
        </div>
    );
}
