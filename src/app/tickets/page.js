import Link from 'next/link';
import styles from './page.module.css';
import NotifyForm from '@/components/common/NotifyForm';

export const metadata = {
    title: '예매 안내',
    description: '새, 나뭇잎, 고양이, 그리고 강 - 2026년 1월 17일 수원 DOT 공연 예매 안내',
};

export default function TicketsPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>예매 안내</h1>
                    <p className={styles.subtitle}>특별한 밤을 위한 준비</p>
                </div>
            </section>

            {/* Ticket Info */}
            <section className={styles.ticketSection}>
                <div className={styles.container}>
                    <div className={styles.ticketCard}>
                        <div className={styles.ticketHeader}>
                            <span className={styles.ticketIcon}>🎫</span>
                            <h2 className={styles.ticketTitle}>공연 티켓</h2>
                        </div>

                        <div className={styles.ticketInfo}>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>공연명</span>
                                <span className={styles.infoValue}>새, 나뭇잎, 고양이, 그리고 강</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>일시</span>
                                <span className={styles.infoValue}>2026년 1월 17일 (토) 18:00 - 20:00</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>장소</span>
                                <span className={styles.infoValue}>수원 DOT (경기 수원시 팔달구 화서문로 32번길 4, B1)</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>러닝타임</span>
                                <span className={styles.infoValue}>120분</span>
                            </div>
                            <div className={styles.infoRow}>
                                <span className={styles.infoLabel}>출연</span>
                                <span className={styles.infoValue}>남수, 여울, 하루살이 프로젝트, 강가히말라야</span>
                            </div>
                        </div>

                        <div className={styles.ticketPrice}>
                            <span className={styles.priceLabel}>티켓 가격</span>
                            <span className={styles.priceValue}>추후 공개</span>
                        </div>

                        <div className={styles.ticketActions}>
                            <button className={`btn btn-primary ${styles.bookButton}`} disabled>
                                예매 준비 중
                            </button>
                            <p className={styles.bookNote}>예매 오픈 시 알림을 받으시려면 아래에 이메일을 남겨주세요</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className={styles.benefitsSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>특별 혜택</h2>

                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitCard}>
                            <span className={styles.benefitIcon}>📖</span>
                            <h3>책갈피 티켓</h3>
                            <p>
                                일반 티켓 대신 특별히 제작된 책갈피 형태의 티켓을 받으실 수 있습니다.
                                앞면에는 공연 정보, 뒷면에는 4팀의 가사 중 한 구절이 인쇄됩니다.
                            </p>
                        </div>
                        <div className={styles.benefitCard}>
                            <span className={styles.benefitIcon}>🍹</span>
                            <h3>테마 칵테일</h3>
                            <p>
                                공연 당일 한정으로 각 아티스트의 테마에 맞춘
                                시그니처 칵테일을 특별 가격에 즐기실 수 있습니다.
                            </p>
                        </div>
                        <div className={styles.benefitCard}>
                            <span className={styles.benefitIcon}>✨</span>
                            <h3>현장 이벤트</h3>
                            <p>
                                입장 시 작은 메모지에 나의 이야기를 적어주세요.
                                공연 중간에 아티스트가 직접 읽어드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notification Section */}
            <section className={styles.notifySection}>
                <div className={styles.container}>
                    <div className={styles.notifyCard}>
                        <h2 className={styles.notifyTitle}>🔔 예매 오픈 알림 신청</h2>
                        <p className={styles.notifyDescription}>
                            예매 오픈 시 가장 먼저 알림을 받아보세요
                        </p>

                        <NotifyForm />

                        <p className={styles.notifyNote}>
                            * 입력하신 이메일은 예매 오픈 알림 용도로만 사용됩니다
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faqSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>자주 묻는 질문</h2>

                    <div className={styles.faqList}>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>예매는 어디서 할 수 있나요?</h3>
                            <p className={styles.faqAnswer}>
                                예매 오픈 시 네이버 예약 또는 공식 채널을 통해 예매하실 수 있습니다.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>좌석 지정이 가능한가요?</h3>
                            <p className={styles.faqAnswer}>
                                본 공연은 스탠딩/자유석으로 진행됩니다. 선착순 입장이니 일찍 도착해주세요.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>주차가 가능한가요?</h3>
                            <p className={styles.faqAnswer}>
                                공연장 자체 주차장은 없으나, 인근 행궁동 공영주차장을 이용하실 수 있습니다.
                                대중교통 이용을 권장드립니다.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>취소 및 환불 규정은 어떻게 되나요?</h3>
                            <p className={styles.faqAnswer}>
                                예매 오픈 시 상세한 취소/환불 규정을 안내드릴 예정입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
