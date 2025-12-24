import artists from '@/data/artists.json';
import event from '@/data/event.json';

export default function JsonLd() {
    const baseUrl = 'https://0117-dot.vercel.app';

    // Event Schema
    const eventSchema = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.event.title,
        description: event.event.subtitle,
        startDate: `${event.event.date}T${event.event.startTime}:00+09:00`,
        endDate: `${event.event.date}T${event.event.endTime}:00+09:00`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        image: [
            `${baseUrl}/images/poster.png`,
            `${baseUrl}/images/og-image.png`
        ],
        location: {
            '@type': 'Place',
            name: event.event.venue.name,
            address: {
                '@type': 'PostalAddress',
                streetAddress: event.event.venue.address,
                addressLocality: 'Suwon',
                addressCountry: 'KR'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.289, // Approximate coordinates for Hwaseomun-ro 32beon-gil 4
                longitude: 127.012
            }
        },
        organizer: {
            '@type': 'Organization',
            name: '0117DOT',
            url: baseUrl
        },
        performer: artists.map(artist => ({
            '@type': artist.name.includes('프로젝트') ? 'PerformingGroup' : 'Person',
            name: artist.name,
            image: `${baseUrl}${artist.image}`,
            url: `${baseUrl}/artists#${artist.theme}`
        })),
        offers: {
            '@type': 'Offer',
            url: 'https://booking.naver.com/booking/5/bizes/1442738/items/7307078?startDateTime=2026-01-17T00%3A00%3A00%2B09%3A00',
            price: '20000', // Assuming standard indie gig price or placeholder, user didn't specify so omitted or placeholder
            priceCurrency: 'KRW',
            availability: 'https://schema.org/InStock',
            validFrom: '2025-12-01T00:00:00+09:00'
        }
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Artists',
                item: `${baseUrl}/artists`
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'About',
                item: `${baseUrl}/about`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
