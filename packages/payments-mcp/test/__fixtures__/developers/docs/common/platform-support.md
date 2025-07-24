## 플랫폼 지원환경[​](#플랫폼-지원환경 "플랫폼 지원환경에 대한 직접 링크")

### 플랫폼 지원환경[​](#플랫폼-지원환경-1 "플랫폼 지원환경에 대한 직접 링크")

플랫폼 지원환경은 다음과 같습니다.

* PC 환경에서는 Edge, Chrome, Firefox, Safari 브라우저를 지원합니다.
* 모바일 환경에서는 NaverApp, Chrome, Safari, Android 기본 브라우저를 지원합니다.
* Windows Safari는 Apple사 지원이 종료됨에 따라 더이상 지원하지 않습니다.(2018.09.24)

### PC 지원 환경[​](#pc-지원-환경 "PC 지원 환경에 대한 직접 링크")

| Edge | Chrome | Firefox | Safari      |
| ---- | ------ | ------- | ----------- |
| O    | O      | O       | O ( MacOS ) |

### 모바일 지원 환경[​](#모바일-지원-환경 "모바일 지원 환경에 대한 직접 링크")

| NaverApp | Chrome | Safari | Android Basic Browser |
| -------- | ------ | ------ | --------------------- |
| O        | O      | O      | O                     |

### 가맹점 Android 어플리케이션 지원환경[​](#가맹점-android-어플리케이션-지원환경 "가맹점 Android 어플리케이션 지원환경에 대한 직접 링크")

**DOM Storage API 활성화**

네이버페이는 Web Storage API 를 사용하고 있습니다.<br /><!-- -->따라서 가맹점에서 제공하는 안드로이드 애플리케이션의 [WebSettings > DOM storage API](https://developer.android.com/reference/android/webkit/WebSettings#setDomStorageEnabled\(boolean\)) 활성화가 필요합니다.

#### WebView 설정[​](#webview-설정 "WebView 설정에 대한 직접 링크")

```
webView.getSettings().setDomStorageEnabled(true) // default value is "false"
```
