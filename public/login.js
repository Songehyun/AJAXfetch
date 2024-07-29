import { callApi } from "./callApi.ts";

document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login");

  loginButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;

    const data = {
      아이디: id,
      비밀번호: password,
    };

    try {
      const response = await callApi(
        "http://localhost:3000/login", // 클라이언트는 3000번 포트의 /login 엔드포인트로 요청
        "POST",
        data
      );
      console.log("Response:", response); // 응답 데이터를 콘솔에 출력

      if (response.success) {
        alert("로그인 성공!");
      } else {
        alert("로그인 실패. 아이디와 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
