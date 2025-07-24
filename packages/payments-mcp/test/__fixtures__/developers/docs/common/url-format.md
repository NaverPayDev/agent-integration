# API URL 형식

## API URL 형식[​](#api-url-형식 "API URL 형식에 대한 직접 링크")

### Back-end API 서버 URL 형식[​](#back-end-api-서버-url-형식 "Back-end API 서버 URL 형식에 대한 직접 링크")

네이버페이 간편결제 API의 URL 형식은 다음과 같습니다.

URL

```
https://{API 도메인}/{파트너 ID}/naverpay/payments/{API 버전}/{API명}
```

위험

반드시 HTTPS로 호출해야 합니다.

API 서버 도메인은 다음과 같습니다.

* 개발 API 서버 : dev.apis.naver.com
* 운영 API 서버 : apis.naver.com

### Front-end API 서버 URL 형식[​](#front-end-api-서버-url-형식 "Front-end API 서버 URL 형식에 대한 직접 링크")

네이버페이 간편결제 API에서 사용하는 결제 페이지의 주소는 다음과 같습니다.

URL

```
https://{네이버페이 서비스 도메인}/payments/{결제 예약 ID}
```

네이버페이 서비스 도메인은 다음과 같습니다.

* 개발용 서비스 서버 도메인 : test-m.pay.naver.com
* 운영 서비스 서버 도메인 : m.pay.naver.com
