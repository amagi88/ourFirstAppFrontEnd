import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();

  const onsubmit = () => {
    loginWithRedirect();
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
          <Button
            onClick={onsubmit}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            ログイン
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
