import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "Nishant's Portfolio"
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          padding: '60px',
        }}
      >
        {/* Your Laptop Icon */}
        <img
          src="https://z-cdn-media.chatglm.cn/files/a45e29a9-a0e3-49d5-889a-1c11315d4ed7.png?auth_key=1878478463-56672329bb4145138bac5c9497adb200-0-b7580e43d143e012aca6c2847d043c45"
          alt="Portfolio Icon"
          style={{
            width: 180,
            height: 180,
            marginRight: 50,
            borderRadius: 20,
          }}
        />
        
        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 'bold', color: '#ffffff', marginBottom: 15 }}>
            Nishant's Portfolio
          </div>
          <div style={{ fontSize: 36, color: '#60a5fa' }}>
            nishantavien.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}