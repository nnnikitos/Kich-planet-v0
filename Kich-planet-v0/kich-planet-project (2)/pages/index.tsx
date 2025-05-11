import { Scene3D } from '../components/Scene3D';
import { useEffect } from 'react';
import { initTelegram } from '../lib/telegram';
import { usePlayer, availableUpgrades } from '../lib/store';
import { supabase } from '../lib/supabase';

export default function HomePage() {
  const { balance, upgrades, purchaseUpgrade, setPlayer, loadNeighbors } = usePlayer();

  useEffect(() => {
    initTelegram();
    const id = 'user-' + Math.random().toString(36).substr(2, 9);
    setPlayer({
      id,
      username: 'новый игрок',
      avatar: '',
    });
    loadNeighbors();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="p-4 bg-white shadow-md z-10">
        <h1 className="text-xl font-bold">KICH Planet</h1>
        <p>Баланс: {balance} KICH</p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {availableUpgrades.map((u) => {
            const level = upgrades[u.id] || 0;
            const cost = u.baseCost * (level + 1);
            const maxed = level >= u.maxLevel;
            return (
              <button
                key={u.id}
                onClick={() => purchaseUpgrade(u.id)}
                disabled={maxed || balance < cost}
                className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                {u.name} (Ур. {level}/{u.maxLevel}) — {cost} KICH
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex-1">
        <Scene3D />
      </div>
    </div>
  );
}
