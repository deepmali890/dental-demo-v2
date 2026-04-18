

// IP address → { count, resetTime } mapping
const rateLimitMap = new Map();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour window
const MAX_REQUESTS = 3; // Max 3 requests per IP per hour

export function checkRateLimit(identifier) {
    const now = Date.now();
    const record = rateLimitMap.get(identifier);

    // If no record exists or the window has expired, reset the count and set a new reset time
    if (!record || now > record.resetTime) {
        rateLimitMap.set(identifier, {
            count: 1,
            resetTime: now + WINDOW_MS,
        });
        return { allowed: true, remainingRequests: MAX_REQUESTS - 1 };
    }

    if (record.count >= MAX_REQUESTS) {
        return {
            allowed: false,
            remainingRequests: 0,
            resetTime: new Date(record.resetTime),
        };
    }

    // Increment the count and update the record
    record.count += 1;
    rateLimitMap.set(identifier, record);

    return {
        allowed: true,
        remainingRequests: MAX_REQUESTS - record.count,
    }
}

// Utility function to get client IP address from request headers
export function getClientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}