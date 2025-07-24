# 인증

## 인증[​](#인증 "인증에 대한 직접 링크")

### 인증방법[​](#인증방법 "인증방법에 대한 직접 링크")

네이버페이 API는 인증에 API key 를 사용합니다.<br /><!-- -->클라이언트 ID, 네이버페이 체인 ID와 클라이언트 시크릿를 발급받아 API 요청 시 요청 헤더에 다음과 같이 입력하며 TLS 1.2 이상으로 사용하여 암호화합니다.

요청 헤더

```
X-Naver-Client-Id: {Client ID}
X-Naver-Client-Secret: {Client Secret}
X-NaverPay-Chain-Id: {Chain ID}
X-NaverPay-Financial-Id: {Financial Id}
```

클라이언트 시크릿은 보안상 노출되면 안 되는 값입니다.<br /><!-- -->따라서 클라이언트 바이너리 등에 저장하면 안 됩니다. 외부에 노출된 경우 해당 값에 대한 인증을 무효화하고 새로 발급받아 사용해야 합니다.

인증 유형에 따라 `X-NaverPay-Financial-Id` 헤더가 필수일 수도 있습니다.

API 테스트 툴 (Postman, Insomnia 등) 사용 시 외부에 Client ID, Client Secret, Chain ID 값이 유출되지 않도록 주의 부탁드립니다.

네이버페이 API 서버는 IP 주소 기반 ACL(access control list)을 사용하지 않습니다.
