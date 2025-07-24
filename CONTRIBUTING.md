# Contributing

## 🤝 기여하기

Npay Agent Integration 프로젝트에 기여해 주셔서 감사합니다!

## 개발 프로세스

1. **이슈 생성**: 먼저 [GitHub Issues](https://github.com/NaverPayDev/agent-integration/issues)에서 작업하려는 내용을 논의합니다.
2. **포크 & 클론**: 저장소를 포크하고 로컬에 클론합니다.
3. **브랜치 생성**: 기능 브랜치를 생성합니다.

   ```bash
   git checkout -b feature/issue-123-add-new-feature
   ```

4. **개발 & 테스트**: 변경사항을 구현하고 테스트를 작성합니다.
5. **Changeset 생성**: PR 생성 전에 changeset을 생성합니다.
6. **Pull Request**: 작업이 완료되면 PR을 생성합니다.

## 개발 가이드라인

- 수정한 코드와 관련된 테스트는 반드시 작성해주세요.
- 변수명과 함수명은 의미를 잘 드러나게 지어주세요.
- `pnpm lint` 명령어로 코드 포맷팅을 확인해주세요. (자동 수정: `pnpm lint:fix`)

## PR 가이드라인

### Changeset 필수

- 모든 PR에는 changeset이 필요합니다.
- Changeset이 없는 PR은 CI에서 실패합니다.
- **PR당 한 번만** 생성하면 됩니다. (매 커밋마다 X)

### Changeset 작성 방법

```bash
pnpm changeset
```

1. 변경된 패키지를 선택합니다.
2. 버전 타입을 선택합니다:
   - **patch**: 버그 수정, 작은 개선사항
   - **minor**: 새로운 기능 추가 (하위 호환성 유지)  
   - **major**: 큰 변경사항, 브레이킹 체인지
3. 변경사항에 대한 설명을 작성합니다.

#### Changeset 작성이 필요 없는 경우

```bash
pnpm changeset --empty
```

다음과 같은 경우에 사용:

- 문서 업데이트
- 테스트 코드 추가

### PR 체크리스트

- [ ] 이슈와 연결되어 있나요?
- [ ] 테스트가 추가/수정되었나요?
- [ ] Changeset이 생성되었나요?
- [ ] 린트와 포맷터 검사를 통과했나요?

## 배포 가이드라인

- `main` 브랜치에 머지되면 자동으로 `RC` 버전의 패키지가 배포됩니다.
- `Release` 생성 시 정식 버전의 패키지가 배포됩니다.
