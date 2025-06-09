const base = {
    get() {
                return {
            url : "http://localhost:8080/xiaoyuandianzhi/",
            name: "xiaoyuandianzhi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuandianzhi/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园电子商城"
        } 
    }
}
export default base
