import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: '장소 안내',
    description: '수원 DOT (닷) - 경기 수원시 팔달구 화서문로 32번길 4, B1. 수원 문화의 인큐베이터.',
};

export default function VenuePage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>장소 안내</h1>
                    <p className={styles.subtitle}>수원 DOT (닷)</p>
                </div>
            </section>

            {/* Venue Info */}
            <section className={styles.venueSection}>
                <div className={styles.container}>
                    <div className={styles.venueGrid}>
                        {/* Venue Details */}
                        <div className={styles.venueDetails}>
                            <div className={styles.venueCard}>
                                <h2 className={styles.venueName}>
                                    <span className={styles.venueIcon}>📍</span>
                                    수원 DOT (닷)
                                </h2>
                                <p className={styles.venueDescription}>
                                    수원 문화의 인큐베이터라 불리는 공간 DOT.
                                    화려한 거리의 소음이 잦아드는 건물 지하 1층에서,
                                    취향 짙은 칵테일 향이 감도는 특별한 밤이 펼쳐집니다.
                                </p>

                                <div className={styles.venueInfo}>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>주소</span>
                                        <span className={styles.infoValue}>
                                            경기 수원시 팔달구 화서문로 32번길 4, B1
                                        </span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <span className={styles.infoLabel}>공연 일시</span>
                                        <span className={styles.infoValue}>
                                            2026년 1월 17일 (토) 18:00 - 20:00
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.venueSocial}>
                                    <a
                                        href="https://www.instagram.com/d.o.t_kr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.instagramLink}
                                    >
                                        <span className={styles.instagramIcon}>📷</span>
                                        <span className={styles.instagramText}>@d.o.t_kr</span>
                                    </a>
                                </div>
                            </div>

                            {/* Transportation */}
                            <div className={styles.transportCard}>
                                <h3 className={styles.transportTitle}>🚌 대중교통 안내</h3>
                                <div className={styles.transportList}>
                                    <div className={styles.transportItem}>
                                        <span className={styles.transportType}>🚇 지하철</span>
                                        <p>수원역에서 도보 약 15분 또는 버스 환승</p>
                                    </div>
                                    <div className={styles.transportItem}>
                                        <span className={styles.transportType}>🚌 버스</span>
                                        <p>화서문 정류장 하차 후 도보 3분</p>
                                    </div>
                                </div>
                            </div>

                            {/* Parking */}
                            <div className={styles.transportCard}>
                                <h3 className={styles.transportTitle}>🚗 자차 이용</h3>
                                <div className={styles.transportList}>
                                    <div className={styles.transportItem}>
                                        <span className={styles.transportType}>🅿️ 주차</span>
                                        <p>인근 공영주차장 이용 (행궁동 공영주차장 추천)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className={styles.mapSection}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.7891234567895!2d127.01!3d37.2845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s72M6%2BWH%20%EC%88%98%EC%9B%90%EC%8B%9C%20%EA%B2%BD%EA%B8%B0%EB%8F%84!5e0!3m2!1sko!2skr!4v1703318854000!5m2!1sko!2skr"
                                className={styles.map}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="수원 DOT 위치 (72M6+WH 수원시 경기도)"
                            ></iframe>
                            <div className={styles.mapButtons}>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=72M6%2BWH+수원시+경기도"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mapButton}
                                >
                                    <span className={styles.mapButtonIcon}>🗺️</span>
                                    <span className={styles.mapButtonText}>Google Map</span>
                                </a>
                                <a
                                    href="https://map.kakao.com/link/search/경기 수원시 팔달구 화서문로 32번길 4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mapButton}
                                >
                                    <span className={styles.mapButtonIcon}>📍</span>
                                    <span className={styles.mapButtonText}>카카오맵</span>
                                </a>
                                <a
                                    href="https://map.naver.com/v5/search/경기%20수원시%20팔달구%20화서문로%2032번길%204"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.mapButton}
                                >
                                    <span className={styles.mapButtonIcon}>🧭</span>
                                    <span className={styles.mapButtonText}>네이버 지도</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nearby Section */}
            <section className={styles.nearbySection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>주변 정보</h2>
                    <p className={styles.sectionSubtitle}>
                        공연 전후로 행궁동의 특별한 공간들을 둘러보세요
                    </p>

                    <div className={styles.nearbyGrid}>
                        <div className={styles.nearbyCard}>
                            <span className={styles.nearbyIcon}>☕</span>
                            <h3>행궁동 카페거리</h3>
                            <p>분위기 있는 카페들이 모여 있는 행궁동의 핫플레이스</p>
                        </div>
                        <div className={styles.nearbyCard}>
                            <span className={styles.nearbyIcon}>📚</span>
                            <h3>독립서점</h3>
                            <p>개성 있는 독립서점들에서 특별한 책을 발견해보세요</p>
                        </div>
                        <div className={styles.nearbyCard}>
                            <span className={styles.nearbyIcon}>🏛️</span>
                            <h3>수원화성</h3>
                            <p>유네스코 세계문화유산으로 지정된 아름다운 성곽</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2>공연이 기다려지시나요?</h2>
                        <p>지금 바로 예매하고 특별한 밤을 준비하세요</p>
                        <a href="https://booking.naver.com/booking/5/bizes/1442738/items/7307078?startDateTime=2026-01-17T00%3A00%3A00%2B09%3A00" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            예매하기
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
