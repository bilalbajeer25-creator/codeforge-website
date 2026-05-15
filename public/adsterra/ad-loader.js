function loadAdsterraBanner(slotId, h, w) {
  var c = document.getElementById(slotId);
  if (!c || c.querySelector('iframe')) return;
  var s1 = document.createElement('script');
  s1.textContent = "atOptions={'key':'1e8dd3e93f030e954013bb317706f109','format':'iframe','height':"+h+",'width':"+w+",'params':{}};";
  c.appendChild(s1);
  var s2 = document.createElement('script');
  s2.src = 'https://www.highperformanceformat.com/1e8dd3e93f030e954013bb317706f109/invoke.js';
  s2.async = true;
  c.appendChild(s2);
}
function loadAdsterraNative(slotId) {
  var c = document.getElementById(slotId);
  if (!c || c.querySelector('script')) return;
  var s = document.createElement('script');
  s.async = true;
  s.setAttribute('data-cfasync','false');
  s.src = 'https://pl29452331.profitablecpmratenetwork.com/79d0c5ec789aea30f7ce3791e4539308/invoke.js';
  c.appendChild(s);
  var d = document.createElement('div');
  d.id = 'container-79d0c5ec789aea30f7ce3791e4539308';
  c.appendChild(d);
}
// Load all ad slots with delays
setTimeout(function(){ loadAdsterraBanner('ad-home-after-tools', 90, 728); }, 1000);
setTimeout(function(){ loadAdsterraBanner('ad-home-after-blog', 90, 728); }, 3000);
setTimeout(function(){ loadAdsterraBanner('ad-home-bottom', 90, 728); }, 5000);
setTimeout(function(){ loadAdsterraBanner('ad-blog-sidebar', 600, 300); }, 2000);
setTimeout(function(){ loadAdsterraBanner('ad-blog-bottom', 90, 728); }, 4000);
setTimeout(function(){ loadAdsterraBanner('ad-post-top', 90, 728); }, 1000);
setTimeout(function(){ loadAdsterraNative('ad-post-mid'); }, 3000);
setTimeout(function(){ loadAdsterraBanner('ad-post-bottom', 90, 728); }, 5000);
setTimeout(function(){ loadAdsterraBanner('ad-tools-bottom', 90, 728); }, 2000);
