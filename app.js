import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { callApi } from "./public/callApi.ts";

const app = express();
const port = 3000;

// 정적 파일을 제공하기 위해 public 디렉터리를 설정
app.use(express.static(path.join(process.cwd(), "public")));

app.use(bodyParser.urlencoded({ extended: true }));

// GET 요청 시 public/index.html 파일을 제공
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/index.html"));
});

// POST 요청 시 입력받은 값을 콘솔에 출력하고 다른 서버로 데이터를 전송
app.post("/login", async (req, res) => {
  const id = req.body.id;
  const password = req.body.password;

  const data = { putid: id, putpas: password };
  console.log(data);

  try {
    const result = await callApi("8000/gomain", "POST", data);
    console.log("Response from gomain:", result);
    res.send("로그인 시도됨");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("서버 오류");
  }
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
