/**
 * Input field validator helper
 * @param type,value
 * @returns {boolean}
 */
export default function validate(type, value) {
    switch (type) {
        case "site_url":
            var regex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9\/]$/
            return regex.test(value);
        case "number":
            return /^\d+$/.test(value);
        case "apikey":
            return /^\d+$/.test(value) && value.length > 0 && value.length <= 10;
        case "required":
            var regex = /^\s*$/;
            if (value === null ) return false;
            return !regex.test(value);
        case "email":
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        default:
            return true;
    }
}
