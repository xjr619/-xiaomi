function animate(element,target){
    //ÿ�ε��ú�����ʱ�򣬶���ԭ��������Ԫ�����ϵĶ�ʱ�������
    clearInterval(element.timer);
    //ÿ��һ��ʱ�䣬�޸�һ��Ԫ�ص�����
    element.timer = setInterval(function(){
        //��ȡ��ǰֵ
        var current = element.offsetLeft;
        //�������һ���õ�����
        var step = 40;//����һ��������ÿ��һ��ʱ���ƶ��ľ���
        //�жϷ��������������+=������Ǹ�����-=
        current += current <= target ? step : -step;
        //�����趨Ԫ�ص���ʽ
        element.style.left = current + "px";
        //�ж���������ͣ�� -- ����ǰλ�ú�Ŀ��λ�õľ���С�ڲ���
        if(Math.abs(target - current) <= step){
            clearInterval(element.timer);
            //Ϊ�˷�ֹ����Ͳ����������������ǿ���趨ĳ��Ԫ�ص�λ��
            element.style.left = target + "px";
        }
    },20);
}