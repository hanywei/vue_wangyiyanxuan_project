import { Toast } from "vant";
export function Loading() {
    Toast.loading({
        message:'加载中....',
        duration:0
    });
}
export function Success() {
    Toast.clear()
    Toast.success({
        message:'加载成功....',
        duration:1000
    })
}
export function Fail() {
    Toast.clear()
    // Toast.fail({
    //     message:e.message
    // })
}