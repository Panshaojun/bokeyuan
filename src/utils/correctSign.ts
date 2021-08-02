//修正显示错误
const correctSign = () => {
    //处理浏览分类时，分类显示
    const el = document.querySelector('.entrylistTitle');
    if (el) {
        const txt = (el as HTMLElement).innerText.split("-");
        txt[1] = txt[1].split("$")[2]
        el.innerHTML = txt.join(" - ");
    }
    //处理文档标题
    const title = document.title.split("$");
    if (title.length === 3) {
        document.title = title[2];
    }
    //处理浏览文章时，底部分类显示
    setTimeout(function () {
        const blogPostCategory = document.querySelectorAll("#BlogPostCategory a");
        for (let i = 0, len = blogPostCategory.length; i < len; i++) {
            blogPostCategory[i].innerHTML = (blogPostCategory[i] as HTMLElement).innerText.split("$")[2];
        }
    }, 1000)
}

export default correctSign;