import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInfoSchema, LoginInfoType } from "./schemas/login.schema";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfoType>({ resolver: zodResolver(LoginInfoSchema) });
  const [error, setError] = useState([]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(() => {
          console.log(errors.password);
        })}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-semibold mb-4">ログイン</h2>
        <div className="mb-4">
          <label className="block text-gray-700">メールアドレス</label>
          <input type="email" {...register("userId")} />
          {errors.userId && (
            <p className="text-red-500 text-sm mb-2">{errors.userId.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">パスワード</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        >
          ログイン
        </button>
      </form>
    </div>
  );
};
