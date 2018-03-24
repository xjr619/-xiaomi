function animate(element,target){
    //每次调用函数的时候，都把原来作用在元素身上的定时器先清除
    clearInterval(element.timer);
    //每隔一段时间，修改一次元素的属性
    element.timer = setInterval(function(){
        //获取当前值
        var current = element.offsetLeft;
        //计算出下一步该到哪里
        var step = 40;//定义一个步长，每隔一段时间移动的距离
        //判断方向，如果是正方向，+=，如果是负方向-=
        current += current <= target ? step : -step;
        //重新设定元素的样式
        element.style.left = current + "px";
        //判断满足条件停下 -- 当当前位置和目标位置的距离小于步长
        if(Math.abs(target - current) <= step){
            clearInterval(element.timer);
            //为了防止距离和步长不整除的情况，强制设定某个元素的位置
            element.style.left = target + "px";
        }
    },20);
}