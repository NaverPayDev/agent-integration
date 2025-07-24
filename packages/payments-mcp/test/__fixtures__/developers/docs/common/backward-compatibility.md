# 하위 호환성

## 하위 호환성[​](#하위-호환성 "하위 호환성에 대한 직접 링크")

### 하위 호환성 ( Backwards Compatibility )[​](#하위-호환성--backwards-compatibility- "하위 호환성 ( Backwards Compatibility )에 대한 직접 링크")

네이버페이 API 의 버전 변경 정책 및 변경의 기준을 이해하고, 사용 및 운영에 문제가 없도록 설명한다.

1. 하위 호환 준수 변경에 대해서는 제공되는 API 의 버전 변경 없이 진행된다.
2. 하위 호환 미준수 변경에 대해서는 새롭게 버저닝하거나, 신규 API URI 를 통해 제공된다.

#### 1. 하위 호환 준수 변경 기준 (Backwards-compatible (non-breaking) changes)[​](#1-하위-호환-준수-변경-기준-backwards-compatible-non-breaking-changes "1. 하위 호환 준수 변경 기준 (Backwards-compatible (non-breaking) changes)에 대한 직접 링크")

* 신규 API 추가
* API에 메소드 추가
* HTTP binding 을 메소드에 추가
* Request message 필드 추가
* Response message 필드 추가
* Enum value 추가

#### 2. 하위 호환 미준수 변경 기준 (Backwards-incompatible (breaking) changes)[​](#2-하위-호환-미준수-변경-기준-backwards-incompatible-breaking-changes "2. 하위 호환 미준수 변경 기준 (Backwards-incompatible (breaking) changes)에 대한 직접 링크")

* API URI, 필드, 메소드, Enum 의 삭제, 이름 변경
* HTTP binding 변경
* 필드 타입의 변경
* 버전이 변경된 경우
* 리소스 또는 필드의 이름, 포맷의 변경
* 이미 존재하는 요청 동작의 visible 변경 ( API 접근 권한의 변경 )
* Request message 구조 변경
* Response message 구조 변경

#### 3. 클라이언트 하위 호환 필수 설정 가이드[​](#3-클라이언트-하위-호환-필수-설정-가이드 "3. 클라이언트 하위 호환 필수 설정 가이드에 대한 직접 링크")

특히 Java 를 예로 들어 설명하면, Jackson 의 경우 Object mapper 에서 default 설정을 사용하게 되면 필드가 추가되었을 때 이를 처리 하지 못한다. 다음과 같이 설정하여, 네이버페이 API 의 필드 추가 등의 변경에 영향이 발생하지 않도록 설정해야 한다.

##### Java Object Mapper 설정[​](#java-object-mapper-설정 "Java Object Mapper 설정에 대한 직접 링크")

```
// jackson 1.9 and before
objectMapper.configure(DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES, false);
// or jackson 2.0
objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
```
