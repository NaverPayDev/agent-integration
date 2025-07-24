# 변경 이력

## API 멱등성[​](#api-멱등성 "API 멱등성에 대한 직접 링크")

### API 멱등성[​](#api-멱등성-1 "API 멱등성에 대한 직접 링크")

안전하게 API 요청을 재시도할 수 있도록 멱등성을 지원합니다.<br /><!-- -->API 요청 시, 유니크한 멱등성 키를 생성하여 요청 헤더에 다음과 같이 입력합니다. API 멱등성 지원 여부는 API 별로 명시되어 있습니다.

요청 헤더

```
X-NaverPay-Idempotency-Key: {Idempotency Key}
```

요청 시 전달한 멱등성 키는, API 응답 헤더를 통해 전달 받을수 있습니다.<br /><!-- -->API 중복 요청 발생 시, HTTP Status 409 conflict 와 함께 이전 요청에서 전달되었던 응답이 재전달됩니다.

응답 헤더

```
X-NaverPay-Idempotency-Key: {Idempotency Key}
```

멱등성 키는 반드시 유니크한 값을 생성하여 전달하며, 64자 이내의 문자열로 제한됩니다.<br /><!-- -->다음과 같이, 각 언어별로 제공되는 고유번호 생성 함수를 사용하고, 생성된 값은 알파벳 대소문자(A-Z, a-z), 숫자(0-9), 언더바(\_), 하이픈(-) 만을 포함하도록 권장합니다.

### API 멱등성 키 생성[​](#api-멱등성-키-생성 "API 멱등성 키 생성에 대한 직접 링크")

| 언어    | 추천 함수                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Ruby    | [`SecureRandom.uuid`](https://ruby-doc.org/stdlib-2.5.0/libdoc/securerandom/rdoc/Random/Formatter.html#method-i-uuid)                    |
| PHP     | [`uniqid`](http://php.net/manual/en/function.uniqid.php)                                                                                 |
| Java    | [`UUID.randomUUID`](http://docs.oracle.com/javase/7/docs/api/java/util/UUID.html)                                                        |
| Python  | uuid ([`Python 2`](https://docs.python.org/2/library/uuid.html), [`Python 3`](https://docs.python.org/3.1/library/uuid.html)             |
| C#      | [`Guid.NewGuid`](https://learn.microsoft.com/en-us/dotnet/api/system.guid.newguid?redirectedfrom=MSDN\&view=net-7.0#System_Guid_NewGuid) |
| Node.js | [`uuid`](https://www.npmjs.com/package/uuid)                                                                                             |
