const overlay=document.querySelector('.search-overlay');
document.querySelectorAll('[data-search-open]').forEach(b=>b.addEventListener('click',()=>{overlay?.classList.add('open');overlay?.querySelector('input')?.focus()}));
document.querySelectorAll('[data-search-close]').forEach(b=>b.addEventListener('click',()=>overlay?.classList.remove('open')));
overlay?.addEventListener('click',e=>{if(e.target===overlay)overlay.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')overlay?.classList.remove('open')});
const menuBtn=document.querySelector('.menu-btn');
menuBtn?.addEventListener('click',()=>document.body.classList.toggle('mobile-menu-open'));
const searchInput=document.querySelector('#global-search');
const searchResults=document.querySelector('.search-results');
const localPrefix = /\/(topics|news|achievements|documents|media)\//.test(location.pathname) ? '../' : '';
const index=[
 {type:'ประวัติ',title:'นายสุวิทย์ ขาวดี สมาชิกวุฒิสภา',url:localPrefix+'suwit-kaodee.html'},
 {type:'บทบาทและหน้าที่',title:'บทบาทและหน้าที่ของนายสุวิทย์ ขาวดี',url:localPrefix+'roles.html'},
 {type:'ประเด็น',title:'การพัฒนาและแก้ไขปัญหาด่านชายแดน',url:localPrefix+'topics/border-checkpoints.html'},
 {type:'ข่าว',title:'นายสุวิทย์ ขาวดี ร่วมประชุมคณะกรรมาธิการการท่องเที่ยวและกีฬา ครั้งที่ 25/2569',url:localPrefix+'news/tourism-committee-meeting-25-2569.html'}
];
searchInput?.addEventListener('input',()=>{const q=searchInput.value.trim().toLowerCase();if(!q){searchResults.innerHTML='';return;}const hits=index.filter(x=>(x.title+' '+x.type).toLowerCase().includes(q));searchResults.innerHTML=hits.length?hits.map(x=>`<a href="${x.url}"><small>${x.type}</small><br><strong>${x.title}</strong></a>`).join(''):'<p>ไม่พบข้อมูลที่ตรงกับคำค้น</p>';});


// V2 mobile navigation
(() => {
  const menuBtn = document.querySelector('.menu-btn');
  if(!menuBtn) return;
  let drawer = document.querySelector('.mobile-drawer');
  if(!drawer){
    drawer = document.createElement('nav');
    drawer.className='mobile-drawer';
    drawer.setAttribute('aria-label','เมนูมือถือ');
    drawer.innerHTML=`<a href="${localPrefix}index.html">หน้าแรก</a><a href="${localPrefix}suwit-kaodee.html">ประวัติ</a><a href="${localPrefix}roles.html">บทบาทและหน้าที่</a><a href="${localPrefix}topics/index.html">ประเด็นการทำงาน</a><a href="${localPrefix}achievements/index.html">ผลงาน</a><a href="${localPrefix}news/index.html">ข่าวสาร</a><a href="${localPrefix}documents/index.html">เอกสาร</a><a href="${localPrefix}timeline.html">Timeline</a><a href="${localPrefix}about.html">เกี่ยวกับ DataLox</a><a href="${localPrefix}contact.html">ติดต่อ</a>`;
    document.body.appendChild(drawer);
  }
  menuBtn.addEventListener('click',()=>{
    drawer.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', drawer.classList.contains('open') ? 'true':'false');
  });
})();
