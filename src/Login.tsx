import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInfoSchema, LoginInfoType } from "./schemas/login.schema";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

export const LoginForm = () =>  {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInfoType>({
    reValidateMode: "onSubmit",
    resolver: zodResolver(LoginInfoSchema),
  });

  const onSubmit = (data: LoginInfoType) => {
    console.log("Login Data:", data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        style={{
          width: 400,
          padding: 20,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardHeader
          title={
            <Typography variant="h6" align="center">
              ログイン
            </Typography>
          }
        />
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <TextField
              label="メールアドレス"
              type="email"
              {...register("userId")}
              error={!!errors.userId}
              helperText={errors.userId?.message}
              fullWidth
            />
            <TextField
              label="パスワード"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              ログイン
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
