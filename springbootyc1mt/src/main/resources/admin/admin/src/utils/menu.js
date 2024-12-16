const menu = {
    list() {
        return [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["新增","查看","修改","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"检测站点","menuJump":"列表","tableName":"jiancezhandian"}],"menu":"检测站点管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除"],"menu":"检测信息","menuJump":"列表","tableName":"jiancexinxi"}],"menu":"检测信息管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言反馈","tableName":"messages"}],"menu":"留言反馈"},{"child":[{"appFrontIcon":"cuIcon-present","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"疫情公告","tableName":"news"},{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"在线咨询","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"检测站点列表","menuJump":"列表","tableName":"jiancezhandian"}],"menu":"检测站点模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","立即预约"],"menu":"检测站点","menuJump":"列表","tableName":"jiancezhandian"}],"menu":"检测站点管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"检测信息","menuJump":"列表","tableName":"jiancexinxi"}],"menu":"检测信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"检测站点列表","menuJump":"列表","tableName":"jiancezhandian"}],"menu":"检测站点模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","审核","检测"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看"],"menu":"检测信息","menuJump":"列表","tableName":"jiancexinxi"}],"menu":"检测信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"检测站点列表","menuJump":"列表","tableName":"jiancezhandian"}],"menu":"检测站点模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"医生","tableName":"yisheng"}]
    }
}
export default menu;