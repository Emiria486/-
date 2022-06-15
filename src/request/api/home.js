import service from "..";
// 获取首页轮播图的数据
export  function getBanner(){
    return service({
        method:'GET',
        url:'banner?type=2',
    })
}
// 获取发现好歌单
export  function getMusicList(){
    return service({
        method:'GET',
        url:'personalized?limit=10'
    })
}
//搜索
export function getSearchMusic(data){
    return service({
        method:'GET',
        url:`/search?keywords=${data}`
    })
}
//手机登录
export function getPhoneLogin(data){
    return service({
        method:'POST',
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
// 获取用户详情
export function getLoginUser(data){
    return service({
        method:'GET',
        url:`/user/detail?uid=${data}`
    })
}
// 获取推荐MV
export function getPersonalizedMV(){
    return service({
        method:'GET',
        url:`/personalized/mv`
    })
}