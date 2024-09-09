# wevezenithcentralcity
학정역 두산위브더제니스 센트럴시티 홈페이지 레포지터리

**https://학정역두산위브.kr**


## Nuxt 3 Minimal Starter

Nuxt 3 프로젝트를 시작하고 Netlify에 배포하는 방법을 설명합니다.

### 1. 설정 (Setup)

Nuxt.js 프로젝트를 시작하기 전에 의존성을 설치해야 합니다.

#### 의존성 설치

##### npm 사용 시:
```bash
npm install
```

##### pnpm 사용 시:
```bash
pnpm install
```

##### yarn 사용 시:
```bash
yarn install
```

##### bun 사용 시:
```bash
bun install
```

---

### 2. 개발 서버 실행

Nuxt.js 개발 서버를 실행하여 로컬에서 애플리케이션을 확인할 수 있습니다. 개발 서버는 **http://localhost:3000** 에서 실행됩니다.

##### npm 사용 시:
```bash
npm run dev
```

##### pnpm 사용 시:
```bash
pnpm run dev
```

##### yarn 사용 시:
```bash
yarn dev
```

##### bun 사용 시:
```bash
bun run dev
```

---

### 3. 프로덕션 빌드 (Production Build)

애플리케이션을 프로덕션 환경에 배포하려면 애플리케이션을 빌드해야 합니다.

##### npm 사용 시:
```bash
npm run build
```

##### pnpm 사용 시:
```bash
pnpm run build
```

##### yarn 사용 시:
```bash
yarn build
```

##### bun 사용 시:
```bash
bun run build
```

---

### 4. 프로덕션 빌드 미리보기

로컬에서 빌드된 프로덕션 애플리케이션을 미리보기할 수 있습니다.

##### npm 사용 시:
```bash
npm run preview
```

##### pnpm 사용 시:
```bash
pnpm run preview
```

##### yarn 사용 시:
```bash
yarn preview
```

##### bun 사용 시:
```bash
bun run preview
```

---

### 5. 정적 사이트 생성 및 Netlify에 배포 (Deploy to Netlify)

Nuxt 3에서 정적 사이트 생성을 위해 **`npm run generate`** 명령어를 사용하고 Netlify에 배포하는 방법입니다.

#### 5.1. 정적 사이트 생성 (Static Site Generation)

정적 사이트를 생성하려면 다음 명령어를 실행합니다. 이 명령어는 `dist` 폴더에 정적 HTML 파일을 생성합니다.

##### npm 사용 시:
```bash
npm run generate
```

이 명령어는 Nuxt.js 프로젝트의 모든 페이지를 **정적 HTML 파일**로 변환하여, 정적 웹사이트로 배포할 수 있도록 준비합니다.

---

#### 5.2. Netlify에 배포 (Deploy to Netlify)

1. **Netlify 계정 생성**: [Netlify](https://www.netlify.com)에서 계정을 생성합니다.

2. **GitHub 연동**: GitHub에 프로젝트를 푸시한 후, Netlify에 GitHub 저장소를 연동합니다.

3. **배포 설정**: Netlify에서 새로운 사이트를 만들고, GitHub 저장소에서 가져옵니다.

4. **빌드 설정**:
   - **Build Command**: `npm run generate`
   - **Publish Directory**: `dist`

   설정은 아래와 같이 입력합니다:
   ```
   Branch to deploy: main
   Build command: npm run generate
   Publish directory: dist
   ```

5. **배포 시작**: 모든 설정을 완료한 후 **"Deploy site"** 버튼을 클릭하면 Netlify가 프로젝트를 빌드하고 배포를 시작합니다.

---

### 6. 환경 변수 설정 (Environment Variables)

만약 프로젝트에서 API 키나 비밀 값을 사용하는 경우, Netlify에서 환경 변수를 설정해야 할 수 있습니다. **Netlify** 대시보드에서 **Site settings > Environment variables**로 이동하여 환경 변수를 추가할 수 있습니다.

예시:
- **Key**: `API_KEY`
- **Value**: `your_api_key_here`

---


