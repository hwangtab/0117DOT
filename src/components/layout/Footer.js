import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Event Info */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>🎭 공연 정보</h3>
                        <div className={styles.eventInfo}>
                            <p className={styles.eventTitle}>새, 나뭇잎, 고양이, 그리고 강</p>
                            <p className={styles.eventMeta}>2026년 1월 17일 (토) 18:00</p>
                            <p className={styles.eventMeta}>수원 DOT (도트)</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>바로가기</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">공연 소개</Link></li>
                            <li><Link href="/artists">아티스트</Link></li>
                            <li><Link href="/venue">장소 안내</Link></li>
                            <li><a href="https://booking.naver.com/booking/5/bizes/1442738/items/7307078?startDateTime=2026-01-17T00%3A00%3A00%2B09%3A00" target="_blank" rel="noopener noreferrer">예매하기</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>문의</h3>
                        <div className={styles.contact}>
                            <p>공연 문의 및 예매</p>
                            <a href="mailto:contact@ggac.kr" className={styles.email}>
                                contact@ggac.kr
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <div className={styles.themes}>
                        <span className={styles.themeIcon} title="새">🐦</span>
                        <span className={styles.themeIcon} title="나뭇잎">🍃</span>
                        <span className={styles.themeIcon} title="고양이">🐱</span>
                        <span className={styles.themeIcon} title="강">🌊</span>
                    </div>
                    <p className={styles.copyright}>
                        © {currentYear} 경기아트콜렉티브 All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
