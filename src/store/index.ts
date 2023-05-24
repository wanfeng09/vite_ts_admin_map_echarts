import { defineStore } from 'pinia'
import { Names } from './name/test'

export const useNameStore = defineStore(Names.TEST, {
    state: () => ({
        current: 1,
        name: 'AA'
    }),
    getters: {}, // computer 修饰一些值
    actions: {
        setCurrent(val: number) { 
            this.current = val  // 注意不能使用剪头函数，this指向
        },
        // 同步
        setUser() {} 
    }
})

type User = {
    name: String,
    age: Number
}

let userResult:User = {
    name: 'PP',
    age: 18
}

const Login = ():Promise<User> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                name: 'YY',
                age: 22
        })
    },2000)
   })
}
export const useActionNameStore = defineStore(Names.ActionName, {
    state: () => ({
        user: <User>{},
        name: ''
    }),
    getters: {
        newName():string { 
            return `$${this.name}`
        }
    },
    actions: {
        // 同步
        setUser(val:string) {
            // this.user = userResult
            this.name = val
        },
        // 异步
        async setAsyncUser() { 
            const result = await Login()
            this.user = result
            this.setUser('异步/同步')
        }
    }
})