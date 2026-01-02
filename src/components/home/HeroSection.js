import Link from 'next/link';
import styles from './HeroSection.module.css';
import CountdownTimer from './CountdownTimer';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            {/* Background Effects */}
            <div className={styles.backgroundEffects}>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
                <div className={styles.gradientOrb3}></div>
                <div className={styles.gradientOrb4}></div>
            </div>

            <div className={styles.container}>
                {/* Theme Icons */}
                <div className={styles.themeIcons}>
                    <span className={`${styles.themeIcon} ${styles.bird}`}>🐦</span>
                    <span className={`${styles.themeIcon} ${styles.leaf}`}>🍃</span>
                    <span className={`${styles.themeIcon} ${styles.cat}`}>🐱</span>
                    <span className={`${styles.themeIcon} ${styles.river}`}>🌊</span>
                </div>

                {/* Main Title */}
                <h1 className={styles.title}>
                    <span className={styles.titleLine}>새, 나뭇잎,</span>
                    <span className={styles.titleLine}>고양이, 그리고 강</span>
                </h1>

                {/* Subtitle */}
                <p className={styles.subtitle}>
                    네 가지 감각이 흐르는 지하의 밤
                </p>

                {/* Event Info */}
                <div className={styles.eventInfo}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>📅</span>
                        <span>2026년 1월 17일 (토)</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>🕕</span>
                        <span>18:00 - 20:00</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcon}>📍</span>
                        <span>수원 DOT (도트)</span>
                    </div>
                </div>

                {/* Countdown */}
                <div className={styles.countdownWrapper}>
                    <p className={styles.countdownLabel}>공연까지 남은 시간</p>
                    <CountdownTimer targetDate="2026-01-17T18:00:00+09:00" />
                </div>

                {/* CTA Buttons */}
                <div className={styles.ctaButtons}>
                    <a href="https://booking.naver.com/booking/5/bizes/1442738/items/7307078?startDateTime=2026-01-17T00%3A00%3A00%2B09%3A00" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ctaPrimary}`}>
                        예매하기
                    </a>
                    <Link href="/about" className={`btn btn-secondary ${styles.ctaSecondary}`}>
                        공연 알아보기
                    </Link>
                </div>

                {/* Artists Preview */}
                <div className={styles.artistsPreview}>
                    <p className={styles.artistsLabel}>출연</p>
                    <div className={styles.artistNames}>
                        <span>남수</span>
                        <span className={styles.dot}>·</span>
                        <span>여울</span>
                        <span className={styles.dot}>·</span>
                        <span>하루살이 프로젝트</span>
                        <span className={styles.dot}>·</span>
                        <span>강가히말라야</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>스크롤하여 더 알아보기</span>
                <div className={styles.scrollArrow}>↓</div>
            </div>
        </section>
    );
}
