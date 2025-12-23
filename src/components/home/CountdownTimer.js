'use client';

import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

export default function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = () => {
            const difference = new Date(targetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!mounted) {
        return (
            <div className={styles.countdown}>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>--</span>
                    <span className={styles.label}>일</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>--</span>
                    <span className={styles.label}>시간</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>--</span>
                    <span className={styles.label}>분</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeUnit}>
                    <span className={styles.number}>--</span>
                    <span className={styles.label}>초</span>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.countdown}>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{String(timeLeft.days).padStart(2, '0')}</span>
                <span className={styles.label}>일</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className={styles.label}>시간</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className={styles.label}>분</span>
            </div>
            <span className={styles.separator}>:</span>
            <div className={styles.timeUnit}>
                <span className={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className={styles.label}>초</span>
            </div>
        </div>
    );
}
