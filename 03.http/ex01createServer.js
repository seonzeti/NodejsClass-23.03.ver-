// http 서버가 있어야 웹 브라우저 요청을 처리 할 수 있다 =>  http 모듈 필요! 
// http 모듈 : 현재 파일을 서버로 만들어주는 모듈 
const http = require('http')

// http 모듈 안에는 createServer 라는 메서드가 존재함 
// 함수 안의 함수 => 콜백함수  
http.createServer((req,res)=>{
    // req : request, 요청에 관한 정보들 
    // res : response, 응답에 관한 정보들 

    // 요청한 사람의 포트, 주소 등을 파악 할 수 있음
    // cmd - ipconfig - IP주소:port번호 
    let ip = req.socket.remoteAddress
    var ip_res = ip.substring(7); // 문자열을 자르는 함수
    console.log("요청한 클라이언트 IP : " + ip_res);

    // 응답할 정보 기록 
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    res.write('<h1>Hello World!</h1>')
    res.write("접속한 사용자의 IP : " + ip_res);
    res.end('<p>즐거운 Node.js시간! </p>')


}).listen(8888,()=>{
    // 서버연결 대기 동안 무엇을 할건지?
    console.log('8888 번 포트에서 서버 연결 대기중입니다... ')
})