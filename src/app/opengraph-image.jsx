import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

export const runtime = 'nodejs'
export const alt = 'Akande Gbolahan Emmanuel - AI Automation, Data & Blockchain Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const rawPhoto = readFileSync(join(process.cwd(), 'public/proF1.png'))
  const resized = await sharp(rawPhoto)
    .resize(504, 630, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 80 })
    .toBuffer()
  const photoBase64 = `data:image/jpeg;base64,${resized.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#0a0a14',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Background gradient blobs */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '-100px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(85,70,255,0.18) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          right: '250px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(77,181,255,0.12) 0%, transparent 65%)',
        }} />

        {/* Left accent bar */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: '0',
          bottom: '0',
          width: '6px',
          background: 'linear-gradient(180deg, #5546FF 0%, #4DB5FF 100%)',
        }} />

        {/* Left content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 40px 60px 80px',
          width: '660px',
          zIndex: 1,
        }}>
          {/* Domain label */}
          <div style={{
            color: '#4DB5FF',
            fontSize: '16px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '22px',
          }}>
            agedevs.com
          </div>

          {/* Name */}
          <div style={{
            color: '#ffffff',
            fontSize: '56px',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '4px',
          }}>
            Akande Gbolahan
          </div>
          <div style={{
            fontSize: '56px',
            fontWeight: 'bold',
            lineHeight: '1.1',
            marginBottom: '22px',
            background: 'linear-gradient(90deg, #5546FF, #4DB5FF)',
            backgroundClip: 'text',
            color: 'transparent',
          }}>
            Emmanuel
          </div>

          {/* Divider */}
          <div style={{
            width: '70px',
            height: '4px',
            background: 'linear-gradient(90deg, #5546FF, #4DB5FF)',
            borderRadius: '2px',
            marginBottom: '22px',
          }} />

          {/* Title */}
          <div style={{
            color: '#9ca3af',
            fontSize: '21px',
            lineHeight: '1.5',
            marginBottom: '26px',
          }}>
            Data Analyst · AI Automation Specialist · Blockchain Engineer
          </div>

          {/* Skill tags */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
            {['Python', 'Node.js', 'Groq API', 'Blockchain'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(85,70,255,0.5)',
                  background: 'rgba(85,70,255,0.1)',
                  color: '#7B6FFF',
                  fontSize: '15px',
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <div style={{
              padding: '10px 24px',
              borderRadius: '24px',
              background: 'linear-gradient(90deg, #5546FF, #4DB5FF)',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: 'bold',
            }}>
              Hire Me - Open to Freelance
            </div>
          </div>
        </div>

        {/* Right photo section */}
        <div style={{
          position: 'absolute',
          right: '0',
          top: '0',
          width: '540px',
          height: '630px',
          display: 'flex',
          overflow: 'hidden',
        }}>
          {/* Fade left edge */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '220px',
            height: '630px',
            background: 'linear-gradient(90deg, #0a0a14 0%, transparent 100%)',
            zIndex: 2,
          }} />

          {/* Photo with explicit pixel dimensions */}
          <img
            src={photoBase64}
            width={504}
            height={630}
            style={{
              position: 'absolute',
              right: '0',
              top: '0',
            }}
          />

          {/* Fade bottom edge */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '540px',
            height: '120px',
            background: 'linear-gradient(0deg, #0a0a14 0%, transparent 100%)',
            zIndex: 2,
          }} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
