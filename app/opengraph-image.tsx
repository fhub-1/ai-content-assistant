import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'AI Content Assistant'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #1e1e2e, #0f0f1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#6366f1',
            marginBottom: '20px',
          }}
        >
          AI Content Assistant
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#f8f8f8',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Your AI Partner for YouTube & Podcasts
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
