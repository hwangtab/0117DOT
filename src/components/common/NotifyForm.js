'use client';

import { useState } from 'react';
import styles from './NotifyForm.module.css';

export default function NotifyForm() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // In a real app, this would send to a backend
            console.log('Email submitted:', email);
            setSubmitted(true);
            setEmail('');
        }
    };

    if (submitted) {
        return (
            <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <p>알림 신청이 완료되었습니다!</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className={styles.input}
                required
            />
            <button type="submit" className="btn btn-primary">
                알림 신청
            </button>
        </form>
    );
}
