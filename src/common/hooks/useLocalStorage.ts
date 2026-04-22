
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T) {
    // 1. Инициализация: берем из стораджа или ставим дефолт
    const [value, setValue] = useState<T>(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
    });

    // 2. Автоматическое сохранение при каждом изменении value
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}