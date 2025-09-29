export function isPhone(userAgent?: string): boolean {
    const ua = userAgent || (typeof navigator !== "undefined" ? navigator.userAgent : "");

    if (!ua) return false;

    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

/** Generic function for boolean isPhone response
 *
 * CLIENT COMPONENT USAGE:
 * const phone = isPhone();
 *
 * if(phone) {
 *     console.log(phone); -> true
 * } else {
 *     console.log(phone) -> false
 * }
 *
 * SERVER COMPONENT USAGE:
 * const ua = req.headers.get("user-agent") || "";
 * const phone = isPhone(ua);
 *
 * if(phone) {
 *     console.log(phone); -> true
 * } else {
 *     console.log(phone) -> false
 * }
 * */