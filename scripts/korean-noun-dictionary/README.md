# Korean Noun Dictionary

문서에서 한국어 명사(복합명사, 단일명사)를 추출하여 검색 인덱싱용 사전을 구축합니다.

- 출력 파일 예시

```json
{
  "네이버페이포인트": [
    "네이버",
    "페이",
    "포인트",
    "네이버페이포인트"
  ],
  "네이버": [
    "네이버"
  ]
}
```

## 개발환경 요구사항

- **Python**: 3.13 이상
- **Java**: 8 이상 (`PyKOMORAN` 사용을 위해 필요)
- [**uv**](https://docs.astral.sh/uv/)
- [**just**](https://github.com/casey/just)

## 시작하기

```bash
# 사용 가능한 명령어 확인
just

# 의존성 설치
just install

# 테스트 실행
just test

# 실행 예시
just run ./sample.txt
just run ./data/*.txt
just run ./data/*.txt -o output.json

# 작업 공간 정리
just clean
```

## 기여하기

버그 리포트나 기능 요청은 [GitHub Issues](https://github.com/NaverPayDev/agent-integration/issues)에 등록해 주세요.

자세한 내용은 [CONTRIBUTING.md](https://github.com/NaverPayDev/agent-integration/blob/main/CONTRIBUTING.md)를 참조하세요.

## 라이선스

Apache License v2.0 - 자세한 내용은 [LICENSE](https://github.com/NaverPayDev/agent-integration/blob/main/LICENSE) 파일을 참조하세요.
