import Classify from '../pages/Classify.vue'
import Buy from '../pages/Buy.vue'
import Cart from '../pages/Cart.vue'
import Personal from '../pages/Personal.vue'
import Recommend from '../pages/Recommend.vue'
export default[
    {path:'/Recommend',component:Recommend},
    {path:'/Classify',component:Classify},
    {path:'/Buy',component:Buy},
    {path:'/Cart',component:Cart},
    {path:'/Personal',component:Personal},
    {path:'/',redirect:"/Recommend"}

]