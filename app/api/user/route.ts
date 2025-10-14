import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  return NextResponse.json({}, { status: 200 })
  try {
    const userData = await req.json()
    

    if (!userData || !userData.Id) {
      
    }

   let user = await prisma.user.findUnique({
      where: { telegramId: userData.Id}
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          telegramId: userData.id,
          username: userData.username || '',
          firstName: userData.first_name || '',
          lastName: userData.last_name || '',
        }
      })
    }
        

      return NextResponse.json(user)
  } catch (error) {
      console.error('Error processing user data:', error)
      return NextResponse.json({ error }, { status: 500 })
  }
    }