# 기본 응답 형식

## 기본 응답 형식[​](#기본-응답-형식 "기본 응답 형식에 대한 직접 링크")

네이버페이 간편결제 API의 기본 응답 형식은 다음과 같습니다.

기본 응답 형식

```
{
    "code" : "Success",
    "message" : "성공",
    "body" : {}
}
```

##### 기본 응답 필드[​](#기본-응답-필드 "기본 응답 필드에 대한 직접 링크")

| 필드명                    | 타입     | 최대크기  | 필수여부                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 필드명                                                                                                                      |
| ------------------------- | -------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| String                    | String   | 50바이트  | ![필수](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBtZW/S0JRFMfPqyiMIsEQBPu1hEODOQfZYKuutaT0B5RDNGZjNOg/INnkqqtLDs7h0FAtWQZCZQiFghD1vjfv8/refb6n4hdEfe++zzn3nu85T/lVRWPQlNmNxk+TruslKn49ULn1QpX2B7vudyzT6vQiRZybdODaMnucFFnGucYtxZ7TDN5PCJDwhKUBDOD4a5ZSbwUaRAlPhM7UAKImxD/ntfzAUAau5ShezcrBGfU8sWBYpd4L7AgNYGQ7qsS6MDCy5VW3q6uVQ3rauCTn5Kx2jTtJA+eFLdhR0rtHUdUJgIpgqPh93wVX2nXbUFT/2L3Lstt5vDDstNysdsFoAL2O3CH20UNhLQhQ2XM8kGnnAcC3isKKUBRJBhXFMkYH6cV9CdjN+mkPNNMpkExoeQ3sdywZFmQ+SxSrpNnv4JzPFpQlOePqgoPzPukiDse5odWtoFB4IcC+2axAhdfuTiyHjpVwpPC2ljEKBMOPKnEQaS0dcQZUf4ZoWAEaFcZnz3RLevcN48+O4HfuGi7poEeR4F2r+cGPELvVS+n3zkMAzBEEKLf+WxUFgj23VSfxeSGTMq6X6R+4ftHMqkptaQAAAABJRU5ErkJggg==) | 네이버페이 결제번호                                                                                                         |
| merchantPayTransactionKey | String   | 128바이트 | ![필수](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBtZW/S0JRFMfPqyiMIsEQBPu1hEODOQfZYKuutaT0B5RDNGZjNOg/INnkqqtLDs7h0FAtWQZCZQiFghD1vjfv8/refb6n4hdEfe++zzn3nu85T/lVRWPQlNmNxk+TruslKn49ULn1QpX2B7vudyzT6vQiRZybdODaMnucFFnGucYtxZ7TDN5PCJDwhKUBDOD4a5ZSbwUaRAlPhM7UAKImxD/ntfzAUAau5ShezcrBGfU8sWBYpd4L7AgNYGQ7qsS6MDCy5VW3q6uVQ3rauCTn5Kx2jTtJA+eFLdhR0rtHUdUJgIpgqPh93wVX2nXbUFT/2L3Lstt5vDDstNysdsFoAL2O3CH20UNhLQhQ2XM8kGnnAcC3isKKUBRJBhXFMkYH6cV9CdjN+mkPNNMpkExoeQ3sdywZFmQ+SxSrpNnv4JzPFpQlOePqgoPzPukiDse5odWtoFB4IcC+2axAhdfuTiyHjpVwpPC2ljEKBMOPKnEQaS0dcQZUf4ZoWAEaFcZnz3RLevcN48+O4HfuGi7poEeR4F2r+cGPELvVS+n3zkMAzBEEKLf+WxUFgj23VSfxeSGTMq6X6R+4ftHMqkptaQAAAABJRU5ErkJggg==) | 가맹점의 결제 트랜잭션 번호 또는 주문 트랜잭션 번호                                                                         |
| cancelAmount              | Number   |           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 취소 요청 금액                                                                                                              |
| cancelReason              | String   | 256바이트 | ![필수](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBtZW/S0JRFMfPqyiMIsEQBPu1hEODOQfZYKuutaT0B5RDNGZjNOg/INnkqqtLDs7h0FAtWQZCZQiFghD1vjfv8/refb6n4hdEfe++zzn3nu85T/lVRWPQlNmNxk+TruslKn49ULn1QpX2B7vudyzT6vQiRZybdODaMnucFFnGucYtxZ7TDN5PCJDwhKUBDOD4a5ZSbwUaRAlPhM7UAKImxD/ntfzAUAau5ShezcrBGfU8sWBYpd4L7AgNYGQ7qsS6MDCy5VW3q6uVQ3rauCTn5Kx2jTtJA+eFLdhR0rtHUdUJgIpgqPh93wVX2nXbUFT/2L3Lstt5vDDstNysdsFoAL2O3CH20UNhLQhQ2XM8kGnnAcC3isKKUBRJBhXFMkYH6cV9CdjN+mkPNNMpkExoeQ3sdywZFmQ+SxSrpNnv4JzPFpQlOePqgoPzPukiDse5odWtoFB4IcC+2axAhdfuTiyHjpVwpPC2ljEKBMOPKnEQaS0dcQZUf4ZoWAEaFcZnz3RLevcN48+O4HfuGi7poEeR4F2r+cGPELvVS+n3zkMAzBEEKLf+WxUFgj23VSfxeSGTMq6X6R+4ftHMqkptaQAAAABJRU5ErkJggg==) | 최소 사유                                                                                                                   |
| cancelReason              | `String` | 1바이트   | ![필수](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBtZW/S0JRFMfPqyiMIsEQBPu1hEODOQfZYKuutaT0B5RDNGZjNOg/INnkqqtLDs7h0FAtWQZCZQiFghD1vjfv8/refb6n4hdEfe++zzn3nu85T/lVRWPQlNmNxk+TruslKn49ULn1QpX2B7vudyzT6vQiRZybdODaMnucFFnGucYtxZ7TDN5PCJDwhKUBDOD4a5ZSbwUaRAlPhM7UAKImxD/ntfzAUAau5ShezcrBGfU8sWBYpd4L7AgNYGQ7qsS6MDCy5VW3q6uVQ3rauCTn5Kx2jTtJA+eFLdhR0rtHUdUJgIpgqPh93wVX2nXbUFT/2L3Lstt5vDDstNysdsFoAL2O3CH20UNhLQhQ2XM8kGnnAcC3isKKUBRJBhXFMkYH6cV9CdjN+mkPNNMpkExoeQ3sdywZFmQ+SxSrpNnv4JzPFpQlOePqgoPzPukiDse5odWtoFB4IcC+2axAhdfuTiyHjpVwpPC2ljEKBMOPKnEQaS0dcQZUf4ZoWAEaFcZnz3RLevcN48+O4HfuGi7poEeR4F2r+cGPELvVS+n3zkMAzBEEKLf+WxUFgj23VSfxeSGTMq6X6R+4ftHMqkptaQAAAABJRU5ErkJggg==) | 취소 요청자 구분이 애매한 경우 가맹점 관리자로 입력합니다                                                                   |
| taxExScopeAmount          | `String` |           | ![필수](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBtZW/S0JRFMfPqyiMIsEQBPu1hEODOQfZYKuutaT0B5RDNGZjNOg/INnkqqtLDs7h0FAtWQZCZQiFghD1vjfv8/refb6n4hdEfe++zzn3nu85T/lVRWPQlNmNxk+TruslKn49ULn1QpX2B7vudyzT6vQiRZybdODaMnucFFnGucYtxZ7TDN5PCJDwhKUBDOD4a5ZSbwUaRAlPhM7UAKImxD/ntfzAUAau5ShezcrBGfU8sWBYpd4L7AgNYGQ7qsS6MDCy5VW3q6uVQ3rauCTn5Kx2jTtJA+eFLdhR0rtHUdUJgIpgqPh93wVX2nXbUFT/2L3Lstt5vDDstNysdsFoAL2O3CH20UNhLQhQ2XM8kGnnAcC3isKKUBRJBhXFMkYH6cV9CdjN+mkPNNMpkExoeQ3sdywZFmQ+SxSrpNnv4JzPFpQlOePqgoPzPukiDse5odWtoFB4IcC+2axAhdfuTiyHjpVwpPC2ljEKBMOPKnEQaS0dcQZUf4ZoWAEaFcZnz3RLevcN48+O4HfuGi7poEeR4F2r+cGPELvVS+n3zkMAzBEEKLf+WxUFgj23VSfxeSGTMq6X6R+4ftHMqkptaQAAAABJRU5ErkJggg==) | 취소 요청자 구분이 애매한 경우 가맹점 관리자로 입력합니다<br />과제 대상 금액 + 면세 대상 금액 + 컵 보증금 대상 금액 (옵션) |
| taxExScopeAmount          | String   |           | ![필수](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgBtZW/S0JRFMfPqyiMIsEQBPu1hEODOQfZYKuutaT0B5RDNGZjNOg/INnkqqtLDs7h0FAtWQZCZQiFghD1vjfv8/refb6n4hdEfe++zzn3nu85T/lVRWPQlNmNxk+TruslKn49ULn1QpX2B7vudyzT6vQiRZybdODaMnucFFnGucYtxZ7TDN5PCJDwhKUBDOD4a5ZSbwUaRAlPhM7UAKImxD/ntfzAUAau5ShezcrBGfU8sWBYpd4L7AgNYGQ7qsS6MDCy5VW3q6uVQ3rauCTn5Kx2jTtJA+eFLdhR0rtHUdUJgIpgqPh93wVX2nXbUFT/2L3Lstt5vDDstNysdsFoAL2O3CH20UNhLQhQ2XM8kGnnAcC3isKKUBRJBhXFMkYH6cV9CdjN+mkPNNMpkExoeQ3sdywZFmQ+SxSrpNnv4JzPFpQlOePqgoPzPukiDse5odWtoFB4IcC+2axAhdfuTiyHjpVwpPC2ljEKBMOPKnEQaS0dcQZUf4ZoWAEaFcZnz3RLevcN48+O4HfuGi7poEeR4F2r+cGPELvVS+n3zkMAzBEEKLf+WxUFgj23VSfxeSGTMq6X6R+4ftHMqkptaQAAAABJRU5ErkJggg==) | 취소 요청자 구분이 애매한 경우 가맹점 관리자로 입력합니다<br />과제 대상 금액 + 면세 대상 금액 + 컵 보증금 대상 금액 (옵션) |

***

| 필드명  | 타입            | 필수 여부 | 설명        |
| ------- | --------------- | --------- | ----------- |
| code    | String of Codes | O         | 결과 코드   |
| message | String          | O         | 상세 메시지 |
| body    | Object          |           |             |

##### 결과 코드[​](#결과-코드 "결과 코드에 대한 직접 링크")

| 코드값           | 타입   | 설명               |
| ---------------- | ------ | ------------------ |
| Success          | String | 성공               |
| RequireParameter | String | 필수 파라메터 누락 |
| Fail             | String | 실패               |

| 코드값           | 타입   | 설명                          | 설명        |
| ---------------- | ------ | ----------------------------- | ----------- |
| Success          | String | 성공                          | 결과 코드   |
| RequireParameter | String | 필수 파라미터 누락            | 상세 메시지 |
| InvalidParameter | String | 입력값이 조건을 만족하지 않음 |             |
| Fail             | String | 기타 실패                     |             |
