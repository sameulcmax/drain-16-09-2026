import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Drain Solutions Plus | Drain & Sewer Services NJ',
  description: 'Contact Drain Solutions Plus in Hawthorne, NJ for commercial and residential drain cleaning, sewer services, repairs and emergency service across Northern NJ.',
  keywords: [
    'contact Drain Solutions Plus',
    'drain cleaning NJ',
    'sewer cleaning NJ',
    'commercial drain cleaning NJ',
    'sewer repair NJ',
    'emergency drain service NJ',
    'plumber Hawthorne NJ',
    'drain service Northern NJ',
  ],
  authors: [{ name: 'Drain Solutions Plus' }],
  referrer: 'strict-origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#ffffff',
  alternates: {
    canonical: 'https://www.drainsolutionplus.com/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.drainsolutionplus.com/contact',
    title: 'Contact Drain Solutions Plus | Drain & Sewer Services NJ',
    description: 'Contact Drain Solutions Plus in Hawthorne, NJ for commercial and residential drain, sewer, repair and emergency services throughout Northern New Jersey.',
    siteName: 'Drain Solutions Plus',
    images: [
      {
        url: 'https://www.drainsolutionplus.com/images/drain-solutions-plus-contact.jpg',
        alt: 'Contact Drain Solutions Plus for drain and sewer services in Northern New Jersey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Drain Solutions Plus | Drain & Sewer Services NJ',
    description: 'Contact Drain Solutions Plus in Hawthorne, NJ for commercial and residential drain, sewer, repair and emergency services across Northern NJ.',
    images: ['https://www.drainsolutionplus.com/images/drain-solutions-plus-contact.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://www.drainsolutionplus.com/contact#contactpage',
        'url': 'https://www.drainsolutionplus.com/contact',
        'name': 'Contact Drain Solutions Plus | Drain & Sewer Services NJ',
        'description': 'Contact Drain Solutions Plus in Hawthorne, New Jersey for commercial and residential drain, sewer, repair and emergency services throughout Northern New Jersey.',
        'isPartOf': {
          '@id': 'https://www.drainsolutionplus.com/#website',
        },
        'about': {
          '@id': 'https://www.drainsolutionplus.com/#business',
        },
        'mainEntity': {
          '@id': 'https://www.drainsolutionplus.com/contact#contact-point',
        },
        'inLanguage': 'en-US',
      },
      {
        '@type': 'ContactPoint',
        '@id': 'https://www.drainsolutionplus.com/contact#contact-point',
        'contactType': 'customer service',
        'url': 'https://www.drainsolutionplus.com/contact',
        'availableLanguage': ['English'],
        'areaServed': [
          {
            '@type': 'AdministrativeArea',
            'name': 'Bergen County, New Jersey',
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Essex County, New Jersey',
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Hudson County, New Jersey',
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Passaic County, New Jersey',
          },
        ],
      },
      {
        '@type': 'Plumber',
        '@id': 'https://www.drainsolutionplus.com/#business',
        'name': 'Drain Solutions Plus',
        'url': 'https://www.drainsolutionplus.com/',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Hawthorne',
          'addressRegion': 'NJ',
          'addressCountry': 'US',
        },
        'areaServed': [
          {
            '@type': 'AdministrativeArea',
            'name': 'Bergen County, New Jersey',
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Essex County, New Jersey',
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Hudson County, New Jersey',
          },
          {
            '@type': 'AdministrativeArea',
            'name': 'Passaic County, New Jersey',
          },
        ],
        'knowsAbout': [
          'Drain cleaning',
          'Sewer cleaning',
          'Sewer line repair',
          'Sewer camera inspection',
          'Commercial drain cleaning',
          'Commercial sewer cleaning',
          'Toilet repair',
          'Faucet and leak repair',
          'Frozen pipe repair',
          'Emergency drain service',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.drainsolutionplus.com/contact#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.drainsolutionplus.com/',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Contact',
            'item': 'https://www.drainsolutionplus.com/contact',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.drainsolutionplus.com/#website',
        'url': 'https://www.drainsolutionplus.com/',
        'name': 'Drain Solutions Plus',
        'publisher': {
          '@id': 'https://www.drainsolutionplus.com/#business',
        },
        'inLanguage': 'en-US',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}