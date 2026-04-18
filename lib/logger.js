const LOG_LEVELS = {
    INFO: "INFO",
    WARN: "WARN",
    ERROR: "ERROR",
}


function formatLog(level, context, message, meta = {}) {
    return JSON.stringify({
        timestamp: new Date().toISOString(),
        level,
        context,
        message,
        ...(Object.keys(meta).length > 0 && { meta }),
    });
}

export const logger = {
    info: (context, message, meta) =>
        console.log(formatLog(LOG_LEVELS.INFO, context, message, meta)),

    warn: (context, message, meta) =>
        console.warn(formatLog(LOG_LEVELS.WARN, context, message, meta)),

    error: (context, message, meta) =>
        console.error(formatLog(LOG_LEVELS.ERROR, context, message, meta)),
}