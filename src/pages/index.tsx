
import { useRouter } from 'next/router';
import { Button } from '@medusajs/ui';

export default function Home() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-3xl font-bold">Welcome to the RPG</h1>
            <Button onClick={() => router.push('/game')} variant="primary" className="mt-4">
                Start Game
            </Button>
        </div>
    );
}
