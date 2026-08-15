const groups=[
['13','보유 자격증',['웹디자인개발기능사','컴퓨터그래픽기능사','컴퓨터활용능력 2급','ITQ 한글엑셀 A급','사회복지사 2급','ERP 물류정보관리사 2급','ERP 인사정보관리사 2급','ERP 회계정보관리사 2급','관리소ERP운용사 2급','전산회계 2급','안전교육지도자','임상미술상담사 2급','정리수납전문가 2급']],
['06','AI·디지털 교육',['AI 융합지도전문가 과정','고등학교 코딩수업 보조강사 2회·총 8시간','엔트리·스크래치·앱인벤터','파이썬 기초·문제해결','생성형 AI·AI 윤리 수업설계','AI GREEN HERO 4차시 PBL']],
['04','안전교육·전문교육',['안전교육지도자','심폐소생술·AED 교육 역량','연구센터 안전교육 과정','긴급복지지원 신고의무교육']],
['04','상담·복지·현장',['임상미술상담사 2급','사회복지 현장 실무 2년','CAD/CAM 전문요원 과정','2024 시정발전 유공 표창']]
];document.querySelector('#credentialGrid').innerHTML=groups.map(([n,t,items])=>`<article><header><b>${n}</b><span>${t}</span></header><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');

const aiSection=document.querySelector('#ai');
if(aiSection){
  aiSection.insertAdjacentHTML('afterend',`
  <section class="toolkit-section" id="toolkit">
    <div class="toolkit-wrap">
      <small>AI · DIGITAL EDUCATION TOOLKIT</small>
      <h2>배운 도구를,<br>수업 가능한 역량으로 연결합니다.</h2>
      <p class="toolkit-lead">AI 융합교육 과정에서 직접 학습·실습하고 프로젝트에 활용한 도구를 수업 목적에 따라 정리한 교육 기술 스택입니다.</p>
      <div class="toolkit-grid">
        <article class="toolkit-card"><b>01</b><small>GENERATIVE AI · CONTENT</small><h3>생성형 AI · 콘텐츠 제작</h3><div class="toolkit-tags"><span>ChatGPT</span><span>Gemini</span><span>뤼튼</span><span>Canva</span><span>SUNO</span><span>Tooning</span><span>HeyGen</span><span>Animated Drawings</span></div></article>
        <article class="toolkit-card"><b>02</b><small>CODING · DIGITAL MAKING</small><h3>코딩 · 디지털 창작</h3><div class="toolkit-tags"><span>엔트리</span><span>Scratch</span><span>Python</span><span>Thonny</span><span>App Inventor</span><span>Book Creator</span><span>Quick, Draw!</span><span>Code.org</span></div></article>
        <article class="toolkit-card"><b>03</b><small>IMMERSIVE · CREATIVE TECH</small><h3>VR · 미디어 · 창의융합</h3><div class="toolkit-tags"><span>Delightex / CoSpaces 계열</span><span>VR · AR 콘텐츠</span><span>Chrome Music Lab</span><span>AI 이미지·영상 제작</span><span>캐릭터·이모티콘 제작</span><span>디지털 스토리북</span></div></article>
        <article class="toolkit-card"><b>04</b><small>CLASSROOM · COLLABORATION</small><h3>참여형 수업 · 협업</h3><div class="toolkit-tags"><span>Padlet</span><span>Kahoot!</span><span>주니어 커리어넷</span><span>PowerPoint</span><span>Excel</span><span>AI 활용 교수자료 제작</span></div></article>
      </div>
      <p class="toolkit-note">※ 실제 과정에서 학습·실습하거나 프로젝트에 활용한 도구 중심으로 정리했습니다.</p>
    </div>
  </section>`);

  const toolkitStyle=document.createElement('style');
  toolkitStyle.textContent=`
  .toolkit-section{padding:92px 8vw;background:linear-gradient(135deg,#fffdf9,#f6eee7 58%,#edf5f5)}
  .toolkit-wrap{max-width:1180px;margin:0 auto}
  .toolkit-wrap>h2{margin:14px 0 12px;font:clamp(38px,5vw,66px)/1.16 Georgia,"Noto Serif KR",serif;letter-spacing:-.035em}
  .toolkit-lead{max-width:760px;margin:0 0 42px;color:#667586;font-size:16px;line-height:1.85}
  .toolkit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  .toolkit-card{background:#fff;padding:28px;border:1px solid #233d5720;box-shadow:0 18px 45px #634b3412;position:relative;overflow:hidden}
  .toolkit-card:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--coral)}
  .toolkit-card:nth-child(2):before{background:var(--blue)}.toolkit-card:nth-child(3):before{background:#8b6ea8}.toolkit-card:nth-child(4):before{background:#bf9560}
  .toolkit-card>b{float:right;font:36px Georgia,serif;color:#d98a76;opacity:.75}
  .toolkit-card>small{font-size:10px}
  .toolkit-card h3{margin:22px 0 14px;font:27px/1.25 Georgia,"Noto Serif KR",serif}
  .toolkit-tags{display:flex;flex-wrap:wrap;gap:9px}
  .toolkit-tags span{padding:9px 12px;border-radius:999px;border:1px solid #29486624;background:#fffaf7;color:#35485d;font-size:12px;font-weight:800}
  .toolkit-note{margin:24px 0 0;padding:18px 20px;border-left:3px solid var(--coral);background:#ffffff99;color:#657484;font-size:13px;line-height:1.7}
  @media(max-width:800px){.toolkit-section{padding:72px 7vw}.toolkit-grid{grid-template-columns:1fr}.toolkit-card{padding:24px}.toolkit-card h3{font-size:24px}}
  `;
  document.head.appendChild(toolkitStyle);
}

const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});document.querySelectorAll('section,article').forEach(el=>observer.observe(el));
