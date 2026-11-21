import { handleInquiry } from '@/lib/handle-inquiry'

export async function POST(request: Request) {
  return handleInquiry(request, true)
}
