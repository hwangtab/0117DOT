import Image from 'next/image';
import styles from './page.module.css';
import eventData from '@/data/event.json';

export const metadata = {
    title: '공연 소개',
    description: '새, 나뭇잎, 고양이, 그리고 강 - 서로 다른 네 가지 감각이 공명하는 지하의 밤. 옴니버스 스토리텔링과 살롱 콘서트의 만남.',
    alternates: {
        canonical: '/about',
    },
};

const chapters = eventData.chapters;

export default function AboutPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>공연 소개</h1>
                    <p className={styles.subtitle}>서로 다른 네 가지 감각이 공명하는 지하의 밤</p>
                </div>
            </section>

            {/* Poster Section */}
            <section className={styles.posterSection}>
                <div className={styles.container}>
                    <div className={styles.posterWrapper}>
                        <Image
                            src="/images/poster.png"
                            alt="새, 나뭇잎, 고양이, 그리고 강 공연 포스터"
                            width={1080}
                            height={1350}
                            unoptimized
                            className={styles.poster}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.introContent}>
                        <p className={styles.introText}>
                            2026년 1월 17일 토요일, 차가운 겨울바람이 머무는 수원 화서문로.
                            화려한 거리의 소음이 잦아드는 건물 지하 1층에 비밀스러운 문이 하나 열립니다.
                        </p>
                        <p className={styles.introText}>
                            수원 문화의 인큐베이터라 불리는 공간 <strong>DOT (도트)</strong>에서,
                            우리는 일상의 궤도를 벗어나 전혀 다른 네 가지 세계로의 여행을 떠나려 합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className={styles.journey}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>감각의 여정</h2>
                    <p className={styles.sectionSubtitle}>
                        가장 정적인 기록에서 시작해, 자연의 섬세한 떨림과 생의 톡톡 튀는 변주를 지나, 영원한 흐름에 닿기까지
                    </p>

                    <div className={styles.journeyFlow}>
                        {chapters.map((chapter, index) => (
                            <div key={chapter.number} className={styles.journeyItem}>
                                <div className={styles.journeyNumber}>Chapter {chapter.number}</div>
                                <div className={styles.journeyIcon}>
                                    {chapter.theme === '새' && '🐦'}
                                    {chapter.theme === '나뭇잎' && '🍃'}
                                    {chapter.theme === '고양이' && '🐱'}
                                    {chapter.theme === '강' && '🌊'}
                                </div>
                                <h3 className={styles.journeyTitle}>
                                    {chapter.theme} <span>({chapter.themeEn})</span>
                                </h3>
                                <p className={styles.journeyArtist}>{chapter.artist}</p>
                                <p className={styles.journeyConcept}>{chapter.concept}</p>
                                <p className={styles.journeyDescription}>{chapter.description}</p>
                                <div className={styles.journeyKeywords}>
                                    {chapter.keywords.map((keyword) => (
                                        <span key={keyword} className={styles.keyword}>#{keyword}</span>
                                    ))}
                                </div>
                                {index < chapters.length - 1 && (
                                    <div className={styles.journeyConnector}>↓</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={styles.timeline}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>타임테이블</h2>
                    <p className={styles.sectionSubtitle}>2026년 1월 17일 (토) 18:00 - 20:00</p>

                    <div className={styles.timelineGrid}>
                        {eventData.schedule.performance.filter(item => item.type === 'act' || item.type === 'opening' || item.type === 'closing').map((item, index) => (
                            <div key={index} className={styles.timelineItem}>
                                <div className={styles.timelineTime}>{item.time}</div>
                                <div className={styles.timelineContent}>
                                    {item.type === 'opening' && (
                                        <>
                                            <div className={styles.timelineLabel}>Opening</div>
                                            <p>{item.content}</p>
                                        </>
                                    )}
                                    {item.type === 'act' && (
                                        <>
                                            <div className={styles.timelineLabel}>
                                                Chapter {item.chapter}. {item.theme}
                                            </div>
                                            <h4 className={styles.timelineArtist}>{item.artist}</h4>
                                        </>
                                    )}
                                    {item.type === 'closing' && (
                                        <>
                                            <div className={styles.timelineLabel}>Closing</div>
                                            <p>{item.content}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className={styles.experience}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>특별한 경험</h2>

                    <div className={styles.experienceGrid}>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceIcon}>🎫</div>
                            <h3>책갈피 티켓</h3>
                            <p>일반 티켓 대신 책갈피 형태의 특별 티켓을 제작합니다. 앞면에는 공연 정보, 뒷면에는 4팀의 가사 중 한 구절이 인쇄됩니다.</p>
                            <div className={styles.ticketDetails}>
                                <div className={styles.detailItem}>
                                    <strong>📖 추억을 꽂아두세요</strong>
                                    <span className={styles.detailText}>관객의 일상이라는 책에 꽂아두는 특별한 기억. 공연이 끝난 후에도 당신의 책 속에서 그날의 감동이 함께할 것입니다.</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <strong>✨ 4가지 버전 중 랜덤</strong>
                                    <span className={styles.detailText}>새, 나뭇잎, 고양이, 강을 상징하는 4가지 디자인 중 하나를 받으실 수 있습니다.</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceIcon}>🍸</div>
                            <h3>테마 칵테일</h3>
                            <p>공연 당일 한정으로 공연의 테마를 담은 시그니처 칵테일을 만나보세요.</p>
                            <div className={styles.cocktails}>
                                <div className={styles.cocktailItem}>
                                    <span className={styles.cocktailName}>🍸 나뭇잎 문 고양이</span>
                                    <span className={styles.cocktailDesc}>싱그러운 숲의 향기와 고양이의 톡톡 튀는 발걸음을 섞은 칵테일</span>
                                </div>
                                <div className={styles.cocktailItem}>
                                    <span className={styles.cocktailName}>🍹 강 위를 나는 새</span>
                                    <span className={styles.cocktailDesc}>푸른 물결의 깊이와 자유로운 비상의 맛을 담은 시그니처 칵테일</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.experienceCard}>
                            <div className={styles.experienceIcon}>✍️</div>
                            <h3>당신의 문장을 남겨주세요</h3>
                            <p>입장 시 작은 메모지에 요즘 나를 흔들리게 하는 것이나 버리고 싶은 고민을 적어주세요. 공연 중간에 아티스트가 몇 개를 뽑아 읽어드립니다.</p>
                            <div className={styles.messageDetails}>
                                <div className={styles.detailItem}>
                                    <strong>🍃 나뭇잎에 실어</strong>
                                    <span className={styles.detailText}>요즘 나를 흔들리게 하는 것, 혹은 버드나무 가지에 걸어두고 싶은 고민을 적어주세요.</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <strong>🌊 강물에 띄워</strong>
                                    <span className={styles.detailText}>아티스트가 읽어드린 문장은 공연 후 강물에 흘려보내듯 함께 놓아드립니다.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
