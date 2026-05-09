/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import appCss from '@/assets/index.css?url'
import PageBackground from '@/components/PageBackground'
import NotFoundPage from '@/pages/404'

export const Route = createRootRoute({
  head: () => ({
    title: 'Isaac Rodrigues — Full-Stack AI Engineer',
    meta: [
      {
        charSet: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
      {
        name: 'description',
        content:
          'Isaac Rodrigues — Full-Stack AI Engineer building intelligent, scalable, and automation-driven systems. Specializing in AI, Machine Learning, and modern web development.'
      },
      {
        name: 'keywords',
        content:
          'Isaac Rodrigues, Olwtelet, Full-Stack Developer, AI Engineer, Machine Learning, Web Developer, Software Engineer, Next.js, Python, TypeScript, Automation'
      },
      {
        name: 'creator',
        content: 'Isaac Rodrigues'
      },
      {
        name: 'author',
        content: 'Isaac Rodrigues'
      },
      {
        property: 'og:title',
        content: 'Isaac Rodrigues — Full-Stack AI Engineer'
      },
      {
        property: 'og:description',
        content:
          'Building intelligent, scalable, and automation-driven systems. Full-Stack AI Engineer specializing in Machine Learning, NLP, and modern web architecture.'
      },
      {
        property: 'og:site_name',
        content: 'Isaac Rodrigues'
      },
      {
        property: 'og:image',
        content: '/opengraph.png?v1'
      },
      {
        property: 'og:image:width',
        content: '1200'
      },
      {
        property: 'og:image:height',
        content: '630'
      },
      {
        property: 'og:image:alt',
        content: 'Isaac Rodrigues — Full-Stack AI Engineer'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:locale',
        content: 'en_US'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Isaac Rodrigues — Full-Stack AI Engineer'
      },
      {
        name: 'twitter:description',
        content:
          'Building intelligent, scalable, and automation-driven systems. Full-Stack AI Engineer specializing in Machine Learning, NLP, and modern web architecture.'
      },
      {
        name: 'twitter:image',
        content: '/opengraph.png?v1'
      },
      {
        name: 'twitter:image:alt',
        content: 'Isaac Rodrigues — Full-Stack AI Engineer'
      },
      {
        name: 'twitter:creator',
        content: '@olwtelet'
      }
    ],
    links: [
      {
        rel: 'canonical',
        href: 'portifoliolwtelet.vercel.app'
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico?v1'
      },
      {
        rel: 'preconnect',
        href: 'https://analytics.olwtelet.vercel.app'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
      },
      { rel: 'stylesheet', href: appCss }
    ],
    scripts: [
      {
        async: true,
        src: 'https://analytics.olwtelet.vercel.app/script.js',
        'data-website-id': '6b71e8bb-208f-4cce-a1a7-10802153c6cc',
        'data-domains': 'vue.olwtelet.vercel.app,olwtelet.vercel.app'
      }
    ]
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-theme-50 font-sans antialiased">
        <PageBackground />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
