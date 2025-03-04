import {string, z} from "zod";

export const LoginInfoSchema = z.object({
    userId:z.string().email(),
    password:string().min(8, "パスワードは8文字以上で入力してください。").regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=]).*$/,
        "パスワードは英字・数字・記号（@#$%^&+=）を各1つ以上含めてください。"
      )
})

export type LoginInfoType = z.infer<typeof LoginInfoSchema>;