const groups=[
['12','보유 자격증',['웹디자인개발기능사','컴퓨터그래픽기능사','컴퓨터활용능력 2급','ITQ 한글엑셀 A급','사회복지사 2급','ERP 물류정보관리사 2급','ERP 인사정보관리사 2급','ERP 회계정보관리사 2급','전산회계 2급','안전교육지도자','임상미술상담사 2급','정리수납전문가 2급']],
['05','AI·디지털 교육',['AI 융합지도전문가 과정','엔트리·스크래치·앱인벤터','파이썬 기초·문제해결','생성형 AI·AI 윤리 수업설계','AI GREEN HERO 4차시 PBL']],
['04','안전교육·전문교육',['안전교육지도자','심폐소생술·AED 교육 역량','연구센터 안전교육 과정','긴급복지지원 신고의무교육']],
['04','상담·복지·현장',['임상미술상담사 2급','사회복지 현장 실무 2년','CAD/CAM 전문요원 과정','2024 시정발전 유공 표창']]
];document.querySelector('#credentialGrid').innerHTML=groups.map(([n,t,items])=>`<article><header><b>${n}</b><span>${t}</span></header><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');
const observer=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});document.querySelectorAll('section,article').forEach(el=>observer.observe(el));
