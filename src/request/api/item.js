import service from "..";
// 获取歌单详情页的数据
export function getMusicItemList(data){
    return service({
        method:'GET',
        url:`playlist/detail?id=${data}`
    })
}
//获取歌单的所有歌曲
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}
// 获取歌词
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}
//获取每日推荐歌曲的所有歌曲
export function getDailySong(cookie){
    return service({
        method:"GET",
        url:`/recommend/songs?${cookie}`
    })
}
// 获取MV播放链接地址（视频播放用）
export function getMVVideoURL(data){
    return service({
        method:"GET",
        url:`/mv/url?id=${data}`
    })
}
//获取MV发布相关信息 
export function getMVPublishInfo(data){
    return service({
        method:"GET",
        url:`/mv/detail?mvid=${data}`
    })
}
// 获取MV评论分享相关信息
export function getMVShareInfo(data){
    return service({
        method:"GET",
        url:`/mv/detail/info?mvid=${data}`
    })
}
// 获取MV评论区评论
export function getMVComment(data){
    return service({
        method:"GET",
        url:`/comment/mv?id=${data}`
    })
}