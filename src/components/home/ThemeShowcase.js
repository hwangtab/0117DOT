import Link from 'next/link';
import styles from './ThemeShowcase.module.css';

const themes = [
    {
        id: 'bird',
        icon: '🐦',
        title: '새',
        titleEn: 'The Bird',
        artist: '남수',
        description: '감각을 깨우는 자유로운 비상',
        color: 'gold',
    },
    {
        id: 'leaf',
        icon: '🍃',
        title: '나뭇잎',
        titleEn: 'The Leaf',
        artist: '여울',
        description: '감성을 건드리는 부드러운 흔들림',
        color: 'emerald',
    },
    {
        id: 'cat',
        icon: '🐱',
        title: '고양이',
        titleEn: 'The Cat',
        artist: '하루살이 프로젝트',
        description: '예측할 수 없는 자유로움과 유쾌한 균열',
        color: 'coral',
    },
    {
        id: 'river',
        icon: '🌊',
        title: '강',
        titleEn: 'The River',
        artist: '강가히말라야',
        description: '모든 것을 포용하고 정화하는 영적인 마무리',
        color: 'aqua',
    },
];

export default function ThemeShowcase() {
    return (
        <section className={styles.showcase}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>네 가지 감각의 여정</h2>
                    <p className={styles.subtitle}>
                        서로 다른 결을 가진 네 팀의 아티스트가 저마다의 언어로 당신의 밤을 채웁니다
                    </p>
                </div>

                <div className={styles.grid}>
                    {themes.map((theme, index) => (
                        <Link
                            href={`/artists#${theme.id}`}
                            key={theme.id}
                            className={`${styles.card} ${styles[theme.color]}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardIcon}>{theme.icon}</div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardTitles}>
                                    <h3 className={styles.cardTitle}>{theme.title}</h3>
                                    <span className={styles.cardTitleEn}>{theme.titleEn}</span>
                                </div>
                                <p className={styles.cardArtist}>{theme.artist}</p>
                                <p className={styles.cardDescription}>{theme.description}</p>
                            </div>
                            <div className={styles.cardArrow}>→</div>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/about" className="btn btn-secondary">
                        공연 스토리 자세히 보기
                    </Link>
                </div>
            </div>
        </section>
    );
}
