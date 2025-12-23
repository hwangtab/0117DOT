import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import artists from '@/data/artists.json';

export const metadata = {
    title: '아티스트',
    description: '남수, 여울, 하루살이 프로젝트, 강가히말라야 - 서로 다른 결을 가진 네 팀의 아티스트를 만나보세요.',
};

// 아티스트 이미지 경로 매핑
const getArtistImagePath = (artistName) => {
    const imageMap = {
        '남수': '/images/남수.png',
        '여울': '/images/여울.png',
        '하루살이 프로젝트': '/images/하루살이 프로젝트.png',
        '강가히말라야': '/images/강가히말라야.png'
    };
    return imageMap[artistName] || `/images/${artistName}.png`;
};

export default function ArtistsPage() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>아티스트</h1>
                    <p className={styles.subtitle}>서로 다른 결을 가진 네 팀의 아티스트</p>
                </div>
            </section>

            {/* Artists Grid */}
            <section className={styles.artistsSection}>
                <div className={styles.container}>
                    <div className={styles.artistsGrid}>
                        {artists.map((artist) => (
                            <article
                                key={artist.id}
                                id={artist.theme}
                                className={`${styles.artistCard} ${styles[artist.themeColor]}`}
                            >
                                <div className={styles.artistHeader}>
                                    <div className={styles.artistIcon}>{artist.themeIcon}</div>
                                    <div className={styles.artistTheme}>
                                        <span className={styles.themeLabel}>{artist.themeLabel}</span>
                                        <span className={styles.themeDivider}>·</span>
                                        <span className={styles.themeValue}>{artist.theme}</span>
                                    </div>
                                </div>

                                <div className={styles.artistImage}>
                                    {artist.social ? (
                                        <a
                                            href={artist.social}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.imageLink}
                                        >
                                            <Image
                                                src={getArtistImagePath(artist.name)}
                                                alt={`${artist.name} - ${artist.nameEn}`}
                                                width={1280}
                                                height={854}
                                                unoptimized
                                                className={styles.image}
                                            />
                                        </a>
                                    ) : (
                                        <Image
                                            src={getArtistImagePath(artist.name)}
                                            alt={`${artist.name} - ${artist.nameEn}`}
                                            width={1280}
                                            height={854}
                                            unoptimized
                                            className={styles.image}
                                        />
                                    )}
                                </div>

                                {artist.youtube && (
                                    <div className={styles.artistVideo}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${artist.youtube}`}
                                            title={`${artist.name} YouTube Video`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className={styles.videoIframe}
                                        ></iframe>
                                    </div>
                                )}

                                <div className={styles.artistContent}>
                                    <h2 className={styles.artistName}>
                                        {artist.name}
                                        <span className={styles.artistNameEn}>{artist.nameEn}</span>
                                    </h2>

                                    <p className={styles.artistTagline}>"{artist.tagline}"</p>

                                    <div className={styles.artistMeta}>
                                        <div className={styles.metaItem}>
                                            <span className={styles.metaLabel}>Genre</span>
                                            <span className={styles.metaValue}>{artist.genre.join(', ')}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <span className={styles.metaLabel}>Vibe</span>
                                            <div className={styles.vibes}>
                                                {artist.vibe.map((v) => (
                                                    <span key={v} className={styles.vibe}>{v}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className={styles.artistDescription}>{artist.description}</p>
                                    <p className={styles.artistLongDescription}>{artist.longDescription}</p>

                                    {artist.album && (
                                        <div className={styles.artistAlbum}>
                                            <span className={styles.albumLabel}>Album</span>
                                            <span className={styles.albumName}>{artist.album}</span>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
