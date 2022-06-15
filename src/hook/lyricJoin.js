export default function (lyric, lyricTranslate) {
    const result = []
    if (lyricTranslate[0] == -1) {
        for (let i = 0; i < lyric.length - 1; i++) {
            result.push(lyric[i])
        }
    } else {
        lyricTranslate.shift()
        for (let i = 2; i < lyric.length - 1; i++) {
            if (i <= lyricTranslate.length - 1) {
                lyric[i].lrc = lyric[i].lrc+"\n"+ lyricTranslate[i].lrc
            }
            result.push(lyric[i])
        }
    }
    return result
}