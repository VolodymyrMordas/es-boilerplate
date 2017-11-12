export function format(text, pattern) {
    return '\\u'+text.charCodeAt(0).toString(16)
        +'\\u'+ text.charCodeAt(1).toString(16);
}
