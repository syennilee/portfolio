/* =========================================================
   CONTENT FILE — edit the text of the site here.
   - "en" = English, "kr" = Korean.
   - null means "to fill in" (shown in grey italics on the site).
   - Images: put files in the /images folder, then write the path
     in IMAGES below, e.g. "images/brand-bx-cover.jpg".
   ========================================================= */

window.CONTENT = {

  /* ---------- Contact links (leave "" if you don't want one shown) ---------- */
  CONTACT: {
    email: "syennilee@gmail.com",
    linkedin: "",   // e.g. "https://www.linkedin.com/in/your-name"
    instagram: "",  // optional
    resume: ""      // e.g. "files/syenni-lee-resume.pdf" (web version without phone / birth date / visa / address)
  },

  /* ---------- Images per project (same order as the project lists below) ---------- */
  IMAGES: {
    beauty: [
      { cover: "", imgs: ["", "", ""] }, // 01 Brand BX Analysis
      { cover: "", imgs: ["", "", ""] }, // 02 Brand Campaign Planning
      { cover: "", imgs: ["", "", ""] }, // 03 Global K-Beauty marketing sprint
      { cover: "", imgs: ["", "", ""] }, // 04 Cross-border E-commerce
      { cover: "", imgs: ["", "", ""] }, // 05 Export Marketing Plan
      { cover: "", imgs: ["", "", ""] }, // 06 Beauty trend card news
      { cover: "", imgs: ["", "", ""] }  // +1 GOSC video series
    ],
    culture: [
      { cover: "", imgs: ["", "", ""] }, // 01 GOSC · Course Registration Tips
      { cover: "", imgs: ["", "", ""] }, // 02 GOSC · Cost of Living in Korea
      { cover: "", imgs: ["", "", ""] }, // 03 GOSC · video 3
      { cover: "", imgs: ["", "", ""] }, // 04 GOSC · video 4
      { cover: "", imgs: ["", "", ""] }, // 05 K-music artist IP marketing
      { cover: "", imgs: ["", "", ""] }, // 06 K-music & concert content account
      { cover: "", imgs: ["", "", ""] }, // +1 Brand BX analysis
      { cover: "", imgs: ["", "", ""] }, // +2 K-beauty sprint
      { cover: "", imgs: ["", "", ""] }  // +3 E-commerce
    ]
  },

  /* ---------- "On repeat" playlist (3 songs) ---------- */
  PLAYLIST: [
    { song: null, artist: null, cover: "", why: { en: null, kr: null } },
    { song: null, artist: null, cover: "", why: { en: null, kr: null } },
    { song: null, artist: null, cover: "", why: { en: null, kr: null } }
  ],

  SC: ["#B7A6EE", "#E9A9C4", "#7FD6C6", "#A9C79A", "#F2C9D6"],
  TBD: { en: "to fill in", kr: "추후 작성" },
  F: { en: ["CONTEXT", "MY ROLE", "WHAT I DID", "RESULT", "WHAT IT SHOWS"], kr: ["배경", "나의 역할", "한 일", "결과", "보여주는 역량"] },

  TOOLS: {
    en: [
      ["Video & design", ["Premiere Pro", "Photoshop", "Illustrator", "After Effects (basic)", "CapCut", "InShot", "Canva", "Miricanvas"]],
      ["Marketing", ["GA4", "Google Ads", "Shopee Seller Centre", "Shopify", "Excel"]],
      ["Docs", ["PowerPoint", "Word", "Google Workspace", "Notion (basic)", "HWP"]],
      ["Certificates", ["Google Analytics (GAIQ)", "Google Ads Search", "Google Ads Video", "MOS PowerPoint"]]
    ],
    kr: [
      ["영상 · 디자인", ["Premiere Pro", "Photoshop", "Illustrator", "After Effects (기초)", "CapCut", "InShot", "Canva", "미리캔버스"]],
      ["마케팅", ["GA4", "Google Ads", "Shopee Seller Centre", "Shopify", "Excel"]],
      ["문서 · 협업", ["PowerPoint", "Word", "Google Workspace", "Notion (기초)", "한글(HWP)"]],
      ["자격증", ["Google Analytics (GAIQ)", "Google Ads Search", "Google Ads Video", "MOS PowerPoint"]]
    ]
  },

  /* ---------- About me / Contact pages ---------- */
  SUB: {
    en: {
      back: "Back", about: "About me", contact: "Contact", proj: "PROJECT", cover: "cover image", img: "slide / image",
      bio: "BIO", bioV: null,
      lang: "LANGUAGES", langV: [["Korean", "TOPIK 6 (521/600)"], ["English", "TOEIC 970 · OPIc AL"], ["Indonesian", "Native"]],
      edu: "EDUCATION", eduV: [["2022.09 – 2026.08", "Yonsei University — International Trade (major), Cultural Media Studies (double major), Korean Language & Culture Education (minor)"]],
      exp: "EXPERIENCE", expV: [
        ["2024.09 – 2025.08", "GOSC Supporters, video team (5th–6th) — Yonsei OIA"],
        ["2025.12 – 2026.01 · 2026.06 – 08", "Teaching assistant, Yonsei International Winter/Summer School (WAY · YISS)"],
        ["2023.06 – 2024.06 · 2025.09 – 2026.06", "Student assistant, Global Leaders College admin office"],
        ["2023.07 – 2024.12", "Indonesian Student Association — finance & design"]
      ],
      tr: "TRAINING", trV: [
        ["2026.11 – 2027.02", "SeSAC — AI & data K-music artist IP marketing (400h, in progress)"],
        ["2026.09 – 2026.12", "2026 Seoul Global Marketer program (150h)"],
        ["2026.08 – 2026.09", "EnterJob Edu — entertainment careers course"],
        ["2026.08", "EduCourse — 5th Global K-Beauty brand marketing sprint"]
      ],
      enj: "WHAT I ENJOY", enjV: null,
      cIntro: "Let's work together.", em: "Email", li: "LinkedIn", ig: "Instagram", cv: "Résumé (PDF)", dl: "Download"
    },
    kr: {
      back: "뒤로", about: "About me", contact: "Contact", proj: "PROJECT", cover: "대표 이미지", img: "슬라이드 / 이미지",
      bio: "소개", bioV: null,
      lang: "언어", langV: [["한국어", "TOPIK 6급 (521/600)"], ["영어", "TOEIC 970 · OPIc AL"], ["인도네시아어", "모국어"]],
      edu: "학력", eduV: [["2022.09 – 2026.08", "연세대학교 — 국제통상학(주전공), 문화미디어학(복수전공), 한국언어문화교육학(부전공)"]],
      exp: "경험", expV: [
        ["2024.09 – 2025.08", "연세대 국제처 GOSC 서포터즈 영상제작팀 (5·6기)"],
        ["2025.12 – 2026.01 · 2026.06 – 08", "연세대 국제동·하계대학 (WAY · YISS) 조교"],
        ["2023.06 – 2024.06 · 2025.09 – 2026.06", "글로벌인재대학 행정실 근로장학생"],
        ["2023.07 – 2024.12", "연세대 인도네시아 학생회 — 재무·디자인"]
      ],
      tr: "교육 이수", trV: [
        ["2026.11 – 2027.02", "새싹 — AI와 데이터로 완성하는 K-뮤직 아티스트 IP 마케팅 (400시간, 수강 중)"],
        ["2026.09 – 2026.12", "2026 서울 글로벌 마케터 양성교육 (150시간)"],
        ["2026.08 – 2026.09", "엔터잡에듀 「엔터 취업 한달반」 75기"],
        ["2026.08", "에듀코스 제5기 글로벌 K-뷰티 브랜드 마케팅 스프린트"]
      ],
      enj: "좋아하는 것들", enjV: null,
      cIntro: "함께 일해요.", em: "이메일", li: "LinkedIn", ig: "인스타그램", cv: "이력서 (PDF)", dl: "다운로드"
    }
  },

  /* ---------- Main pages ---------- */
  T: {
    en: {
      tA: "Beauty", tB: "Content & Culture", bA: "BEAUTY EDIT", bB: "VOL.1",
      kA: "BEAUTY · KR / EN / ID", ingL: "INGREDIENTS:", ingd: "Hover an ingredient to read what it does.",
      tagA: "Content marketer making K-beauty stories for global and SEA audiences.",
      ING: [
        ["Content planning", "Topic planning based on what the audience actually asks — from my GOSC video work."],
        ["Product planning", "Adjacent SKU expansion proposal based on consumer and review analysis — K-beauty sprint (EduCourse)."],
        ["Korean", "TOPIK 6 — I write and present in Korean."],
        ["English", "TOEIC 970 · OPIc AL."],
        ["Indonesian", "Native — SEA audience insight."],
        ["Brand analysis", "Brand experience (BX) analysis — university class project."],
        ["Premiere Pro", "Long-form video editing."],
        ["CapCut", "Short-form edits for Reels."],
        ["Canva", "Card news and posters."],
        ["GA4", "Google Analytics certified (GAIQ)."],
        ["Campaign planning", "Promotion campaign planning — university class project."],
        ["E-commerce", "Shopee and Shopify store setup practice — 2026 Seoul Global Marketer program (in progress)."]
      ],
      plh: "Hover to preview · click to open", ing: "INGREDIENTS", note: "NOTE", oth: "OTHER SKILLS", pl: "PRODUCT LINE",
      C: [
        { t: "Brand BX Analysis", c: "Brand analysis", lab: "Brand experience (BX) analysis of a K-beauty brand · strategy direction proposal", n: "University class project", ctx: "Major course 「Brand Image and Media」, Yonsei, fall 2025", role: null, did: "Analysed a K-beauty brand's brand experience (BX) and proposed a strategy direction.", res: "Analysis and strategy proposal", show: "Reading a beauty brand's identity and where it can go next." },
        { t: "Brand Campaign Planning", c: "Campaign planning", lab: "Promotion campaign planning for a K-beauty brand", n: "University class project — plan stage", ctx: "Major course 「Brand Image and Media」, Yonsei, fall 2025", role: null, did: "Planned a promotion campaign for a K-beauty brand.", res: "Campaign plan (not executed)", show: "Turning brand analysis into a campaign idea." },
        { t: "Global K-Beauty marketing sprint", c: "Product planning", lab: "Adjacent SKU expansion proposal · consumer journey + review analysis · brand positioning", n: "Education program (EduCourse)", ctx: "EduCourse, 5th Global K-Beauty Brand Marketing Sprint, Aug 2026", role: null, did: "Analysed the beauty consumer journey and reviews, worked on brand positioning, and proposed an adjacent SKU expansion for a K-beauty brand.", res: "Product expansion proposal", show: "BM-style product planning grounded in what customers say in reviews." },
        { t: "Cross-border E-commerce", c: "E-commerce", lab: "Shopee shop setup · Shopify store practice", n: "Training program — in progress", ctx: "2026 Seoul Global Marketer program, fall 2026", role: null, did: "Learning how a K-beauty product gets onto global e-commerce channels, and practising it: setting up a Shopee shop and a Shopify store.", res: "Practice setup (no live sales) · course in progress", show: "Understanding the step after the campaign: where the customer actually buys." },
        { t: "Export Marketing Plan", c: "Market entry", lab: "As a mock trading company: export item selection → German market research → marketing strategy → buyer sourcing", n: "Team project — in progress", ctx: "2026 Seoul Global Marketer program, final team project (presentation Dec 2026)", role: null, did: "Our team acts as a trading company that exports Korean products. I proposed our export item: a K-beauty cica cream for the German market, with the matching ampoule as a phase-2 extension.", res: "Final presentation, Dec 2026", show: "Taking a product from \u201cwhy this one\u201d to \u201cwho buys it abroad\u201d." },
        { t: "Beauty trend card news", c: "Trend content", lab: "Trend research · card-news design · captions", n: "Coming soon — in development", ctx: "Personal project, in preparation", role: null, did: "Planned: trend research, card-news design and captions.", res: "Coming soon", show: "Keeping up with beauty trends and turning them into content." },
        { t: "GOSC student-life video series", c: "Content production", lab: "Audience-question topic planning · KR/EN long-form + shorts · 2,800+ views", n: "Team project · GOSC Supporters (5th–6th)", ctx: "Yonsei GOSC Supporters video team, Sep 2024 – Aug 2025", role: null, did: "Planned topics from international students' real questions; planned, filmed, appeared in and edited 4 KR/EN long-form videos and Instagram shorts (Premiere Pro, CapCut).", res: "「Course Registration Tips」 2,800+ views · 「Cost of Living in Korea」 1,900+ views (channel: 1,480+ YouTube subscribers, 3,000+ Instagram followers)", show: "Making content that answers real audience questions — the same approach for beauty customers." }
      ],
      kB: "CONTENT & CULTURE", tagB: "Videos and K-music — the other side of me.", tl: "TRACKLIST",
      tlh: "Hover to preview · click to open", bnh: "OTHER SKILLS", onrep: "On repeat", np: "my playlist", nowp: "Now playing",
      TR: [
        { t: "GOSC · Course Registration Tips", did: "Topic planning from intl-student questions · filming · on camera · editing (Premiere Pro, CapCut)", res: "2,800+ views", n: "Team project · GOSC Supporters video team (5th–6th)", ctx: "Yonsei GOSC Supporters video team, 2024–2025", role: null, show: "Explaining something complicated simply, for a specific audience." },
        { t: "GOSC · Cost of Living in Korea", did: "Topic planning · filming · on camera · editing", res: "1,900+ views", n: "Team project · GOSC Supporters video team (5th–6th)", ctx: "Yonsei GOSC Supporters video team, 2024–2025", role: null, show: "Turning practical information into watchable content." },
        { t: "GOSC · video 3 (title TBD)", did: null, res: null, n: "Team project · GOSC Supporters", ctx: "Yonsei GOSC Supporters video team", role: null, show: null },
        { t: "GOSC · video 4 (title TBD)", did: null, res: null, n: "Team project · GOSC Supporters", ctx: "Yonsei GOSC Supporters video team", role: null, show: null },
        { t: "K-music artist IP marketing", did: "AI- and data-based K-music content planning and artist IP marketing", res: "—", n: "Coming soon · SeSAC course, Nov 2026 – Feb 2027", ctx: "SeSAC Geumcheon, 400-hour course", role: null, show: "Building entertainment marketing skills on purpose." },
        { t: "K-music & concert content account", did: "Planned: concert and K-music content on my own account", res: "—", n: "Coming soon · not live yet — launching alongside SeSAC", ctx: "Personal project, in preparation", role: null, show: "Turning a real love of live music into content." },
        { t: "Brand BX analysis → Reading a brand's world", did: "Analysed a K-beauty brand's brand experience (BX) and proposed a strategy direction.", res: "Analysis and strategy proposal", n: "Other skill · university class project", ctx: "Major course 「Brand Image and Media」, fall 2025", role: null, show: "An artist's IP needs the same reading: identity, tone, touchpoints. (transferable skill)" },
        { t: "K-beauty sprint → Listening to reviews", did: "Consumer journey and review analysis, positioning, product expansion proposal.", res: "Proposal", n: "Other skill · education program", ctx: "EduCourse K-Beauty sprint, Aug 2026", role: null, show: "Reading reviews is close to reading fan comments and community sentiment. (transferable skill)" },
        { t: "E-commerce → Selling to global fans", did: "Shopee shop and Shopify store setup practice.", res: "Practice (no live sales) · in progress", n: "Other skill · training program", ctx: "2026 Seoul Global Marketer program, fall 2026", role: null, show: "The same store setup works for albums and merch sold to global fans. (transferable skill)" }
      ],
      wid: "WHAT I DID", res: "RESULT", song: "SONG", why: "WHY I LOVE IT", pick: "Song", artist: "artist"
    },
    kr: {
      tA: "뷰티", tB: "콘텐츠 · 문화", bA: "BEAUTY EDIT", bB: "VOL.1",
      kA: "뷰티 · 한 / 영 / 인니", ingL: "성분 (INGREDIENTS):", ingd: "성분에 마우스를 올려 설명을 확인하세요.",
      tagA: "글로벌·동남아 고객에게 K-뷰티 이야기를 전하는 콘텐츠 마케터.",
      ING: [
        ["콘텐츠 기획", "실제 시청자 질문을 바탕으로 주제 기획 — GOSC 영상 작업에서."],
        ["상품 기획", "소비자·리뷰 분석 기반 인접 SKU 확장안 제안 — K-뷰티 스프린트 (에듀코스)."],
        ["한국어", "TOPIK 6급 — 한국어로 작성·발표 가능."],
        ["영어", "TOEIC 970 · OPIc AL."],
        ["인도네시아어", "모국어 — 동남아 고객 인사이트."],
        ["브랜드 분석", "브랜드 경험(BX) 분석 — 전공 수업 프로젝트."],
        ["Premiere Pro", "롱폼 영상 편집."],
        ["CapCut", "릴스용 숏폼 편집."],
        ["Canva", "카드뉴스·포스터 제작."],
        ["GA4", "Google Analytics 자격증 (GAIQ)."],
        ["캠페인 기획", "프로모션 캠페인 기획 — 전공 수업 프로젝트."],
        ["이커머스", "쇼피·쇼피파이 스토어 세팅 실습 — 2026 서울 글로벌 마케터 양성교육 (진행 중)."]
      ],
      plh: "마우스를 올려 미리보기 · 클릭해서 열기", ing: "성분 (INGREDIENTS)", note: "참고", oth: "기타 역량", pl: "PRODUCT LINE",
      C: [
        { t: "브랜드 BX 분석", c: "브랜드 분석", lab: "K-뷰티 브랜드의 브랜드 경험(BX) 분석 · 전략 방향 제안", n: "전공 수업 프로젝트", ctx: "연세대학교 전공 수업 「브랜드 이미지와 미디어」, 2025학년 2학기", role: null, did: "K-뷰티 브랜드의 브랜드 경험(BX)을 분석하고 전략 방향을 제안했습니다.", res: "분석 및 전략 제안", show: "뷰티 브랜드의 정체성과 나아갈 방향을 읽는 힘." },
        { t: "브랜드 캠페인 기획", c: "캠페인 기획", lab: "K-뷰티 브랜드 프로모션 캠페인 기획", n: "전공 수업 프로젝트 — 기획 단계", ctx: "연세대학교 전공 수업 「브랜드 이미지와 미디어」, 2025학년 2학기", role: null, did: "K-뷰티 브랜드의 프로모션 캠페인을 기획했습니다.", res: "캠페인 기획안 (실행 X)", show: "브랜드 분석을 캠페인 아이디어로 연결하는 힘." },
        { t: "글로벌 K-뷰티 브랜드 마케팅 스프린트", c: "상품 기획", lab: "인접 SKU 확장안 제안 · 소비자 여정·리뷰 분석 · 브랜드 포지셔닝", n: "교육 프로그램 (에듀코스)", ctx: "에듀코스 제5기 글로벌 K-뷰티 브랜드 마케팅 스프린트, 2026.08", role: null, did: "뷰티 소비자 여정과 리뷰를 분석하고 브랜드 포지셔닝을 정리한 뒤, K-뷰티 브랜드의 인접 SKU 확장 전략을 제안했습니다.", res: "상품 확장 제안", show: "리뷰 속 고객의 목소리에 기반한 BM식 상품 기획." },
        { t: "크로스보더 이커머스", c: "이커머스", lab: "쇼피 샵 세팅 · 쇼피파이 스토어 실습", n: "교육 프로그램 — 진행 중", ctx: "2026 서울 글로벌 마케터 양성교육, 2026 하반기", role: null, did: "K-뷰티 제품이 글로벌 이커머스 채널에 입점하는 과정을 배우고, 쇼피 샵과 쇼피파이 스토어 세팅을 실습하고 있습니다.", res: "실습 세팅 (실제 판매 X) · 과정 진행 중", show: "캠페인 다음 단계, 고객이 실제로 구매하는 곳까지 이해하는 힘." },
        { t: "수출 마케팅 기획", c: "해외 진출", lab: "가상 무역회사로서 수출 아이템 선정 → 독일 시장조사 → 마케팅 전략 → 바이어 발굴", n: "팀 과제 — 진행 중", ctx: "2026 서울 글로벌 마케터 양성교육, 최종 팀 과제 (2026.12 발표)", role: null, did: "한국 제품을 수출하는 무역회사 컨셉의 팀 과제에서, 수출 아이템으로 독일 시장을 위한 K-뷰티 시카 크림을 제안했습니다. 앰플은 2단계 확장안으로 제시했습니다.", res: "최종 발표, 2026.12", show: "\u201c왜 이 제품인가\u201d에서 \u201c해외에서 누가 살까\u201d까지 연결하는 힘." },
        { t: "뷰티 트렌드 카드뉴스", c: "트렌드 콘텐츠", lab: "트렌드 리서치 · 카드뉴스 디자인 · 캡션", n: "Coming soon — 준비 중", ctx: "개인 프로젝트, 준비 중", role: null, did: "계획: 트렌드 리서치, 카드뉴스 디자인, 캡션 작성.", res: "Coming soon", show: "뷰티 트렌드를 꾸준히 읽고 콘텐츠로 만드는 힘." },
        { t: "GOSC 유학생 생활 영상 시리즈", c: "콘텐츠 제작", lab: "시청자 질문 기반 주제 기획 · 한·영 롱폼 + 숏폼 · 조회수 2,800+", n: "팀 프로젝트 · GOSC 서포터즈 (5·6기)", ctx: "연세대학교 GOSC 서포터즈 영상제작팀, 2024.09 – 2025.08", role: null, did: "외국인 유학생의 실제 질문을 바탕으로 주제를 기획하고, 한·영 유튜브 롱폼 4편과 인스타그램 숏폼을 기획·촬영·출연·편집했습니다 (Premiere Pro, CapCut).", res: "「Course Registration Tips」 조회수 2,800+ · 「Cost of Living in Korea」 1,900+ (채널: 유튜브 구독자 1,480+, 인스타그램 팔로워 3,000+)", show: "실제 시청자의 질문에 답하는 콘텐츠 — 뷰티 고객에게도 같은 방식으로." }
      ],
      kB: "콘텐츠 · 문화", tagB: "영상과 K-뮤직 — 저의 또 다른 면.", tl: "TRACKLIST",
      tlh: "마우스를 올려 미리보기 · 클릭해서 열기", bnh: "기타 역량", onrep: "On repeat", np: "내 플레이리스트", nowp: "재생 중",
      TR: [
        { t: "GOSC · Course Registration Tips", did: "유학생 질문 기반 주제 기획 · 촬영 · 출연 · 편집 (Premiere Pro, CapCut)", res: "조회수 2,800+", n: "팀 프로젝트 · GOSC 서포터즈 영상제작팀 (5·6기)", ctx: "연세대학교 GOSC 서포터즈 영상제작팀, 2024–2025", role: null, show: "복잡한 정보를 특정 시청자에게 쉽게 전달하는 힘." },
        { t: "GOSC · Cost of Living in Korea", did: "주제 기획 · 촬영 · 출연 · 편집", res: "조회수 1,900+", n: "팀 프로젝트 · GOSC 서포터즈 영상제작팀 (5·6기)", ctx: "연세대학교 GOSC 서포터즈 영상제작팀, 2024–2025", role: null, show: "실용 정보를 보고 싶은 콘텐츠로 바꾸는 힘." },
        { t: "GOSC · 영상 3 (제목 미정)", did: null, res: null, n: "팀 프로젝트 · GOSC 서포터즈", ctx: "연세대학교 GOSC 서포터즈 영상제작팀", role: null, show: null },
        { t: "GOSC · 영상 4 (제목 미정)", did: null, res: null, n: "팀 프로젝트 · GOSC 서포터즈", ctx: "연세대학교 GOSC 서포터즈 영상제작팀", role: null, show: null },
        { t: "K-뮤직 아티스트 IP 마케팅", did: "AI·데이터 기반 K-뮤직 콘텐츠 기획 및 아티스트 IP 마케팅", res: "—", n: "Coming soon · 새싹 과정, 2026.11 – 2027.02", ctx: "새싹 금천, 400시간 과정", role: null, show: "엔터 마케팅 역량을 의도적으로 쌓는 중." },
        { t: "K-뮤직 · 공연 콘텐츠 계정", did: "계획 중: 직접 운영하는 공연·K-뮤직 콘텐츠 계정", res: "—", n: "Coming soon · 아직 미운영 — 새싹 과정과 함께 시작 예정", ctx: "개인 프로젝트, 준비 중", role: null, show: "라이브 음악에 대한 진짜 애정을 콘텐츠로." },
        { t: "브랜드 BX 분석 → 브랜드의 세계 읽기", did: "K-뷰티 브랜드의 브랜드 경험(BX)을 분석하고 전략 방향을 제안.", res: "분석 및 전략 제안", n: "기타 역량 · 전공 수업 프로젝트", ctx: "전공 수업 「브랜드 이미지와 미디어」, 2025학년 2학기", role: null, show: "아티스트 IP도 같은 시선이 필요합니다: 정체성, 톤, 접점. (전이 가능한 역량)" },
        { t: "K-뷰티 스프린트 → 리뷰 듣기", did: "소비자 여정·리뷰 분석, 포지셔닝, 상품 확장 제안.", res: "제안", n: "기타 역량 · 교육 프로그램", ctx: "에듀코스 K-뷰티 스프린트, 2026.08", role: null, show: "리뷰를 읽는 일은 팬 댓글과 커뮤니티 반응을 읽는 일과 가깝습니다. (전이 가능한 역량)" },
        { t: "이커머스 → 글로벌 팬에게 판매하기", did: "쇼피 샵·쇼피파이 스토어 세팅 실습.", res: "실습 (실제 판매 X) · 진행 중", n: "기타 역량 · 교육 프로그램", ctx: "2026 서울 글로벌 마케터 양성교육, 2026 하반기", role: null, show: "같은 스토어 세팅은 해외 팬 대상 앨범·MD 판매에도 그대로 적용됩니다. (전이 가능한 역량)" }
      ],
      wid: "한 일", res: "결과", song: "곡", why: "좋아하는 이유", pick: "곡", artist: "아티스트"
    }
  }
};
